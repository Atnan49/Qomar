/* ==========================================================================
   JavaScript Logic - Kosa Kata (kosa_kata.js) - E-Book QOMAR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomIndicator = document.getElementById('zoom-indicator');
    const btnDyslexia = document.getElementById('btn-dyslexia-toggle');

    const vocabCard = document.getElementById('slide-card');
    const vocabImage = document.getElementById('vocab-image');
    const vocabArabic = document.getElementById('vocab-arabic');
    const vocabTranslit = document.getElementById('vocab-transliteration');
    const vocabTrans = document.getElementById('vocab-translation');
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const dotsContainer = document.getElementById('dots-container');

    // 2. State Variables
    let currentIndex = 0;
    const totalItems = kosaKataMateri.length;
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

    // 4. Slider Rendering Logic
    function renderCard(direction = 'next') {
        if (totalItems === 0) return;
        
        const data = kosaKataMateri[currentIndex];

        // Trigger reflow to restart CSS slide animation
        vocabCard.classList.remove('slide-in-right', 'slide-in-left');
        void vocabCard.offsetWidth; // Trigger reflow
        
        if (direction === 'next') {
            vocabCard.classList.add('slide-in-right');
        } else {
            vocabCard.classList.add('slide-in-left');
        }

        // Populate card contents
        vocabImage.src = data.gambar;
        vocabImage.alt = `Ilustrasi ${data.arti}`;
        vocabArabic.textContent = data.arab;
        vocabTranslit.textContent = data.transliterasi;
        vocabTrans.textContent = data.arti;

        // Update progress track
        const progressPercentage = ((currentIndex + 1) / totalItems) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Kosakata ${currentIndex + 1} dari ${totalItems}`;

        // Update Navigation Button States
        btnPrev.disabled = (currentIndex === 0);

        if (currentIndex === totalItems - 1) {
            // Last card: change "Berikutnya" button to "Tonton Video" with a play icon
            btnNext.innerHTML = `
                <span>Tonton Video</span>
                <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            `;
            btnNext.className = "nav-btn next-btn watch-video-state";
            btnNext.setAttribute('aria-label', 'Lanjut tonton video cerita komik');
        } else {
            // Normal slide navigation: Next
            btnNext.innerHTML = `
                <span>Berikutnya</span>
                <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            `;
            btnNext.className = "nav-btn next-btn";
            btnNext.setAttribute('aria-label', 'Kosakata Berikutnya');
        }

        // Highlight active dot indicator
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // 5. Initialize Dots Indicators
    function initDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Lihat kosakata ${i + 1}`);
            dot.addEventListener('click', () => {
                if (i !== currentIndex) {
                    const direction = i > currentIndex ? 'next' : 'prev';
                    currentIndex = i;
                    renderCard(direction);
                }
            });
            dotsContainer.appendChild(dot);
        }
    }

    // 6. Navigation Actions
    function goNext() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            renderCard('next');
        } else {
            // Redirect to video module from last slide
            window.location.href = 'video.html';
        }
    }

    function goPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            renderCard('prev');
        }
    }

    // Click Handlers
    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);

    // 7. Keyboard Accessibility Controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            goNext();
        } else if (e.key === 'ArrowLeft') {
            goPrev();
        }
    });

    // 8. Mobile Touch Swipe Handlers
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
        const threshold = 50; // swipe minimum distance in px
        const diff = touchStartX - touchEndX;

        if (diff > threshold) {
            // Swiped Left -> Load Next Card
            goNext();
        } else if (diff < -threshold) {
            // Swiped Right -> Load Prev Card
            goPrev();
        }
    }

    // Initialize application
    initDots();
    renderCard('next');
});
