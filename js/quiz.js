/* ==========================================================================
   Quiz Interaktif Logic (quiz.js) - QOMAR Project
   Handles: Tab switching, Bab switching (Bab 1, Bab 2, Bab 3 PG), UDL sync
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. UDL PREFERENCES SYNC
    // =============================================
    function loadPreferences() {
        const scale = localStorage.getItem('fontScale') || '100';
        const dyslexia = localStorage.getItem('dyslexiaMode') === 'true';

        document.documentElement.className = document.documentElement.className.replace(/\bfont-scale-\d+\b/g, '');
        document.documentElement.classList.add(`font-scale-${scale}`);
        
        const zoomDisplay = document.getElementById('zoom-level-display');
        if (zoomDisplay) zoomDisplay.textContent = `${scale}%`;

        const btnDyslexia = document.getElementById('btn-dyslexia-toggle');
        if (btnDyslexia) {
            if (dyslexia) {
                document.body.classList.add('dyslexia-mode');
                btnDyslexia.classList.add('active');
            } else {
                document.body.classList.remove('dyslexia-mode');
                btnDyslexia.classList.remove('active');
            }
        }
    }

    function getCurrentScale() {
        return parseInt(localStorage.getItem('fontScale') || '100', 10);
    }

    const btnZoomIn = document.getElementById('btn-zoom-in');
    if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
            let scale = getCurrentScale();
            if (scale < 160) {
                scale += 10;
                localStorage.setItem('fontScale', String(scale));
                loadPreferences();
            }
        });
    }

    const btnZoomOut = document.getElementById('btn-zoom-out');
    if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
            let scale = getCurrentScale();
            if (scale > 100) {
                scale -= 10;
                localStorage.setItem('fontScale', String(scale));
                loadPreferences();
            }
        });
    }

    const btnDyslexiaToggle = document.getElementById('btn-dyslexia-toggle');
    if (btnDyslexiaToggle) {
        btnDyslexiaToggle.addEventListener('click', () => {
            const current = localStorage.getItem('dyslexiaMode') === 'true';
            localStorage.setItem('dyslexiaMode', String(!current));
            loadPreferences();
        });
    }

    loadPreferences();

    // =============================================
    // 2. TAB SWITCHER (Pilihan Ganda vs Tugas Praktik)
    // =============================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const quizNavSection = document.getElementById('quiz-nav-section');

    function switchTab(targetTab) {
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

        if (quizNavSection) {
            quizNavSection.style.display = targetTab === 'pg' ? '' : 'none';
        }

        updateNavButtons();
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // =============================================
    // 3. PILIHAN GANDA (PG) QUIZ PER BAB
    // =============================================
    let currentBab = 1; // Default Bab 1
    let currentSoalIndex = 0; // 0..9 within active Bab

    // User answers & submission state per Bab
    let userAnswersPerBab = {
        1: new Array(10).fill(null),
        2: new Array(10).fill(null),
        3: new Array(10).fill(null)
    };

    let isSubmittedPerBab = {
        1: false,
        2: false,
        3: false
    };

    // Helper: get current Bab's questions safely
    function getActiveQuestions() {
        if (typeof kuisPG === 'undefined' || !Array.isArray(kuisPG)) {
            console.error("kuisPG array not loaded from data.js");
            return [];
        }
        return kuisPG.filter(q => q && q.bab === currentBab);
    }

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
    const babBtns = document.querySelectorAll('.bab-btn');

    function updateNavButtons() {
        const questions = getActiveQuestions();
        const totalInBab = questions.length;
        const isSubmitted = isSubmittedPerBab[currentBab];

        if (btnPrev) btnPrev.disabled = currentSoalIndex === 0;

        if (isSubmitted) {
            if (btnSubmit) btnSubmit.style.display = 'none';
            if (btnBackResults) btnBackResults.style.display = '';
            if (btnNext) btnNext.style.display = currentSoalIndex === totalInBab - 1 ? 'none' : '';
        } else {
            if (btnBackResults) btnBackResults.style.display = 'none';
            if (currentSoalIndex === totalInBab - 1) {
                if (btnNext) btnNext.style.display = 'none';
                if (btnSubmit) btnSubmit.style.display = '';
            } else {
                if (btnNext) btnNext.style.display = '';
                if (btnSubmit) btnSubmit.style.display = 'none';
            }
        }
    }

    function buildNumberGrid() {
        const questions = getActiveQuestions();
        if (!pgNumberGrid) return;
        pgNumberGrid.innerHTML = '';
        questions.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = 'pg-num-btn';
            btn.textContent = i + 1;
            btn.id = `pg-num-${i}`;
            btn.setAttribute('aria-label', `Soal nomor ${i + 1}`);
            btn.addEventListener('click', () => navigateToSoal(i));
            pgNumberGrid.appendChild(btn);
        });
    }

    function updateNumberGrid() {
        const questions = getActiveQuestions();
        const userAnswers = userAnswersPerBab[currentBab];
        const isSubmitted = isSubmittedPerBab[currentBab];

        questions.forEach((soal, i) => {
            const btn = document.getElementById(`pg-num-${i}`);
            if (!btn) return;

            btn.classList.remove('num-active', 'num-answered', 'num-correct', 'num-wrong');

            if (isSubmitted) {
                if (userAnswers[i] === soal.correctIndex) {
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
        });
    }

    function renderSoal() {
        const questions = getActiveQuestions();
        const soal = questions[currentSoalIndex];
        const userAnswers = userAnswersPerBab[currentBab];
        const isSubmitted = isSubmittedPerBab[currentBab];
        const optionLetters = ['أ', 'ب', 'ج', 'د', 'هـ'];

        if (!soal) {
            console.warn("No question found for index", currentSoalIndex, "in Bab", currentBab);
            return;
        }

        if (pgSoalNumber) pgSoalNumber.textContent = `Soal ${currentSoalIndex + 1}`;
        if (pgSoalOf) pgSoalOf.textContent = `dari ${questions.length}`;
        if (pgSoalText) pgSoalText.textContent = soal.soal;

        // Context reading box
        const contextBox = document.getElementById('pg-context-box');
        if (contextBox) {
            if (soal.contextText) {
                contextBox.innerHTML = soal.contextText;
                contextBox.style.display = 'block';
            } else {
                contextBox.style.display = 'none';
            }
        }

        // Image container
        const imageContainer = document.getElementById('pg-image-container');
        const soalImg = document.getElementById('pg-soal-image');
        if (imageContainer && soalImg) {
            if (soal.gambar) {
                soalImg.decoding = 'async';
                soalImg.src = soal.gambar;
                imageContainer.style.display = 'block';
            } else {
                soalImg.src = '';
                imageContainer.style.display = 'none';
            }
        }

        // Preload next image
        const nextSoal = questions[currentSoalIndex + 1];
        if (nextSoal && nextSoal.gambar) {
            const nextImg = new Image();
            nextImg.src = nextSoal.gambar;
        }

        if (pgOptionsList) {
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
                        userAnswersPerBab[currentBab][currentSoalIndex] = idx;
                        renderSoal();
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
        }

        updateNumberGrid();
        updateNavButtons();
    }

    function switchBab(babNum) {
        currentBab = parseInt(babNum, 10);
        currentSoalIndex = 0;

        babBtns.forEach(btn => {
            const btnBab = btn.getAttribute('data-bab');
            const isActive = parseInt(btnBab, 10) === currentBab;
            btn.classList.toggle('active', isActive);
        });

        const babTitles = {
            1: "Bab 1: الْعُنْوَانُ (Alamat)",
            2: "Bab 2: الْمِهْنَةُ (Profesi)",
            3: "Bab 3: أَمَلِيْ (Cita-citaku)"
        };

        const instructionEl = document.getElementById('quiz-instruction-text');
        if (instructionEl) {
            instructionEl.textContent = `Kuis ${babTitles[currentBab]} - Pilihlah jawaban yang benar!`;
        }

        buildNumberGrid();
        renderSoal();
    }

    babBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const babNum = btn.getAttribute('data-bab');
            if (babNum) switchBab(babNum);
        });
    });

    function navigateToSoal(index) {
        const questions = getActiveQuestions();
        if (index < 0 || index >= questions.length) return;
        currentSoalIndex = index;

        const pgCard = document.getElementById('pg-card');
        if (pgCard) {
            pgCard.style.animation = 'none';
            pgCard.offsetHeight; // reflow
            pgCard.style.animation = 'fadeInPanel 0.3s ease-out';
        }

        renderSoal();
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            navigateToSoal(currentSoalIndex - 1);
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            navigateToSoal(currentSoalIndex + 1);
        });
    }

    if (btnBackResults) {
        btnBackResults.addEventListener('click', () => {
            if (resultsOverlay) {
                resultsOverlay.classList.add('visible');
                resultsOverlay.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (btnSubmit) {
        btnSubmit.addEventListener('click', () => {
            const userAnswers = userAnswersPerBab[currentBab];
            const unanswered = userAnswers.filter(a => a === null).length;
            if (unanswered > 0) {
                const proceed = confirm(`Masih ada ${unanswered} soal Bab ${currentBab} yang belum dijawab. Lanjutkan kirim jawaban?`);
                if (!proceed) return;
            }

            isSubmittedPerBab[currentBab] = true;
            calculateAndShowResults();
            renderSoal();
        });
    }

    function calculateAndShowResults() {
        const questions = getActiveQuestions();
        const userAnswers = userAnswersPerBab[currentBab];
        const totalInBab = questions.length;

        let correct = 0;
        for (let i = 0; i < totalInBab; i++) {
            if (userAnswers[i] === questions[i].correctIndex) {
                correct++;
            }
        }
        const wrong = totalInBab - correct;
        const percentage = Math.round((correct / totalInBab) * 100);

        let emoji, message;
        if (percentage === 100) {
            emoji = '🏆';
            message = `Sempurna! Hasil Kuis Bab ${currentBab} Kamu Luar Biasa! ⭐⭐⭐`;
        } else if (percentage >= 80) {
            emoji = '🌟';
            message = `Hebat! Hasil Kuis Bab ${currentBab} Kamu Sangat Bagus! ⭐⭐`;
        } else if (percentage >= 60) {
            emoji = '😊';
            message = `Bagus! Hasil Kuis Bab ${currentBab} Cukup Baik! ⭐`;
        } else if (percentage >= 40) {
            emoji = '💪';
            message = `Jangan menyerah! Pelajari lagi Bab ${currentBab} dan coba kembali!`;
        } else {
            emoji = '📖';
            message = `Ayo pelajari kembali materi Bab ${currentBab} lalu coba lagi!`;
        }

        const resEmoji = document.getElementById('results-emoji');
        if (resEmoji) resEmoji.textContent = emoji;

        const resScoreNum = document.getElementById('results-score-number');
        if (resScoreNum) resScoreNum.textContent = correct;

        const resMsg = document.getElementById('results-message');
        if (resMsg) resMsg.textContent = message;

        const statCorr = document.getElementById('stat-correct-val');
        if (statCorr) statCorr.textContent = correct;

        const statWrong = document.getElementById('stat-wrong-val');
        if (statWrong) statWrong.textContent = wrong;

        const statTotal = document.getElementById('stat-total-val');
        if (statTotal) statTotal.textContent = totalInBab;

        if (resultsOverlay) {
            resultsOverlay.classList.add('visible');
            resultsOverlay.setAttribute('aria-hidden', 'false');
        }
    }

    const btnCloseRes = document.getElementById('results-close-btn');
    if (btnCloseRes) {
        btnCloseRes.addEventListener('click', () => {
            if (resultsOverlay) {
                resultsOverlay.classList.remove('visible');
                resultsOverlay.setAttribute('aria-hidden', 'true');
            }
        });
    }

    const btnRevRes = document.getElementById('results-review-btn');
    if (btnRevRes) {
        btnRevRes.addEventListener('click', () => {
            if (resultsOverlay) {
                resultsOverlay.classList.remove('visible');
                resultsOverlay.setAttribute('aria-hidden', 'true');
            }
            navigateToSoal(0);
        });
    }

    function resetKuis() {
        userAnswersPerBab[currentBab] = new Array(10).fill(null);
        isSubmittedPerBab[currentBab] = false;
        if (resultsOverlay) {
            resultsOverlay.classList.remove('visible');
            resultsOverlay.setAttribute('aria-hidden', 'true');
        }
        navigateToSoal(0);
    }

    const btnRetryRes = document.getElementById('results-retry-btn');
    if (btnRetryRes) {
        btnRetryRes.addEventListener('click', resetKuis);
    }

    if (resultsOverlay) {
        resultsOverlay.addEventListener('click', (e) => {
            if (e.target === resultsOverlay) {
                resultsOverlay.classList.remove('visible');
                resultsOverlay.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Keyboard navigation (Arrow Keys)
    document.addEventListener('keydown', (e) => {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        if (!activeTabBtn || (resultsOverlay && resultsOverlay.classList.contains('visible'))) return;

        const activeTab = activeTabBtn.dataset.tab;
        if (activeTab === 'pg') {
            const questions = getActiveQuestions();
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentSoalIndex < questions.length - 1) navigateToSoal(currentSoalIndex + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentSoalIndex > 0) navigateToSoal(currentSoalIndex - 1);
            }
        }
    });

    // Auto load Bab from URL parameter if present (e.g., ?bab=2)
    const urlParams = new URLSearchParams(window.location.search);
    const babParam = urlParams.get('bab') || urlParams.get('tema');
    let initBab = 1;
    if (babParam) {
        let babNum = parseInt(babParam, 10);
        if (isNaN(babNum) && babParam.startsWith('tema')) {
            babNum = parseInt(babParam.replace('tema', ''), 10);
        }
        if ([1, 2, 3].includes(babNum)) {
            initBab = babNum;
        }
    }

    // Initialize with parsed/default Bab
    switchBab(initBab);

    // =============================================
    // 4. PRAKTIK TAB
    // =============================================
    function renderPraktik() {
        if (typeof praktikInfo === 'undefined') return;

        const instEl = document.getElementById('praktik-instruksi');
        if (instEl) instEl.textContent = praktikInfo.instruksi;

        const teacherInfoEl = document.getElementById('praktik-teacher-info');
        if (teacherInfoEl) {
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
        }

        const waBtn = document.getElementById('wa-send-btn');
        if (waBtn) {
            const encodedMessage = encodeURIComponent(praktikInfo.templatePesan);
            waBtn.href = `https://wa.me/${praktikInfo.nomorWA}?text=${encodedMessage}`;
        }
    }

    renderPraktik();

    // =============================================
    // 5. TOUCH SWIPE SUPPORT (PG)
    // =============================================
    let touchStartX = 0;
    let touchEndX = 0;
    const quizMainContent = document.getElementById('quiz-main-content');

    if (quizMainContent) {
        quizMainContent.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        quizMainContent.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        if (!activeTabBtn) return;
        const activeTab = activeTabBtn.dataset.tab;
        const diff = touchStartX - touchEndX;
        const threshold = 60;
        const questions = getActiveQuestions();

        if (activeTab === 'pg') {
            if (diff > threshold && currentSoalIndex < questions.length - 1) {
                navigateToSoal(currentSoalIndex + 1);
            } else if (diff < -threshold && currentSoalIndex > 0) {
                navigateToSoal(currentSoalIndex - 1);
            }
        }
    }
});
