const LOGOS = [
{ src: 'assets/logos/africa.avif', alt: 'Африка', size: 90 },
{ src: 'assets/logos/fullflat.avif', alt: 'fullflat', size: 85 },
{ src: 'assets/logos/Probazis.avif', alt: 'Probazis', size: 200 },
{ src: 'assets/logos/fscr.avif', alt: 'FSCR', size: 80 },
{ src: 'assets/logos/remsart.avif', alt: 'Remstart', size: 120 },
{ src: 'assets/logos/narnia.avif', alt: 'Шкафы Нарния', size: 140 },
{ src: 'assets/logos/region.avif', alt: 'Region Online', size: 150 },
{ src: 'assets/logos/nutreasy.avif', alt: 'Nutreasy', size: 150 }
];

const VW = [
{ l: 'Reels · SMM', t: 'Probazis', v: 'assets/video_v/v1.mp4', p: 'assets/covers_h/cover1.avif' },
{ l: 'Shorts · Спорт', t: 'FSCR', v: 'assets/video_v/v2.mp4', p: 'assets/covers_h/cover4.avif' },
{ l: 'Reels · Бизнес', t: 'Remstart', v: 'assets/video_v/v3.mp4', p: 'assets/covers_h/cover3.avif' },
{ l: 'Reels · Недвижимость', t: 'fullflat', v: 'assets/video_v/v4.mp4', p: 'assets/covers_h/cover2.avif' },
{ l: 'Shorts · Продукт', t: 'Nutreasy', v: 'assets/video_v/v5.mp4', p: 'assets/covers_h/cover6.avif' },
{ l: 'Reels · Медиа', t: 'Region Online', v: 'assets/video_v/v6.mp4', p: 'assets/covers_h/cover5.avif' }
];

const HW = [
{ l: 'YouTube · Обзор', t: 'Probazis', v: 'assets/video_h/h1.mp4', p: 'assets/covers_v/cover1.avif' },
{ l: 'YouTube · Travel', t: 'ПОЗДРАВЛЕНИЕ ИЗ АФРИКИ', v: 'assets/video_h/h2.mp4', p: 'assets/covers_v/cover2.avif' },
{ l: 'Highlight · Реклама', t: 'Шкафы Нарния', v: 'assets/video_h/h3.mp4', p: 'assets/covers_v/cover3.avif' },
{ l: 'Corporate · Корпоратив', t: 'Remstart', v: 'assets/video_h/h4.mp4', p: 'assets/covers_v/cover4.avif' }
];

const RS = [
  { type: 'blur', img: 'assets/images/nda1.avif', main: '570K', sub: 'Просмотров для<br>крупного автора', subEn: 'Views for a<br>large creator' },
  { type: 'blur', img: 'assets/images/nda2.avif', main: '177K', sub: 'Просмотров для<br>крупного автора', subEn: 'Engagement growth<br>in 2 weeks' },
  { type: 'blur', img: 'assets/images/nda3.avif', main: '276K', sub: 'Просмотров для<br>крупного автора', subEn: 'Likes under one<br>client Reels' },
  { type: 'open', img: 'assets/images/case1.avif', main: '278K', sub: 'Просмотров при 2400<br>подписчиках', subEn: 'Views with 2400<br>followers' },
  { type: 'open', img: 'assets/images/case2.avif', main: '218K', sub: 'Просмотров, видео принесло<br>автору <span style="color: var(--y);">+600</span> подписчиков', subEn: 'Views, the video brought<br>the author <span style="color: var(--y);">+600</span> followers' },
  { type: 'open', img: 'assets/images/case3.avif', main: '82K', sub: 'Просмотров при 850<br>подписчиках', subEn: 'Views with 850<br>followers' }
];

