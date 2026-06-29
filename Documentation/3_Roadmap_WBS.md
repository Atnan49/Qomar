# Project Roadmap & Work Breakdown Structure (WBS)
## Proyek: E-Book Komik Digital QOMAR

---

## 1. Jadwal Pengerjaan Proyek (Milestones)

Proyek pengembangan platform QOMAR dikelompokkan ke dalam 4 Fase Utama selama masa pengerjaan 4 minggu:

| Fase | Kegiatan Utama | Durasi | Target Output |
| :--- | :--- | :--- | :--- |
| **Fase 1** | Perencanaan & Desain Base System | - | Dokumen SRS/PRD disetujui, inisialisasi Git, pembuatan halaman pembuka (index), stylesheet common.css, dan welcome.css. |
| **Fase 2** | Pengembangan Modul Independen | - | Penyusunan data.js, penyelesaian kerangka HTML/CSS kosa kata, video, dan kuis secara terpisah. |
| **Fase 3** | Integrasi Logika & UDL Sync | - | Penggabungan preferensi UDL (Zoom text & Dyslexia mode) ke localStorage di seluruh halaman, fungsionalitas slider, playlist, dan skor kuis. |
| **Fase 4** | Pengujian, UAT & Peluncuran | - | Pengujian bug bersama, sesi User Acceptance Testing (UAT) oleh Klien/Guru, perbaikan minor, dan deployment ke Vercel/GitHub Pages. |

---

## 2. Work Breakdown Structure (WBS) - Pembagian Tugas

Setiap pengembang memiliki tanggung jawab spesifik terhadap berkas-berkas dalam repositori:

### 👤 Atnan: Pimpinan Tim, Halaman Utama & Database Terpusat
Atnan bertanggung jawab atas pondasi data bersama, arsitektur halaman masuk, dan modul kosa kata.
- **WBS 1.1: Database Terpusat**
  - Membuat berkas `js/data.js` yang memuat struktur array data kosakata, video, PG, essay, dan WhatsApp guru.
- **WBS 1.2: Halaman Pembuka & Dashboard**
  - Menyusun dan merapikan [index.html](file:///d:/Projek-web/Ebook/Qomar/index.html) dan [welcome.css](file:///d:/Projek-web/Ebook/Qomar/css/welcome.css).
  - Menyiapkan template kosong [dashboard.html](file:///d:/Projek-web/Ebook/Qomar/Public/Page/dashboard.html) dan menu navigasinya untuk diselesaikan kemudian.
- **WBS 1.3: Modul Kosa Kata**
  - Membuat kerangka [kosa_kata.html](file:///d:/Projek-web/Ebook/Qomar/Public/Page/kosa_kata.html) dengan toolbar UDL di header.
  - Menulis logika slider kartu kosa kata pada [kosa_kata.js](file:///d:/Projek-web/Ebook/Qomar/js/kosa_kata.js) (termasuk navigasi sentuh/swipe, indikator dots, progress bar).
  - Mendesain gaya visual kartu glassmorphism di [kosa_kata.css](file:///d:/Projek-web/Ebook/Qomar/css/kosa_kata.css).

### 👤 Narendra: Modul Pemutar & Daftar Putar Video
Narendra bertanggung jawab atas modul visualisasi cerita komik berupa playlist video.
- **WBS 2.1: Struktur Pemutar Video**
  - Membuat berkas [video.html](file:///d:/Projek-web/Ebook/Qomar/Public/Page/video.html) dengan tag `<video controls>` dan integrasi toolbar UDL.
- **WBS 2.2: Logika Daftar Putar (Playlist)**
  - Menulis script [video.js](file:///d:/Projek-web/Ebook/Qomar/js/video.js) untuk membaca data video di `data.js`.
  - Mengimplementasikan fungsionalitas pemutaran video dinamis saat playlist diklik, update otomatis deskripsi video, dan tombol lanjut ke halaman kuis.
- **WBS 2.3: Gaya Visual Video**
  - Mendesain layout responsif [video.css](file:///d:/Projek-web/Ebook/Qomar/css/video.css) (aspek rasio pemutar 16:9, penanda playlist aktif, dan pergeseran playlist ke bawah video pada layar mobile).

### 👤 Rifki: Modul Evaluasi & Kuis Interaktif
Rifki bertanggung jawab atas evaluasi pemahaman siswa melalui 3 tab pengujian.
- **WBS 3.1: Struktur Kuis 3-Tab**
  - Membuat berkas [Kuis.html](file:///d:/Projek-web/Ebook/Qomar/Public/Page/Kuis.html) dengan tab navigasi switcher (Pilihan Ganda, Essay, Praktik).
- **WBS 3.2: Logika Penilaian Kuis**
  - Menulis script [quiz.js](file:///d:/Projek-web/Ebook/Qomar/js/quiz.js) untuk mengontrol pergantian tab tanpa refresh halaman.
  - Membuat logika interaktif untuk PG (pemberian warna tombol pilihan pasca klik, perhitungan skor akhir, pemunculan modal skor pop-up).
  - Membuat logika reveal kunci jawaban essay dan penyematan link kirim tugas video ke WhatsApp Guru.
- **WBS 3.3: Gaya Visual Kuis**
  - Menyusun stylesheet [kuis.css](file:///d:/Projek-web/Ebook/Qomar/css/kuis.css) (desain tombol tab aktif, warna border pilihan ganda benar/salah, modal skor emas, kolom input essay, dan tombol WhatsApp hijau).

---

## 3. Rencana Peluncuran (Deployment Plan)

Setelah melewati fase pengujian (QA) dan disetujui oleh Klien (UAT), platform QOMAR akan dideploy menggunakan layanan hosting statis gratis yang cepat dan aman:
- **Pilihan Utama**: **Vercel**
  - Menghubungkan repositori GitHub `Atnan49/Qomar` langsung ke dashboard Vercel untuk otomatisasi integrasi berkelanjutan (CI/CD). Setiap pembaruan kode di branch `main` akan langsung terupdate di URL publik.
- **Alamat Akses**: Klien akan diberikan link akses publik (misal: `https://qomar.vercel.app` atau `https://atnan49.github.io/Qomar/`) untuk dibagikan kepada guru dan siswa kelas IV MI.
