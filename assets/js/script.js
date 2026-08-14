const LOGOS = [
{ src: '/assets/logos/africa.avif', alt: 'Африка', size: 90 },
{ src: '/assets/logos/fullflat.avif', alt: 'fullflat', size: 85 },
{ src: '/assets/logos/Probazis.avif', alt: 'Probazis', size: 200 },
{ src: '/assets/logos/fscr.avif', alt: 'FSCR', size: 80 },
{ src: '/assets/logos/remsart.avif', alt: 'Remstart', size: 120 },
{ src: '/assets/logos/narnia.avif', alt: 'Шкафы Нарния', size: 140 },
{ src: '/assets/logos/region.avif', alt: 'Region Online', size: 150 },
{ src: '/assets/logos/nutreasy.avif', alt: 'Nutreasy', size: 150 }
];

const VW = [
{ l: 'Reels · SMM', t: 'Probazis', v: '/assets/video_v/v1.mp4', p: '/assets/covers_h/cover1.avif' },
{ l: 'Shorts · Спорт', t: 'FSCR', v: '/assets/video_v/v2.mp4', p: '/assets/covers_h/cover2.avif' },
{ l: 'Reels · Бизнес', t: 'Remstart', v: '/assets/video_v/v3.mp4', p: '/assets/covers_h/cover6.avif' },
{ l: 'Reels · Недвижимость', t: 'fullflat', v: '/assets/video_v/v4.mp4', p: '/assets/covers_h/cover3.avif' },
{ l: 'Shorts · Продукт', t: 'Nutreasy', v: '/assets/video_v/v5.mp4', p: '/assets/covers_h/cover4.avif' },
{ l: 'Reels · Медиа', t: 'Region Online', v: '/assets/video_v/v6.mp4', p: '/assets/covers_h/cover5.avif' }
];

const HW = [
{ l: 'YouTube · Обзор', t: 'Probazis', v: '/assets/video_h/h1.mp4', p: '/assets/covers_v/cover1.avif' },
{ l: 'YouTube · Travel', t: 'ПОЗДРАВЛЕНИЕ ИЗ АФРИКИ', v: '/assets/video_h/h2.mp4', p: '/assets/covers_v/cover2.avif' },
{ l: 'Highlight · Реклама', t: 'Шкафы Нарния', v: '/assets/video_h/h3.mp4', p: '/assets/covers_v/cover3.avif' },
{ l: 'Corporate · Корпоратив', t: 'Remstart', v: '/assets/video_h/h4.mp4', p: '/assets/covers_v/cover4.avif' }
];

const RS = [
    { type: 'open', img: '/assets/images/case2.avif', main: '5.3M', sub: 'Просмотров, видео принесло автору <span style="color: var(--y);">10000+</span>  подписчиков', subEn: 'Views with 850<br>followers' },
    { type: 'open', img: '/assets/images/case5.avif', main: '920K', sub: 'Просмотров, видео принесло автору <span style="color: var(--y);">2000+</span>  подписчиков', subEn: 'Views with 850<br>followers' },
    { type: 'open', img: '/assets/images/case4.avif', main: '797K', sub: 'Просмотров, видео принесло автору <span style="color: var(--y);">5000+</span>  подписчиков', subEn: 'Views with 850<br>followers' },
    { type: 'open', img: '/assets/images/case1.avif', main: '585K', sub: 'Просмотров, видео принесло автору <span style="color: var(--y);">1000+</span>  подписчиков', subEn: 'Views with 850<br>followers' },
    { type: 'open', img: '/assets/images/case6.avif', main: '302K', sub: 'Просмотров при 2400<br>подписчиках', subEn: 'Views with 2400<br>followers' },
    { type: 'open', img: '/assets/images/case3.avif', main: '101K', sub: 'Просмотров при 950<br>подписчиках', subEn: 'Views with 850<br>followers' }
];

