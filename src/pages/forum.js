/* ============================================================
   IslaMediQ — Forum Komunitas Page
   ============================================================ */

import { getState, setState } from '../store.js';
import { addPoints } from '../services/gamification.js';
import { showToast } from '../services/notifications.js';

let currentView = 'list'; // 'list' | 'detail'
let selectedThread = null;
let activeCategory = 'Semua';

const CATEGORIES = ['Semua', 'Kesehatan Umum', 'Thibbun Nabawi', 'Fikih Sakit', 'Nutrisi Halal'];

const SEED_THREADS = [
  {
    id: 1, title: 'Manfaat Habbatussauda untuk Imunitas',
    author: 'dr. Ahmad', authorBadge: '🩺',
    category: 'Thibbun Nabawi', date: '2026-06-10T10:00:00Z',
    content: 'Assalamu\'alaikum. Sebagai dokter umum, saya ingin berbagi tentang manfaat habbatussauda (jintan hitam) yang sudah dibuktikan secara ilmiah. Thymoquinone, senyawa aktif utamanya, memiliki efek antiinflamasi, antioksidan, dan imunomodulator yang kuat.\n\nRasulullah ﷺ bersabda: "Gunakanlah habbatussauda, karena di dalamnya terdapat obat untuk segala penyakit kecuali kematian." (HR. Bukhari no. 5688)\n\nDosis yang disarankan: 1-2 sendok teh minyak habbatussauda per hari.',
    likes: 24, replies: 2
  },
  {
    id: 2, title: 'Tips Sahur Sehat untuk Puasa Sunnah',
    author: 'Ustadz Faisal', authorBadge: '☪️',
    category: 'Nutrisi Halal', date: '2026-06-08T08:30:00Z',
    content: 'Bismillah. Berikut tips sahur sehat yang sesuai sunnah:\n\n1. Akhirkan sahur mendekati Subuh (HR. Bukhari & Muslim)\n2. Makan kurma + air putih sebagai sunnah\n3. Tambahkan karbohidrat kompleks (oatmeal, nasi merah)\n4. Protein: telur rebus, ikan\n5. Hindari makanan terlalu asin (bikin haus)\n\nRasulullah ﷺ bersabda: "Bersahurlah kalian, karena dalam sahur terdapat barakah." (HR. Bukhari no. 1923)',
    likes: 18, replies: 1
  },
  {
    id: 3, title: 'Pengalaman Bekam Pertama Kali',
    author: 'Abdullah', authorBadge: '',
    category: 'Thibbun Nabawi', date: '2026-06-05T14:00:00Z',
    content: 'Alhamdulillah, saya baru saja mencoba bekam untuk pertama kalinya. Prosesnya tidak terlalu sakit, rasanya seperti dicubit. Setelah bekam, badan terasa lebih ringan dan segar.\n\nPastikan bekam dilakukan oleh praktisi yang bersertifikat dan menggunakan alat steril. Waktu terbaik menurut sunnah: tanggal 17, 19, 21 bulan Hijriyah.\n\nRasulullah ﷺ bersabda: "Kesembuhan itu terdapat pada tiga hal: minum madu, sayatan alat bekam, dan sundutan api (kay). Dan aku melarang umatku dari kay." (HR. Bukhari no. 5680)',
    likes: 12, replies: 1
  },
  {
    id: 4, title: 'Cara Sholat Saat Sakit di Rumah Sakit',
    author: 'Fatimah', authorBadge: '',
    category: 'Fikih Sakit', date: '2026-06-01T16:00:00Z',
    content: 'Assalamu\'alaikum. Saya ingin berbagi pengalaman sholat di rumah sakit saat dirawat:\n\n1. Sholat bisa dilakukan di atas tempat tidur\n2. Jika tidak bisa berdiri, boleh duduk\n3. Jika tidak bisa duduk, berbaring miring ke kanan menghadap kiblat\n4. Jika tidak bisa miring, terlentang dengan kaki mengarah kiblat\n5. Rukuk dan sujud cukup isyarat kepala\n\nImran bin Husain ra berkata: "Aku bertanya kepada Nabi ﷺ tentang sholat, maka beliau bersabda: Sholatlah dengan berdiri, jika tidak mampu maka dengan duduk, jika tidak mampu maka dengan berbaring." (HR. Bukhari no. 1117)',
    likes: 31, replies: 2
  }
];

