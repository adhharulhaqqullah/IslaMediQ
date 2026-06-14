/* ============================================================
   IslaMediQ — Smart Scanner Page (Rule-Based Embedded Database)
   Barcode + ingredient analysis + halal status + Thibbun Nabawi
   100% Mandiri, Bebas Limit, Instan, dan Berjalan Lokal
   ============================================================ */

import { getState, setState } from '../store.js';
import { initScanner, stopScanner, saveScanResult } from '../services/scanner-service.js'; // Hanya ambil controller kamera dasar
import { addPoints } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';
import { encyclopediaArticles } from '../data/encyclopedia.js';

let scannerRunning = false;

// 1. DATABASE KANDUNGAN BAHAN, E-NUMBER, DAN THIBBUN NABAWI EMBEDDED
const KNOWLEDGE_BASE_SCANNER = {
  // --- E-Numbers / Aditif ---
  e471: {
    type: 'ingredient',
    name: 'Mono- and Diglycerides of Fatty Acids',
    code: 'E471',
    status: 'syubhat',
    label: 'Syubhat / Syubhah',
    emoji: '⚠️',
    reason: 'Bisa berasal dari lemak nabati (halal) atau lemak hewani termasuk babi (haram). Wajib memastikan logo halal resmi dari produsen.',
    thibbuNabawi: []
  },
  e120: {
    type: 'ingredient',
    name: 'Carmine / Cochineal (Pewarna Merah Alami)',
    code: 'E120',
    status: 'halal',
    label: 'Halal (Fatwa MUI)',
    emoji: '✅',
    reason: 'Berasal dari serangga Cochineal. Berdasarkan Fatwa MUI No. 30 Tahun 2011, pewarna ini halal dan suci selama tidak membahayakan.',
    thibbuNabawi: []
  },
  e441: {
    type: 'ingredient',
    name: 'Gelatin (Hewani)',
    code: 'E441',
    status: 'syubhat',
    label: 'Syubhat / Perlu Cek',
    emoji: '⚠️',
    reason: 'Apabila bersumber dari tulang/kulit sapi yang disembelih secara syar\'i maka halal. Jika bersumber dari babi maka haram.',
    thibbuNabawi: []
  },
  e904: {
    type: 'ingredient',
    name: 'Shellac (Agen Pengkilap)',
    code: 'E904',
    status: 'halal',
    label: 'Halal',
    emoji: '✅',
    reason: 'Ekskresi resin dari serangga Kerria lacca, suci dan aman digunakan sebagai pelapis makanan/permen.',
    thibbuNabawi: []
  },

  // --- Bahan Umum & Thibbun Nabawi ---
  madu: {
    type: 'ingredient',
    name: 'Madu Murni (Pure Honey)',
    code: '',
    status: 'halal',
    label: 'Halal Murni',
    emoji: '✅',
    reason: 'Cairan alami kaya nutrisi yang dihasilkan oleh lebah madu, suci dan 100% halal dikonsumsi.',
    thibbuNabawi: [
      {
        name: 'Madu',
        nameAr: 'العسل',
        benefits: 'Sangat baik untuk menjaga sistem pencernaan, mengencerkan dahak, agen penyembuh luka, dan meningkatkan imunitas tubuh.',
        hadith: 'Hendaklah kalian menggunakan dua obat: madu dan Al-Qur\'an. (HR. Ibnu Majah no. 3452, Shahih).'
      }
    ]
  },
  zaitun: {
    type: 'ingredient',
    name: 'Minyak Zaitun (Olive Oil)',
    code: '',
    status: 'halal',
    label: 'Halal Murni',
    emoji: '✅',
    reason: 'Minyak nabati alami hasil perasan buah zaitun, bebas dari unsur hewani dan berkhasiat tinggi.',
    thibbuNabawi: [
      {
        name: 'Minyak Zaitun',
        nameAr: 'زيت الزيتon',
        benefits: 'Mengandung lemak tak jenuh tunggal tinggi yang menjaga kesehatan jantung, melembapkan kulit kering, dan antiinflamasi otot.',
        hadith: 'Konsumsilah minyak zaitun dan berminyaklah dengannya, karena ia berasal dari pohon yang berkah. (HR. Tirmidzi no. 1851).'
      }
    ]
  },
  kurma: {
    type: 'ingredient',
    name: 'Ekstrak Kurma / Kurma (Dates)',
    code: '',
    status: 'halal',
    label: 'Halal Murni',
    emoji: '✅',
    reason: 'Buah nabati manis alami yang kaya serat, zat besi, dan kalium, sangat suci dan dianjurkan.',
    thibbuNabawi: [
      {
        name: 'Kurma',
        nameAr: 'التمر',
        benefits: 'Memulihkan energi dengan cepat, mencegah kram otot, menguatkan fungsi rahim, dan menangkal efek radikal bebas.',
        hadith: 'Barangsiapa mengonsumsi tujuh butir kurma Ajwa di pagi hari, tidak akan membahayakannya racun maupun sihir. (HR. Bukhari no. 5445).'
      }
    ]
  },
  habbatussauda: {
    type: 'ingredient',
    name: 'Jintan Hitam (Black Seed Oil / Powder)',
    code: '',
    status: 'halal',
    label: 'Halal Murni',
    emoji: '✅',
    reason: 'Rempah biji-bijian herbal nabati, mutlak halal dan berkhasiat sebagai imunostimulan tubuh.',
    thibbuNabawi: [
      {
        name: 'Habbatussauda',
        nameAr: 'الحبة السوداء',
        benefits: 'Meregulasi reaksi alergi, meredakan gejala asma/sesak ringan, mengatasi kembung, dan meningkatkan pertahanan tubuh.',
        hadith: 'Sesungguhnya pada jintan hitam terdapat obat untuk segala macam penyakit, kecuali kematian. (HR. Bukhari no. 5688).'
      }
    ]
  },
  gelatin_babi: {
    type: 'ingredient',
    name: 'Pork Gelatin / Lard',
    code: 'Porcine',
    status: 'haram',
    label: 'Haram Mutlak',
    emoji: '❌',
    reason: 'Mengandung turunan unsur tubuh babi. Haram dikonsumsi atau digunakan umat Muslim berdasarkan hukum Islam syar\'i.',
    thibbuNabawi: []
  },
  alkohol: {
    type: 'ingredient',
    name: 'Kandungan Etanol / Alkohol Industri',
    code: 'Ethanol',
    status: 'haram',
    label: 'Haram / Perlu Dihindari',
    emoji: '❌',
    reason: 'Jika digunakan dalam kadar tinggi pada produk konsumsi makanan/minuman yang memabukkan, hukumnya adalah haram.',
    thibbuNabawi: []
  }
};