const FAQ = [
{ q: { ru: 'Какая стоимость за видео?', en: 'What is the price per video?' }, a: { ru: 'Стоимость для каждого проекта индивидуальна и может зависеть от множества факторов. В первую очередь, от сложности и объема работы. Давайте обсудим ваш проект и я смогу подсказать точную стоимость.', en: "The cost for each project is individual and can depend on multiple factors. Primarily, on the complexity and volume of the work. Let's discuss your project and I'll be able to give you the exact price." } },
{ q: { ru: 'Какие сроки выполнения работы?', en: 'What are the timelines?' }, a: { ru: 'Сроки для каждого проекта могут варьироваться от 1 дня до нескольких недель. Также они зависят от сложности, объема работы и моей загруженности в этот период. На этапе обсуждения проекта мы всегда обговариваем точные сроки.', en: 'Timelines for each project can vary from 1 day to several weeks. They also depend on the complexity, volume of work, and my current workload. We always agree on exact deadlines during the project discussion stage.' } },
{ q: { ru: 'Что нужно для начала?', en: 'What do you need to start?' }, a: { ru: 'Для начала работы потребуется ТЗ (техническое задание), материалы и референсы (при их наличии). ТЗ не обязательно должно быть максимально подробным и следовать каким-то определенным правилам. При необходимости буду готов помочь с его составлением.', en: "To get started, I will need a brief, materials, and references (if any). The brief doesn't have to be perfectly detailed or follow strict rules. If needed, I'm ready to help you put one together." } },
{ q: { ru: 'Сколько правок доступно?', en: 'How many revisions are included?' }, a: { ru: 'Все правки в рамках ТЗ (технического задания) абсолютно бесплатны. Внесение дополнительных изменений оплачивается отдельно.', en: 'All revisions within the scope of the original brief are absolutely free. Any additional changes are paid separately.' } }
];

let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru';
let plyrInstances = [];
let circPlyrInstances = [];
let worksObserver = null;
let circObserver = null;
let fsHandlers = [];

document.addEventListener('fullscreenchange', () => fsHandlers.forEach(fn => fn()));
document.addEventListener('webkitfullscreenchange', () => fsHandlers.forEach(fn => fn()));

function pauseAllMedia(exceptPlyr = null, exceptAudio = null) {
    plyrInstances.forEach(p => {
        if (p !== exceptPlyr && p.playing) p.pause();
    });
    circPlyrInstances.forEach(p => {
        if (p !== exceptPlyr && p.playing) p.pause();
    });
    document.querySelectorAll('.voccard audio').forEach(audio => {
        if (audio !== exceptAudio && !audio.paused) {
            audio.pause();
            const b = audio.parentElement.querySelector('.vocplay');
            if (b) b.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M8.5 5.5v13l10.5-6.5z" /></svg>';
        }
    });
}

function buildTicker() {
    let track = [...LOGOS, ...LOGOS, ...LOGOS];
    const baseHeight = 28;
    let html = track.map(logo => {
        const newHeight = (baseHeight * (logo.size || 100)) / 100;
        return `<div class="tick-item"><img src="${logo.src}" alt="${logo.alt}" class="tick-logo" width="150" height="${newHeight}" decoding="async" loading="lazy" style="--base-h: ${newHeight}px; height: var(--base-h);"><span class="tdot"></span></div>`;
    }).join('');
    
    const inner = document.querySelector('.tick-inner');
    inner.innerHTML = `<div class="tick-track">${html}</div><div class="tick-track">${html}</div>`;
}

function wCard(w, cls) {
    return `
    <div class="${cls} wcard reveal" ontouchstart="">
        <div class="wi">
            <video class="plyr-video" data-src="${w.v}" poster="${w.p}" data-poster="${w.p}" playsinline preload="metadata"></video>
            <button class="custom-fs-btn" type="button" aria-label="На весь экран">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
            </button>
        </div>
    </div>`;
}

