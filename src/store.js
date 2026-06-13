/* ============================================================
   IslaMediQ — Simple Reactive State Store
   Uses localStorage for persistence + pub/sub for reactivity
   ============================================================ */

const STORAGE_KEY = 'islamediq_state';

const defaultState = {
  // User
  user: {
    name: 'Pengguna IslaMediQ',
    joinDate: new Date().toISOString(),
  },

  // Sick Mode
  sickMode: false,

  // Pedometer
  steps: {
    today: 0,
    goal: 6000,
    history: [], // [{ date, steps }]
    isTracking: false,
  },

  // Hydration
  hydration: {
    glasses: 0,
    goal: 8,
    lastReset: new Date().toDateString(),
  },

  // Fasting
  fasting: {
    fastedDays: [], // ['2026-06-12', ...]
    currentStreak: 0,
  },

  // Gamification
  points: {
    total: 0,
    history: [], // [{ action, points, date, desc }]
  },

  // Badges
  badges: {
    qaawiyun: false,        // 10,000 langkah
    thalibAlIlm: false,     // Baca 5 artikel
    daiDigital: false,       // Share 3 konten
    muminSehat: false,       // 7 hari streak puasa
    hafizSunnah: false,      // Buka 10 topik sunnah
    pejuangHidrasi: false,   // 8 gelas 7 hari
  },

  // Reading progress
  articlesRead: [],         // article IDs
  articlesShared: 0,

  // Chat history
  chatHistory: [],

  // Medicine reminders
  medicineReminders: [],

  // Scanner history
  scanHistory: [],

  // Forum
  forumThreads: [],
  forumComments: {},
};

// Load persisted state
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return deepMerge(defaultState, parsed);
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
  return { ...defaultState };
}

// Deep merge helper
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// State
let state = loadState();
const listeners = new Map();

// Save state to localStorage (debounced)
let saveTimeout = null;
function saveState() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }, 300);
}

// Get entire state or a nested path
export function getState(path) {
  if (!path) return state;
  return path.split('.').reduce((obj, key) => obj?.[key], state);
}

// Set state at a path
export function setState(path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  let obj = state;
  for (const key of keys) {
    if (!obj[key] || typeof obj[key] !== 'object') obj[key] = {};
    obj = obj[key];
  }
  const oldValue = obj[last];
  obj[last] = value;
  saveState();
  notifyListeners(path, value, oldValue);
}

// Update state (merge object at path)
export function updateState(path, updates) {
  const current = getState(path);
  if (typeof current === 'object' && !Array.isArray(current)) {
    setState(path, { ...current, ...updates });
  } else {
    setState(path, updates);
  }
}

// Subscribe to state changes
export function subscribe(pathOrCallback, callback) {
  if (typeof pathOrCallback === 'function') {
    // Global listener
    const id = Symbol();
    listeners.set(id, { path: '*', callback: pathOrCallback });
    return () => listeners.delete(id);
  }
  const id = Symbol();
  listeners.set(id, { path: pathOrCallback, callback });
  return () => listeners.delete(id);
}

// Notify listeners
function notifyListeners(changedPath, newValue, oldValue) {
  for (const [, { path, callback }] of listeners) {
    if (path === '*' || changedPath.startsWith(path) || path.startsWith(changedPath)) {
      callback(newValue, oldValue, changedPath);
    }
  }
}

// Daily reset check (hydration, steps)
export function checkDailyReset() {
  const today = new Date().toDateString();

  // Reset hydration
  if (state.hydration.lastReset !== today) {
    setState('hydration.glasses', 0);
    setState('hydration.lastReset', today);
  }

  // Save yesterday's steps if any
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (state.steps.today > 0) {
    const history = [...state.steps.history];
    const existingIdx = history.findIndex(h => h.date === yesterday);
    if (existingIdx < 0) {
      history.push({ date: yesterday, steps: state.steps.today });
      if (history.length > 30) history.shift();
      setState('steps.history', history);
    }
  }
}

// Reset entire state
export function resetState() {
  state = { ...defaultState };
  saveState();
  notifyListeners('*', state, null);
}
