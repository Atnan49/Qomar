# Dokumen Serah Terima Proyek (Project Handover Document)
## Proyek: Platform Pembelajaran Bahasa Arab Berbasis Komik Digital "QOMAR"

---

## 1. Informasi Umum Proyek

- **Nama Aplikasi**: QOMAR (*Qira'atu-l-Komik Lughatul Arabiyah*)
- **Versi Rilis**: v1.0.0 (Production Release)
- **Tanggal Serah Terima**: 28 Juli 2026
- **Sasaran Pengguna**: Siswa Kelas IV Madrasah Ibtidaiyah (MI) & Guru Bahasa Arab
- **Tim Pengembang**:
  - **Pimpinan Tim & Lead Developer**: Atnan (*Data Store, Welcome Page, Modul Kosa Kata*)
  - **Developer**: Narendra (*Modul Video Komik & Playlist*)
  - **Developer**: Rifki (*Modul Kuis 3-Tab & WhatsApp Integration*)
- **Pihak Klien / Instansi**: Ocktavia Annisa / UNIDA (Universitas Darussalam Gontor) & Mitra Sekolah MI

---

## 2. Rincian Aset & Komponen yang Diserahkan

Dengan diserahkannya dokumen ini, Pihak Pengembang telah menyerahkan seluruh aset digital berikut secara utuh dan berfungsi penuh kepada Pihak Klien:

### A. Kode Sumber (Source Code & Repositori)
1. **Repositori Git Utama**: `Atnan49/Qomar`
2. **Berkas HTML Utama**:
   - [index.html](file:///d:/Projek-web/Qomar/index.html) (Halaman Pembuka / Welcome Splash Screen)
   - [dashboard.html](file:///d:/Projek-web/Qomar/Public/Page/dashboard.html) (Hub Pembelajaran Utama)
   - [kosa_kata.html](file:///d:/Projek-web/Qomar/Public/Page/kosa_kata.html) (Modul Flashcard Kosakata)
   - [video.html](file:///d:/Projek-web/Qomar/Public/Page/video.html) (Modul Pemutar Video Komik)
   - [Kuis.html](file:///d:/Projek-web/Qomar/Public/Page/Kuis.html) (Modul Evaluasi Kuis 3-Tab)
3. **Berkas Logika JavaScript (`js/`)**:
   - `data.js`: Database statis terpusat (Data Kosakata, Audio, Video, Soal PG, Soal Essay, & Kontak WA Guru).
   - `kosa_kata.js`: Logika slider flashcard, swipe touch, audio player, dan UDL sync.
   - `video.js`: Logika pemutar video 16:9, playlist switcher, dan UDL sync.
   - `quiz.js`: Logika tab switcher, kuis PG otomatis, skor modal, pembuka kunci jawaban essay, & integrasi WhatsApp.
4. **Berkas CSS & Design Tokens (`css/`)**:
   - `common.css`: Variabel warna, efek Glassmorphism, animasi, & kelas UDL (Zoom/Dyslexia).
   - `welcome.css`, `index.css`, `kosa_kata.css`, `video.css`, `kuis.css`: Styling spesifik per modul.

### B. Aset Media Digital (`Public/` & `MEDIA KOMIK/`)
1. **Gambar Komik & Ilustrasi**:
   - Berkas komik Bab 1, Bab 2, dan Bab 3 dalam format WebP berkualitas tinggi & ringan.
   - Ilustrasi flashcard kosakata dan ikon UI.
2. **Audio Pelafalan**:
   - Rekaman audio pelafalan kata bahasa Arab (.mp3) untuk seluruh kosakata Bab 1, 2, dan 3.
3. **Video Pembelajaran**:
   - Berkas video MP4 perkenalan cerita komik Bab 1, Bab 2, dan Bab 3.
4. **Tipografi / Fonts**:
   - Font OpenDyslexic (.otf/.ttf) & Google Amiri / Inter.

### C. Dokumen Pendukung Proyek (`Documentation/`)
1. `1_Spesifikasi_Klien_PRD.md` (Product Requirement Document)
2. `2_Spesifikasi_Teknis_Arsitektur.md` (Spesifikasi Teknis & Arsitektur Kode)
3. `3_Roadmap_WBS.md` (Roadmap & Pembagian Tugas)
4. `4_Rencana_Pengujian_QA_UAT.md` (Hasil Pengujian QA & Lembar UAT)
5. `5_Dokumen_Serah_Terima_Handover.md` (Dokumen Serah Terima Proyek ini)
6. `6_Buku_Panduan_Penggunaan_Manual_Book.md` (Buku Panduan Guru & Siswa)

---

## 3. Tautan Akses Live & Hosting

- **URL Akses Publik Web (Production)**: `https://qomar.vercel.app` (atau URL GitHub Pages mitra)
- **Metode Hosting**: Vercel Serverless Static Hosting / GitHub Pages (CI/CD Otomatis saat push ke branch `main`).
- **Persyaratan Akses**: Dapat dibuka dari browser apa pun (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge) tanpa perlu instalasi aplikasi tambahan.

---

## 4. Panduan Pemeliharaan & Pembaruan Konten (Maintenance Guide)

Klien atau pengelola media dapat memperbarui isi materi pembelajaran dengan sangat mudah tanpa perlu mengubah struktur HTML/CSS. Pembaruan dilakukan melalui berkas **`js/data.js`**:

### A. Mengubah Nomor WhatsApp Guru Penerima Tugas
Buka file `js/data.js`, cari objek `praktikInfo`, lalu ubah nilai `nomorWA`:
```javascript
const praktikInfo = {
    instruksi: "Rekam video dirimu sedang membaca...",
    nomorWA: "6285707602967", // <-- Ganti dengan nomor WA Guru (Gunakan awalan 62)
    namaGuru: "Ustadzah Annisa Ocktavia",
    templatePesan: "Assalamu'alaikum, Ustadzah..."
};
```

### B. Menambah / Mengubah Kosakata
Buka `js/data.js` pada bagian `kosaKataMateri`, lalu edit atau tambahkan objek baru sesuai tema:
```javascript
{
  id: 11,
  arab: "كِتَابٌ",
  transliterasi: "Kitābun",
  arti: "Buku",
  gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar_buku.webp",
  audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice_buku.mp3"
}
```

### C. Menambah / Mengubah Soal Kuis Pilihan Ganda
Edit objek pada array `kuisPG` di file `js/data.js`:
```javascript
{
    id: 21,
    soal: "مَا مَعْنَى 'كِتَابٌ'؟",
    pilihan: ["Pena", "Buku", "Meja", "Papan Tulis"],
    correctIndex: 1 // Indeks jawaban benar (0=A, 1=B, 2=C, 3=D)
}
```

---

## 5. Garansi & Dukungan Pengembang

1. **Masa Garansi Bebas Bug**: Pihak Pengembang memberikan dukungan perbaikan bug gratis selama **30 (tiga puluh) hari** terhitung sejak tanggal serah terima.
2. **Cakupan Perbaikan**: Garansi mencakup perbaikan kesalahan tampilan, masalah link yang putus, atau kegagalan fungsi script pada perangkat yang didukung.

---

## 6. Berita Acara Serah Terima (BAST)

Pada hari ini, **Selasa, 28 Juli 2026**, telah dilaksanakan serah terima proyek platform pembelajaran **QOMAR** antara:

- **PIHAK PERTAMA (Tim Pengembang)**:
  Dalam hal ini bertindak atas nama Tim Pengembang Web QOMAR yang menyerahkan hasil pekerjaan secara lengkap dan dapat diakses publik.

- **PIHAK KEDUA (Klien / Instansi)**:
  Dalam hal ini bertindak atas nama Pengguna / Mitra Sekolah yang menerima seluruh aset kode, dokumen teknis, dan hak penggunaan media QOMAR.

Kedua belah pihak menyatakan bahwa pekerjaan telah selesai 100% sesuai dengan spesifikasi dan kriteria penerimaan yang disepakati.

<br>

| PIHAK PERTAMA (Pengembang) | PIHAK KEDUA (Klien / Guru) |
| :---: | :---: |
| <br><br><br>**<u>Atnan</u>**<br>Pimpinan Tim Developer | <br><br><br>**<u>Ocktavia Annisa</u>**<br>Klien / Guru Bahasa Arab MI |
