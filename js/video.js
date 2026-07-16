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
    const playlistList = document.getElementById('playlist-list');

    // 2. State Variables
    let currentVideoIndex = 0;
    const totalVideos = videoMateri.length;
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

    // 4. Load & Play Video Function
    function loadAndPlayVideo(index, autoPlay = false) {
        if (totalVideos === 0) return;
        if (index < 0 || index >= totalVideos) return;

        currentVideoIndex = index;
        const currentVideo = videoMateri[currentVideoIndex];

        // Update Video Player Source
        videoPlayer.src = currentVideo.videoUrl;
        videoPlayer.load();

        // Update Info Card Metadata
        videoTitle.textContent = currentVideo.judul;
        if (videoDesc) {
            videoDesc.textContent = currentVideo.deskripsi;
        }

        // Highlight Active Playlist Item
        const playlistItems = playlistList.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, idx) => {
            if (idx === currentVideoIndex) {
                item.classList.add('active');
                item.setAttribute('aria-selected', 'true');
            } else {
                item.classList.remove('active');
                item.setAttribute('aria-selected', 'false');
            }
        });

        // Trigger autoplay if requested (and supported by browser/user interaction state)
        if (autoPlay) {
            const playPromise = videoPlayer.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented: ", error);
                });
            }
        }
    }

    // 5. Render Playlist Items Dynamically
    function renderPlaylist() {
        if (totalVideos === 0) {
            playlistList.innerHTML = `<div class="playlist-empty">Tidak ada video materi.</div>`;
            videoTitle.textContent = "Tidak ada video";
            if (videoDesc) {
                videoDesc.textContent = "";
            }
            return;
        }

        playlistList.innerHTML = '';
        videoMateri.forEach((video, index) => {
            // Create playlist item element
            const button = document.createElement('button');
            button.className = `playlist-item ${index === currentVideoIndex ? 'active' : ''}`;
            button.setAttribute('role', 'option');
            button.setAttribute('aria-selected', index === currentVideoIndex ? 'true' : 'false');
            button.setAttribute('aria-label', `Putar video ${index + 1}: ${video.judul}`);

            // Inner structure
            button.innerHTML = `
                <span class="playlist-item-number">${index + 1}</span>
                <span class="playlist-item-title">${video.judul}</span>
            `;

            // Click action to load video
            button.addEventListener('click', () => {
                if (index !== currentVideoIndex) {
                    loadAndPlayVideo(index, true);
                }
            });

            playlistList.appendChild(button);
        });
    }

    // 6. Initialize Page
    renderPlaylist();
    loadAndPlayVideo(0, false); // Load first video on start, do not autoplay yet to prevent browser blocks
});
