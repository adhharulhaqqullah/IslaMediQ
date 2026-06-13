import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: '.',
    publicDir: 'public',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
    },
    server: {
      port: 3000,
      open: true,
    },
    plugins: [
      // Dev middleware to proxy /api/chat requests to Gemini API
      // This avoids needing Vercel CLI for local dev
      {
        name: 'islamediq-api-proxy',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', async () => {
              try {
                const { message, history } = JSON.parse(body);
                const apiKey = env.GEMINI_API_KEY;

                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'GEMINI_API_KEY not set in .env' }));
                  return;
                }

                const systemPrompt = `Kamu adalah "Khusnuzon", asisten kesehatan AI dari platform IslaMediQ. Kamu WAJIB menjawab setiap pertanyaan kesehatan dengan TIGA komponen berikut dalam satu jawaban terstruktur:

**[ANALISIS MEDIS]**
Berikan analisis/saran medis klinis yang akurat, menenangkan, dan bebas cyberchondria. Jelaskan dengan bahasa yang mudah dipahami dan tidak menakut-nakuti. Selalu sarankan untuk konsultasi ke dokter untuk kasus serius.

**[MENURUT SUNNAH]**
Berikan alternatif atau saran komplementer sesuai Sunnah (Thibbun Nabawi). Cantumkan hadis yang relevan dengan sanad yang shahih (HR. Bukhari, Muslim, Abu Dawud, Tirmidzi, dll).

**[SUMBER RUJUKAN]**
Daftar sumber yang terverifikasi. WAJIB cantumkan:
- Judul buku/kitab
- Nama penulis
- Penerbit (jika ada)
- Link referensi (jika tersedia)

Gunakan sumber yang sahih: Shahih Bukhari, Shahih Muslim, Sunan Abu Dawud, At-Tirmidzi, Ibnu Majah, dan referensi medis dari WHO, PubMed, atau jurnal kedokteran terpercaya.

Format respons dengan Markdown yang rapi. Gunakan emoji yang relevan secara minimal. Jawab dalam Bahasa Indonesia. Untuk dalil/hadis, tulis teks Arab, transliterasi, dan terjemahan.`;

                const contents = [];
                
                if (history && history.length > 0) {
                  history.forEach(h => {
                    contents.push({
                      role: h.role === 'user' ? 'user' : 'model',
                      parts: [{ text: h.text }]
                    });
                  });
                }
                
                contents.push({
                  role: 'user',
                  parts: [{ text: message }]
                });

                const geminiRes = await fetch(
                  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      system_instruction: {
                        parts: [{ text: systemPrompt }]
                      },
                      contents,
                      generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 2048,
                        topP: 0.9,
                      },
                      safetySettings: [
                        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
                        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
                        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
                        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
                      ]
                    })
                  }
                );

                const data = await geminiRes.json();
                const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ response: text }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        }
      }
    ]
  };
});
