/* ============================================================
   IslaMediQ — Smart Scanner Page
   Barcode + ingredient analysis + halal status
   ============================================================ */

import { getState, setState } from '../store.js';
import { initScanner, stopScanner, analyzeIngredients, checkHalalStatus, saveScanResult } from '../services/scanner-service.js';
import { addPoints } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';
import { encyclopediaArticles } from '../data/encyclopedia.js';

let scannerRunning = false;

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

      <!-- Scanner viewport -->
      <div class="scanner-viewport" id="scannerViewport" style="display:none">
        <div id="scannerReader"></div>
      </div>

      <div class="flex gap-3 justify-center mb-6" style="flex-wrap:wrap">
        <button class="btn btn-primary btn-lg" id="startScanBtn">📷 Mulai Scan</button>
        <button class="btn btn-danger btn-lg" id="stopScanBtn" style="display:none">⏹️ Stop</button>
      </div>

      <!-- Manual Input -->
      <div class="card mb-6">
        <h3 class="font-semibold mb-3">✍️ Input Manual</h3>
        <p class="text-sm text-muted mb-3">Ketik nama bahan atau kode E-number untuk cek kehalalan</p>
        <div class="flex gap-3">
          <input type="text" id="manualInput" placeholder="Contoh: E471, gelatin, madu, zaitun..." style="flex:1" />
          <button class="btn btn-secondary" id="manualCheckBtn">Cek</button>
        </div>
      </div>

      <!-- Result -->
      <div id="scanResult" style="display:none">
        <div class="halal-status" id="halalStatusBadge"></div>
        
        <div id="ingredientDetails" class="card mb-4"></div>
        
        <!-- Thibbun Nabawi Context -->
        <div id="thibbuNabawiContext" style="display:none" class="card mb-4">
          <h3 class="font-semibold mb-3" style="color:var(--emerald)">🌿 Konteks Thibbun Nabawi</h3>
          <div id="thibbuNabawiContent"></div>
        </div>
      </div>

      <!-- History -->
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

    <nav class="bottom-nav hide-desktop">
      <button class="bottom-nav-item" data-link="/dashboard"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Beranda</span></button>
      <button class="bottom-nav-item" data-link="/chat"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>AI Chat</span></button>
      <button class="bottom-nav-item" data-link="/fitness"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg><span>Kebugaran</span></button>
      <button class="bottom-nav-item" data-link="/encyclopedia"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Ensiklopedia</span></button>
      <button class="bottom-nav-item" data-link="/profile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></button>
    </nav>
  `;
}

export function onMount() {
  const startBtn = document.getElementById('startScanBtn');
  const stopBtn = document.getElementById('stopScanBtn');
  const viewport = document.getElementById('scannerViewport');
  const manualInput = document.getElementById('manualInput');
  const manualBtn = document.getElementById('manualCheckBtn');

  // Start barcode scan
  startBtn?.addEventListener('click', async () => {
    try {
      viewport.style.display = 'block';
      startBtn.style.display = 'none';
      stopBtn.style.display = 'inline-flex';

      await initScanner('scannerReader', (text) => {
        processResult(text);
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

  // Stop scan
  stopBtn?.addEventListener('click', handleStopScan);

  function handleStopScan() {
    stopScanner();
    scannerRunning = false;
    viewport.style.display = 'none';
    startBtn.style.display = 'inline-flex';
    stopBtn.style.display = 'none';
  }

  // Manual check
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

  function processResult(text) {
    const { ingredients, thibbuNabawi } = analyzeIngredients(text);
    const halalResult = checkHalalStatus(ingredients);

    // Show result area
    document.getElementById('scanResult').style.display = 'block';

    // Halal badge
    const badge = document.getElementById('halalStatusBadge');
    badge.className = `halal-status ${halalResult.status}`;
    badge.innerHTML = `
      <div style="font-size:48px">${halalResult.emoji || '❓'}</div>
      <div class="mt-2 text-2xl font-bold">${halalResult.label || 'Tidak Diketahui'}</div>
    `;

    // Ingredient details
    const details = document.getElementById('ingredientDetails');
    if (ingredients.length > 0) {
      details.innerHTML = `
        <h3 class="font-semibold mb-3">📋 Bahan Terdeteksi</h3>
        ${ingredients.map(i => `
          <div class="ingredient-item">
            <div>
              <div class="font-medium">${i.name} ${i.code ? `(${i.code})` : ''}</div>
              <div class="text-xs text-muted">${i.reason || ''}</div>
            </div>
            <span class="badge ${i.status === 'halal' ? 'badge-emerald' : i.status === 'haram' ? 'badge-danger' : 'badge-gold'}">${i.status.toUpperCase()}</span>
          </div>
        `).join('')}
      `;
    } else {
      details.innerHTML = `
        <p class="text-sm text-muted text-center p-4">Tidak ada bahan yang cocok di database. Coba ketik nama bahan yang lebih spesifik.</p>
      `;
    }

    // Thibbun Nabawi context
    const tnCtx = document.getElementById('thibbuNabawiContext');
    const tnContent = document.getElementById('thibbuNabawiContent');
    if (thibbuNabawi.length > 0) {
      tnCtx.style.display = 'block';
      tnContent.innerHTML = thibbuNabawi.map(tn => {
        // Find encyclopedia article if available
        const article = encyclopediaArticles?.find(a => a.title.toLowerCase().includes(tn.name.toLowerCase()));
        return `
          <div class="p-3 mb-2" style="background:var(--emerald-glow);border-radius:var(--radius-md)">
            <div class="font-semibold">${tn.name} ${tn.nameAr ? `<span lang="ar" class="font-amiri">(${tn.nameAr})</span>` : ''}</div>
            <p class="text-sm mt-1">${tn.benefits}</p>
            ${tn.hadith ? `<p class="text-xs text-muted mt-1">📎 ${tn.hadith}</p>` : ''}
            ${article ? `<button class="btn btn-sm btn-outline mt-2" data-link="/encyclopedia">📖 Baca di Ensiklopedia</button>` : ''}
          </div>
        `;
      }).join('');
    } else {
      tnCtx.style.display = 'none';
    }

    // Save to history & gamification
    saveScanResult(text, halalResult);
    addPoints('scan_product', `Scan: ${text.substring(0, 30)}`);

    // Scroll to result
    document.getElementById('scanResult')?.scrollIntoView({ behavior: 'smooth' });
  }
}

export function cleanup() {
  if (scannerRunning) {
    stopScanner();
    scannerRunning = false;
  }
}