const FAQ = [
{ q: { ru: 'Какая стоимость за видео?', en: 'What is the price per video?' }, a: { ru: 'Стоимость для каждого проекта индивидуальна и может зависеть от множества факторов, в первую очередь от сложности и объема работы. Давайте обсудим ваш проект, и я смогу подсказать точную стоимость.', en: "The cost for each project is individual and depends on multiple factors, primarily the complexity and volume of work. Let's discuss your project and I'll be able to give you the exact price." } },
{ q: { ru: 'Какие сроки выполнения работы?', en: 'What are the timelines?' }, a: { ru: 'Сроки для каждого проекта могут варьироваться от 1 дня до нескольких недель и также зависят в первую очередь от сложности и объема работы, а также от моей занятости на момент начала работы. На этапе обсуждения проекта без проблем смогу подсказать точные сроки.', en: 'The timeline for each project can vary from 1 day to several weeks, depending primarily on the complexity and volume of the work, as well as my current workload. I will be happy to provide exact deadlines during our project discussion.' } },
{ q: { ru: 'Что нужно для начала?', en: 'What do you need to start?' }, a: { ru: 'Для начала работы потребуется ТЗ, материалы и референсы (при их наличии). ТЗ не обязательно должно быть максимально подробным и следовать каким-то определенным правилам, и при необходимости буду готов помочь с его составлением.', en: "To start working, I'll need a brief, materials, and references (if any). The brief doesn't have to be perfectly detailed or follow strict rules, and I'll be glad to help you put one together if needed." } },
{ q: { ru: 'Сколько правок доступно?', en: 'How many revisions are included?' }, a: { ru: 'Все правки, которые совершил по своей вине, абсолютно бесплатны. Но если потребуется что-то добавить или внести изменения, которые не прописаны в изначальном ТЗ, они потребуют небольшой доплаты.', en: 'All revisions made due to my fault are absolutely free. However, if you need to add something or make changes that were not included in the original brief, a small additional fee will be required.' } }
];

let lang = 'ru';

function buildTicker() {
    let track = [...LOGOS, ...LOGOS, ...LOGOS];
    const baseHeight = 28;
    let html = track.map(logo => {
        const newHeight = (baseHeight * (logo.size || 100)) / 100;
        return `<div class="tick-item"><img src="${logo.src}" alt="${logo.alt}" class="tick-logo" width="150" height="${newHeight}" decoding="async" style="--base-h: ${newHeight}px; height: var(--base-h);"><span class="tdot"></span></div>`;
    }).join('');
    
    const inner = document.querySelector('.tick-inner');
    inner.innerHTML = `<div class="tick-track">${html}</div><div class="tick-track">${html}</div>`;
}

function resetIdleTimer(container) {
    container.classList.remove('ui-hidden');
    clearTimeout(container.idleTimeout);
    const video = container.querySelector('.w-video');
    if (video && !video.paused) {
        container.idleTimeout = setTimeout(() => { container.classList.add('ui-hidden'); }, 1000);
    }
}

function hideUIFast(container) {
    const video = container.querySelector('.w-video');
    if (video && !video.paused) { container.classList.add('ui-hidden'); }
}

function onVideoEnded(video) {
    video.currentTime = 0; 
    video.pause();
    const container = video.closest('.wi');
    const btn = container.querySelector('.w-play-btn');
    container.classList.remove('has-started'); 
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
    btn.classList.remove('is-playing');
    container.classList.remove('ui-hidden'); 
}

function updateTimeline(video) {
    const fill = video.parentElement.querySelector('.w-timeline-fill');
    if (fill && video.duration) {
        const percentage = (video.currentTime / video.duration) * 100;
        fill.style.width = percentage + '%';
    }
}

function seekVideo(event, wrap) {
    event.stopPropagation(); 
    const video = wrap.parentElement.querySelector('.w-video');
    if (!video.duration) return;
    const rect = wrap.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = percentage * video.duration;
}

function togglePlayAction(container) {
    document.querySelectorAll('.voccard audio').forEach(a => {
        a.pause();
        const b = a.parentElement.querySelector('.vocplay');
        if(b) b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
    });
    document.querySelectorAll('.vidcirc video').forEach(v => {
        v.pause();
        const b = v.nextElementSibling;
        if(b && b.classList.contains('w-play-btn')) {
            b.classList.remove('is-playing');
            b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
        }
    });

    container.classList.add('has-started'); 
    const video = container.querySelector('.w-video');
    const btn = container.querySelector('.w-play-btn');
    
    if (video.paused) {
        video.play();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
        btn.classList.add('is-playing');
        resetIdleTimer(container);
    } else {
        video.pause();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
        btn.classList.remove('is-playing');
        container.classList.remove('ui-hidden');
        clearTimeout(container.idleTimeout);
    }
}

