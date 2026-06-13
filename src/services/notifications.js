/* ============================================================
   IslaMediQ — Notification & Toast Service
   ============================================================ */

import { getState } from '../store.js';

let reminderInterval = null;

/**
 * Show a toast notification
 */
export function showToast(message, type = 'success', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Start periodic medicine reminder checks
 */
export function startReminderChecks() {
  if (reminderInterval) clearInterval(reminderInterval);

  reminderInterval = setInterval(() => {
    const reminders = getState('medicineReminders') || [];
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    reminders.forEach((reminder) => {
      if (reminder.time === currentTime) {
        showToast(`💊 Waktunya minum ${reminder.name}`, 'info', 5000);
      }
    });
  }, 60000); // Check every minute
}

/**
 * Stop reminder checks
 */
export function stopReminderChecks() {
  if (reminderInterval) {
    clearInterval(reminderInterval);
    reminderInterval = null;
  }
}