// 2. KERNEL LOCAL ENGINE (Menggantikan scanner-service eksternal)
function localAnalyzeIngredients(inputText) {
  const inputLower = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // bersihkan spasi/simbol
  
  let detectedIngredients = [];
  let detectedThibbuNabawi = [];
  let finalStatus = 'unknown';
  let finalLabel = 'Tidak Diketahui';
  let finalEmoji = '❓';

  // Lakukan scanning teks berdasarkan kunci database
  for (const [key, data] of Object.entries(KNOWLEDGE_BASE_SCANNER)) {
    if (inputLower.includes(key) || (data.code && inputLower.includes(data.code.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))) {
      detectedIngredients.push({
        name: data.name,
        code: data.code,
        status: data.status,
        reason: data.reason
      });

      if (data.thibbuNabawi && data.thibbuNabawi.length > 0) {
        detectedThibbuNabawi.push(...data.thibbuNabawi);
      }
    }
  }

  // Tentukan status kehalalan kolektif produk
  if (detectedIngredients.length > 0) {
    const hasHaram = detectedIngredients.some(i => i.status === 'haram');
    const hasSyubhat = detectedIngredients.some(i => i.status === 'syubhat');

    if (hasHaram) {
      finalStatus = 'haram';
      finalLabel = 'Mengandung Bahan Haram';
      finalEmoji = '❌';
    } else if (hasSyubhat) {
      finalStatus = 'syubhat';
      finalLabel = 'Mengandung Bahan Syubhat';
      finalEmoji = '⚠️';
    } else {
      finalStatus = 'halal';
      finalLabel = 'Bahan Aman & Halal';
      finalEmoji = '✅';
    }
  }

  return {
    ingredients: detectedIngredients,
    thibbuNabawi: detectedThibbuNabawi,
    halalResult: {
      status: finalStatus,
      label: finalLabel,
      emoji: finalEmoji
    }
  };
}

