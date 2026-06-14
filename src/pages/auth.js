/* ============================================================
   IslaMediQ — Authentication Page (Login, Register, Google Auth)
   ============================================================ */
import { supabase } from '../services/supabase.js';
import { navigateTo } from '../router.js';
import { showToast } from '../services/notifications.js';

let isRegisterMode = false;

export function render() {
  return `
    <main class="auth-page page-enter" style="max-width: 400px; margin: 60px auto; padding: 20px;">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold" style="color:var(--emerald)">✨ IslaMediQ</h1>
        <p class="text-muted" id="authSubtitle">Masuk untuk menyimpan riwayat kesehatan Anda</p>
      </div>

      <div class="card">
        <form id="authForm">
          <div class="form-group mb-3" id="nameInputGroup" style="display: none;">
            <label class="form-label font-medium mb-1 d-block">Nama Lengkap</label>
            <input type="text" id="authName" placeholder="Masukkan nama lengkap Anda" style="width:100%" />
          </div>

          <div class="form-group mb-3">
            <label class="form-label font-medium mb-1 d-block">Alamat Email</label>
            <input type="email" id="authEmail" placeholder="nama@email.com" style="width:100%" required />
          </div>

          <div class="form-group mb-4">
            <label class="form-label font-medium mb-1 d-block">Kata Sandi</label>
            <input type="password" id="authPassword" placeholder="Minimal 6 karakter" style="width:100%" required />
          </div>

          <button type="submit" class="btn btn-primary w-100 mb-3" id="authSubmitBtn">Masuk</button>
        </form>

        <div class="text-center my-3 text-muted text-xs">— ATAU —</div>

        <button class="btn btn-outline w-100 flex align-center justify-center gap-2" id="googleAuthBtn" style="border: 1px solid #ccc;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Masuk dengan Google
        </button>
      </div>

      <div class="text-center mt-4 text-sm">
        <span id="toggleAuthText">Belum punya akun?</span>
        <a href="javascript:void(0)" id="toggleAuthMode" style="color:var(--emerald); font-weight:600; text-decoration:none;">Daftar Sekarang</a>
      </div>
    </main>
  `;
}

export function onMount() {
  const form = document.getElementById('authForm');
  const toggleBtn = document.getElementById('toggleAuthMode');
  const googleBtn = document.getElementById('googleAuthBtn');

  // Toggle antara mode Login dan Register
  toggleBtn?.addEventListener('click', () => {
    isRegisterMode = !isRegisterMode;
    
    const nameGroup = document.getElementById('nameInputGroup');
    const submitBtn = document.getElementById('authSubmitBtn');
    const subtitle = document.getElementById('authSubtitle');
    const toggleText = document.getElementById('toggleAuthText');

    if (isRegisterMode) {
      nameGroup.style.display = 'block';
      submitBtn.textContent = 'Daftar Akun Baru';
      subtitle.textContent = 'Lengkapi formulir untuk membuat akun baru';
      toggleText.textContent = 'Sudah punya akun?';
      toggleBtn.textContent = 'Masuk di sini';
    } else {
      nameGroup.style.display = 'none';
      submitBtn.textContent = 'Masuk';
      subtitle.textContent = 'Masuk untuk menyimpan riwayat kesehatan Anda';
      toggleText.textContent = 'Belum punya akun?';
      toggleBtn.textContent = 'Daftar Sekarang';
    }
  });

  // Handle Submit Form Manual (Register / Login)
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName')?.value.trim();

    if (isRegisterMode) {
      // PROSES REGISTER MANUAL
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } }
      });

      if (error) {
        showToast(error.message, 'danger');
      } else {
        showToast('Registrasi sukses! Silakan periksa kotak masuk email Anda untuk konfirmasi.', 'success');
        isRegisterMode = false;
        navigateTo('/auth');
      }
    } else {
      // PROSES LOGIN MANUAL
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        showToast('Email atau password salah!', 'danger');
      } else {
        showToast('Selamat datang kembali!', 'success');
        navigateTo('/dashboard');
      }
    }
  });

  // PROSES LOGIN GOOGLE OAUTH
  googleBtn?.addEventListener('click', async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin // Akan otomatis kembali ke web kamu setelah beres redirect
      }
    });
    if (error) showToast(error.message, 'danger');
  });
}
