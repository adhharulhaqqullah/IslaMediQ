/* ============================================================
   IslaMediQ — Khusnuzon AI Chat Page
   3-tab response: Medis, Sunnah, Rujukan
   ============================================================ */

import { getState, setState } from '../store.js';
import { sendMessage, parseAIResponse } from '../services/gemini.js';
import { addPoints } from '../services/gamification.js';

let chatHistory = [];

const SUGGESTIONS = [
  'Apa manfaat madu untuk kesehatan?',
  'Bagaimana cara mengobati flu secara alami?',
  'Apa sunnah Rasulullah untuk menjaga kesehatan?',
  'Apakah bekam/hijamah aman dilakukan?',
  'Apa manfaat puasa bagi tubuh?',
  'Bagaimana tips menjaga imunitas tubuh?',
];

// Daftar kata kunci gejala untuk auto-suggest
const GEJALA_KEYWORDS = [
  'demam', 'panas', 'meriang',
  'batuk', 'dahak', 'tenggorokan gatal',
  'pusing', 'sakit kepala', 'migrain',
  'sakit perut', 'kembung', 'diare', 'menceret',
  'mual', 'muntah', 'eneg', 'maag',
  'luka', 'lecet', 'berdarah', 'tergores'
];

export function render() {
  return `
    <div class="chat-page">
      <!-- Chat Header -->
      <div class="chat-header">
        <div class="chat-avatar ai">🤖</div>
        <div style="flex:1">
          <div class="font-semibold">Khusnuzon AI</div>
          <div class="text-xs text-muted flex items-center gap-2">
            <span class="ai-status" id="aiStatus" style="width:8px;height:8px;border-radius:50%;background:var(--success);display:inline-block"></span>
            Asisten Kesehatan Islami
          </div>
        </div>
        <button class="btn btn-ghost btn-sm" id="clearChatBtn" title="Hapus Riwayat">🗑️</button>
      </div>

      <!-- Messages -->
      <div class="chat-messages" id="chatMessages">
        <!-- Welcome -->
        <div class="chat-message">
          <div class="chat-avatar ai">🤖</div>
          <div class="chat-bubble ai">
            <p class="font-semibold" style="color:var(--emerald)">Assalamu'alaikum! 👋</p>
            <p class="mt-2">Saya <strong>Khusnuzon</strong>, asisten kesehatan Islami Anda. Saya akan menjawab pertanyaan kesehatan dengan tiga perspektif:</p>
            <div class="mt-2" style="font-size:var(--text-xs)">
              <div style="display:flex;align-items:center;gap:6px;padding:4px 0"><span style="color:var(--emerald)">🏥</span> Analisis Medis Klinis</div>
              <div style="display:flex;align-items:center;gap:6px;padding:4px 0"><span style="color:var(--deep-blue)">☪️</span> Saran Sesuai Sunnah</div>
              <div style="display:flex;align-items:center;gap:6px;padding:4px 0"><span style="color:var(--gold)">📚</span> Sumber Rujukan Terverifikasi</div>
            </div>
            <p class="mt-2 text-sm text-muted">Silakan tanyakan apa saja tentang kesehatan! 😊</p>
          </div>
        </div>
      </div>

      <!-- Suggestions -->
      <div class="chat-suggestions" id="chatSuggestions">
        ${SUGGESTIONS.map(s => `<button class="chip suggestion-chip">${s}</button>`).join('')}
      </div>

      <!-- Input -->
      <div class="chat-input-area">
        <textarea id="chatInput" placeholder="Ceritakan gejala Anda (misalnya: demam, batuk, pusing, sakit perut, mual, atau luka)..." rows="1"></textarea>
        <!-- Auto-suggest keywords -->
        <div id="keywordSuggestions" style="display:none;padding:6px;background:var(--surface-secondary);border-radius:8px;margin-bottom:8px;gap:6px;flex-wrap:wrap;flex-direction:row"></div>
        <button class="btn btn-primary btn-icon" id="sendBtn" title="Kirim">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  `;
}

