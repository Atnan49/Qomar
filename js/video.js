/* ==========================================================================
   JavaScript Logic - Video Playlist (video.js) - E-Book QOMAR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomIndicator = document.getElementById('zoom-indicator');
    const btnDyslexia = document.getElementById('btn-dyslexia-toggle');

    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoDesc = document.getElementById('video-desc');
    const videoBabBadge = document.getElementById('video-bab-badge');
    const btnPrevPage = document.getElementById('btn-prev-page');
    const btnNextPage = document.getElementById('btn-next-page');

    // 2. State Variables
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

    // 4. Initialize Dedicated Video for Selected Bab
    const urlParams = new URLSearchParams(window.location.search);
    const babParam = urlParams.get('bab') || urlParams.get('tema');
    let babNum = 1;

    if (babParam) {
        let parsed = parseInt(babParam, 10);
        if (isNaN(parsed) && babParam.startsWith('tema')) {
            parsed = parseInt(babParam.replace('tema', ''), 10);
        }
        if (!isNaN(parsed) && parsed >= 1 && typeof videoMateri !== 'undefined' && parsed <= videoMateri.length) {
            babNum = parsed;
        }
    }

    const videoIndex = babNum - 1;
    const currentVideo = typeof videoMateri !== 'undefined' ? videoMateri[videoIndex] : null;

    if (currentVideo) {
        if (videoBabBadge) videoBabBadge.textContent = `BAB ${babNum}`;
        if (videoTitle) videoTitle.textContent = currentVideo.judul;
        if (videoDesc) videoDesc.textContent = currentVideo.deskripsi;
        
        if (videoPlayer) {
            videoPlayer.src = currentVideo.videoUrl;
            videoPlayer.load();
        }

        // Update bottom navigation links dedicated for this Bab
        if (btnPrevPage) btnPrevPage.href = `kosa_kata.html?bab=${babNum}`;
        if (btnNextPage) btnNextPage.href = `Kuis.html?bab=${babNum}`;
    }
});
