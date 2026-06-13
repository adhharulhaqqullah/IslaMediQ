/* ============================================================
   IslaMediQ — Gemini AI Client Service
   Communicates with /api/chat serverless endpoint
   Parses structured AI responses into 3 sections
   ============================================================ */

const API_ENDPOINT = '/api/chat';
const REQUEST_TIMEOUT = 60000; // 60 seconds

/**
 * Send a message to the AI chat endpoint
 * @param {string} message - User's message
 * @param {Array} history - Previous conversation history [{role, text}]
 * @returns {Promise<{response: string}>}
 */
export async function sendMessage(message, history = []) {
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    throw new Error('Pesan tidak boleh kosong.');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
        history: history.map(entry => ({
          role: entry.role,
          text: entry.text,
        })),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || getErrorMessage(response.status),
        response.status,
        errorData.error
      );
    }

    const data = await response.json();

    if (!data.response) {
      throw new Error('Respons AI kosong. Silakan coba lagi.');
    }

    return { response: data.response };

  } catch (error) {
    clearTimeout(timeoutId);

    // Handle abort/timeout
    if (error.name === 'AbortError') {
      throw new Error(
        'Permintaan memakan waktu terlalu lama. Periksa koneksi internet Anda dan coba lagi.'
      );
    }

    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.'
      );
    }

    // Re-throw ApiError and known errors
    if (error instanceof ApiError || error.message) {
      throw error;
    }

    // Fallback
    throw new Error('Terjadi kesalahan yang tidak diketahui. Silakan coba lagi.');
  }
}

/**
 * Parse AI response text into structured sections
 * @param {string} text - Raw AI response text
 * @returns {{medis: string, sunnah: string, rujukan: string}}
 */
export function parseAIResponse(text) {
  if (!text || typeof text !== 'string') {
    return {
      medis: '',
      sunnah: '',
      rujukan: '',
    };
  }

  const sections = {
    medis: '',
    sunnah: '',
    rujukan: '',
  };

  // Define section markers and their keys
  const markers = [
    { key: 'medis', patterns: ['[ANALISIS MEDIS]', '**[ANALISIS MEDIS]**', '## ANALISIS MEDIS', '## [ANALISIS MEDIS]'] },
    { key: 'sunnah', patterns: ['[MENURUT SUNNAH]', '**[MENURUT SUNNAH]**', '## MENURUT SUNNAH', '## [MENURUT SUNNAH]'] },
    { key: 'rujukan', patterns: ['[SUMBER RUJUKAN]', '**[SUMBER RUJUKAN]**', '## SUMBER RUJUKAN', '## [SUMBER RUJUKAN]'] },
  ];

  // Find positions of each section
  const sectionPositions = [];

  for (const marker of markers) {
    let pos = -1;
    let matchedPattern = '';

    for (const pattern of marker.patterns) {
      const idx = text.indexOf(pattern);
      if (idx !== -1 && (pos === -1 || idx < pos)) {
        pos = idx;
        matchedPattern = pattern;
      }
    }

    if (pos !== -1) {
      sectionPositions.push({
        key: marker.key,
        position: pos,
        patternLength: matchedPattern.length,
      });
    }
  }

  // Sort by position
  sectionPositions.sort((a, b) => a.position - b.position);

  // Extract content for each section
  for (let i = 0; i < sectionPositions.length; i++) {
    const current = sectionPositions[i];
    const startPos = current.position + current.patternLength;
    const endPos = i + 1 < sectionPositions.length
      ? sectionPositions[i + 1].position
      : text.length;

    let content = text.substring(startPos, endPos).trim();

    // Remove leading colons, dashes, or newlines
    content = content.replace(/^[\s:—\-\n]+/, '').trim();

    sections[current.key] = content;
  }

  // If no sections were found, put entire text in medis
  if (sectionPositions.length === 0) {
    sections.medis = text.trim();
  }

  return sections;
}

/**
 * Format a section's content for display (convert markdown-ish to HTML)
 * @param {string} content - Section content
 * @returns {string} HTML-formatted content
 */
export function formatSectionHTML(content) {
  if (!content) return '';

  let html = content;

  // Escape HTML entities first
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold: **text**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic: *text*
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Detect Arabic text and wrap with lang="ar" and font-amiri
  // Arabic Unicode range: \u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF
  html = html.replace(
    /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF][^\n]*[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF])/g,
    '<span lang="ar" class="font-amiri">$1</span>'
  );

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');

  // Wrap in paragraph
  html = `<p>${html}</p>`;

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

/**
 * Custom error class for API errors
 */
class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

/**
 * Get user-friendly error message from HTTP status
 */
function getErrorMessage(status) {
  const messages = {
    400: 'Permintaan tidak valid. Silakan periksa pertanyaan Anda.',
    401: 'Sesi telah berakhir. Silakan muat ulang halaman.',
    403: 'Akses ditolak. Layanan AI tidak tersedia.',
    404: 'Layanan AI tidak ditemukan. Silakan coba lagi nanti.',
    429: 'Terlalu banyak permintaan. Silakan tunggu beberapa saat.',
    500: 'Terjadi kesalahan pada server. Silakan coba lagi.',
    502: 'Layanan AI sedang bermasalah. Silakan coba lagi nanti.',
    503: 'Layanan AI sedang dalam pemeliharaan. Silakan coba lagi nanti.',
    504: 'Layanan AI tidak merespons. Silakan coba lagi.',
  };
  return messages[status] || 'Terjadi kesalahan yang tidak diketahui.';
}