function toggleFullScreen(btn, event) {
    event.preventDefault();
    event.stopPropagation();
    const card = btn.closest('.wi');
    const video = card.querySelector('.w-video');
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && video) {
        if (video.webkitEnterFullscreen) {
            if (!video.paused || video.readyState >= 2) {
                video.webkitEnterFullscreen();
            } else {
                video.play().then(() => { video.webkitEnterFullscreen(); }).catch(() => {});
            }
            return;
        }
        if (video.requestFullscreen) { video.requestFullscreen(); return; }
    }
    
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (card.requestFullscreen) { card.requestFullscreen(); } 
        else if (card.webkitRequestFullscreen) { card.webkitRequestFullscreen(); } 
        else if (card.msRequestFullscreen) { card.msRequestFullscreen(); }
        else if (video && video.webkitEnterFullscreen) { video.webkitEnterFullscreen(); }
    } else {
        if (document.exitFullscreen) { document.exitFullscreen(); } 
        else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); } 
        else if (document.msExitFullscreen) { document.msExitFullscreen(); }
    }
}

function wCard(w, cls) {
const timelineHTML = `<div class="w-timeline-wrap" onclick="seekVideo(event, this)"><div class="w-timeline-bg"><div class="w-timeline-fill"></div></div></div>`;
return `
<div class="${cls} wcard reveal" ontouchstart="">
<div class="wi" onclick="togglePlayAction(this)" onmousemove="resetIdleTimer(this)" ontouchstart="resetIdleTimer(this)" onmouseleave="hideUIFast(this)">
<video class="w-video" src="${w.v}#t=0.001" poster="${w.p}" playsinline preload="none" onended="onVideoEnded(this)" ontimeupdate="updateTimeline(this)"></video>
<button class="w-play-btn" aria-label="Смотреть/Пауза"><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg></button>
<button class="w-fs-btn" onclick="toggleFullScreen(this, event)" aria-label="На весь экран">
<svg class="fs-enter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
<svg class="fs-exit" style="display:none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
</button>
${timelineHTML}
</div>
</div>`;
}

function buildWorks() {
document.getElementById('vg').innerHTML = VW.map(w => wCard(w, 'vi')).join('');
document.getElementById('hg').innerHTML = HW.map(w => wCard(w, 'hi')).join('');
observeNewElements();
}

function buildResults() {
    const copyTxt = lang === 'ru' ? 'Проект под защитой<br>авторских прав' : 'Project protected<br>by copyright';
    document.getElementById('rg').innerHTML = RS.map(r => {
        const subtext = lang === 'ru' ? r.sub : (r.subEn || r.sub);
        const isBlur = r.type === 'blur';
        const cardClass = isBlur ? 'rcard nda-card reveal' : 'rcard reveal';
        const imagePart = isBlur ? `
            <img src="${r.img}" class="rimg" loading="lazy" alt="Кейс NDA" draggable="false" width="671" height="1035">
            <div class="rblur">
                <div class="rlock">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div class="rbtxt" style="line-height: 1.4; margin-top: 8px;">${copyTxt}</div>
            </div>` : `<img src="${r.img}" class="rimg" loading="lazy" alt="Кейс" width="671" height="1035">`;
        const wrapAttrs = isBlur ? 'oncontextmenu="return false;" draggable="false"' : '';

        return `
        <div class="${cardClass}" ontouchstart="">
            <div class="rimg-wrap" ${wrapAttrs}>${imagePart}</div>
            <div class="rtxt-box">
                <div class="rtxt-main">${r.main}</div>
                <div class="rtxt-sub">${subtext}</div>
            </div>
        </div>`;
    }).join('');
    observeNewElements();
}

