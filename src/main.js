// ===== DATA =====
const servicesData = [
  { id: 1, name: "🏄‍♂️ Индивидуальный урок", shortDesc: "Персональный инструктор 1 на 1, быстрый прогресс.", fullDesc: "Полное внимание тренера, видеоанализ после сессии. Включена экипировка. Длительность: 2 часа.", price: "5 900 ₽", iconClass: "fas fa-user-graduate" },
  { id: 2, name: "👥 Групповое занятие", shortDesc: "До 4 человек, командная атмосфера.", fullDesc: "2 часа активного катания с опытным коучем. Общий прогресс и поддержка команды.", price: "3 200 ₽/чел", iconClass: "fas fa-users" },
  { id: 3, name: "🧒 Детская школа (7–14 лет)", shortDesc: "Безопасный серфинг, игровой подход.", fullDesc: "Гидрокостюмы и доски малого размера, страховка. Педагогический подход для детей.", price: "3 900 ₽", iconClass: "fas fa-child" },
  { id: 4, name: "🏖️ Прокат оборудования", shortDesc: "Доски, гидрокостюмы.", fullDesc: "Полный комплект: soft-top доска, гидрокостюм 3/2. Для всех уровней.", price: "1 800 ₽/день", iconClass: "fas fa-umbrella-beach" },
  { id: 5, name: "🧘 Серф-йога на пляже", shortDesc: "Баланс и подготовка к океану.", fullDesc: "Утренняя практика на песке: асаны для серферов, дыхание, равновесие.", price: "1 500 ₽", iconClass: "fas fa-yin-yang" },
  { id: 6, name: "📸 Фотосессия на воде", shortDesc: "Профессиональные кадры в океане.", fullDesc: "Снимки с воды и берега, обработка, 20+ фото. Вечная память о первой волне.", price: "4 500 ₽", iconClass: "fas fa-camera" },
  { id: 7, name: "⚡ Продвинутая техника", shortDesc: "Маневры, карвинг, трюки.", fullDesc: "Для опытных райдеров. Повышаем мастерство до соревновательного уровня.", price: "6 200 ₽", iconClass: "fas fa-chart-line" },
  { id: 8, name: "🏢 Корпоративный выезд", shortDesc: "Тимбилдинг на волнах.", fullDesc: "Обучение, прокат, фото, барбекю. Незабываемый день для команды. От 6 участников.", price: "от 14 900 ₽", iconClass: "fas fa-building" },
  { id: 9, name: "🌊 Серф-тур на выходные", shortDesc: "Путешествие к лучшим спотам.", fullDesc: "Трансфер, жилье, 2 дня катания с инструктором. Лучшие споты сезона.", price: "15 900 ₽", iconClass: "fas fa-route" }
];

const trainersData = [
  { name: "Алексей «Шторм» Волков", role: "Главный тренер, серф-гуру", bio: "Более 12 лет опыта, сертифицированный инструктор ISA. Покорил волны от Португалии до Камчатки.", avatarIcon: "fas fa-dragon", vk: "#", max: "#" },
  { name: "Екатерина Белая", role: "Инструктор для детей и новичков", bio: "Педагогическое образование, 8 лет в серфинге. Поможет побороть страх воды и полюбить океан.", avatarIcon: "fas fa-fish", vk: "#", max: "#" },
  { name: "Дмитрий Оушен", role: "Коуч по продвинутой технике", bio: "Профессиональный серфер, участник соревнований. Научит маневрам и карвингу.", avatarIcon: "fas fa-anchor", vk: "#", max: "#" },
  { name: "Марина Ледяная", role: "Серф-йога & recovery", bio: "Мастер йоги и серф-фитнеса. Восстановление после катания, гибкость и дыхание.", avatarIcon: "fas fa-snowflake", vk: "#", max: "#" }
];

const tickerItems = [
  "СЕРФИНГ НА БАЛТИКЕ", "ШКОЛА БОРЕАЛИС", "ИНДИВИДУАЛЬНЫЕ УРОКИ",
  "СЕРФ-ТУРЫ 2025", "ДЕТСКАЯ ШКОЛА", "ПРОКАТ ОБОРУДОВАНИЯ",
  "ТИМБИЛДИНГ НА ВОЛНАХ", "СЕРФ-ЙОГА", "СЕВЕРНЫЙ ДУХ",
];

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