const SEED_COMMENTS = {
  1: [
    { id: 101, author: 'Zahra', content: 'JazakAllah khair, dok. Apakah aman untuk anak-anak?', date: '2026-06-10T12:00:00Z', likes: 5 },
    { id: 102, author: 'dr. Ahmad', authorBadge: '🩺', content: 'Wa iyyakum. Untuk anak di atas 6 tahun, bisa diberikan setengah dosis dewasa. Konsultasikan dengan dokter anak terlebih dahulu.', date: '2026-06-10T13:00:00Z', likes: 8 }
  ],
  2: [
    { id: 201, author: 'Aisyah', content: 'Saya biasanya makan bubur oat dengan madu dan kurma saat sahur. Alhamdulillah kenyang sampai Maghrib!', date: '2026-06-09T04:00:00Z', likes: 6 }
  ],
  3: [
    { id: 301, author: 'Hamzah', content: 'Berapa biaya bekam biasanya?', date: '2026-06-06T10:00:00Z', likes: 2 }
  ],
  4: [
    { id: 401, author: 'Khadijah', content: 'Terima kasih banyak atas sharingnya. Sangat membantu keluarga saya yang sedang dirawat.', date: '2026-06-02T09:00:00Z', likes: 10 },
    { id: 402, author: 'Ustadz Bilal', authorBadge: '☪️', content: 'Tambahan: jika tidak bisa wudhu, boleh tayamum. Jika tidak ada debu/tanah, boleh sholat tanpa bersuci karena darurat. Allah Maha Memahami hamba-Nya.', date: '2026-06-02T11:00:00Z', likes: 15 }
  ]
};

