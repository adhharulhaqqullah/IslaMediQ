/* ============================================================
   IslaMediQ — Profil & Badge Gamifikasi Page
   ============================================================ */

import { getState, setState, resetState } from '../store.js';
import { getBadgeInfo, checkBadges } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';

export function render() {
  const user = getState('user') || { name: 'Pengguna IslaMediQ', joinDate: new Date().toISOString() };
  const points = getState('points') || { total: 0, history: [] };
  const steps = getState('steps') || { today: 0, history: [] };
  const articlesRead = getState('articlesRead') || [];
  const fasting = getState('fasting') || { fastedDays: [] };
  const forumThreads = (getState('forumThreads') || []).filter(t => t.author === user.name);
  const badges = getBadgeInfo();

  // Compute total steps
  const totalSteps = steps.today + (steps.history || []).reduce((sum, h) => sum + (h.steps || 0), 0);

  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav"><a data-link="/dashboard">← Kembali</a></div>
    </nav>

    <main class="profile-page page-enter">
      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-avatar">${user.name.charAt(0).toUpperCase()}</div>
        <div>
          <h1 class="text-2xl font-bold" id="displayName">${user.name}</h1>
          <p class="text-sm" style="opacity:0.8">Bergabung sejak ${new Date(user.joinDate).toLocaleDateString('id', { year: 'numeric', month: 'long' })}</p>
          <p class="mt-2" style="color:var(--gold-light)">
            ⭐ <strong>${points.total}</strong> Poin Amal
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="profile-stats stagger-children">
        <div class="stat-card">
          <div class="stat-icon" style="background:var(--emerald-glow);color:var(--emerald)">🚶</div>
          <div>
            <div class="stat-value">${totalSteps.toLocaleString('id')}</div>
            <div class="stat-label">Total Langkah</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:var(--info-bg);color:var(--info)">📖</div>
          <div>
            <div class="stat-value">${articlesRead.length}</div>
            <div class="stat-label">Artikel Dibaca</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:var(--success-bg);color:var(--success)">🌙</div>
          <div>
            <div class="stat-value">${fasting.fastedDays?.length || 0}</div>
            <div class="stat-label">Hari Puasa</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(139,92,246,0.1);color:#8b5cf6">💬</div>
          <div>
            <div class="stat-value">${forumThreads.length}</div>
            <div class="stat-label">Diskusi Forum</div>
          </div>
        </div>
      </div>

      <!-- Badges -->
      <h2 class="text-xl font-bold mt-8 mb-4">🏆 Koleksi Badge Kontribusi Dakwah</h2>
      <div class="badge-collection">
        ${badges.map(b => `
          <div class="badge-card">
            <div class="badge-icon ${b.unlocked ? 'unlocked' : 'locked'}" title="${b.unlocked ? 'Terbuka!' : b.requirement}">
              <span style="font-size:32px">${b.emoji}</span>
            </div>
            <div class="badge-name">${b.name}</div>
            <div style="font-size:10px;color:var(--gold)" lang="ar" class="font-amiri">${b.nameAr}</div>
            <div style="font-size:9px;color:var(--text-muted);margin-top:2px">${b.unlocked ? '✅ Terbuka' : b.requirement}</div>
          </div>
        `).join('')}
      </div>

      <!-- Activity Log -->
      <h2 class="text-xl font-bold mt-8 mb-4">📋 Riwayat Aktivitas</h2>
      <div class="activity-log">
        ${(points.history || []).slice(-20).reverse().map(h => `
          <div class="activity-item">
            <span>${getActivityEmoji(h.action)}</span>
            <div style="flex:1">
              <div class="text-sm">${h.desc || h.action}</div>
              <div class="text-xs text-muted">${formatDate(h.date)}</div>
            </div>
            <div class="points">+${h.points}</div>
          </div>
        `).join('') || '<p class="text-sm text-muted text-center p-4">Belum ada aktivitas</p>'}
      </div>

      <!-- Settings -->
      <h2 class="text-xl font-bold mt-8 mb-4">⚙️ Pengaturan</h2>
      <div class="card">
        <div class="form-group">
          <label class="form-label">Nama</label>
          <div class="flex gap-3">
            <input type="text" id="nameInput" value="${user.name}" />
            <button class="btn btn-primary btn-sm" id="saveNameBtn">Simpan</button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Target Langkah Harian</label>
          <div class="flex gap-3">
            <input type="number" id="stepGoalInput" value="${getState('steps.goal') || 6000}" min="1000" max="30000" step="1000" />
            <button class="btn btn-secondary btn-sm" id="saveGoalBtn">Simpan</button>
          </div>
        </div>

        <hr class="divider" />

        <button class="btn btn-danger btn-sm" id="resetBtn">🗑️ Reset Semua Data</button>
        <p class="form-hint">Menghapus semua data termasuk poin, badge, dan riwayat.</p>

        <hr class="divider" />
        <p class="text-xs text-muted">IslaMediQ v1.0.0 — Platform Kesehatan Digital Islami</p>
        <p class="text-xs" style="color:var(--gold)">Semoga menjadi amal jariyah 🤲</p>
      </div>
    </main>

    <nav class="bottom-nav hide-desktop">
      <button class="bottom-nav-item" data-link="/dashboard"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Beranda</span></button>
      <button class="bottom-nav-item" data-link="/chat"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>AI Chat</span></button>
      <button class="bottom-nav-item" data-link="/fitness"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg><span>Kebugaran</span></button>
      <button class="bottom-nav-item" data-link="/encyclopedia"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Ensiklopedia</span></button>
      <button class="bottom-nav-item active" data-link="/profile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></button>
    </nav>
  `;
}

export function onMount() {
  // Check badges on load
  checkBadges();

  // Save name
  document.getElementById('saveNameBtn')?.addEventListener('click', () => {
    const name = document.getElementById('nameInput')?.value.trim();
    if (name) {
      setState('user.name', name);
      document.getElementById('displayName').textContent = name;
      showToast('Nama berhasil diperbarui! ✅', 'success');
    }
  });

  // Save step goal
  document.getElementById('saveGoalBtn')?.addEventListener('click', () => {
    const goal = Number(document.getElementById('stepGoalInput')?.value);
    if (goal >= 1000 && goal <= 30000) {
      setState('steps.goal', goal);
      showToast(`Target langkah diubah ke ${goal.toLocaleString('id')} ✅`, 'success');
    }
  });

  // Reset all data
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    if (confirm('Yakin ingin menghapus SEMUA data? Poin, badge, dan riwayat akan hilang permanen.')) {
      resetState();
      showToast('Data berhasil direset', 'info');
      window.location.hash = '#/dashboard';
    }
  });
}

export function cleanup() {}

function getActivityEmoji(action) {
  const map = {
    walk_1000: '🚶', read_article: '📖', forum_post: '💬',
    forum_comment: '💬', scan_product: '🔍', fast_day: '🌙',
    share_content: '📤', hydration_complete: '💧', chat_first: '🤖'
  };
  return map[action] || '⭐';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('id', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  } catch {
    return dateStr;
  }
}
