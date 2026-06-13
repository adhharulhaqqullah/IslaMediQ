/* ============================================================
   IslaMediQ — Ensiklopedia Thibbun Nabawi Page
   Article listing + detail with dalil, medical evidence, refs
   ============================================================ */

import { getState, setState } from '../store.js';
import { addPoints } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';
import { encyclopediaArticles } from '../data/encyclopedia.js';

let currentView = 'grid'; // 'grid' | 'detail'
let selectedArticleId = null;
let activeFilter = 'Semua';
let searchQuery = '';

const FILTERS = ['Semua', 'Herbal Nabawi', 'Terapi Nabawi', 'Ibadah & Kesehatan'];

export function render() {
  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav"><a data-link="/dashboard">← Kembali</a></div>
    </nav>

    <main class="encyclopedia-page page-enter">
      <div id="encContent"></div>
    </main>

    <nav class="bottom-nav hide-desktop">
      <button class="bottom-nav-item" data-link="/dashboard"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Beranda</span></button>
      <button class="bottom-nav-item" data-link="/chat"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>AI Chat</span></button>
      <button class="bottom-nav-item" data-link="/fitness"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg><span>Kebugaran</span></button>
      <button class="bottom-nav-item active" data-link="/encyclopedia"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Ensiklopedia</span></button>
      <button class="bottom-nav-item" data-link="/profile"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></button>
    </nav>
  `;
}

export function onMount() {
  renderGrid();

  document.getElementById('encContent')?.addEventListener('click', (e) => {
    const card = e.target.closest('.article-card');
    const backBtn = e.target.closest('#encBackBtn');
    const shareBtn = e.target.closest('#shareBtn');
    const filterChip = e.target.closest('.enc-filter');

    if (filterChip) {
      activeFilter = filterChip.dataset.filter;
      renderGrid();
    } else if (card && currentView === 'grid') {
      selectedArticleId = card.dataset.articleId;
      currentView = 'detail';
      renderDetail();
    } else if (backBtn) {
      currentView = 'grid';
      renderGrid();
    } else if (shareBtn) {
      handleShare();
    }
  });

  document.getElementById('encContent')?.addEventListener('input', (e) => {
    if (e.target.id === 'encSearch') {
      searchQuery = e.target.value.toLowerCase();
      renderGrid();
    }
  });
}

export function cleanup() {
  currentView = 'grid';
  selectedArticleId = null;
  activeFilter = 'Semua';
  searchQuery = '';
}

function renderGrid() {
  const articles = encyclopediaArticles || [];
  let filtered = articles;

  if (activeFilter !== 'Semua') {
    filtered = filtered.filter(a => a.category === activeFilter);
  }
  if (searchQuery) {
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(searchQuery) ||
      (a.titleAr && a.titleAr.includes(searchQuery)) ||
      a.excerpt.toLowerCase().includes(searchQuery)
    );
  }

  const container = document.getElementById('encContent');
  container.innerHTML = `
    <h1 class="text-2xl font-bold mb-2">📚 Ensiklopedia Thibbun Nabawi</h1>
    <p class="text-muted mb-6">Menyelaraskan ilmu kedokteran modern dengan warisan pengobatan Islam</p>

    <div class="encyclopedia-search mb-4">
      <span class="search-icon">🔍</span>
      <input type="text" id="encSearch" placeholder="Cari artikel..." value="${searchQuery}" />
    </div>

    <div class="forum-categories mb-6">
      ${FILTERS.map(f => `
        <button class="chip enc-filter ${f === activeFilter ? 'active' : ''}" data-filter="${f}" style="${f === activeFilter ? 'background:var(--emerald);color:white;border-color:var(--emerald)' : ''}">${f}</button>
      `).join('')}
    </div>

    <div class="encyclopedia-grid stagger-children">
      ${filtered.map(a => `
        <div class="article-card" data-article-id="${a.id}">
          <div class="card-image" style="background:var(--gradient-emerald);font-size:48px;display:flex;align-items:center;justify-content:center;position:relative">
            <span style="position:relative;z-index:1">${a.emoji || '🌿'}</span>
          </div>
          <div class="card-body">
            <div class="card-category">${a.category}</div>
            <div class="card-title">${a.title} ${a.titleAr ? `<span lang="ar" class="font-amiri" style="font-size:var(--text-sm)">(${a.titleAr})</span>` : ''}</div>
            <div class="card-excerpt">${a.excerpt}</div>
          </div>
        </div>
      `).join('')}
    </div>

    ${filtered.length === 0 ? '<div class="empty-state mt-8"><div class="icon">📚</div><div class="title">Tidak ada artikel ditemukan</div></div>' : ''}
  `;
}

function renderDetail() {
  const articles = encyclopediaArticles || [];
  const a = articles.find(art => art.id === selectedArticleId);
  if (!a) return;

  // Mark as read
  const read = getState('articlesRead') || [];
  if (!read.includes(a.id)) {
    read.push(a.id);
    setState('articlesRead', read);
    addPoints('read_article', `Membaca: ${a.title}`);
  }

  const container = document.getElementById('encContent');
  container.innerHTML = `
    <div class="article-detail">
      <button class="btn btn-ghost mb-4" id="encBackBtn">← Kembali ke Ensiklopedia</button>

      <div class="article-header">
        <span class="badge badge-emerald mb-3">${a.category}</span>
        <h1 style="font-size:var(--text-3xl);font-weight:var(--font-bold);margin-bottom:8px">
          ${a.emoji || '🌿'} ${a.title}
          ${a.titleAr ? `<span lang="ar" class="font-amiri" style="font-size:var(--text-xl)">(${a.titleAr})</span>` : ''}
        </h1>
        <p class="text-secondary">${a.excerpt}</p>
      </div>

      ${a.dalil ? `
        <div class="dalil-box">
          <h3 class="font-semibold mb-3" style="color:var(--emerald)">📖 Dalil dari Sunnah</h3>
          <p lang="ar" class="arabic font-amiri" style="font-size:var(--text-2xl);text-align:right;line-height:2;color:var(--emerald-dark)">${a.dalil.arabic}</p>
          <p style="font-style:italic;font-size:var(--text-sm);color:var(--text-secondary);margin-top:8px">${a.dalil.transliteration}</p>
          <p style="font-size:var(--text-sm);margin-top:4px">"${a.dalil.translation}"</p>
          <p class="text-xs text-muted mt-2">📎 ${a.dalil.source}</p>
        </div>
      ` : ''}

      ${a.medicalEvidence ? `
        <div class="medical-evidence">
          <h3 class="font-semibold mb-3" style="color:var(--info)">🔬 Bukti Medis Modern</h3>
          <div style="font-size:var(--text-sm);line-height:1.8;white-space:pre-line">${a.medicalEvidence}</div>
        </div>
      ` : ''}

      ${a.usage ? `
        <div class="card mt-6">
          <h3 class="font-semibold mb-3" style="color:var(--deep-blue)">📋 Cara Penggunaan</h3>
          <div style="font-size:var(--text-sm);line-height:1.8;white-space:pre-line">${a.usage}</div>
        </div>
      ` : ''}

      ${a.caution ? `
        <div class="card mt-6" style="border-left:4px solid var(--warning)">
          <h3 class="font-semibold mb-3" style="color:var(--warning)">⚠️ Peringatan</h3>
          <div style="font-size:var(--text-sm);line-height:1.8">${a.caution}</div>
        </div>
      ` : ''}

      ${a.references && a.references.length > 0 ? `
        <div class="references mt-8">
          <h3 class="font-semibold mb-4" style="color:var(--gold-dark)">📚 Sumber Rujukan</h3>
          <ol style="list-style:decimal;padding-left:20px">
            ${a.references.map(r => `
              <li style="padding:8px 0;font-size:var(--text-sm);border-bottom:1px solid var(--cream-dark)">
                <strong>${r.title}</strong> — ${r.author}${r.publisher ? `, ${r.publisher}` : ''}
                ${r.link ? `<br><a href="${r.link}" target="_blank" rel="noopener" style="color:var(--emerald);font-size:var(--text-xs)">🔗 ${r.link}</a>` : ''}
              </li>
            `).join('')}
          </ol>
        </div>
      ` : ''}

      <div class="flex justify-center mt-8">
        <button class="btn btn-gold btn-lg" id="shareBtn">📤 Bagikan sebagai Jariyah</button>
      </div>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function handleShare() {
  const a = (encyclopediaArticles || []).find(art => art.id === selectedArticleId);
  if (!a) return;

  const shareData = {
    title: `${a.title} — IslaMediQ`,
    text: `${a.excerpt}\n\nBaca selengkapnya di IslaMediQ — Ensiklopedia Thibbun Nabawi`,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      showToast('Link disalin! Silakan bagikan. 📋', 'success');
    }

    const shared = (getState('articlesShared') || 0) + 1;
    setState('articlesShared', shared);
    addPoints('share_content', `Membagikan: ${a.title}`);
    showToast('Semoga menjadi amal jariyah! 🤲', 'success');
  } catch (err) {
    if (err.name !== 'AbortError') {
      showToast('Gagal membagikan konten', 'warning');
    }
  }
}