export function render() {
  return `
    <nav class="navbar">
      <div class="navbar-brand" data-link="/dashboard">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#0d6b3d" stroke-width="2" fill="none"/><path d="M12 17L15 20L21 13" stroke="#0d6b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        IslaMediQ
      </div>
      <div class="navbar-nav"><a data-link="/dashboard">← Kembali</a></div>
    </nav>

    <main class="forum-page page-enter">
      <div id="forumContent"></div>
    </main>

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
  // Seed data if empty
  let threads = getState('forumThreads') || [];
  if (threads.length === 0) {
    threads = SEED_THREADS;
    setState('forumThreads', threads);
    setState('forumComments', SEED_COMMENTS);
  }

  renderListView();

  // Event delegation
  document.getElementById('forumContent')?.addEventListener('click', (e) => {
    const threadEl = e.target.closest('.thread-item');
    const catChip = e.target.closest('.cat-chip');
    const backBtn = e.target.closest('#forumBackBtn');
    const newThreadBtn = e.target.closest('#newThreadBtn');
    const submitThread = e.target.closest('#submitNewThread');
    const cancelThread = e.target.closest('#cancelNewThread');
    const submitComment = e.target.closest('#submitComment');
    const likeBtn = e.target.closest('.like-btn');

    if (catChip) {
      activeCategory = catChip.dataset.category;
      renderListView();
    } else if (threadEl && currentView === 'list') {
      selectedThread = Number(threadEl.dataset.threadId);
      currentView = 'detail';
      renderDetailView();
    } else if (backBtn) {
      currentView = 'list';
      renderListView();
    } else if (newThreadBtn) {
      renderNewThreadForm();
    } else if (submitThread) {
      handleNewThread();
    } else if (cancelThread) {
      renderListView();
    } else if (submitComment) {
      handleNewComment();
    } else if (likeBtn) {
      const threadId = Number(likeBtn.dataset.threadId);
      const threads = getState('forumThreads') || [];
      const t = threads.find(t => t.id === threadId);
      if (t) { t.likes = (t.likes || 0) + 1; setState('forumThreads', threads); }
      if (currentView === 'detail') renderDetailView();
      else renderListView();
    }
  });
}

export function cleanup() {
  currentView = 'list';
  selectedThread = null;
  activeCategory = 'Semua';
}

function renderListView() {
  const threads = getState('forumThreads') || [];
  const filtered = activeCategory === 'Semua' ? threads : threads.filter(t => t.category === activeCategory);

  const container = document.getElementById('forumContent');
  if (!container) return;

  container.innerHTML = `
    <div class="flex items-center justify-between mb-6" style="flex-wrap:wrap;gap:12px">
      <div>
        <h1 class="text-2xl font-bold">💬 Forum Komunitas</h1>
        <p class="text-muted text-sm">Berbagi pengetahuan kesehatan berbasis Islam</p>
      </div>
      <button class="btn btn-primary" id="newThreadBtn">+ Buat Diskusi</button>
    </div>

    <div class="forum-categories mb-6">
      ${CATEGORIES.map(c => `
        <button class="chip cat-chip ${c === activeCategory ? 'active' : ''}" data-category="${c}" style="${c === activeCategory ? 'background:var(--emerald);color:white;border-color:var(--emerald)' : ''}">${c}</button>
      `).join('')}
    </div>

    <div class="thread-list">
      ${filtered.length > 0 ? filtered.map(t => {
        const comments = (getState('forumComments') || {})[t.id] || [];
        return `
          <div class="thread-item" data-thread-id="${t.id}">
            <div class="thread-avatar">${t.author.charAt(0)}</div>
            <div class="thread-content">
              <div class="thread-title">${t.title}</div>
              <div class="thread-preview">${t.content.substring(0, 120)}...</div>
              <div class="thread-meta">
                <span>${t.authorBadge || ''} ${t.author}</span>
                <span>💬 ${comments.length} balasan</span>
                <span>❤️ ${t.likes || 0}</span>
                <span>${new Date(t.date).toLocaleDateString('id')}</span>
              </div>
            </div>
            <span class="badge badge-emerald hide-mobile">${t.category}</span>
          </div>
        `;
      }).join('') : '<div class="empty-state"><div class="icon">💬</div><div class="title">Belum ada diskusi</div><p>Jadilah yang pertama memulai diskusi!</p></div>'}
    </div>
  `;
}

function renderDetailView() {
  const threads = getState('forumThreads') || [];
  const t = threads.find(th => th.id === selectedThread);
  if (!t) return;

  const comments = (getState('forumComments') || {})[t.id] || [];
  const container = document.getElementById('forumContent');

  container.innerHTML = `
    <button class="btn btn-ghost mb-4" id="forumBackBtn">← Kembali ke Forum</button>
    
    <div class="card mb-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="thread-avatar">${t.author.charAt(0)}</div>
        <div>
          <div class="font-semibold">${t.authorBadge || ''} ${t.author}</div>
          <div class="text-xs text-muted">${new Date(t.date).toLocaleDateString('id', { dateStyle: 'long' })}</div>
        </div>
        <span class="badge badge-emerald">${t.category}</span>
      </div>
      <h2 class="text-xl font-bold mb-4">${t.title}</h2>
      <div class="text-sm" style="line-height:1.8;white-space:pre-line">${t.content}</div>
      <div class="flex items-center gap-4 mt-4 pt-4" style="border-top:1px solid var(--gray-200)">
        <button class="btn btn-ghost btn-sm like-btn" data-thread-id="${t.id}">❤️ ${t.likes || 0} Suka</button>
        <span class="text-sm text-muted">💬 ${comments.length} balasan</span>
      </div>
    </div>

    <h3 class="font-semibold mb-4">Balasan (${comments.length})</h3>
    ${comments.map(c => `
      <div class="card mb-3" style="padding:var(--space-4)">
        <div class="flex items-center gap-2 mb-2">
          <div style="width:32px;height:32px;border-radius:50%;background:var(--gradient-blue);color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold">${c.author.charAt(0)}</div>
          <div>
            <span class="font-semibold text-sm">${c.authorBadge || ''} ${c.author}</span>
            <span class="text-xs text-muted ml-2">${new Date(c.date).toLocaleDateString('id')}</span>
          </div>
        </div>
        <p class="text-sm" style="line-height:1.6">${c.content}</p>
      </div>
    `).join('')}

    <div class="card mt-4" style="padding:var(--space-4)">
      <h4 class="font-semibold mb-3">Tulis Balasan</h4>
      <textarea id="commentInput" placeholder="Tulis balasan Anda..." rows="3" style="margin-bottom:12px"></textarea>
      <button class="btn btn-primary btn-sm" id="submitComment">Kirim Balasan</button>
    </div>
  `;
}

function renderNewThreadForm() {
  const container = document.getElementById('forumContent');
  container.innerHTML = `
    <button class="btn btn-ghost mb-4" id="cancelNewThread">← Batal</button>
    <div class="card">
      <h2 class="text-xl font-bold mb-4">📝 Buat Diskusi Baru</h2>
      <div class="form-group">
        <label class="form-label">Judul</label>
        <input type="text" id="newTitle" placeholder="Judul diskusi..." />
      </div>
      <div class="form-group">
        <label class="form-label">Kategori</label>
        <select id="newCategory">
          ${CATEGORIES.filter(c => c !== 'Semua').map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Isi Pesan</label>
        <textarea id="newContent" placeholder="Tulis isi diskusi..." rows="6"></textarea>
      </div>
      <button class="btn btn-primary" id="submitNewThread">Posting Diskusi</button>
    </div>
  `;
}

function handleNewThread() {
  const title = document.getElementById('newTitle')?.value.trim();
  const category = document.getElementById('newCategory')?.value;
  const content = document.getElementById('newContent')?.value.trim();

  if (!title || !content) {
    showToast('Judul dan isi pesan wajib diisi', 'warning');
    return;
  }

  const threads = getState('forumThreads') || [];
  const newThread = {
    id: Date.now(),
    title,
    author: getState('user.name') || 'Pengguna',
    authorBadge: '',
    category,
    date: new Date().toISOString(),
    content,
    likes: 0,
    replies: 0
  };

  threads.unshift(newThread);
  setState('forumThreads', threads);
  addPoints('forum_post', `Diskusi: ${title.substring(0, 30)}`);
  showToast('Diskusi berhasil diposting! 🎉', 'success');
  currentView = 'list';
  renderListView();
}

function handleNewComment() {
  const content = document.getElementById('commentInput')?.value.trim();
  if (!content) {
    showToast('Tulis balasan terlebih dahulu', 'warning');
    return;
  }

  const comments = getState('forumComments') || {};
  if (!comments[selectedThread]) comments[selectedThread] = [];
  comments[selectedThread].push({
    id: Date.now(),
    author: getState('user.name') || 'Pengguna',
    content,
    date: new Date().toISOString(),
    likes: 0
  });
  setState('forumComments', comments);
  addPoints('forum_comment', 'Membalas diskusi');
  showToast('Balasan terkirim! 💬', 'success');
  renderDetailView();
}