export function onMount() {
  const messagesEl = document.getElementById('chatMessages');
  const inputEl = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const suggestionsEl = document.getElementById('chatSuggestions');
  const clearBtn = document.getElementById('clearChatBtn');
  const keywordSuggestionsEl = document.getElementById('keywordSuggestions');

  // Load history
  chatHistory = getState('chatHistory') || [];
  if (chatHistory.length > 0) {
    chatHistory.forEach(msg => {
      if (msg.role === 'user') appendUserMessage(msg.text);
      else appendAIMessage(msg.text);
    });
    scrollToBottom();
    if (suggestionsEl) suggestionsEl.style.display = 'none';
  }

  // Send message
  async function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    inputEl.value = '';
    inputEl.style.height = 'auto';
    if (suggestionsEl) suggestionsEl.style.display = 'none';

    appendUserMessage(text);
    chatHistory.push({ role: 'user', text });

    // Show typing
    const typingEl = showTyping();
    scrollToBottom();

    try {
      const result = await sendMessage(text, chatHistory.slice(0, -1));
      removeTyping(typingEl);

      if (result.response) {
        appendAIMessage(result.response);
        chatHistory.push({ role: 'assistant', text: result.response });
        setState('chatHistory', chatHistory);

        // Gamification
        if (chatHistory.filter(m => m.role === 'user').length === 1) {
          addPoints('chat_first', 'Pertanyaan pertama ke AI');
        }
      } else {
        appendErrorMessage('Maaf, tidak ada respons dari AI. Silakan coba lagi.');
      }
    } catch (err) {
      removeTyping(typingEl);
      appendErrorMessage(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
    }
    scrollToBottom();
  }

  sendBtn.addEventListener('click', handleSend);

  // Enter to send, Shift+Enter for newline
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-resize textarea & keyword suggestions
  inputEl.addEventListener('input', () => {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';

    // Auto-suggest keywords
    const value = inputEl.value.trim();
    if (value.length > 0) {
      const filtered = GEJALA_KEYWORDS.filter(keyword =>
        keyword.toLowerCase().includes(value.toLowerCase())
      );
      
      if (filtered.length > 0) {
        keywordSuggestionsEl.innerHTML = filtered.map(keyword => 
          `<button class="chip" style="background:var(--primary-light);color:var(--primary);cursor:pointer;padding:6px 12px;border-radius:16px;font-size:var(--text-xs);font-weight:500;border:none" data-keyword="${keyword}">${keyword}</button>`
        ).join('');
        keywordSuggestionsEl.style.display = 'flex';
        
        // Add click listeners to keyword suggestions
        keywordSuggestionsEl.querySelectorAll('[data-keyword]').forEach(btn => {
          btn.addEventListener('click', () => {
            inputEl.value = btn.dataset.keyword;
            keywordSuggestionsEl.style.display = 'none';
            handleSend();
          });
        });
      } else {
        keywordSuggestionsEl.style.display = 'none';
      }
    } else {
      keywordSuggestionsEl.style.display = 'none';
    }
  });

  // Suggestion chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      inputEl.value = chip.textContent;
      handleSend();
    });
  });

  // Clear chat
  clearBtn.addEventListener('click', () => {
    if (confirm('Hapus semua riwayat percakapan?')) {
      chatHistory = [];
      setState('chatHistory', []);
      // Keep welcome message, remove the rest
      const msgs = messagesEl.querySelectorAll('.chat-message');
      msgs.forEach((m, i) => { if (i > 0) m.remove(); });
      if (suggestionsEl) suggestionsEl.style.display = 'flex';
    }
  });

  // Tab switching delegation
  messagesEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.ai-tab-btn');
    if (!tab) return;
    const bubble = tab.closest('.chat-bubble');
    if (!bubble) return;

    const tabName = tab.dataset.tab;
    bubble.querySelectorAll('.ai-tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    bubble.querySelectorAll('.tab-content').forEach(c => {
      c.classList.toggle('active', c.dataset.tab === tabName);
    });
  });

  function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message user';
    div.innerHTML = `
      <div class="chat-avatar user">👤</div>
      <div class="chat-bubble user">${escapeHtml(text)}</div>
    `;
    messagesEl.appendChild(div);
  }

  function appendAIMessage(text) {
    const parsed = parseAIResponse(text);
    const div = document.createElement('div');
    div.className = 'chat-message';

    const hasSections = parsed.medis || parsed.sunnah || parsed.rujukan;

    let content = '';
    if (hasSections) {
      content = `
        <div class="ai-response-tabs">
          <button class="tab ai-tab-btn tab-medis active" data-tab="medis">🏥 Analisis Medis</button>
          <button class="tab ai-tab-btn tab-sunnah" data-tab="sunnah">☪️ Menurut Sunnah</button>
          <button class="tab ai-tab-btn tab-rujukan" data-tab="rujukan">📚 Sumber Rujukan</button>
        </div>
        <div class="tab-content active" data-tab="medis">
          <div class="ai-section-content">${formatMarkdown(parsed.medis || 'Tidak ada data medis.')}</div>
        </div>
        <div class="tab-content" data-tab="sunnah">
          <div class="ai-section-content">${formatMarkdown(parsed.sunnah || 'Tidak ada saran sunnah.')}</div>
        </div>
        <div class="tab-content" data-tab="rujukan">
          <div class="ai-section-content">${formatMarkdown(parsed.rujukan || 'Tidak ada rujukan.')}</div>
        </div>
      `;
    } else {
      content = `<div class="ai-section-content">${formatMarkdown(text)}</div>`;
    }

    div.innerHTML = `
      <div class="chat-avatar ai">🤖</div>
      <div class="chat-bubble ai">${content}</div>
    `;
    messagesEl.appendChild(div);
  }

  function appendErrorMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message';
    div.innerHTML = `
      <div class="chat-avatar ai">🤖</div>
      <div class="chat-bubble ai" style="border-color:var(--danger);background:var(--danger-bg)">
        <p style="color:var(--danger)">⚠️ ${escapeHtml(text)}</p>
      </div>
    `;
    messagesEl.appendChild(div);
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-message typing-msg';
    div.innerHTML = `
      <div class="chat-avatar ai">🤖</div>
      <div class="chat-bubble ai">
        <div class="typing-indicator"><span></span><span></span><span></span></div>
      </div>
    `;
    messagesEl.appendChild(div);
    return div;
  }

  function removeTyping(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }
}

export function cleanup() {
  // No hardware to release
}

// Helpers
function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<h4 style="margin:8px 0 4px;color:var(--emerald)">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 style="margin:10px 0 6px;color:var(--deep-blue)">$1</h3>')
    .replace(/^- (.+)$/gm, '<li style="margin-left:16px;list-style:disc;font-size:var(--text-sm)">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li style="margin-left:16px;list-style:decimal;font-size:var(--text-sm)">$2</li>')
    .replace(/\n{2,}/g, '</p><p style="margin-top:8px">')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}