function buildFAQ() { 
    document.getElementById('fl').innerHTML = FAQ.map((f, i) => `
        <div class="fi" id="f${i}">
            <div class="fq" onclick="tf(${i})">
                <span>${f.q[lang]}</span>
                <div class="fic">+</div>
            </div>
            <div class="fa-wrapper">
                <div class="fa-inner">
                    <div class="fa">${f.a[lang]}</div>
                </div>
            </div>
        </div>
    `).join(''); 
}

function tf(i) { 
    const e = document.getElementById('f' + i); 
    const was = e.classList.contains('open'); 
    document.querySelectorAll('.fi').forEach(x => x.classList.remove('open')); 
    if (!was) e.classList.add('open'); 
}

function tl() {
lang = lang === 'ru' ? 'en' : 'ru';
document.getElementById('lb').textContent = lang === 'ru' ? 'EN' : 'RU';
if(lang === 'en') { document.body.classList.add('lang-en'); } else { document.body.classList.remove('lang-en'); }
document.querySelectorAll('[data-ru]').forEach(el => {
    const t = lang === 'ru' ? el.dataset.ru : el.dataset.en;
    if (t) el.innerHTML = t;
});
buildWorks(); buildResults(); buildFAQ();
}

const circles = Array.from(document.querySelectorAll('.vidcirc'));
let activeIndex = 0;

function updateSlider() {
circles.forEach((c, index) => { 
    c.className = 'vidcirc hidden'; 
    const v = c.querySelector('video');
    const b = c.querySelector('.w-play-btn');
    if (v && !v.paused) {
        v.pause();
        v.currentTime = 0; 
        if(b) {
            b.classList.remove('is-playing');
            b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
        }
    }
});
const total = circles.length;
const prevIndex = (activeIndex - 1 + total) % total;
const nextIndex = (activeIndex + 1) % total;
circles[activeIndex].classList.add('active'); circles[activeIndex].classList.remove('hidden');
circles[prevIndex].classList.add('prev'); circles[prevIndex].classList.remove('hidden');
circles[nextIndex].classList.add('next'); circles[nextIndex].classList.remove('hidden');
}

document.getElementById('prevBtn').addEventListener('click', () => { activeIndex = (activeIndex - 1 + circles.length) % circles.length; updateSlider(); });
document.getElementById('nextBtn').addEventListener('click', () => { activeIndex = (activeIndex + 1) % circles.length; updateSlider(); });

circles.forEach((c, index) => { 
    c.addEventListener('click', () => { 
        if (c.classList.contains('prev') || c.classList.contains('next')) { 
            activeIndex = index; 
            updateSlider(); 
        } 
    }); 
});
updateSlider();

