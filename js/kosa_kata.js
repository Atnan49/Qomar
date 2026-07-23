/* ==========================================================================
   JavaScript Logic - Kosa Kata (kosa_kata.js) - E-Book QOMAR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements - UDL Toolbar
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomIndicator = document.getElementById('zoom-indicator');
    const btnDyslexia = document.getElementById('btn-dyslexia-toggle');

    // DOM Elements - Screens
    const themeSelectScreen = document.getElementById('theme-select-screen');
    const comicReadingScreen = document.getElementById('comic-reading-screen');
    const vocabFlashcardScreen = document.getElementById('vocab-flashcard-screen');

    // DOM Elements - Header Back Link
    const btnBack = document.getElementById('btn-back');

    // DOM Elements - Comic Reader Screen
    const comicTitleArab = document.getElementById('comic-title-arab');
    const comicTitleIndo = document.getElementById('comic-title-indo');
    const comicImg = document.getElementById('comic-img');
    const comicPageControls = document.getElementById('comic-page-controls');
    const btnComicPrevPage = document.getElementById('btn-comic-prev-page');
    const btnComicNextPage = document.getElementById('btn-comic-next-page');
    const comicPageIndicator = document.getElementById('comic-page-indicator');
    const comicDialogueList = document.getElementById('comic-dialogue-list');
    const btnFinishReading = document.getElementById('btn-finish-reading');
    const btnBackToMenu1 = document.getElementById('btn-back-to-menu-1');

    // DOM Elements - Vocab Flashcard Screen
    const vocabCard = document.getElementById('slide-card');
    const vocabImage = document.getElementById('vocab-image');
    const vocabArabic = document.getElementById('vocab-arabic');
    const vocabTranslit = document.getElementById('vocab-transliteration');
    const vocabTrans = document.getElementById('vocab-translation');
    const btnPlayAudio = document.getElementById('btn-play-audio');
    const audioUnavailableMsg = document.getElementById('audio-unavailable-msg');
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('dots-container');

    // 2. State Variables
    let currentScreen = 'menu'; // 'menu' | 'comic' | 'vocab'
    let selectedTheme = null;   // 'tema1' | 'tema2' | 'tema3'
    let comicPageIndex = 0;
    let vocabIndex = 0;
    let audioObject = null;
    let isPlayingAudio = false;

    // UDL Scaling & Font Preferences
    let currentScale = parseInt(localStorage.getItem('fontScale')) || 100;
    let isDyslexia = localStorage.getItem('dyslexiaMode') === 'true';

    // 3. UDL Preferences Synchronization
    function applyPreferences() {
        // Remove existing font scale classes
        htmlEl.className = htmlEl.className.replace(/\bfont-scale-\d+\b/g, '');
        htmlEl.classList.add(`font-scale-${currentScale}`);
        if (zoomIndicator) {
            zoomIndicator.textContent = `${currentScale}%`;
        }

        // Apply Dyslexia Mode
        if (isDyslexia) {
            bodyEl.classList.add('dyslexia-mode');
            if (btnDyslexia) btnDyslexia.classList.add('active');
        } else {
            bodyEl.classList.remove('dyslexia-mode');
            if (btnDyslexia) btnDyslexia.classList.remove('active');
        }
    }

    // Initial UDL apply
    applyPreferences();

    // Event Listeners for UDL Toolbar
    if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
            if (currentScale < 160) {
                currentScale += 10;
                localStorage.setItem('fontScale', currentScale);
                applyPreferences();
            }
        });
    }

    if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
            if (currentScale > 100) {
                currentScale -= 10;
                localStorage.setItem('fontScale', currentScale);
                applyPreferences();
            }
        });
    }

    if (btnDyslexia) {
        btnDyslexia.addEventListener('click', () => {
            isDyslexia = !isDyslexia;
            localStorage.setItem('dyslexiaMode', isDyslexia);
            applyPreferences();
        });
    }

    // 4. Screen State Management
    function showScreen(screenName) {
        currentScreen = screenName;
        
        // Hide all screens
        themeSelectScreen.style.display = 'none';
        comicReadingScreen.style.display = 'none';
        vocabFlashcardScreen.style.display = 'none';
        
        // Stop audio playback if transitioning
        stopAudio();
        
        // Show target screen
        if (screenName === 'menu') {
            themeSelectScreen.style.display = 'block';
            btnBack.href = 'dashboard.html';
        } else if (screenName === 'comic') {
            comicReadingScreen.style.display = 'block';
            btnBack.href = '#';
        } else if (screenName === 'vocab') {
            vocabFlashcardScreen.style.display = 'block';
            btnBack.href = '#';
        }
    }

    // Override header back button behavior to support local screen history
    if (btnBack) {
        btnBack.addEventListener('click', (e) => {
            if (currentScreen === 'comic') {
                e.preventDefault();
                showScreen('menu');
            } else if (currentScreen === 'vocab') {
                e.preventDefault();
                showScreen('comic');
            }
            // If screen is 'menu', default back behavior to dashboard.html proceeds
        });
    }

    // 5. Theme Selection Action
    window.selectTheme = function(themeId) {
        selectedTheme = themeId;
        comicPageIndex = 0;
        renderComic();
        showScreen('comic');
    };

    // 6. Comic Reader Rendering Logic
    function renderComic() {
        const comicData = komikMateri[selectedTheme];
        if (!comicData) return;

        comicTitleArab.textContent = comicData.judulArab;
        comicTitleIndo.textContent = comicData.judulIndo;

        // Render current page image
        comicImg.src = comicData.halaman[comicPageIndex];
        comicImg.alt = `Komik ${comicData.judulIndo} - Halaman ${comicPageIndex + 1}`;

        // Render page indicator and buttons if multi-page (like Tema 2)
        if (comicData.halaman.length > 1) {
            comicPageControls.style.display = 'flex';
            comicPageIndicator.textContent = `Halaman ${comicPageIndex + 1} dari ${comicData.halaman.length}`;
            btnComicPrevPage.disabled = (comicPageIndex === 0);
            btnComicNextPage.disabled = (comicPageIndex === comicData.halaman.length - 1);
        } else {
            comicPageControls.style.display = 'none';
        }

        // Render dynamic transcript chat-bubbles
        comicDialogueList.innerHTML = '';
        
        // Track unique speakers list to assign different bubble colors dynamically (char-1 and char-2)
        const speakers = [];
        comicData.dialog.forEach(d => {
            if (!speakers.includes(d.pembicara)) {
                speakers.push(d.pembicara);
            }
        });

        comicData.dialog.forEach(d => {
            const speakerIndex = speakers.indexOf(d.pembicara);
            const bubbleClass = (speakerIndex === 1) ? 'char-2' : 'char-1';

            const bubble = document.createElement('div');
            bubble.className = `chat-bubble ${bubbleClass}`;
            bubble.innerHTML = `
                <span class="bubble-sender">${d.pembicara}</span>
                <span class="bubble-arabic" lang="ar">${d.arab}</span>
                <span class="bubble-translation">${d.arti}</span>
            `;
            comicDialogueList.appendChild(bubble);
        });

        // Reset scroll position of transcript window
        comicDialogueList.scrollTop = 0;
    }

    // Comic Navigation Button Events
    btnComicPrevPage.addEventListener('click', () => {
        if (comicPageIndex > 0) {
            comicPageIndex--;
            renderComic();
        }
    });

    btnComicNextPage.addEventListener('click', () => {
        const comicData = komikMateri[selectedTheme];
        if (comicData && comicPageIndex < comicData.halaman.length - 1) {
            comicPageIndex++;
            renderComic();
        }
    });

    btnFinishReading.addEventListener('click', () => {
        startVocabulary();
    });

    btnBackToMenu1.addEventListener('click', () => {
        showScreen('menu');
    });

    // 7. Vocabulary Screen Logic
    function startVocabulary() {
        vocabIndex = 0;
        initDots();
        renderCard('next');
        showScreen('vocab');
    }

    function renderCard(direction = 'next') {
        const themeVocab = kosaKataMateri[selectedTheme];
        if (!themeVocab || themeVocab.length === 0) return;

        const data = themeVocab[vocabIndex];
        const totalItems = themeVocab.length;

        // Reset any playing audio when loading a new card
        stopAudio();

        // Trigger reflow to restart slide animations
        vocabCard.classList.remove('slide-in-right', 'slide-in-left');
        void vocabCard.offsetWidth; // Trigger reflow
        
        if (direction === 'next') {
            vocabCard.classList.add('slide-in-right');
        } else {
            vocabCard.classList.add('slide-in-left');
        }

        // Feed vocabulary contents to card
        vocabImage.decoding = 'async';
        vocabImage.src = data.gambar;
        vocabImage.alt = `Ilustrasi ${data.arti}`;
        vocabArabic.textContent = data.arab;
        vocabTranslit.textContent = data.transliterasi;
        vocabTrans.textContent = data.arti;

        // Preload adjacent items (next and prev cards) for 0-delay transitions
        preloadAdjacentAssets();

        // Toggle audio play buttons based on availability (disable/hide for Tema 3)
        if (data.audio) {
            btnPlayAudio.style.display = 'inline-flex';
            audioUnavailableMsg.style.display = 'none';
        } else {
            btnPlayAudio.style.display = 'none';
            audioUnavailableMsg.style.display = 'inline-block';
        }

        // Render progress tracker bar
        const progressPercentage = ((vocabIndex + 1) / totalItems) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Kosakata ${vocabIndex + 1} dari ${totalItems}`;

        // Toggle navigation button styles and states
        btnPrev.disabled = (vocabIndex === 0);

        if (vocabIndex === totalItems - 1) {
            // Last card: change "Berikutnya" to "Tonton Video"
            btnNext.innerHTML = `
                <span>Tonton Video</span>
                <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            `;
            btnNext.className = "nav-btn next-btn watch-video-state";
            btnNext.setAttribute('aria-label', 'Lanjut tonton video cerita komik');
        } else {
            btnNext.innerHTML = `
                <span>Berikutnya</span>
                <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            `;
            btnNext.className = "nav-btn next-btn";
            btnNext.setAttribute('aria-label', 'Kosakata Berikutnya');
        }

        // Highlight active indicator dot
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === vocabIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Cache map for preloaded assets
    const preloadedImages = {};
    const preloadedAudios = {};

    function preloadAdjacentAssets() {
        const themeVocab = kosaKataMateri[selectedTheme];
        if (!themeVocab) return;

        const indicesToPreload = [vocabIndex + 1, vocabIndex - 1];
        indicesToPreload.forEach(idx => {
            if (idx >= 0 && idx < themeVocab.length) {
                const item = themeVocab[idx];
                if (item.gambar && !preloadedImages[item.gambar]) {
                    const img = new Image();
                    img.src = item.gambar;
                    preloadedImages[item.gambar] = img;
                }
                if (item.audio && !preloadedAudios[item.audio]) {
                    const aud = new Audio();
                    aud.src = item.audio;
                    aud.preload = 'auto';
                    preloadedAudios[item.audio] = aud;
                }
            }
        });
    }

    // Inits the navigation dots indicators
    function initDots() {
        const themeVocab = kosaKataMateri[selectedTheme];
        if (!themeVocab) return;
        const totalItems = themeVocab.length;

        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === vocabIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Lihat kosakata ${i + 1}`);
            dot.addEventListener('click', () => {
                if (i !== vocabIndex) {
                    const direction = i > vocabIndex ? 'next' : 'prev';
                    vocabIndex = i;
                    renderCard(direction);
                }
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Audio Playback Controls
    function playAudio() {
        const themeVocab = kosaKataMateri[selectedTheme];
        if (!themeVocab) return;
        
        const data = themeVocab[vocabIndex];
        if (!data || !data.audio) return;

        if (isPlayingAudio && audioObject) {
            stopAudio();
            return;
        }

        audioObject = new Audio(data.audio);
        btnPlayAudio.classList.add('playing');
        btnPlayAudio.innerHTML = `
            <svg class="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path class="audio-wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path class="audio-wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
            <span>Memutar...</span>
        `;
        isPlayingAudio = true;

        audioObject.play().catch(err => {
            console.error("Gagal memutar berkas audio:", err);
            stopAudio();
        });

        audioObject.onended = () => {
            stopAudio();
        };
    }

    function stopAudio() {
        if (audioObject) {
            audioObject.pause();
            audioObject = null;
        }
        isPlayingAudio = false;
        if (btnPlayAudio) {
            btnPlayAudio.classList.remove('playing');
            btnPlayAudio.innerHTML = `
                <svg class="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path class="audio-wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path class="audio-wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
                <span>Dengarkan Audio</span>
            `;
        }
    }

    // Audio Play Event Listener
    if (btnPlayAudio) {
        btnPlayAudio.addEventListener('click', playAudio);
    }

    // Vocab Navigation Actions
    function goNext() {
        const themeVocab = kosaKataMateri[selectedTheme];
        if (!themeVocab) return;
        const totalItems = themeVocab.length;

        if (vocabIndex < totalItems - 1) {
            vocabIndex++;
            renderCard('next');
        } else {
            // Finished learning, redirect to the video page
            window.location.href = 'video.html';
        }
    }

    function goPrev() {
        if (vocabIndex > 0) {
            vocabIndex--;
            renderCard('prev');
        }
    }

    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);

    // 8. Keyboard Shortcuts & Accessibility Controls
    document.addEventListener('keydown', (e) => {
        if (currentScreen === 'vocab') {
            if (e.key === 'ArrowRight') {
                goNext();
            } else if (e.key === 'ArrowLeft') {
                goPrev();
            }
        } else if (currentScreen === 'comic') {
            if (e.key === 'ArrowRight') {
                const comicData = komikMateri[selectedTheme];
                if (comicData && comicPageIndex < comicData.halaman.length - 1) {
                    comicPageIndex++;
                    renderComic();
                }
            } else if (e.key === 'ArrowLeft') {
                if (comicPageIndex > 0) {
                    comicPageIndex--;
                    renderComic();
                }
            }
        }
    });

    // 9. Mobile Touch Swipe Handlers (Only active inside Flashcards view)
    let touchStartX = 0;
    let touchEndX = 0;

    vocabCard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    vocabCard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });

    function handleSwipeGesture() {
        if (currentScreen !== 'vocab') return;
        const threshold = 50; // swipe minimum distance in px
        const diff = touchStartX - touchEndX;

        if (diff > threshold) {
            goNext();
        } else if (diff < -threshold) {
            goPrev();
        }
    }
});