export function render() {
  const history = getState('scanHistory') || [];

  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav"><a data-link="/dashboard">← Kembali</a></div>
    </nav>

    <main class="scanner-page page-enter">
      <h1 class="text-2xl font-bold mb-2">🔍 Smart Scanner</h1>
      <p class="text-muted mb-6">Pindai label produk untuk cek kehalalan dan kandungan</p>

      <div class="scanner-viewport" id="scannerViewport" style="display:none">
        <div id="scannerReader"></div>
      </div>

      <div class="flex gap-3 justify-center mb-6" style="flex-wrap:wrap">
        <button class="btn btn-primary btn-lg" id="startScanBtn">📷 Mulai Scan</button>
        <button class="btn btn-danger btn-lg" id="stopScanBtn" style="display:none">⏹️ Stop</button>
      </div>

      <div class="card mb-6">
        <h3 class="font-semibold mb-3">✍️ Input Manual</h3>
        <p class="text-sm text-muted mb-3">Ketik nama bahan atau kode E-number untuk cek kehalalan</p>
        <div class="flex gap-3">
          <input type="text" id="manualInput" placeholder="Contoh: E471, gelatin, madu, zaitun..." style="flex:1" />
          <button class="btn btn-secondary" id="manualCheckBtn">Cek</button>
        </div>
      </div>

      <div id="scanResult" style="display:none">
        <div class="halal-status" id="halalStatusBadge"></div>
        
        <div id="ingredientDetails" class="card mb-4"></div>
        
        <div id="thibbuNabawiContext" style="display:none" class="card mb-4">
          <h3 class="font-semibold mb-3" style="color:var(--emerald)">🌿 Konteks Thibbun Nabawi</h3>
          <div id="thibbuNabawiContent"></div>
        </div>
      </div>

      <h2 class="text-lg font-bold mt-8 mb-4">📋 Riwayat Scan</h2>
      <div id="scanHistoryList">
        ${history.length > 0 ? history.slice(0, 10).map(h => `
          <div class="activity-item">
            <span>${h.status === 'halal' ? '✅' : h.status === 'haram' ? '❌' : '⚠️'}</span>
            <div style="flex:1">
              <div class="font-medium text-sm">${h.barcode || 'Manual check'}</div>
              <div class="text-xs text-muted">${new Date(h.date).toLocaleDateString('id')}</div>
            </div>
            <span class="badge ${h.status === 'halal' ? 'badge-emerald' : h.status === 'haram' ? 'badge-danger' : 'badge-gold'}">${h.label}</span>
          </div>
        `).join('') : '<p class="text-sm text-muted text-center p-4">Belum ada riwayat scan</p>'}
      </div>
    </main>
  `;
}

export function onMount() {
  const startBtn = document.getElementById('startScanBtn');
  const stopBtn = document.getElementById('stopScanBtn');
  const viewport = document.getElementById('scannerViewport');
  const manualInput = document.getElementById('manualInput');
  const manualBtn = document.getElementById('manualCheckBtn');

  // Start barcode/kamera scan
  startBtn?.addEventListener('click', async () => {
    try {
      viewport.style.display = 'block';
      startBtn.style.display = 'none';
      stopBtn.style.display = 'inline-flex';

      await initScanner('scannerReader', (text) => {
        processResult(text); // Mengirim hasil teks dari barcode
        handleStopScan();
      });
      scannerRunning = true;
    } catch (err) {
      showToast('Kamera tidak tersedia. Gunakan input manual.', 'warning');
      viewport.style.display = 'none';
      startBtn.style.display = 'inline-flex';
      stopBtn.style.display = 'none';
    }
  });

  stopBtn?.addEventListener('click', handleStopScan);

  function handleStopScan() {
    stopScanner();
    scannerRunning = false;
    viewport.style.display = 'none';
    startBtn.style.display = 'inline-flex';
    stopBtn.style.display = 'none';
  }

  // Manual check button click
  manualBtn?.addEventListener('click', () => {
    const text = manualInput?.value.trim();
    if (!text) return;
    processResult(text);
  });

  manualInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const text = manualInput.value.trim();
      if (text) processResult(text);
    }
  });

  // CORE PROCESSOR UTAMA (Memproses data lokal terintegrasi)
  function processResult(text) {
    // Jalankan mesin penyaring data lokal menggantikan fungsi service lama
    const { ingredients, thibbuNabawi, halalResult } = localAnalyzeIngredients(text);

    // Buka container area hasil
    document.getElementById('scanResult').style.display = 'block';

    // Update Banner Badge Halal Utama
    const badge = document.getElementById('halalStatusBadge');
    badge.className = `halal-status ${halalResult.status}`;
    badge.innerHTML = `
      <div style="font-size:48px">${halalResult.emoji}</div>
      <div class="mt-2 text-2xl font-bold">${halalResult.label}</div>
    `;

    // Render Detail Komposisi Bahan Terdeteksi
    const details = document.getElementById('ingredientDetails');
    if (ingredients.length > 0) {
      details.innerHTML = `
        <h3 class="font-semibold mb-3">📋 Bahan Terdeteksi</h3>
        ${ingredients.map(i => `
          <div class="ingredient-item">
            <div>
              <div class="font-medium">${i.name} ${i.code ? `(${i.code})` : ''}</div>
              <div class="text-xs text-muted">${i.reason}</div>
            </div>
            <span class="badge ${i.status === 'halal' ? 'badge-emerald' : i.status === 'haram' ? 'badge-danger' : 'badge-gold'}">${i.status.toUpperCase()}</span>
          </div>
        `).join('')}
      `;
    } else {
      details.innerHTML = `
        <h3 class="font-semibold mb-2">❓ Hasil Analisis</h3>
        <p class="text-sm text-muted p-2">Kandungan tidak terdaftar secara spesifik di database herbal/aditif kami. Jika produk memiliki logo sertifikasi resmi BPOM/MUI, produk tersebut aman untuk digunakan.</p>
      `;
    }

    // Render Blok Hubungan Thibbun Nabawi (Jika ada)
    const tnCtx = document.getElementById('thibbuNabawiContext');
    const tnContent = document.getElementById('thibbuNabawiContent');
    if (thibbuNabawi.length > 0) {
      tnCtx.style.display = 'block';
      tnContent.innerHTML = thibbuNabawi.map(tn => {
        const article = encyclopediaArticles?.find(a => a.title.toLowerCase().includes(tn.name.toLowerCase()));
        return `
          <div class="p-3 mb-2" style="background:rgba(13,107,61,0.08); border-radius:8px">
            <div class="font-semibold">${tn.name} ${tn.nameAr ? `<span lang="ar" style="font-family:serif; float:right">${tn.nameAr}</span>` : ''}</div>
            <p class="text-sm mt-1" style="color:#2b2b2b">${tn.benefits}</p>
            ${tn.hadith ? `<p class="text-xs text-muted mt-2" style="font-style:italic">📎 Hadis: ${tn.hadith}</p>` : ''}
            ${article ? `<button class="btn btn-sm btn-outline mt-2" data-link="/encyclopedia">📖 Baca di Ensiklopedia</button>` : ''}
          </div>
        `;
      }).join('');
    } else {
      tnCtx.style.display = 'none';
    }

    // Eksekusi Logika Penyimpanan Riwayat & Gamifikasi Poin
    saveScanResult(text, halalResult);
    addPoints('scan_product', `Scan: ${text.substring(0, 25)}`);

    // Geser layar ke area hasil dengan smooth animation
    document.getElementById('scanResult')?.scrollIntoView({ behavior: 'smooth' });
  }
}

export function cleanup() {
  if (scannerRunning) {
    stopScanner();
    scannerRunning = false;
  }
}
