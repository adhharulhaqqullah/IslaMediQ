/* ============================================================
   IslaMediQ — Fitness Page
   Pedometer, Hydration, Fasting Planner
   ============================================================ */

import { getState, setState, subscribe } from '../store.js';
import { startPedometer, stopPedometer, requestMotionPermission } from '../services/pedometer.js';
import { addPoints } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';
import { getSunnahFastingDays, getMonthName, sahurRecommendations, breakfastRecommendations } from '../data/fasting.js';

let unsubscribers = [];
let pedometerActive = false;
let currentMonth, currentYear;

export function render() {
  const steps = getState('steps') || { today: 0, goal: 6000 };
  const hydration = getState('hydration') || { glasses: 0, goal: 8 };
  const now = new Date();
  currentMonth = now.getMonth();
  currentYear = now.getFullYear();

  const circumference = 2 * Math.PI * 90; // r=90
  const progress = Math.min(steps.today / steps.goal, 1);
  const offset = circumference * (1 - progress);

  const hadiths = [
    '"Rasulullah ﷺ berjalan dengan cepat seolah-olah bumi dilipat untuknya." — HR. Abu Dawud',
    '"Jagalah dua nikmat: sehat dan waktu luang." — HR. Bukhari no. 6412',
    '"Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah." — HR. Muslim no. 2664',
    '"Sesungguhnya tubuhmu memiliki hak atas dirimu." — HR. Bukhari no. 5199',
  ];
  const hadith = hadiths[Math.floor(Math.random() * hadiths.length)];

  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav"><a data-link="/dashboard">← Kembali</a></div>
    </nav>

    <main class="fitness-page page-enter">
      <h1 class="text-2xl font-bold mb-6">🏃 Pelacak Kebugaran Islami</h1>

      <!-- Pedometer Hero -->
      <div class="pedometer-hero">
        <h2 class="text-lg font-semibold mb-4">Pelacak Langkah Sunnah</h2>
        <div class="progress-ring" style="position:relative;width:200px;height:200px">
          <svg width="200" height="200" style="transform:rotate(-90deg)">
            <circle class="progress-bg" cx="100" cy="100" r="90" stroke-width="12" stroke="var(--gray-200)" fill="none"/>
            <circle class="progress-fill" id="stepRing" cx="100" cy="100" r="90" stroke-width="12" fill="none" stroke="var(--emerald)" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" style="transition:stroke-dashoffset 1s ease"/>
          </svg>
          <div class="progress-text" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
            <span id="stepCount" style="font-size:var(--text-4xl);font-weight:var(--font-bold);color:var(--emerald)">${steps.today.toLocaleString('id')}</span>
            <span class="text-sm text-muted">/ ${steps.goal.toLocaleString('id')} langkah</span>
          </div>
        </div>

        <button class="btn btn-primary btn-lg mt-6" id="pedometerBtn">
          🚶 Mulai Tracking
        </button>
        <p class="text-xs text-muted mt-2" id="pedometerNote">Buka di HP untuk tracking langkah nyata</p>
      </div>

      <!-- Hadith Motivation -->
      <div class="hadith-motivation">
        <p><strong>💡 Motivasi Hari Ini:</strong></p>
        <p class="mt-1">${hadith}</p>
      </div>

      <div class="fitness-grid">
        <!-- Hydration -->
        <div class="hydration-card">
          <h3 class="text-lg font-bold mb-2">💧 Pengingat Hidrasi Mindful</h3>
          <p class="text-sm text-muted mb-2">Sunnah: Minum sambil duduk, tangan kanan, 3 tegukan</p>
          <p class="font-semibold text-center mb-2" id="waterCount">${hydration.glasses}/${hydration.goal} gelas</p>
          <div class="water-glass-grid" id="waterGrid">
            ${Array.from({length: 8}, (_, i) => `
              <button class="water-glass ${i < hydration.glasses ? 'filled' : ''}" data-glass="${i}">
                ${i < hydration.glasses ? '💧' : '🥛'}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Fasting Planner -->
        <div class="fasting-card">
          <h3 class="text-lg font-bold mb-2">📅 Perencana Puasa Sunnah</h3>
          <div class="flex items-center justify-between mb-4">
            <button class="btn btn-ghost btn-sm" id="prevMonth">◀</button>
            <span class="font-semibold" id="monthLabel">${getMonthName(currentMonth)} ${currentYear}</span>
            <button class="btn btn-ghost btn-sm" id="nextMonth">▶</button>
          </div>
          <div class="fasting-calendar" id="fastingCal"></div>
          <div class="flex items-center gap-4 mt-3" style="font-size:var(--text-xs)">
            <span><span style="color:var(--emerald)">●</span> Puasa Sunnah</span>
            <span><span style="color:var(--white);background:var(--emerald);border-radius:50%;display:inline-block;width:12px;height:12px;text-align:center;line-height:12px;font-size:8px">✓</span> Sudah Puasa</span>
          </div>
          <div class="mt-4 p-3" style="background:var(--emerald-glow);border-radius:var(--radius-md)">
            <p class="text-sm font-semibold">🔥 Streak: <span id="fastStreak">${getState('fasting.currentStreak') || 0}</span> hari</p>
          </div>
        </div>
      </div>

      <!-- Nutrisi -->
      <h2 class="text-xl font-bold mt-8 mb-4">🍽️ Rekomendasi Nutrisi</h2>
      <div class="fitness-grid">
        <div class="card">
          <h3 class="font-semibold mb-3" style="color:var(--deep-blue)">🌙 Sahur</h3>
          ${sahurRecommendations.slice(0, 5).map(r => `
            <div class="activity-item mb-1">
              <span>${r.category === 'sunnah' ? '⭐' : '🥗'}</span>
              <div style="flex:1"><div class="font-medium text-sm">${r.food}</div><div class="text-xs text-muted">${r.benefit}</div></div>
            </div>
          `).join('')}
        </div>
        <div class="card">
          <h3 class="font-semibold mb-3" style="color:var(--emerald)">🌅 Berbuka</h3>
          ${breakfastRecommendations.slice(0, 5).map(r => `
            <div class="activity-item mb-1">
              <span>${r.category === 'sunnah' ? '⭐' : '🥗'}</span>
              <div style="flex:1"><div class="font-medium text-sm">${r.food}</div><div class="text-xs text-muted">${r.benefit}</div></div>
            </div>
          `).join('')}
        </div>
      </div>
    </main>

    <nav class="bottom-nav hide-desktop">
      <button class="bottom-nav-item" data-link="/dashboard"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Beranda</span></button>
      <button class="bottom-nav-item" data-link="/chat"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>AI Chat</span></button>
      <button class="bottom-nav-item active" data-link="/fitness"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg><span>Kebugaran</span></button>
      <button class="bottom-nav-item" data-link="/encyclopedia"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Ensiklopedia</span></button>
      <button class="bottom-nav-item" data-link="/profile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></button>
    </nav>
  `;
}

export function onMount() {
  const circumference = 2 * Math.PI * 90;

  // Pedometer
  const pedometerBtn = document.getElementById('pedometerBtn');
  pedometerBtn?.addEventListener('click', async () => {
    if (pedometerActive) {
      stopPedometer();
      pedometerActive = false;
      pedometerBtn.innerHTML = '🚶 Mulai Tracking';
      pedometerBtn.classList.remove('btn-danger');
      pedometerBtn.classList.add('btn-primary');
    } else {
      try {
        await requestMotionPermission();
        startPedometer((count) => {
          setState('steps.today', count);
          updateStepDisplay(count, circumference);
        });
        pedometerActive = true;
        pedometerBtn.innerHTML = '⏹️ Stop Tracking';
        pedometerBtn.classList.remove('btn-primary');
        pedometerBtn.classList.add('btn-danger');
        showToast('Pedometer aktif! Bawa HP saat berjalan.', 'success');
      } catch (err) {
        showToast('Sensor gerak tidak tersedia di perangkat ini.', 'warning');
      }
    }
  });

  // Hydration
  document.getElementById('waterGrid')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.water-glass');
    if (!btn) return;
    const idx = Number(btn.dataset.glass);
    const current = getState('hydration.glasses') || 0;
    const newVal = idx < current ? idx : idx + 1;
    setState('hydration.glasses', newVal);
    refreshWaterGrid(newVal);

    if (newVal >= 8) {
      showToast('MasyaAllah! Target hidrasi harian tercapai! 💧', 'success');
      addPoints('hydration_complete', 'Target hidrasi tercapai');
    }
  });

  // Fasting calendar
  renderCalendar();

  document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    document.getElementById('monthLabel').textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    renderCalendar();
  });

  document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    document.getElementById('monthLabel').textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    renderCalendar();
  });

  // Subscribe to steps
  const unsub = subscribe('steps.today', (val) => updateStepDisplay(val, circumference));
  unsubscribers.push(unsub);
}

