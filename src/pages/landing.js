/* ============================================================
   IslaMediQ — Landing Page
   Marketing page with hero, features, CTA, and footer
   ============================================================ */

import { navigateTo } from '../router.js';

/* ── Logo SVG ── */
const logoSVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M20 4C20 4 30 10 30 20C30 30 20 36 20 36C20 36 10 30 10 20C10 10 20 4 20 4Z" fill="rgba(13,107,61,0.15)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="18" y="12" width="4" height="16" rx="1" fill="currentColor"/>
  <rect x="12" y="18" width="16" height="4" rx="1" fill="currentColor"/>
  <path d="M14 8 Q20 2 26 8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`;

/* ── Feature Data ── */
const features = [
  {
    id: 'chatbot',
    title: 'Khusnuzon AI Chatbot',
    desc: 'Asisten kesehatan cerdas berbasis AI yang memberikan konsultasi awal berdasarkan ilmu kedokteran modern dan Thibbun Nabawi. Setiap jawaban dilengkapi analisis medis, perspektif Sunnah, dan sumber rujukan terpercaya.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="6" width="24" height="18" rx="4"/>
      <path d="M12 22v4l4-4"/>
      <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="20" cy="15" r="1.5" fill="currentColor" stroke="none"/>
      <path d="M13 18c1.5 1.5 5.5 1.5 7 0"/>
      <path d="M8 6V4a2 2 0 014 0v2M20 6V4a2 2 0 014 0v2"/>
    </svg>`,
    color: 'var(--emerald)',
    bg: 'var(--emerald-glow)',
    route: '/chat',
  },
  {
    id: 'sick-mode',
    title: 'Mode Sakit & Pendamping',
    desc: 'Tampilan khusus low-light yang nyaman di mata saat sakit, dilengkapi audio ruqyah syar\'iyyah, doa-doa kesembuhan dari Al-Qur\'an dan Sunnah, serta pengingat minum obat otomatis.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M26 16a10 10 0 01-20 0 10 10 0 0120 0Z"/>
      <path d="M14 12h4v8h-4z" fill="currentColor" stroke="none" opacity="0.3"/>
      <rect x="14" y="12" width="4" height="8" rx="1"/>
      <rect x="12" y="14" width="8" height="4" rx="1"/>
      <path d="M26 6 Q28 12 26 16" stroke-dasharray="2 2" opacity="0.5"/>
      <circle cx="28" cy="8" r="2" fill="currentColor" opacity="0.3" stroke="none"/>
    </svg>`,
    color: 'var(--deep-blue)',
    bg: 'var(--deep-blue-glow)',
    route: '/sick-mode',
  },
  {
    id: 'fitness',
    title: 'Pelacak Kebugaran Islami',
    desc: 'Pedometer cerdas yang menyesuaikan target langkah harian sesuai Sunnah, pelacak hidrasi 8 gelas, dan kalender puasa Senin-Kamis beserta puasa Ayyamul Bidh.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="6" r="3"/>
      <path d="M12 12h8l2 8h-3l-1 8h-4l-1-8H10z"/>
      <path d="M10 16l-3 4M22 16l3 4"/>
    </svg>`,
    color: 'var(--success)',
    bg: 'var(--success-bg)',
    route: '/fitness',
  },
  {
    id: 'scanner',
    title: 'Smart Scanner',
    desc: 'Pindai komposisi makanan, obat, dan suplemen secara instan. Dapatkan analisis kehalalan bahan, peringatan alergen, serta rekomendasi alternatif yang sesuai syariat dan medis.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="4"/>
      <path d="M4 16h24" stroke-dasharray="3 2"/>
      <path d="M10 8v0M10 12v0M10 20v0M10 24v0" stroke-width="3"/>
      <path d="M16 8v0M16 12v0M16 20v0M16 24v0" stroke-width="3"/>
      <path d="M22 8v0M22 12v0M22 20v0M22 24v0" stroke-width="3"/>
      <circle cx="26" cy="6" r="4" fill="var(--success)" stroke="none"/>
      <path d="M24 6l1.5 1.5L28 5" stroke="white" stroke-width="1.5"/>
    </svg>`,
    color: 'var(--warning)',
    bg: 'var(--warning-bg)',
    route: '/scanner',
  },
  {
    id: 'forum',
    title: 'Forum Komunitas',
    desc: 'Ruang diskusi aman dan terpercaya untuk berbagi pengalaman kesehatan, berdiskusi tentang Thibbun Nabawi, dan saling mendukung sesama Muslim dalam menjaga kesehatan.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="10" r="4"/>
      <circle cx="22" cy="12" r="3"/>
      <path d="M4 24c0-4 3.6-8 8-8s8 4 8 8"/>
      <path d="M20 24c0-3 2.4-6 5-6s5 3 5 6"/>
    </svg>`,
    color: 'var(--info)',
    bg: 'var(--info-bg)',
    route: '/forum',
  },
  {
    id: 'encyclopedia',
    title: 'Ensiklopedia Thibbun Nabawi',
    desc: 'Koleksi lengkap pengobatan profetik yang terverifikasi secara ilmiah: madu, habbatussauda, bekam, dan lainnya — disertai dalil shahih dan bukti penelitian kedokteran modern.',
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h8c2 0 4 2 4 4v20c0-1.5-1.5-3-3-3H4V4Z"/>
      <path d="M28 4h-8c-2 0-4 2-4 4v20c0-1.5 1.5-3 3-3h9V4Z"/>
      <path d="M8 10h3M8 14h3M21 10h3M21 14h3"/>
      <circle cx="24" cy="22" r="3" fill="var(--emerald)" stroke="none" opacity="0.3"/>
      <path d="M23 22c0-1 .5-2 1.5-2s1.5 1.5 0 3c-1-1-1.5-1-1.5-1" stroke="var(--emerald)" stroke-width="1"/>
    </svg>`,
    color: 'var(--gold-dark)',
    bg: 'rgba(201, 169, 78, 0.15)',
    route: '/encyclopedia',
  },
];

