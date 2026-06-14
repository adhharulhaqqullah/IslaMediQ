/* ============================================================
   IslaMediQ — Main Application Bootstrap
   ============================================================ */

// Styles
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

// Core
import { addRoute, initRouter } from './router.js';
import { getState, subscribe, checkDailyReset } from './store.js';

// Pages (lazy-ish — they're still bundled but organized as modules)
import * as Landing from './pages/landing.js';
import * as Dashboard from './pages/dashboard.js';
import * as Chat from './pages/chat.js';
import * as SickMode from './pages/sick-mode.js';
import * as Fitness from './pages/fitness.js';
import * as Scanner from './pages/scanner.js';
import * as Forum from './pages/forum.js';
import * as Encyclopedia from './pages/encyclopedia.js';
import * as Profile from './pages/profile.js';

// Services
import { startReminderChecks } from './services/notifications.js';

/* ── Initialize App ── */
function initApp() {
  // Daily reset check (hydration, step history)
  checkDailyReset();

  // Register routes
  addRoute('/', Landing);
  addRoute('/dashboard', Dashboard);
  addRoute('/chat', Chat);
  addRoute('/sick-mode', SickMode);
  addRoute('/fitness', Fitness);
  addRoute('/scanner', Scanner);
  addRoute('/forum', Forum);
  addRoute('/encyclopedia', Encyclopedia);
  addRoute('/profile', Profile);

  // Apply sick mode if active
  if (getState('sickMode')) {
    document.documentElement.classList.add('sick-mode');
  }

  // Subscribe to sick mode changes
  subscribe('sickMode', (value) => {
    if (value) {
      document.documentElement.classList.add('sick-mode');
    } else {
      document.documentElement.classList.remove('sick-mode');
    }
  });

  // Start medicine reminder checks
  startReminderChecks();

  // Initialize router (this triggers first page render)
  initRouter();

  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('loaded');
      // Remove from DOM after animation
      setTimeout(() => loadingScreen.remove(), 600);
    }
  }, 800);
}

// Boot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
