/* ============================================================
   IslaMediQ — Dashboard Page
   Interactive grid with feature cards, quick stats, sick toggle
   ============================================================ */

import { getState, setState, subscribe } from '../store.js';
import { navigateTo } from '../router.js';

let unsubscribers = [];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 4) return { text: 'Selamat Malam', icon: '🌙', quote: 'Bangunlah di sepertiga malam terakhir untuk tahajjud' };
  if (h < 10) return { text: 'Selamat Pagi', icon: '🌅', quote: 'Barakah ada di pagi hari umatku — HR. Abu Dawud' };
  if (h < 15) return { text: 'Selamat Siang', icon: '☀️', quote: 'Jagalah kesehatanmu sebelum sakitmu — HR. Bukhari' };
  if (h < 18) return { text: 'Selamat Sore', icon: '🌤️', quote: 'Dua nikmat yang sering dilalaikan: sehat dan waktu luang' };
  return { text: 'Selamat Malam', icon: '🌙', quote: 'Tidur yang cukup adalah bagian dari menjaga kesehatan' };
}

export function render() {
  const g = getGreeting();
  const user = getState('user');
  const steps = getState('steps');
  const points = getState('points');
  const hydration = getState('hydration');
  const articlesRead = getState('articlesRead') || [];
  const sickMode = getState('sickMode');

  return `
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M16 6C16 6 24 10 24 18C24 26 16 28 16 28C16 28 8 26 8 18C8 10 16 6 16 6Z" fill="rgba(13,107,61,0.12)" stroke="#0d6b3d" stroke-width="1.5"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav hide-mobile">
        <a data-link="/dashboard" class="active">Beranda</a>
        <a data-link="/chat">AI Chat</a>
        <a data-link="/encyclopedia">Ensiklopedia</a>
        <a data-link="/profile">Profil</a>
        <button class="sick-toggle ${sickMode ? 'active' : ''}" id="sickToggleNav">
          🌙 ${sickMode ? 'Mode Sakit Aktif' : 'Mode Sakit'}
        </button>
      </div>
    </nav>

    <main class="dashboard-page">
      <!-- Greeting -->
      <div class="dashboard-greeting animate-fade-in-up">
        <h1>${g.icon} ${g.text}, ${user?.name || 'Pengguna'}</h1>
        <p>"${g.quote}"</p>
      </div>

      <!-- Quick Stats -->
      <div class="quick-stats stagger-children">
        <div class="stat-card">
          <div class="stat-icon" style="background:var(--emerald-glow);color:var(--emerald)">🚶</div>
          <div>
            <div class="stat-value" id="statSteps">${(steps?.today || 0).toLocaleString('id')}</div>
            <div class="stat-label">Langkah Hari Ini</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(201,169,78,0.15);color:var(--gold-dark)">⭐</div>
          <div>
            <div class="stat-value" id="statPoints">${points?.total || 0}</div>
            <div class="stat-label">Poin Amal</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(135,206,235,0.2);color:var(--deep-blue)">💧</div>
          <div>
            <div class="stat-value" id="statWater">${hydration?.glasses || 0}/8</div>
            <div class="stat-label">Gelas Air</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(59,130,246,0.1);color:var(--info)">📖</div>
          <div>
            <div class="stat-value" id="statArticles">${articlesRead.length}</div>
            <div class="stat-label">Artikel Dibaca</div>
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="dashboard-grid stagger-children">
        <!-- AI Chatbot -->
        <div class="feature-card" data-link="/chat">
          <div class="card-icon" style="background:var(--emerald-glow);color:var(--emerald)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7l-3 3-3-3c-2-1.5-4-4-4-7a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2"/><path d="M9 18h6"/></svg>
          </div>
          <div class="card-title">Khusnuzon AI Chatbot</div>
          <div class="card-desc">Asisten AI interaktif yang menjawab pertanyaan kesehatan dengan perspektif medis dan Islami</div>
        </div>

        <!-- Mode Sakit -->
        <div class="feature-card" data-link="/sick-mode">
          <div class="card-icon" style="background:var(--deep-blue-glow);color:var(--deep-blue)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.93 4.93a10 10 0 0 1 14.14 0"/><path d="M12 2v2"/><path d="M12 8a4 4 0 1 0 0 8"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>
          </div>
          <div class="card-title">Mode Sakit & Pendamping</div>
          <div class="card-desc">Panduan fikih sakit, pengingat obat, dan audio Ruqyah untuk pendampingan saat sakit</div>
        </div>

        <!-- Fitness -->
        <div class="feature-card" data-link="/fitness">
          <div class="card-icon" style="background:rgba(16,185,129,0.1);color:var(--success)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M7 21l3-7"/><path d="M17 21l-3-7"/><path d="M12 12l-4-4h8l-4 4z"/><path d="M10 8V3"/><path d="M14 8V3"/></svg>
          </div>
          <div class="card-title">Pelacak Kebugaran Islami</div>
          <div class="card-desc">Pedometer sunnah, pengingat hidrasi, dan kalender puasa dengan rekomendasi nutrisi</div>
        </div>

        <!-- Scanner -->
        <div class="feature-card" data-link="/scanner">
          <div class="card-icon" style="background:rgba(245,158,11,0.1);color:var(--warning)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          </div>
          <div class="card-title">Smart Scanner</div>
          <div class="card-desc">Pemindai barcode untuk verifikasi halal dan analisis kandungan produk</div>
        </div>

        <!-- Forum -->
        <div class="feature-card" data-link="/forum">
          <div class="card-icon" style="background:rgba(139,92,246,0.1);color:#8b5cf6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M21 15a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2l4 4v-4h4z" transform="translate(-4,-2)"/></svg>
          </div>
          <div class="card-title">Forum Komunitas</div>
          <div class="card-desc">Platform diskusi terverifikasi untuk berbagi pengetahuan kesehatan berbasis Islam</div>
        </div>

        <!-- Encyclopedia -->
        <div class="feature-card" data-link="/encyclopedia">
          <div class="card-icon" style="background:rgba(34,197,94,0.1);color:#22c55e">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>
          </div>
          <div class="card-title">Ensiklopedia Thibbun Nabawi</div>
          <div class="card-desc">Database artikel edukasi kesehatan yang menyelaraskan ilmu modern dengan warisan Islam</div>
        </div>
      </div>
    </main>

    <!-- Bottom Nav (Mobile) -->
    <nav class="bottom-nav hide-desktop">
      <button class="bottom-nav-item active" data-link="/dashboard">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        <span>Beranda</span>
      </button>
      <button class="bottom-nav-item" data-link="/chat">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>AI Chat</span>
      </button>
      <button class="bottom-nav-item" data-link="/fitness">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
        <span>Kebugaran</span>
      </button>
      <button class="bottom-nav-item" data-link="/encyclopedia">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <span>Ensiklopedia</span>
      </button>
      <button class="bottom-nav-item" data-link="/profile">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Profil</span>
      </button>
    </nav>
  `;
}

export function onMount() {
  // Sick mode toggle
  const sickBtn = document.getElementById('sickToggleNav');
  if (sickBtn) {
    sickBtn.addEventListener('click', () => {
      const current = getState('sickMode');
      setState('sickMode', !current);
      sickBtn.classList.toggle('active', !current);
      sickBtn.innerHTML = `🌙 ${!current ? 'Mode Sakit Aktif' : 'Mode Sakit'}`;
    });
  }

  // Subscribe to state changes for live stats
  const unsub = subscribe('steps.today', (val) => {
    const el = document.getElementById('statSteps');
    if (el) el.textContent = (val || 0).toLocaleString('id');
  });
  unsubscribers.push(unsub);

  const unsub2 = subscribe('points.total', (val) => {
    const el = document.getElementById('statPoints');
    if (el) el.textContent = val || 0;
  });
  unsubscribers.push(unsub2);

  const unsub3 = subscribe('hydration.glasses', (val) => {
    const el = document.getElementById('statWater');
    if (el) el.textContent = `${val || 0}/8`;
  });
  unsubscribers.push(unsub3);
}

export function cleanup() {
  unsubscribers.forEach(u => u());
  unsubscribers = [];
}