function animateTrail() {
  requestAnimationFrame(animateTrail);
  const cx = parseFloat(cursor.style.left || 0);
  const cy = parseFloat(cursor.style.top || 0);
  trailX += (cx - trailX) * 0.12;
  trailY += (cy - trailY) * 0.12;
  trail.style.left = trailX + 'px';
  trail.style.top = trailY + 'px';
}
animateTrail();

document.querySelectorAll('a, button, [data-id]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    cursor.style.background = 'var(--violet)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'var(--foam)';
  });
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    setTimeout(() => preloader.style.display = 'none', 700);
  }, 1600);
});

// ===== HEADER SCROLL & PROGRESS =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);

  // Progress bar
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('progressBar').style.width = (window.scrollY / total * 100) + '%';

  // Active nav
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (!sec) return;
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) {
      document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 12 + 8) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(p);
  }
}
createParticles();

// ===== TICKER =====
function renderTicker() {
  const track = document.getElementById('tickerTrack');
  const doubled = [...tickerItems, ...tickerItems];
  track.innerHTML = doubled.map(item =>
    `<span class="ticker-item"><span class="ticker-dot"></span>${item}</span>`
  ).join('');
}
renderTicker();

// ===== SERVICES =====
function renderServices() {
  const container = document.getElementById('servicesContainer');
  const select = document.getElementById('formProgram');

  servicesData.forEach((s, i) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';

    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = (i % 3 * 0.1) + 's';
    card.innerHTML = `
      <div class="card-icon"><i class="${s.iconClass}"></i></div>
      <h3>${s.name}</h3>
      <p class="service-desc">${s.shortDesc}</p>
      <div class="service-price">${s.price}</div>
      <button class="btn-details" data-id="${s.id}">Подробнее <i class="fas fa-arrow-right"></i></button>
    `;
    col.appendChild(card);
    container.appendChild(col);

    if (select) {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.textContent = s.name;
      select.appendChild(opt);
    }
  });

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const found = servicesData.find(s => s.id === +btn.dataset.id);
      if (found) openServiceModal(found);
    });
  });
}
renderServices();

// ===== TRAINERS =====
function renderTrainers() {
  const container = document.getElementById('trainersContainer');
  trainersData.forEach((t, i) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3';

    const card = document.createElement('div');
    card.className = 'trainer-card reveal';
    card.style.transitionDelay = (i * 0.12) + 's';
    card.innerHTML = `
      <div class="trainer-avatar"><i class="${t.avatarIcon}"></i></div>
      <div class="trainer-name">${t.name}</div>
      <div class="trainer-role">${t.role}</div>
      <div class="trainer-bio">${t.bio}</div>
      <div class="trainer-social">
        <a href="${t.vk}"><i class="fab fa-vk"></i></a>
        <a href="${t.max}" style="font-weight:800;font-size:0.65rem;">MAX</a>
      </div>
    `;
    col.appendChild(card);
    container.appendChild(col);
  });
}
renderTrainers();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
observeReveal();
setTimeout(observeReveal, 100);

// ===== COUNT-UP ANIMATION =====
function animateCount(el) {
  const target = +el.dataset.count;
  const duration = 1600;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('ru');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('ru');
  }
  requestAnimationFrame(update);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      countObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ===== MODAL (Bootstrap Modal API) =====
let bsModal = null;

function openServiceModal(service) {
  document.getElementById('modalIcon').innerHTML = `<i class="${service.iconClass}"></i>`;
  document.getElementById('modalTitle').textContent = service.name;
  document.getElementById('modalPrice').textContent = service.price;
  document.getElementById('modalDescription').textContent = service.fullDesc;
  document.getElementById('serviceModal').setAttribute('data-current', service.name);

  if (!bsModal) {
    bsModal = new bootstrap.Modal(document.getElementById('serviceModal'));
  }
  bsModal.show();
}

document.getElementById('modalBookBtn').addEventListener('click', () => {
  const name = document.getElementById('serviceModal').getAttribute('data-current') || 'услугу';
  showToast(`Заявка на "${name}" отправлена! 🎉`);
  if (bsModal) bsModal.hide();
});

// ===== FORM =====
document.getElementById('formSubmitBtn').addEventListener('click', () => {
  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  if (!name || !phone) {
    showToast('Пожалуйста, заполни имя и телефон 👆');
    return;
  }
  showToast(`Отлично, ${name}! Скоро свяжемся 🏄`);
  document.getElementById('formName').value = '';
  document.getElementById('formPhone').value = '';
  document.getElementById('formMessage').value = '';
});

// ===== CTA NAV =====
document.getElementById('ctaNavBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
