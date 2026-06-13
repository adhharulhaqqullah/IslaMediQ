/* ============================================================
   IslaMediQ — Sick Mode Page
   Ruqyah reader, Fikih Sakit, Doa, Medicine Reminders
   ============================================================ */

import { getState, setState } from '../store.js';
import { panduanTayamum, panduanSholatSakit, adabOrangSakit, doaSakit } from '../data/fiqh-sakit.js';
import { ruqyahPlaylist } from '../data/ruqyah.js';
import { showToast } from '../services/notifications.js';

let currentRuqyahIdx = 0;
let reminderInterval = null;

export function render() {
  const reminders = getState('medicineReminders') || [];
  const ruqyah = ruqyahPlaylist || [];
  const current = ruqyah[0] || {};

  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav">
        <a data-link="/dashboard">← Kembali</a>
      </div>
    </nav>

    <main class="sick-mode-page page-enter">
      <h1 class="text-2xl font-bold mb-2" style="color:var(--deep-blue)">🌙 Mode Sakit & Pendamping</h1>
      <p class="text-muted mb-6">Pendampingan ibadah dan kesehatan saat sakit</p>

      <!-- Ruqyah Widget -->
      <div class="ruqyah-widget">
        <div class="audio-player">
          <button class="play-btn" id="ruqyahPrev" title="Sebelumnya">⏮</button>
          <div class="track-info">
            <div class="track-title" id="ruqyahTitle">${current.title || "Ruqyah Syar'iyyah"}</div>
            <div style="font-size:var(--text-xs);opacity:0.8" id="ruqyahSubtitle">${current.surah || ''}</div>
          </div>
          <button class="play-btn" id="ruqyahNext" title="Selanjutnya">⏭</button>
        </div>
        <div class="card mt-4" id="ruqyahContent" style="max-height:300px;overflow-y:auto">
          <p lang="ar" class="font-amiri" style="font-size:var(--text-2xl);text-align:right;line-height:2;color:var(--gold)">${current.arabic || ''}</p>
          <p class="mt-2" style="font-style:italic;font-size:var(--text-sm);color:var(--text-secondary)">${current.transliteration || ''}</p>
          <p class="mt-2" style="font-size:var(--text-sm)">${current.translation || ''}</p>
          <p class="mt-2 text-xs text-muted">${current.note || ''}</p>
        </div>
      </div>

      <!-- Fikih Sakit Guides -->
      <h2 class="text-xl font-bold mt-8 mb-4">📖 Panduan Fikih Sakit</h2>
      <div class="sick-guides">
        <!-- Tayamum -->
        <div class="guide-card">
          <h3>🤲 ${panduanTayamum.title}</h3>
          <ol style="list-style:decimal;padding-left:20px;font-size:var(--text-sm);line-height:1.8">
            ${panduanTayamum.steps.map(s => `<li><strong>${s.title}:</strong> ${s.detail}</li>`).join('')}
          </ol>
          <p class="mt-3 text-xs text-muted">📎 ${panduanTayamum.dalil.source}</p>
        </div>

        <!-- Sholat Sakit -->
        <div class="guide-card">
          <h3>🕌 ${panduanSholatSakit.title}</h3>
          <div style="font-size:var(--text-sm);line-height:1.8">
            ${panduanSholatSakit.positions.map(p => `
              <div class="mb-2"><strong>${p.icon} ${p.title}:</strong> ${p.detail}</div>
            `).join('')}
          </div>
          <p class="mt-3 text-xs text-muted">📎 ${panduanSholatSakit.dalil.source}</p>
        </div>

        <!-- Adab Sakit -->
        <div class="guide-card">
          <h3>💝 ${adabOrangSakit.title}</h3>
          <div style="font-size:var(--text-sm);line-height:1.8">
            ${adabOrangSakit.points.map(a => `
              <div class="mb-2"><strong>${a.title}:</strong> ${a.detail}
                <span class="text-xs text-muted">(${a.source})</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Doa Orang Sakit -->
      <h2 class="text-xl font-bold mt-8 mb-4">🤲 Doa-Doa Orang Sakit</h2>
      <div id="doaList">
        ${doaSakit.map(doa => `
          <div class="dua-card">
            <div class="font-semibold mb-2" style="color:var(--emerald)">${doa.title}</div>
            <p lang="ar" class="arabic font-amiri">${doa.arabic}</p>
            <p class="transliteration">${doa.transliteration}</p>
            <p class="translation">${doa.translation}</p>
            ${doa.instruction ? `<p class="text-xs mt-2" style="color:var(--deep-blue)">💡 ${doa.instruction}</p>` : ''}
            <p class="text-xs text-muted mt-2">📎 ${doa.source}</p>
          </div>
        `).join('')}
      </div>

      <!-- Medicine Reminder -->
      <h2 class="text-xl font-bold mt-8 mb-4">💊 Pengingat Obat</h2>
      <div class="medicine-reminder">
        <p class="text-sm mb-4" style="color:var(--gold)">☝️ Adab: Baca <span lang="ar" class="font-amiri" style="font-size:var(--text-lg)">بِسْمِ اللَّهِ</span> sebelum minum obat</p>
        
        <div class="flex gap-3 mb-4" style="flex-wrap:wrap">
          <input type="text" id="medName" placeholder="Nama Obat" style="flex:2;min-width:150px" />
          <input type="time" id="medTime" style="flex:1;min-width:100px" />
          <button class="btn btn-primary btn-sm" id="addMedBtn">+ Tambah</button>
        </div>

        <div id="reminderList">
          ${reminders.map(r => `
            <div class="activity-item" data-reminder-id="${r.id}">
              <span>💊</span>
              <div style="flex:1">
                <div class="font-semibold">${r.name}</div>
                <div class="text-xs text-muted">⏰ ${r.time}</div>
              </div>
              <button class="btn btn-ghost btn-sm remove-reminder" data-id="${r.id}">✕</button>
            </div>
          `).join('') || '<p class="text-sm text-muted text-center p-4">Belum ada pengingat obat</p>'}
        </div>
      </div>
    </main>

    <!-- Bottom Nav -->
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
  const ruqyah = ruqyahPlaylist || [];
  currentRuqyahIdx = 0;

  // Ruqyah navigation
  document.getElementById('ruqyahPrev')?.addEventListener('click', () => {
    currentRuqyahIdx = (currentRuqyahIdx - 1 + ruqyah.length) % ruqyah.length;
    updateRuqyahDisplay(ruqyah[currentRuqyahIdx]);
  });

  document.getElementById('ruqyahNext')?.addEventListener('click', () => {
    currentRuqyahIdx = (currentRuqyahIdx + 1) % ruqyah.length;
    updateRuqyahDisplay(ruqyah[currentRuqyahIdx]);
  });

  // Add medicine reminder
  document.getElementById('addMedBtn')?.addEventListener('click', () => {
    const name = document.getElementById('medName')?.value.trim();
    const time = document.getElementById('medTime')?.value;
    if (!name || !time) {
      showToast('Isi nama obat dan waktu', 'warning');
      return;
    }

    const reminders = getState('medicineReminders') || [];
    reminders.push({ id: Date.now(), name, time, notes: 'Baca Bismillah' });
    setState('medicineReminders', reminders);

    document.getElementById('medName').value = '';
    document.getElementById('medTime').value = '';
    refreshReminderList(reminders);
    showToast(`Pengingat "${name}" ditambahkan`, 'success');
  });

  // Remove reminder delegation
  document.getElementById('reminderList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.remove-reminder');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    let reminders = getState('medicineReminders') || [];
    reminders = reminders.filter(r => r.id !== id);
    setState('medicineReminders', reminders);
    refreshReminderList(reminders);
    showToast('Pengingat dihapus', 'info');
  });

  // Check reminders every minute
  reminderInterval = setInterval(() => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const reminders = getState('medicineReminders') || [];
    reminders.forEach(r => {
      if (r.time === timeStr) {
        showToast(`⏰ Waktunya minum ${r.name}. Baca Bismillah! 🤲`, 'warning', 10000);
      }
    });
  }, 60000);
}

export function cleanup() {
  if (reminderInterval) {
    clearInterval(reminderInterval);
    reminderInterval = null;
  }
}

function updateRuqyahDisplay(item) {
  const titleEl = document.getElementById('ruqyahTitle');
  const subEl = document.getElementById('ruqyahSubtitle');
  const contentEl = document.getElementById('ruqyahContent');
  if (!item) return;

  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.surah || '';
  if (contentEl) {
    contentEl.innerHTML = `
      <p lang="ar" class="font-amiri" style="font-size:var(--text-2xl);text-align:right;line-height:2;color:var(--gold)">${item.arabic || ''}</p>
      <p class="mt-2" style="font-style:italic;font-size:var(--text-sm);color:var(--text-secondary)">${item.transliteration || ''}</p>
      <p class="mt-2" style="font-size:var(--text-sm)">${item.translation || ''}</p>
      <p class="mt-2 text-xs text-muted">${item.note || ''}</p>
    `;
  }
}

function refreshReminderList(reminders) {
  const listEl = document.getElementById('reminderList');
  if (!listEl) return;
  if (reminders.length === 0) {
    listEl.innerHTML = '<p class="text-sm text-muted text-center p-4">Belum ada pengingat obat</p>';
    return;
  }
  listEl.innerHTML = reminders.map(r => `
    <div class="activity-item" data-reminder-id="${r.id}">
      <span>💊</span>
      <div style="flex:1">
        <div class="font-semibold">${r.name}</div>
        <div class="text-xs text-muted">⏰ ${r.time}</div>
      </div>
      <button class="btn btn-ghost btn-sm remove-reminder" data-id="${r.id}">✕</button>
    </div>
  `).join('');
}