function toggleCustomFS(btn, e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const wi = btn?.closest('.wi');
    const video = wi?.querySelector('video');
    if (!wi || !video) return;

    const setFsUiState = (enabled) => {
        wi.classList.toggle('is-fullscreen-ui', enabled);
        if (enabled) wi.classList.remove('controls-hidden');
    };

    const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement;
    const inThisFullscreen = () => {
        const el = fsEl();
        return !!(el && (el === wi || el === video || wi.contains(el)));
    };

    const exitFullscreen = () => {
        try {
            if (document.exitFullscreen && fsEl()) {
                const res = document.exitFullscreen();
                if (res && typeof res.then === 'function') res.finally(() => setFsUiState(false));
                else setFsUiState(false);
                return true;
            }
        } catch (_) {}
        try {
            if (document.webkitExitFullscreen && document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
                setFsUiState(false);
                return true;
            }
        } catch (_) {}
        try {
            if (video.webkitDisplayingFullscreen && video.webkitExitFullscreen) {
                video.webkitExitFullscreen();
                setFsUiState(false);
                return true;
            }
        } catch (_) {}
        try {
            if (video.webkitPresentationMode === 'fullscreen' && video.webkitSetPresentationMode) {
                video.webkitSetPresentationMode('inline');
                setFsUiState(false);
                return true;
            }
        } catch (_) {}
        return false;
    };

    if (inThisFullscreen() || video.webkitDisplayingFullscreen || video.webkitPresentationMode === 'fullscreen') {
        if (exitFullscreen()) return;
    }

    const openNativeIOSFullscreen = () => {
        if (!video.webkitEnterFullscreen) return false;
        try {
            video.controls = true;
            video.setAttribute('controls', 'controls');
            setFsUiState(true);
            video.addEventListener('webkitendfullscreen', () => {
                setFsUiState(false);
                video.controls = false;
                video.removeAttribute('controls');
            }, { once: true });
            video.webkitEnterFullscreen();
            return true;
        } catch (_) {
            return false;
        }
    };

    const tryRequest = (fn) => {
        try {
            const result = fn?.();
            if (result && typeof result.then === 'function') {
                result.then(() => setFsUiState(true)).catch(() => {});
            } else {
                setFsUiState(true);
            }
            return true;
        } catch (_) {
            return false;
        }
    };

    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const plyrRoot = wi.querySelector('.plyr');

    if (isiOS && openNativeIOSFullscreen()) return;

    if (tryRequest(() => wi.requestFullscreen && wi.requestFullscreen())) return;
    if (tryRequest(() => plyrRoot?.requestFullscreen && plyrRoot.requestFullscreen())) return;
    if (tryRequest(() => wi.webkitRequestFullscreen && wi.webkitRequestFullscreen())) return;
    if (tryRequest(() => plyrRoot?.webkitRequestFullscreen && plyrRoot.webkitRequestFullscreen())) return;
    if (tryRequest(() => video.requestFullscreen && video.requestFullscreen())) return;
    if (tryRequest(() => video.webkitRequestFullscreen && video.webkitRequestFullscreen())) return;
    
    openNativeIOSFullscreen();
}

function buildWorks() {
    plyrInstances.forEach(p => p.destroy());
    plyrInstances = [];
    fsHandlers = [];
    if (worksObserver) worksObserver.disconnect();

    document.getElementById('vg').innerHTML = VW.map(w => wCard(w, 'vi')).join('');
    document.getElementById('hg').innerHTML = HW.map(w => wCard(w, 'hi')).join('');

    worksObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            worksObserver.unobserve(entry.target);
            initWorkPlyr(entry.target);
        });
    }, { rootMargin: '200px 0px', threshold: 0 });

    document.querySelectorAll('.plyr-video').forEach(v => worksObserver.observe(v));

    observeNewElements();
}

