/* ============================================================
   IslaMediQ — Client-Side Hash Router
   Supports render(), onMount(), cleanup() lifecycle
   ============================================================ */

const routes = {};
let currentCleanup = null;
let currentRoute = null;

// Register a route
export function addRoute(path, pageModule) {
  routes[path] = pageModule;
}

// Navigate to a route
export function navigateTo(path) {
  if (window.location.hash === `#${path}`) {
    // Force re-render even if same hash
    handleRoute();
  } else {
    window.location.hash = `#${path}`;
  }
}

// Get current route path
export function getCurrentRoute() {
  return currentRoute;
}

// Handle route change
async function handleRoute() {
  // Cleanup previous page
  if (currentCleanup) {
    try {
      currentCleanup();
    } catch (e) {
      console.warn('Page cleanup error:', e);
    }
    currentCleanup = null;
  }

  const hash = window.location.hash.replace('#', '') || '/';
  const page = routes[hash] || routes['/404'] || routes['/'];

  if (!page) {
    console.error('No route found for:', hash);
    return;
  }

  currentRoute = hash;
  const app = document.getElementById('app');

  // Render page
  try {
    const html = page.render();
    app.innerHTML = html;
    app.className = 'page-enter';

    // Call onMount after DOM is ready
    requestAnimationFrame(() => {
      if (page.onMount) {
        page.onMount();
      }
    });

    // Store cleanup function
    if (page.cleanup) {
      currentCleanup = page.cleanup;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update active nav states
    updateNavActiveStates(hash);

  } catch (e) {
    console.error('Route render error:', e);
    app.innerHTML = `
      <div class="empty-state" style="min-height: 80vh;">
        <div class="icon">⚠️</div>
        <div class="title">Terjadi Kesalahan</div>
        <p class="text-secondary">${e.message}</p>
        <button class="btn btn-primary mt-4" onclick="location.hash='#/dashboard'">
          Kembali ke Dashboard
        </button>
      </div>
    `;
  }
}

// Update active states in navbar & bottom nav
function updateNavActiveStates(hash) {
  // Desktop nav
  document.querySelectorAll('.navbar-nav [data-link]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-link') === hash);
  });

  // Bottom nav
  document.querySelectorAll('.bottom-nav-item[data-link]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-link') === hash);
  });
}

// Initialize router
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);

  // Delegate click handler for [data-link] elements
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('data-link');
      navigateTo(path);
    }
  });

  // Initial route
  handleRoute();
}