function toggleCircleVideo(container) {
    const circle = container.closest('.vidcirc');
    if (!circle.classList.contains('active')) return;
    const video = container.querySelector('video');
    const btn = container.querySelector('.w-play-btn');
    if (video.paused) {
        document.querySelectorAll('video, audio').forEach(media => {
            if(media !== video) {
                media.pause();
                if(media.parentElement && media.parentElement.classList.contains('vc-in')){
                     media.currentTime = 0;
                     const b = media.nextElementSibling;
                     if(b) { b.classList.remove('is-playing'); b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>'; }
                }
                if(media.tagName.toLowerCase() === 'audio') {
                    const b = media.parentElement.querySelector('.vocplay');
                    if(b) b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
                }
                const b = media.parentElement.querySelector('.w-play-btn');
                if(b && !media.parentElement.classList.contains('vc-in')) { b.classList.remove('is-playing'); b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>'; }
            }
        });
        video.play();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
        btn.classList.add('is-playing');
    } else {
        video.pause();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
        btn.classList.remove('is-playing');
    }
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}

function initVoice(audio) {
    const durEl = audio.parentElement.querySelector('.voc-dur');
    durEl.textContent = formatTime(audio.duration);
}

function updateVoiceProgress(audio) {
    const fill = audio.parentElement.querySelector('.vbar-fill');
    const durEl = audio.parentElement.querySelector('.voc-dur');
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        fill.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        durEl.textContent = formatTime(audio.currentTime);
    }
}

function resetVoice(audio) {
    const card = audio.parentElement;
    const btn = card.querySelector('.vocplay');
    const fill = card.querySelector('.vbar-fill');
    const durEl = card.querySelector('.voc-dur');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
    fill.style.clipPath = 'inset(0 100% 0 0)';
    durEl.textContent = formatTime(audio.duration);
}

function toggleVoice(card, event) {
    if(event.target.closest('.vocwave-box')) return; 
    const audio = card.querySelector('audio');
    const btn = card.querySelector('.vocplay');
    if (audio.paused) {
        document.querySelectorAll('video, audio').forEach(media => {
            if (media !== audio) {
                media.pause();
                if(media.tagName.toLowerCase() === 'audio') {
                    const b = media.parentElement.querySelector('.vocplay');
                    if(b) b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
                } else {
                     const b = media.parentElement.querySelector('.w-play-btn');
                     if(b) { b.classList.remove('is-playing'); b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>'; }
                }
            }
        });
        audio.play();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
    } else {
        audio.pause();
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
    }
}

function seekVoice(event, box) {
    const card = box.parentElement;
    const audio = card.querySelector('audio');
    if (!audio.duration) return;
    const rect = box.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = percentage * audio.duration;
}

window.addEventListener('scroll', () => {
const scrollY = window.scrollY;
document.getElementById('nav').classList.toggle('sc', scrollY > 40);
const ids = ['projects', 'results', 'about']; let act = '';
ids.forEach(id => { const el = document.getElementById(id); if (!el) return; const r = el.getBoundingClientRect(); if (r.top <= 110 && r.bottom > 0) act = id });
document.querySelectorAll('.nl').forEach(a => a.classList.toggle('active', a.dataset.s === act));
}, { passive: true });

const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) { e.target.classList.add('on'); } 
});
}, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

function observeNewElements() {
    document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        el.classList.add('observed');
        obs.observe(el);
    });
}

(function () {
    const cv = document.getElementById('noise');
    if(!cv) return;
    const ctx = cv.getContext('2d', { alpha: true });
    const nw = 128, nh = 128;
    const oc = document.createElement('canvas');
    oc.width = nw; oc.height = nh;
    const octx = oc.getContext('2d', { alpha: false });
    let w, h;
    function resize() { w = cv.width = window.innerWidth; h = cv.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize, { passive: true });
    
    let lastTime = 0;
    const fpsInterval = 1000 / 12; // 12 FPS
    
    function tick(now) {
        requestAnimationFrame(tick);
        const elapsed = now - lastTime;
        if (elapsed > fpsInterval) {
            lastTime = now - (elapsed % fpsInterval);
            const id = octx.createImageData(nw, nh);
            const d = id.data;
            for (let i = 0; i < d.length; i += 4) {
                const val = Math.random() > 0.5 ? 255 : 0;
                d[i] = val; d[i+1] = val; d[i+2] = val; d[i+3] = 255;
            }
            octx.putImageData(id, 0, 0);
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = ctx.createPattern(oc, 'repeat');
            ctx.fillRect(0, 0, w, h);
        }
    }
    requestAnimationFrame(tick);
})();

document.addEventListener('DOMContentLoaded', () => {
    buildTicker(); 
    buildWorks(); 
    buildResults(); 
    buildFAQ();
    
    document.querySelectorAll('.vocwave-box').forEach((box, i) => {
        let bars = '';
        let seed = (i + 1) * 15; 
        for(let j=0; j<40; j++) {
            let x = Math.sin(seed++) * 10000;
            let h = 20 + Math.floor((x - Math.floor(x)) * 80); 
            bars += `<div class="vbar" style="height: ${h}%"></div>`;
        }
        box.innerHTML = `
            <div class="vbar-track vbar-bg">${bars}</div>
            <div class="vbar-track vbar-fill">${bars}</div>
        `;
    });
    
    document.querySelectorAll('.voccard audio').forEach((audio, i) => {
        if(i === 0) audio.volume = 0.2;
        else audio.volume = 0.6;
    });

    observeNewElements();
});