export function cleanup() {
  if (pedometerActive) {
    stopPedometer();
    pedometerActive = false;
  }
  unsubscribers.forEach(u => u());
  unsubscribers = [];
}

function updateStepDisplay(count, circumference) {
  const goal = getState('steps.goal') || 6000;
  const progress = Math.min(count / goal, 1);
  const offset = circumference * (1 - progress);

  const ring = document.getElementById('stepRing');
  const countEl = document.getElementById('stepCount');
  if (ring) ring.setAttribute('stroke-dashoffset', offset);
  if (countEl) countEl.textContent = count.toLocaleString('id');
}

function refreshWaterGrid(glasses) {
  document.getElementById('waterCount').textContent = `${glasses}/8 gelas`;
  document.querySelectorAll('.water-glass').forEach((btn, i) => {
    if (i < glasses) {
      btn.classList.add('filled');
      btn.textContent = '💧';
    } else {
      btn.classList.remove('filled');
      btn.textContent = '🥛';
    }
  });
}

function renderCalendar() {
  const cal = document.getElementById('fastingCal');
  if (!cal) return;

  const sunnahDays = getSunnahFastingDays(currentYear, currentMonth);
  const fastedDays = getState('fasting.fastedDays') || [];
  const today = new Date();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  // Adjust: make Monday=0
  const startOffset = (firstDay + 6) % 7;

  const headers = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  let html = headers.map(h => `<div class="day-header">${h}</div>`).join('');

  // Empty cells
  for (let i = 0; i < startOffset; i++) html += '<div class="day"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isSunnah = sunnahDays.some(s => s.day === d);
    const isFasted = fastedDays.includes(dateStr);
    const isToday = today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === d;

    let cls = 'day';
    if (isFasted) cls += ' fasted';
    else if (isSunnah) cls += ' sunnah';
    if (isToday) cls += ' today';

    html += `<div class="${cls}" data-date="${dateStr}" title="${isSunnah ? sunnahDays.find(s => s.day === d)?.label : ''}">${d}</div>`;
  }

  cal.innerHTML = html;

  // Click to toggle fasted
  cal.addEventListener('click', (e) => {
    const dayEl = e.target.closest('.day[data-date]');
    if (!dayEl) return;
    const dateStr = dayEl.dataset.date;
    let fasted = getState('fasting.fastedDays') || [];

    if (fasted.includes(dateStr)) {
      fasted = fasted.filter(d => d !== dateStr);
    } else {
      fasted.push(dateStr);
      addPoints('fast_day', `Puasa ${dateStr}`);
      showToast('Alhamdulillah! Puasa dicatat 🌙', 'success');
    }

    setState('fasting.fastedDays', fasted);
    setState('fasting.currentStreak', calcStreak(fasted));
    document.getElementById('fastStreak').textContent = calcStreak(fasted);
    renderCalendar();
  });
}

function calcStreak(fastedDays) {
  if (!fastedDays.length) return 0;
  const sorted = [...fastedDays].sort().reverse();
  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const curr = new Date(sorted[i]);
    const prev = new Date(sorted[i + 1]);
    const diff = (curr - prev) / 86400000;
    if (diff <= 7) streak++; // Within a week counts for sunnah fasting streak
    else break;
  }
  return streak;
}
