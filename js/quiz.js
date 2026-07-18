/* ==========================================================================
   Quiz Interaktif Logic (quiz.js) - QOMAR Project
   Handles: Tab switching, PG kuis (slider), Essay kuis (slider), UDL sync
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. UDL PREFERENCES SYNC
    // =============================================
    const loadPreferences = () => {
        const scale = localStorage.getItem('fontScale') || '100';
        const dyslexia = localStorage.getItem('dyslexiaMode') === 'true';

        document.documentElement.className = `font-scale-${scale}`;
        document.getElementById('zoom-level-display').textContent = `${scale}%`;

        if (dyslexia) {
            document.body.classList.add('dyslexia-mode');
            document.getElementById('btn-dyslexia-toggle').classList.add('active');
        } else {
            document.body.classList.remove('dyslexia-mode');
            document.getElementById('btn-dyslexia-toggle').classList.remove('active');
        }
    };

    const getCurrentScale = () => parseInt(localStorage.getItem('fontScale') || '100', 10);

    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        let scale = getCurrentScale();
        if (scale < 160) {
            scale += 10;
            localStorage.setItem('fontScale', String(scale));
            loadPreferences();
        }
    });

    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        let scale = getCurrentScale();
        if (scale > 100) {
            scale -= 10;
            localStorage.setItem('fontScale', String(scale));
            loadPreferences();
        }
    });

    document.getElementById('btn-dyslexia-toggle').addEventListener('click', () => {
        const current = localStorage.getItem('dyslexiaMode') === 'true';
        localStorage.setItem('dyslexiaMode', String(!current));
        loadPreferences();
    });

    loadPreferences();

    // =============================================
    // 2. TAB SWITCHER
    // =============================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const quizNavSection = document.getElementById('quiz-nav-section');

    const switchTab = (targetTab) => {
        tabButtons.forEach(btn => {
            const isTarget = btn.dataset.tab === targetTab;
            btn.classList.toggle('active', isTarget);
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        tabPanels.forEach(panel => {
            const panelTab = panel.id.replace('panel-', '');
            const isTarget = panelTab === targetTab;
            panel.classList.toggle('active', isTarget);
            panel.hidden = !isTarget;
        });

        // Show bottom nav for PG tab only
        quizNavSection.style.display = targetTab === 'pg' ? '' : 'none';

        // Update nav buttons states for the current active tab
        updateNavButtons();
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // =============================================
    // 3. PILIHAN GANDA (PG) QUIZ
    // =============================================
    const totalSoal = kuisPG.length;
    let currentSoalIndex = 0;
    let userAnswers = new Array(totalSoal).fill(null); // stores selected option index
    let isSubmitted = false;

    // DOM refs for PG
    const pgNumberGrid = document.getElementById('pg-number-grid');
    const pgSoalNumber = document.getElementById('pg-soal-number');
    const pgSoalOf = document.getElementById('pg-soal-of');
    const pgSoalText = document.getElementById('pg-soal-text');
    const pgOptionsList = document.getElementById('pg-options-list');
    const btnPrev = document.getElementById('btn-pg-prev');
    const btnNext = document.getElementById('btn-pg-next');
    const btnSubmit = document.getElementById('btn-pg-submit');
    const btnBackResults = document.getElementById('btn-back-results');
    const resultsOverlay = document.getElementById('results-overlay');

    // Build PG number grid
    const buildNumberGrid = () => {
        pgNumberGrid.innerHTML = '';
        for (let i = 0; i < totalSoal; i++) {
            const btn = document.createElement('button');
            btn.className = 'pg-num-btn';
            btn.textContent = i + 1;
            btn.id = `pg-num-${i}`;
            btn.setAttribute('aria-label', `Soal nomor ${i + 1}`);
            btn.addEventListener('click', () => navigateToSoal(i));
            pgNumberGrid.appendChild(btn);
        }
    };

    // Update PG number grid states
    const updateNumberGrid = () => {
        for (let i = 0; i < totalSoal; i++) {
            const btn = document.getElementById(`pg-num-${i}`);
            btn.classList.remove('num-active', 'num-answered', 'num-correct', 'num-wrong');

            if (isSubmitted) {
                if (userAnswers[i] === kuisPG[i].correctIndex) {
                    btn.classList.add('num-correct');
                } else if (userAnswers[i] !== null) {
                    btn.classList.add('num-wrong');
                }
            } else {
                if (userAnswers[i] !== null) {
                    btn.classList.add('num-answered');
                }
            }

            if (i === currentSoalIndex) {
                btn.classList.add('num-active');
            }
        }
    };

    // Render current PG soal
    const renderSoal = () => {
        const soal = kuisPG[currentSoalIndex];
        const optionLetters = ['أ', 'ب', 'ج', 'د', 'هـ'];

        pgSoalNumber.textContent = `Soal ${currentSoalIndex + 1}`;
        pgSoalOf.textContent = `dari ${totalSoal}`;
        pgSoalText.textContent = soal.soal;

        // Render context reading box if present
        const contextBox = document.getElementById('pg-context-box');
        if (soal.contextText) {
            contextBox.innerHTML = soal.contextText;
            contextBox.style.display = 'block';
        } else {
            contextBox.style.display = 'none';
        }

        // Render question image if present
        const imageContainer = document.getElementById('pg-image-container');
        const soalImg = document.getElementById('pg-soal-image');
        if (soal.gambar) {
            soalImg.src = soal.gambar;
            imageContainer.style.display = 'block';
        } else {
            soalImg.src = '';
            imageContainer.style.display = 'none';
        }

        pgOptionsList.innerHTML = '';
        soal.pilihan.forEach((pilihan, idx) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option-item';
            optionEl.id = `option-${currentSoalIndex}-${idx}`;
            optionEl.setAttribute('role', 'button');
            optionEl.setAttribute('tabindex', '0');

            if (userAnswers[currentSoalIndex] === idx) {
                optionEl.classList.add('selected');
            }

            if (isSubmitted) {
                optionEl.classList.add('locked');
                if (idx === soal.correctIndex) {
                    optionEl.classList.add('correct-answer');
                } else if (userAnswers[currentSoalIndex] === idx && idx !== soal.correctIndex) {
                    optionEl.classList.add('wrong-answer');
                }
            }

            optionEl.innerHTML = `
                <span class="option-badge">${optionLetters[idx]}</span>
                <span class="option-text">${pilihan}</span>
            `;

            if (!isSubmitted) {
                const handleSelect = () => {
                    userAnswers[currentSoalIndex] = idx;
                    renderSoal();
                    updateNumberGrid();
                    updateNavButtons();
                };
                optionEl.addEventListener('click', handleSelect);
                optionEl.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect();
                    }
                });
            }

            pgOptionsList.appendChild(optionEl);
        });

        updateNumberGrid();
        updateNavButtons();
    };

    // Navigate to specific PG soal
    const navigateToSoal = (index) => {
        if (index < 0 || index >= totalSoal) return;
        currentSoalIndex = index;

        const pgCard = document.getElementById('pg-card');
        pgCard.style.animation = 'none';
        pgCard.offsetHeight; // reflow
        pgCard.style.animation = 'fadeInPanel 0.3s ease-out';

        renderSoal();
    };

    const updateNavButtons = () => {
        btnPrev.disabled = currentSoalIndex === 0;
        if (isSubmitted) {
            // Review mode: tampilkan tombol Kembali ke Nilai di tengah
            btnSubmit.style.display = 'none';
            btnBackResults.style.display = '';
            btnNext.style.display = currentSoalIndex === totalSoal - 1 ? 'none' : '';
        } else {
            btnBackResults.style.display = 'none';
            if (currentSoalIndex === totalSoal - 1) {
                btnNext.style.display = 'none';
                btnSubmit.style.display = '';
            } else {
                btnNext.style.display = '';
                btnSubmit.style.display = 'none';
            }
        }
    };

    // Navigation events for bottom buttons
    btnPrev.addEventListener('click', () => {
        navigateToSoal(currentSoalIndex - 1);
    });

    btnNext.addEventListener('click', () => {
        navigateToSoal(currentSoalIndex + 1);
    });

    // Kembali ke Nilai — buka kembali overlay hasil
    btnBackResults.addEventListener('click', () => {
        resultsOverlay.classList.add('visible');
        resultsOverlay.setAttribute('aria-hidden', 'false');
    });

    // Submit kuis PG
    btnSubmit.addEventListener('click', () => {
        const unanswered = userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            const proceed = confirm(`Masih ada ${unanswered} soal yang belum dijawab. Lanjutkan kirim jawaban?`);
            if (!proceed) return;
        }

        isSubmitted = true;
        calculateAndShowResults();
        renderSoal();
    });

    // Calculate results and show overlay
    const calculateAndShowResults = () => {
        let correct = 0;
        for (let i = 0; i < totalSoal; i++) {
            if (userAnswers[i] === kuisPG[i].correctIndex) {
                correct++;
            }
        }
        const wrong = totalSoal - correct;
        const percentage = Math.round((correct / totalSoal) * 100);

        let emoji, message;
        if (percentage === 100) {
            emoji = '🏆';
            message = 'Sempurna! Kamu luar biasa! ⭐⭐⭐';
        } else if (percentage >= 80) {
            emoji = '🌟';
            message = 'Hebat! Kamu hampir sempurna! ⭐⭐';
        } else if (percentage >= 60) {
            emoji = '😊';
            message = 'Bagus! Terus belajar ya! ⭐';
        } else if (percentage >= 40) {
            emoji = '💪';
            message = 'Jangan menyerah! Ayo belajar lagi!';
        } else {
            emoji = '📖';
            message = 'Ayo pelajari lagi materinya dan coba kembali!';
        }

        document.getElementById('results-emoji').textContent = emoji;
        document.getElementById('results-score-number').textContent = correct;
        document.getElementById('results-message').textContent = message;
        document.getElementById('stat-correct-val').textContent = correct;
        document.getElementById('stat-wrong-val').textContent = wrong;
        document.getElementById('stat-total-val').textContent = totalSoal;

        resultsOverlay.classList.add('visible');
        resultsOverlay.setAttribute('aria-hidden', 'false');
    };

    // Close overlay actions
    document.getElementById('results-close-btn').addEventListener('click', () => {
        resultsOverlay.classList.remove('visible');
        resultsOverlay.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('results-review-btn').addEventListener('click', () => {
        resultsOverlay.classList.remove('visible');
        resultsOverlay.setAttribute('aria-hidden', 'true');
        navigateToSoal(0);
    });

    // Reset / retry kuis
    const resetKuis = () => {
        userAnswers = new Array(totalSoal).fill(null);
        isSubmitted = false;
        resultsOverlay.classList.remove('visible');
        resultsOverlay.setAttribute('aria-hidden', 'true');
        navigateToSoal(0);
        updateNumberGrid();
    };

    document.getElementById('results-retry-btn').addEventListener('click', resetKuis);

    resultsOverlay.addEventListener('click', (e) => {
        if (e.target === resultsOverlay) {
            resultsOverlay.classList.remove('visible');
            resultsOverlay.setAttribute('aria-hidden', 'true');
        }
    });

    // Keyboard navigation (Arrow Keys)
    document.addEventListener('keydown', (e) => {
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        if (resultsOverlay.classList.contains('visible')) return;

        if (activeTab === 'pg') {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentSoalIndex < totalSoal - 1) navigateToSoal(currentSoalIndex + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentSoalIndex > 0) navigateToSoal(currentSoalIndex - 1);
            }
        }
    });

    // Initialize PG
    buildNumberGrid();
    renderSoal();

    // =============================================
    // 4. PRAKTIK TAB
    // =============================================
    const renderPraktik = () => {
        document.getElementById('praktik-instruksi').textContent = praktikInfo.instruksi;

        const teacherInfoEl = document.getElementById('praktik-teacher-info');
        teacherInfoEl.innerHTML = `
            <div class="teacher-line">
                <span>👩‍🏫</span>
                <span>Guru: <strong>${praktikInfo.namaGuru}</strong></span>
            </div>
            <div class="teacher-line">
                <span>📱</span>
                <span>WhatsApp: <strong>+${praktikInfo.nomorWA}</strong></span>
            </div>
        `;

        const waBtn = document.getElementById('wa-send-btn');
        const encodedMessage = encodeURIComponent(praktikInfo.templatePesan);
        waBtn.href = `https://wa.me/${praktikInfo.nomorWA}?text=${encodedMessage}`;
    };

    renderPraktik();

    // =============================================
    // 6. TOUCH SWIPE SUPPORT (PG and Essay)
    // =============================================
    let touchStartX = 0;
    let touchEndX = 0;
    const quizMainContent = document.getElementById('quiz-main-content');

    quizMainContent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    quizMainContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        const diff = touchStartX - touchEndX;
        const threshold = 60;

        if (activeTab === 'pg') {
            if (diff > threshold && currentSoalIndex < totalSoal - 1) {
                navigateToSoal(currentSoalIndex + 1);
            } else if (diff < -threshold && currentSoalIndex > 0) {
                navigateToSoal(currentSoalIndex - 1);
            }
        }
    };
});
