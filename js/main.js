// ===== STARS =====
function makeStars(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.8;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      --d:${2 + Math.random() * 3}s;
      --dl:${Math.random() * 3}s;
    `;
    el.appendChild(s);
  }
}
makeStars('stars', 90);
makeStars('stars2', 70);
makeStars('stars3', 60);

// ===== FLOATING HEARTS =====
function makeHearts() {
  const c = document.getElementById('hearts');
  if (!c) return;
  const emojis = ['💕', '🌸', '♥', '💗', '✨', '💖', '🌺'];
  for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'fheart';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.cssText = `
      left:${Math.random()*100}%;
      --d:${5 + Math.random() * 8}s;
      --dl:${Math.random() * 6}s;
      font-size:${0.8 + Math.random() * 0.8}rem;
    `;
    c.appendChild(h);
  }
}
makeHearts();

// ===== CONFETTI =====
function launchConfetti() {
  const c = document.getElementById('confetti');
  const colors = ['#ff6b9d','#ffb6d9','#ff4081','#f8bbd0','#ffffff','#ffd700','#e91e8c','#fff0f5'];
  for (let i = 0; i < 100; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 1;
    const dur = 2.5 + Math.random() * 2;
    const size = 6 + Math.random() * 8;
    p.style.cssText = `
      left:${left}%; background:${color};
      width:${size}px; height:${size}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration:${dur}s;
      animation-delay:${delay}s;
    `;
    c.appendChild(p);
    setTimeout(() => p.remove(), (delay + dur) * 1000 + 200);
  }
}

// ===== SCREEN TRANSITIONS =====
function goToScreen(fromId, toId) {
  const from = document.getElementById(fromId);
  const to   = document.getElementById(toId);
  from.classList.add('fade-out');
  setTimeout(() => {
    from.classList.remove('active', 'fade-out');
    to.classList.add('active');
  }, 800);
}

// ===== SCREEN 1: GIFT =====
let giftClicked = false;
function handleGiftClick() {
  if (giftClicked) return;
  giftClicked = true;

  const wrapper = document.getElementById('giftWrapper');
  const hint    = document.getElementById('tapHint');

  wrapper.classList.add('opened');
  hint.style.opacity = '0';
  launchConfetti();

  setTimeout(() => {
    goToScreen('screen1', 'screen2');
  }, 1200);
}

// ===== SCREEN 2: TEDDY =====
let teddyClicks = 0;
function teddyClick() {
  teddyClicks++;
  const svg = document.getElementById('teddySvg');
  const btn = document.getElementById('teddyBtn');
  const msg = document.getElementById('teddyMsg');

  if (teddyClicks === 1) {
    // Side ho jaa
    svg.style.animation = 'none';
    svg.style.transition = 'transform 0.9s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s';
    svg.style.transform = 'translateX(120vw) rotate(90deg)';
    svg.style.opacity = '0.1';
    msg.innerHTML = 'Arre kahan chali gayi...? 🥺<br><small style="font-size:0.8em;color:rgba(255,182,193,0.6)">wapas aa jaa please</small>';
    btn.textContent = 'wapas aa jaa teddy 🐻';
  } else if (teddyClicks === 2) {
    // Wapas
    svg.style.transition = 'transform 0.9s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s';
    svg.style.transform = 'translateY(0) rotate(0deg)';
    svg.style.opacity = '1';
    setTimeout(() => {
      svg.style.animation = 'teddyBob 3.5s ease-in-out infinite';
    }, 900);
    msg.innerHTML = 'Wapas aa gayi! 🎉<br><small style="font-size:0.8em;color:rgba(255,182,193,0.6)">ek baar aur chal, kuch dikhana hai tujhe...</small>';
    btn.textContent = 'aur side ho jaa 😁';
  } else {
    // Third click — go to photos
    svg.style.animation = 'none';
    svg.style.transition = 'transform 1s ease-in, opacity 0.6s';
    svg.style.transform = 'translateX(-120vw) rotate(-90deg)';
    svg.style.opacity = '0';
    launchConfetti();
    setTimeout(() => {
      goToScreen('screen2', 'screen3');
    }, 900);
  }
}

// ===== SCREEN 3: PHOTOS =====
function triggerUpload(id) {
  document.getElementById(id).click();
}

function loadImg(input, imgId, placeholderId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById(imgId);
    const ph  = document.getElementById(placeholderId);
    img.src = e.target.result;
    img.style.display = 'block';
    ph.style.display  = 'none';
  };
  reader.readAsDataURL(file);
}
