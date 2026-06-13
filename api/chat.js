/* ============================================================
   IslaMediQ — Vercel Serverless API Endpoint: /api/chat
   Proxies chat requests to Google Gemini 2.0 Flash API
   Keeps GEMINI_API_KEY secure on server-side
   ============================================================ */

const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_PROMPT = `Kamu adalah Khusnuzon, asisten kesehatan AI dari IslaMediQ. Jawab setiap pertanyaan kesehatan dengan TIGA komponen:

1) [ANALISIS MEDIS] — saran medis klinis yang menenangkan, bebas cyberchondria. Jelaskan kondisi dengan bahasa yang mudah dipahami, berikan informasi medis yang akurat dan menenangkan. Jangan membuat pasien panik. Selalu ingatkan untuk berkonsultasi dengan dokter untuk diagnosis pasti.

2) [MENURUT SUNNAH] — alternatif Thibbun Nabawi dengan hadis shahih. Cantumkan hadis dalam bahasa Arab asli, transliterasi Latin, dan terjemahan Bahasa Indonesia. Sertakan nomor hadis lengkap (contoh: HR. Bukhari no. 5688, HR. Muslim no. 2204). Hanya gunakan hadis yang shahih dan terverifikasi.

3) [SUMBER RUJUKAN] — daftar sumber referensi yang digunakan. Setiap sumber harus mencakup: judul buku/jurnal, nama penulis, penerbit, dan link jika tersedia. Pisahkan sumber medis modern dan sumber Thibbun Nabawi.

Aturan penting:
- Gunakan Bahasa Indonesia untuk seluruh respons
- Tulis dalil/hadis dalam huruf Arab, transliterasi Latin, dan terjemahan Indonesia
- Jangan pernah mendiagnosis secara definitif — selalu sarankan konsultasi dokter
- Prioritaskan ketenangan dan edukasi, hindari menakut-nakuti
- Jika pertanyaan bukan tentang kesehatan, jawab dengan sopan bahwa kamu hanya bisa membantu topik kesehatan
- Jangan pernah merekomendasikan mengganti pengobatan medis dengan pengobatan alternatif saja`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'Hanya metode POST yang diizinkan.',
    });
  }

  // Validate API key exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not configured in environment variables');
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'Layanan AI belum dikonfigurasi. Hubungi administrator.',
    });
  }

  // Parse request body
  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({
      error: 'Bad request',
      message: 'Pesan tidak boleh kosong.',
    });
  }

  if (message.length > 5000) {
    return res.status(400).json({
      error: 'Bad request',
      message: 'Pesan terlalu panjang. Maksimal 5000 karakter.',
    });
  }

  try {
    // Build conversation contents for Gemini
    const contents = buildContents(message, history || []);

    // Call Gemini API
    const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          topP: 0.9,
          topK: 40,
          maxOutputTokens: 4096,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
        ],
      }),
    });

    // Handle Gemini API errors
    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => ({}));
      console.error('Gemini API error:', geminiResponse.status, errorData);

      if (geminiResponse.status === 429) {
        return res.status(429).json({
          error: 'Rate limited',
          message: 'Terlalu banyak permintaan. Silakan tunggu beberapa saat dan coba lagi.',
        });
      }

      if (geminiResponse.status === 403) {
        return res.status(403).json({
          error: 'API key error',
          message: 'Kunci API tidak valid atau telah kedaluwarsa.',
        });
      }

      return res.status(502).json({
        error: 'AI service error',
        message: 'Layanan AI sedang mengalami gangguan. Silakan coba lagi nanti.',
      });
    }

    const data = await geminiResponse.json();

    // Extract response text
    const responseText = extractResponseText(data);

    if (!responseText) {
      // Check if blocked by safety filters
      const blockReason = data?.promptFeedback?.blockReason;
      if (blockReason) {
        return res.status(400).json({
          error: 'Content blocked',
          message: 'Pertanyaan tidak dapat diproses karena kebijakan keamanan konten. Silakan ubah pertanyaan Anda.',
        });
      }

      return res.status(500).json({
        error: 'Empty response',
        message: 'AI tidak memberikan respons. Silakan coba lagi.',
      });
    }

    return res.status(200).json({
      response: responseText,
      model: GEMINI_MODEL,
    });

  } catch (error) {
    console.error('Chat API error:', error);

    // Network errors
    if (error.name === 'AbortError' || error.code === 'ETIMEDOUT') {
      return res.status(504).json({
        error: 'Timeout',
        message: 'Permintaan ke layanan AI memakan waktu terlalu lama. Silakan coba lagi.',
      });
    }

    return res.status(500).json({
      error: 'Internal server error',
      message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.',
    });
  }
}

/**
 * Build Gemini API contents array from message and history
 */
function buildContents(message, history) {
  const contents = [];

  // Add conversation history (last 10 turns max)
  const recentHistory = history.slice(-10);
  for (const entry of recentHistory) {
    if (entry.role === 'user' && entry.text) {
      contents.push({
        role: 'user',
        parts: [{ text: entry.text }],
      });
    } else if (entry.role === 'assistant' && entry.text) {
      contents.push({
        role: 'model',
        parts: [{ text: entry.text }],
      });
    }
  }

  // Add current message
  contents.push({
    role: 'user',
    parts: [{ text: message }],
  });

  return contents;
}

/**
 * Extract text from Gemini API response
 */
function extractResponseText(data) {
  try {
    const candidates = data?.candidates;
    if (!candidates || candidates.length === 0) return null;

    const content = candidates[0]?.content;
    if (!content?.parts || content.parts.length === 0) return null;

    return content.parts
      .filter(part => part.text)
      .map(part => part.text)
      .join('');
  } catch {
    return null;
  }
}
