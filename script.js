// ヘッダー：スクロールで影を追加
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// モバイル：ハンバーガーメニュー
document.getElementById('navToggle').addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
});

// メニューリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.menu-item a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('open');
  });
});

// スムーズスクロール（ヘッダー分オフセット）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// お問い合わせフォーム送信
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✅ 送信しました！折り返しご連絡します。';
  btn.style.background = '#3bb273';
  btn.disabled = true;
}

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.about-card, .teacher-card, .pricing-card, .feature-item');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    observer.observe(card);
  });
});

// 個人情報ポリシー モーダル
const privacyLink = document.getElementById('privacyLink');
const privacyModal = document.getElementById('privacyModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openModal(e) {
  e.preventDefault();
  privacyModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  privacyModal.classList.remove('open');
  document.body.style.overflow = '';
}

if (privacyLink) privacyLink.addEventListener('click', openModal);
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (privacyModal) privacyModal.addEventListener('click', (e) => {
  if (e.target === privacyModal) closeModal();
});