function initWorkPlyr(v) {
        v.src = v.dataset.src;
        let player;
        try {
            if (typeof Plyr === 'undefined') throw new Error('Plyr not loaded');
            player = new Plyr(v, {
                controls: ['play-large', 'progress'],
                fullscreen: { enabled: false },
                clickToPlay: true
            });
        } catch (err) {
            v.controls = true;
            return;
        }
        plyrInstances.push(player);
        let hideTimer = null;
        const wi = v.closest('.wi');
        
        function showControls() {
            if (!wi) return;
            wi.classList.remove('controls-hidden');
            clearTimeout(hideTimer);
            if (player.playing && !wi.classList.contains('is-fullscreen-ui')) {
                hideTimer = setTimeout(() => wi.classList.add('controls-hidden'), 1200);
            }
        }
        function hideControls() {
            if (!wi || !player.playing || wi.classList.contains('is-fullscreen-ui')) return;
            hideTimer = setTimeout(() => wi.classList.add('controls-hidden'), 1200);
        }
        function handleFsChange() {
            if (!wi) return;
            const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
            const inFs = !!(fsEl && (fsEl === wi || fsEl === v || wi.contains(fsEl)));
            wi.classList.toggle('is-fullscreen-ui', inFs);
            if (inFs) {
                wi.classList.remove('controls-hidden');
                clearTimeout(hideTimer);
            }
        }
        
        player.on('play', (event) => {
            pauseAllMedia(event.detail.plyr);
            if (wi && !wi.classList.contains('has-played')) {
                wi.classList.add('has-played');
            }
            showControls();
        });
        player.on('pause', () => {
            if (wi) {
                clearTimeout(hideTimer);
                wi.classList.remove('controls-hidden');
            }
        });
        
        if (wi) {
            wi.addEventListener('mouseenter', showControls);
            wi.addEventListener('mousemove', showControls);
            wi.addEventListener('mouseleave', hideControls);
            
            let touchStartX = 0;
            let touchStartY = 0;
            wi.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                if (player.playing) showControls();
            }, { passive: true });
            
            wi.addEventListener('touchend', (e) => {
                if (e.target.closest('.custom-fs-btn') || e.target.closest('.plyr__controls') || e.target.closest('.plyr__control--overlaid')) return;
                
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                
                if (Math.abs(touchEndX - touchStartX) < 10 && Math.abs(touchEndY - touchStartY) < 10) {
                    e.preventDefault();
                    if (player.playing) player.pause();
                    else player.play();
                }
            }, { passive: false });

            const fsBtn = wi.querySelector('.custom-fs-btn');
            if (fsBtn) {
                let lastTouchTs = 0;
                const onFsTrigger = (ev) => {
                    if (ev.type === 'click' && Date.now() - lastTouchTs < 450) return;
                    if (ev.type === 'touchend') lastTouchTs = Date.now();
                    toggleCustomFS(fsBtn, ev);
                };
                fsBtn.addEventListener('click', onFsTrigger);
                fsBtn.addEventListener('touchend', onFsTrigger, { passive: false });
            }

            fsHandlers.push(handleFsChange);
            v.addEventListener('webkitbeginfullscreen', () => {
                wi.classList.add('is-fullscreen-ui');
                wi.classList.remove('controls-hidden');
                clearTimeout(hideTimer);
            });
            v.addEventListener('webkitendfullscreen', () => {
                wi.classList.remove('is-fullscreen-ui');
            });
        }
}

function buildResults() {
    const copyTxt = lang === 'ru' ? 'Проект под защитой<br>авторских прав' : 'Project protected<br>by copyright';
    document.getElementById('rg').innerHTML = RS.map(r => {
        const subtext = lang === 'ru' ? r.sub : (r.subEn || r.sub);
        const isBlur = r.type === 'blur';
        const cardClass = isBlur ? 'rcard nda-card reveal' : 'rcard reveal';
        const imagePart = isBlur ? `
            <img src="${r.img}" class="rimg" loading="lazy" decoding="async" alt="Кейс NDA" draggable="false" width="671" height="1035">
            <div class="rblur">
                <div class="rlock">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div class="rbtxt" style="line-height: 1.4; margin-top: 8px;">${copyTxt}</div>
            </div>` : `<img src="${r.img}" class="rimg" loading="lazy" decoding="async" alt="Кейс" width="671" height="1035">`;
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
            <button type="button" class="fq" onclick="tf(${i})">
                <span>${f.q[lang]}</span>
                <div class="fic">+</div>
            </button>
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

function applyLang() {
    document.documentElement.lang = lang;
    document.getElementById('lb').textContent = lang === 'ru' ? 'EN' : 'RU';
    if(lang === 'en') { document.body.classList.add('lang-en'); } else { document.body.classList.remove('lang-en'); }
    document.querySelectorAll('[data-ru]').forEach(el => {
        const t = lang === 'ru' ? el.dataset.ru : el.dataset.en;
        if (t) el.innerHTML = t;
    });
}

function tl() {
    lang = lang === 'ru' ? 'en' : 'ru';
    applyLang();
    buildWorks(); buildResults(); buildFAQ();
}

const circles = Array.from(document.querySelectorAll('.vidcirc'));
let activeIndex = 0;

function updateSlider() {
    circles.forEach((c) => { 
        c.className = 'vidcirc hidden'; 
    });
    
    circPlyrInstances.forEach(p => {
        if (p.playing) p.pause();
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
        pauseAllMedia(null, audio);
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
    // Защита от NaN, если аудио еще не загрузилось
    if (!audio.duration || isNaN(audio.duration)) return;
    
    const rect = box.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = percentage * audio.duration;
}

// Меняем фон меню при скролле (оптимизированно)
let isScrolled = false;
window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > 40;
    if (shouldBeScrolled !== isScrolled) {
        document.getElementById('nav').classList.toggle('sc', shouldBeScrolled);
        isScrolled = shouldBeScrolled;
    }
}, { passive: true });

// Подсветка активных ссылок меню через Observer (0 нагрузки на процессор)
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nl').forEach(a => {
                a.classList.toggle('active', a.dataset.s === entry.target.id);
            });
        }
    });
}, { threshold: 0.2 });