/* ── Render ── */
export function render() {
  return `
    <div class="landing-page">

      <!-- ─── Navbar ─── -->
      <nav class="navbar">
        <div class="navbar-brand" data-link="/">
          ${logoSVG}
          <span>IslaMediQ</span>
        </div>
        <div class="navbar-nav hide-mobile">
           <a href="#fitur" data-section="fitur">Fitur</a>
           <a href="#tentang" data-section="tentang">Tentang</a>
           <a href="#kontak" data-section="kontak">Kontak</a>
           <button class="btn btn-ghost btn-sm" data-link="/auth">Login</button>
           <button class="btn btn-primary btn-sm" data-link="/auth">Daftar</button>
        </div>
        <button class="btn btn-primary btn-sm hide-desktop" data-link="/auth">Daftar</button>

      <!-- ─── Hero ─── -->
      <section class="hero-section">
        <p class="hero-bismillah" lang="ar">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <p class="hero-subtitle" style="font-style:italic;">Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang</p>

        <h1 class="hero-title animate-fade-in-up">IslaMediQ</h1>
        <p class="hero-tagline">Platform Layanan Literasi dan Pendampingan Kesehatan Digital</p>
        <p class="hero-subtitle" style="font-size:var(--text-xl);color:var(--gold-light);margin-bottom:var(--space-4);">Berbasis Prinsip Islam</p>

        <p class="hero-desc">
          Menyelaraskan kekayaan ilmu Thibbun Nabawi — pengobatan yang diajarkan Rasulullah ﷺ —
          dengan kemajuan kedokteran modern. IslaMediQ hadir sebagai pendamping digital terpercaya
          untuk membantu Anda menjalani gaya hidup sehat yang selaras dengan nilai-nilai Islam.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" data-link="/dashboard">
            🚀 Mulai Sekarang
          </button>
          <a href="#fitur" class="btn btn-outline btn-lg" data-section="fitur">
            📖 Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      <!-- ─── Features ─── -->
      <section id="fitur" class="features-section">
        <h2 class="section-title">Fitur Utama</h2>
        <p class="section-subtitle">
          Enam pilar kesehatan digital yang dirancang khusus untuk memenuhi kebutuhan umat Muslim
        </p>
        <div class="features-grid stagger-children">
          ${features
            .map(
              (f) => `
            <div class="feature-card" data-link="${f.route}">
              <div class="card-icon" style="background:${f.bg};color:${f.color};">
                ${f.icon}
              </div>
              <h3 class="card-title">${f.title}</h3>
              <p class="card-desc">${f.desc}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- ─── CTA ─── -->
      <section class="cta-section">
        <h2>Siap Memulai Perjalanan Kesehatan Islami Anda?</h2>
        <p>
          Bergabunglah bersama ribuan Muslim yang telah merasakan manfaat memadukan
          ilmu kedokteran modern dengan hikmah Thibbun Nabawi.
        </p>
        <button class="btn btn-lg" data-link="/dashboard"
          style="background:var(--white);color:var(--emerald);box-shadow:0 4px 16px rgba(0,0,0,0.2);">
          🌟 Daftar Gratis Sekarang
        </button>
      </section>

      <!-- ─── Footer ─── -->
      <footer class="footer">
        <div class="footer-grid">

          <!-- Brand column -->
          <div>
            <h3 style="display:flex;align-items:center;gap:8px;">
              ${logoSVG.replace('currentColor', '#fff').replace('currentColor', '#fff').replace('currentColor', '#fff').replace('currentColor', '#fff').replace('currentColor', '#fff')}
              IslaMediQ
            </h3>
            <p style="margin-top:var(--space-3);font-size:var(--text-sm);line-height:1.7;">
              Platform kesehatan digital Islami yang menyelaraskan kedokteran modern
              dengan kearifan Thibbun Nabawi untuk kemaslahatan umat.
            </p>
          </div>

          <!-- Produk -->
          <div>
            <h3>Produk</h3>
            <a data-link="/chat">Khusnuzon AI</a>
            <a data-link="/sick-mode">Mode Sakit</a>
            <a data-link="/fitness">Pelacak Kebugaran</a>
            <a data-link="/scanner">Smart Scanner</a>
            <a data-link="/encyclopedia">Ensiklopedia</a>
          </div>

          <!-- Perusahaan -->
          <div>
            <h3>Perusahaan</h3>
            <a href="#tentang" data-section="tentang">Tentang Kami</a>
            <a href="#kontak" data-section="kontak">Hubungi Kami</a>
            <a href="#">Blog</a>
            <a href="#">Karier</a>
          </div>

          <!-- Legal -->
          <div>
            <h3>Legal</h3>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
            <a href="#">Disclaimer Medis</a>
            <a href="#">Lisensi</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 IslaMediQ. Hak cipta dilindungi.</p>
          <p class="jariyah-text">Semoga menjadi amal jariyah yang bermanfaat untuk umat. 🤲</p>
        </div>
      </footer>

    </div>
  `;
}

/* ── Mount ── */
export function onMount() {
  // Smooth-scroll for anchor links
  document.querySelectorAll('[data-section]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-section');
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection observer for scroll-reveal on feature cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.feature-card').forEach((card) => {
    observer.observe(card);
  });
}

/* ── Cleanup ── */
export function cleanup() {
  // Nothing to clean up — event listeners are on DOM elements
  // which get removed when the page changes
}
