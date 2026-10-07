/**
 * QOMAR PWA Helper
 * Handles Service Worker registration, install prompts, update notifications,
 * and offline/online status indicators.
 */

(function () {
    'use strict';

    // 1. Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Compute relative paths depending on page depth
            const isSubPage = window.location.pathname.includes('/Public/Page/');
            const swPath = isSubPage ? '../../sw.js' : './sw.js';
            const swScope = isSubPage ? '../../' : './';

            navigator.serviceWorker.register(swPath, { scope: swScope })
                .then((registration) => {
                    // Check for updates on page load
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (!newWorker) return;

                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                showUpdateToast(newWorker);
                            }
                        });
                    });
                })
                .catch((err) => {
                    console.warn('[PWA] Service Worker registration failed:', err);
                });

            // Handle controller change (reloads on update)
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    refreshing = true;
                    window.location.reload();
                }
            });
        });
    }

    // 2. Custom Install Prompt Handling
    let deferredInstallPrompt = null;
    const installDismissKey = 'qomar_pwa_install_dismissed';

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent default mini-infobar on mobile Chrome
        e.preventDefault();
        deferredInstallPrompt = e;

        // Check if user dismissed prompt recently (within 7 days)
        const dismissedAt = localStorage.getItem(installDismissKey);
        if (dismissedAt) {
            const daysSinceDismiss = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
            if (daysSinceDismiss < 7) {
                return;
            }
        }

        renderInstallBanner();
    });

    window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        removeInstallBanner();
        showToast('Aplikasi QOMAR telah terpasang di perangkat Anda!', 'success');
    });

    // Expose programmatic install function
    window.installPWA = async function () {
        if (deferredInstallPrompt) {
            deferredInstallPrompt.prompt();
            const choice = await deferredInstallPrompt.userChoice;
            if (choice.outcome === 'accepted') {
                removeInstallBanner();
            }
            deferredInstallPrompt = null;
        } else {
            // For iOS or browsers that don't support beforeinstallprompt
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (isIOS) {
                showToast('Di iPhone/iPad: tekan ikon Bagikan (Share) lalu pilih "Tambah ke Layar Utama".', 'info');
            } else {
                showToast('Aplikasi sudah terpasang atau gunakan menu peramban: pilih "Pasang aplikasi" / "Tambahkan ke Layar Utama".', 'info');
            }
        }
    };

    // Auto-bind click on any element with data-pwa-install attribute
    // and inject the persistent floating install FAB
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-pwa-install]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.installPWA();
            });
        });

        // Render floating install FAB on all pages
        renderInstallFAB();
    });

    // 3a. Floating Install FAB (always visible)
    function renderInstallFAB() {
        // Don't show if already installed (standalone mode)
        if (window.matchMedia('(display-mode: standalone)').matches) return;
        if (navigator.standalone === true) return;
        if (document.getElementById('qomar-pwa-fab')) return;

        const fab = document.createElement('button');
        fab.id = 'qomar-pwa-fab';
        fab.className = 'pwa-fab';
        fab.setAttribute('type', 'button');
        fab.setAttribute('aria-label', 'Pasang Aplikasi QOMAR');
        fab.setAttribute('title', 'Pasang Aplikasi QOMAR');

        fab.innerHTML = `
            <span class="pwa-fab-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </span>
            <span class="pwa-fab-label">Pasang Aplikasi</span>
        `;

        fab.addEventListener('click', () => window.installPWA());
        document.body.appendChild(fab);

        // Animate in after a short delay
        requestAnimationFrame(() => {
            setTimeout(() => fab.classList.add('pwa-fab-visible'), 600);
        });
    }

    // 3. UI Helpers: Install Banner
    function renderInstallBanner() {
        if (document.getElementById('qomar-pwa-install-banner')) return;

        const isSubPage = window.location.pathname.includes('/Public/Page/');
        const iconPath = isSubPage ? '../../icons/icon-192x192.png' : 'icons/icon-192x192.png';

        const banner = document.createElement('aside');
        banner.id = 'qomar-pwa-install-banner';
        banner.className = 'pwa-install-banner';
        banner.setAttribute('role', 'alert');
        banner.setAttribute('aria-label', 'Pasang Aplikasi QOMAR');

        banner.innerHTML = `
            <div class="pwa-banner-inner">
                <img src="${iconPath}" alt="Logo QOMAR" class="pwa-banner-icon" width="48" height="48" loading="lazy">
                <div class="pwa-banner-text">
                    <strong class="pwa-banner-title">Pasang Aplikasi QOMAR</strong>
                    <span class="pwa-banner-desc">Belajar lebih cepat & bisa diakses tanpa internet!</span>
                </div>
                <div class="pwa-banner-actions">
                    <button type="button" id="pwa-btn-dismiss" class="pwa-btn-text" aria-label="Nanti saja">Nanti</button>
                    <button type="button" id="pwa-btn-install" class="pwa-btn-primary" aria-label="Pasang Sekarang">Pasang</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        const btnInstall = document.getElementById('pwa-btn-install');
        const btnDismiss = document.getElementById('pwa-btn-dismiss');

        if (btnInstall) {
            btnInstall.addEventListener('click', async () => {
                if (!deferredInstallPrompt) return;
                banner.classList.add('pwa-hiding');
                deferredInstallPrompt.prompt();
                const choice = await deferredInstallPrompt.userChoice;
                if (choice.outcome === 'accepted') {
                    console.log('[PWA] User accepted install prompt');
                }
                deferredInstallPrompt = null;
                setTimeout(() => banner.remove(), 300);
            });
        }

        if (btnDismiss) {
            btnDismiss.addEventListener('click', () => {
                localStorage.setItem(installDismissKey, Date.now().toString());
                banner.classList.add('pwa-hiding');
                setTimeout(() => banner.remove(), 300);
            });
        }
    }

    function removeInstallBanner() {
        const banner = document.getElementById('qomar-pwa-install-banner');
        if (banner) {
            banner.classList.add('pwa-hiding');
            setTimeout(() => banner.remove(), 300);
        }
    }

    // 4. UI Helpers: Toasts
    function showToast(message, type = 'info', actionText = null, onAction = null) {
        let container = document.getElementById('qomar-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'qomar-toast-container';
            container.className = 'pwa-toast-container';
            container.setAttribute('aria-live', 'polite');
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `pwa-toast pwa-toast-${type}`;

        let actionBtnHtml = '';
        if (actionText) {
            actionBtnHtml = `<button type="button" class="pwa-toast-action">${actionText}</button>`;
        }

        toast.innerHTML = `
            <span class="pwa-toast-msg">${message}</span>
            ${actionBtnHtml}
        `;

        container.appendChild(toast);

        if (actionText && onAction) {
            const actBtn = toast.querySelector('.pwa-toast-action');
            if (actBtn) {
                actBtn.addEventListener('click', () => {
                    onAction();
                    toast.remove();
                });
            }
        }

        // Auto remove toast after 4.5 seconds if no action button
        if (!actionText) {
            setTimeout(() => {
                toast.classList.add('pwa-toast-exit');
                setTimeout(() => toast.remove(), 300);
            }, 4500);
        }
    }

    function showUpdateToast(worker) {
        showToast(
            'Versi baru telah tersedia!',
            'update',
            'Perbarui',
            () => {
                worker.postMessage({ action: 'skipWaiting' });
            }
        );
    }

    // 5. Online / Offline Connectivity Listeners
    window.addEventListener('online', () => {
        showToast('Koneksi internet terhubung kembali.', 'online');
    });

    window.addEventListener('offline', () => {
        showToast('Mode offline aktif: materi yang tersimpan tetap dapat dibuka.', 'offline');
    });

})();