['hero', 'projects', 'results', 'about', 'reviews', 'faq', 'cta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
});

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
    let w, h, resizeTimer;

    function resize() { w = cv.width = window.innerWidth; h = cv.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }, { passive: true });

    let lastTime = 0, running = true;
    const fpsInterval = 1000 / 12;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { running = false; }
        else { running = true; lastTime = 0; requestAnimationFrame(tick); }
    });

    function tick(now) {
        if (!running) return;
        requestAnimationFrame(tick);
        const elapsed = now - lastTime;
        if (elapsed > fpsInterval) {
            lastTime = now - (elapsed % fpsInterval);
            const id = octx.createImageData(nw, nh);
            const buf = new Uint32Array(id.data.buffer);
            for (let i = 0, len = buf.length; i < len; i++) {
                buf[i] = Math.random() > 0.5 ? 0xFFFFFFFF : 0xFF000000;
            }
            octx.putImageData(id, 0, 0);
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = ctx.createPattern(oc, 'repeat');
            ctx.fillRect(0, 0, w, h);
        }
    }
    requestAnimationFrame(tick);
})();

function initCircPlyr(v) {
    v.src = v.dataset.src;
    v.addEventListener('loadeddata', () => { if (v.currentTime === 0) v.currentTime = 0.001; }, { once: true });
    if (v.readyState >= 2 && v.currentTime === 0) v.currentTime = 0.001;
    v.load();
    let player;
    try {
        if (typeof Plyr === 'undefined') throw new Error('Plyr not loaded');
        player = new Plyr(v, {
            controls: ['play-large'],
            clickToPlay: true,
            fullscreen: { enabled: false }
        });
    } catch (err) {
        v.controls = true;
        return;
    }
    circPlyrInstances.push(player);
    player.on('play', (event) => {
        pauseAllMedia(event.detail.plyr);
    });
    player.on('pause', () => {});

    const vcIn = v.closest('.vc-in');
    if (vcIn) {
        let touchStartX = 0;
        let touchStartY = 0;
        vcIn.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        vcIn.addEventListener('touchend', (e) => {
            const circ = vcIn.closest('.vidcirc');
            if (!circ || !circ.classList.contains('active')) return;
            if (e.target.closest('.plyr__control--overlaid')) return;

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            if (Math.abs(touchEndX - touchStartX) < 10 && Math.abs(touchEndY - touchStartY) < 10) {
                e.preventDefault();
                if (player.playing) player.pause();
                else player.play();
            }
        }, { passive: false });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (lang !== 'ru') applyLang();
    buildTicker();
    buildWorks();
    buildResults();
    buildFAQ();

    circObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            circObserver.unobserve(entry.target);
            initCircPlyr(entry.target);
        });
    }, { rootMargin: '200px 0px', threshold: 0 });
    document.querySelectorAll('.plyr-circ').forEach(v => circObserver.observe(v));

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
