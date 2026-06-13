/* ============================================================
   IslaMediQ — Gamification Service
   Points, badges, and achievement tracking
   ============================================================ */

import { getState, setState } from '../store.js';

const POINT_VALUES = {
  walk_1000: 1,
  read_article: 5,
  forum_post: 3,
  forum_comment: 2,
  scan_product: 2,
  fast_day: 10,
  share_content: 3,
  hydration_complete: 5,
  chat_first: 5,
};

const BADGE_DEFINITIONS = [
  {
    key: 'qaawiyun', emoji: '💪', name: 'Qaawiyun', nameAr: 'القوي',
    title: 'Penjaga Kebugaran', requirement: 'Capai 10.000 langkah total',
    check: (s) => {
      const today = s.steps?.today || 0;
      const historyTotal = (s.steps?.history || []).reduce((sum, h) => sum + (h.steps || 0), 0);
      return (today + historyTotal) >= 10000;
    }
  },
  {
    key: 'thalibAlIlm', emoji: '📖', name: "Thalib Al-'Ilm", nameAr: 'طالب العلم',
    title: 'Pencari Ilmu', requirement: 'Baca 5 artikel ensiklopedia',
    check: (s) => (s.articlesRead?.length || 0) >= 5
  },
  {
    key: 'daiDigital', emoji: '📢', name: "Da'i Digital", nameAr: 'داعي',
    title: 'Penyebar Dakwah', requirement: 'Bagikan 3 konten',
    check: (s) => (s.articlesShared || 0) >= 3
  },
  {
    key: 'muminSehat', emoji: '🌙', name: "Mu'min Sehat", nameAr: 'مؤمن',
    title: 'Mukmin Sehat', requirement: 'Puasa sunnah 7 hari',
    check: (s) => (s.fasting?.fastedDays?.length || 0) >= 7
  },
  {
    key: 'hafizSunnah', emoji: '🕌', name: 'Hafiz Sunnah', nameAr: 'حافظ',
    title: 'Hafiz Sunnah', requirement: 'Buka 10 topik sunnah',
    check: (s) => (s.articlesRead?.length || 0) >= 10
  },
  {
    key: 'pejuangHidrasi', emoji: '💧', name: 'Pejuang Hidrasi', nameAr: 'مجاهد',
    title: 'Pejuang Hidrasi', requirement: 'Minum 8 gelas air per hari',
    check: (s) => (s.hydration?.glasses || 0) >= (s.hydration?.goal || 8)
  },
];

/**
 * Add points to user's total and history
 * @param {string} action - The action key (e.g., 'read_article')
 * @param {string} desc - Description of the action
 */
export function addPoints(action, desc) {
  const points = POINT_VALUES[action] || 1;
  const state = getState();
  const history = [...(state.points?.history || [])];

  history.unshift({
    action,
    points,
    desc,
    date: new Date().toISOString(),
  });

  if (history.length > 100) history.length = 100;

  setState('points.total', (state.points?.total || 0) + points);
  setState('points.history', history);

  checkBadges();
}

/**
 * Get all badge info with unlock status
 * @returns {Array} Badge definitions with unlocked boolean
 */
export function getBadgeInfo() {
  const state = getState();
  return BADGE_DEFINITIONS.map(b => ({
    ...b,
    unlocked: state.badges?.[b.key] || false
  }));
}

/**
 * Check all badges and unlock any newly earned ones
 */
export function checkBadges() {
  const state = getState();
  const badges = { ...(state.badges || {}) };
  let changed = false;

  for (const def of BADGE_DEFINITIONS) {
    if (!badges[def.key] && def.check(state)) {
      badges[def.key] = true;
      changed = true;
    }
  }

  if (changed) {
    setState('badges', badges);
  }
  return badges;
}
