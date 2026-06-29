# Rencana Pengujian: Quality Assurance (QA) & User Acceptance Testing (UAT)
## Proyek: E-Book Komik Digital QOMAR

---

## 1. Matriks Pengujian Pengembang (QA Testing Matrix)

Tim pengembang wajib menjalankan pengujian internal berikut sebelum menyerahkan aplikasi ke klien:

| ID Tes | Modul | Deskripsi Pengujian | Hasil yang Diharapkan | Status |
| :--- | :--- | :--- | :--- | :--- |
| **QA-01** | Splash Screen | Klik tombol "Mulai Belajar" di halaman `index.html`. | Sistem berpindah ke halaman `Public/Page/dashboard.html` secara mulus. | [ ] |
| **QA-02** | UDL - Zoom | Klik tombol `A+` sebanyak 3x, lalu beralih ke halaman video dan kuis. | Ukuran teks membesar hingga 130% dan tetap besar di halaman lain. | [ ] |
| **QA-03** | UDL - Dyslexia | Klik toggle "Mode Disleksia", lalu beralih halaman. | Font seluruh teks (kecuali Arab) berganti ke tipe OpenDyslexic / Comic Sans. | [ ] |
| **QA-04** | Kosa Kata | Geser kartu kosa kata ke kiri/kanan. | Kartu berganti slide dengan animasi transisi yang halus. | [ ] |
| **QA-05** | Kosa Kata | Navigasi sampai kartu kosa kata terakhir. | Tombol "Berikutnya" berubah teks menjadi "Tonton Video" dan merujuk ke `video.html`. | [ ] |
| **QA-06** | Video | Klik salah satu judul di daftar putar (playlist). | Pemutar video berganti memutar video baru dan judul deskripsi di bawah terupdate. | [ ] |
| **QA-07** | Kuis - PG | Jawab soal PG dengan pilihan salah, lalu pilihan benar. | Tombol berubah merah untuk jawaban salah, dan hijau untuk jawaban benar. | [ ] |
| **QA-08** | Kuis - PG | Menyelesaikan seluruh soal PG. | Muncul modal popup overlay warna emas berisi skor akhir dan tombol tutup kuis. | [ ] |
| **QA-09** | Kuis - Essay | Klik tombol "Buka Kunci Jawaban" di bawah soal essay. | Teks kunci jawaban resmi muncul secara instan di bawah kolom input jawaban. | [ ] |
| **QA-10** | Kuis - Praktik | Klik tombol "Kirim ke WhatsApp Guru" pada Tab Praktik. | Tab browser baru terbuka menuju API WhatsApp dengan isi pesan default tugas praktik. | [ ] |

---

## 2. Formulir Penerimaan Pengguna (UAT Worksheet untuk Klien)

Dokumen ini diberikan kepada perwakilan klien (Guru Bahasa Arab Kelas IV MI/Kepala Madrasah) untuk diverifikasi secara langsung sebelum serah terima produk final:

- **Nama Penguji (Klien)**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- **Instansi/Sekolah**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- **Tanggal Pengujian**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Tabel Verifikasi Fitur Klien:

| No | Komponen Pembelajaran | Kriteria Penilaian | Validasi Klien (Ya / Tidak) | Catatan Masukan Klien |
| :-: | :--- | :--- | :---: | :--- |
| 1 | **Tampilan Awal (Splash)** | Halaman pembuka menampilkan judul QOMAR, logo persegi rounded, dan tombol belajar dengan rapi. | [ ] Ya  /  [ ] Tidak | |
| 2 | **Dashboard Utama** | Dashboard memuat navigasi ke semua modul materi secara terorganisir. | [ ] Ya  /  [ ] Tidak | |
| 3 | **Modul Kosa Kata** | Kosakata arab, terjemahan, dan ilustrasi visual tampil jelas. Progress bar berjalan dengan benar. | [ ] Ya  /  [ ] Tidak | |
| 4 | **Modul Video** | Video dapat diputar dengan suara jernih, playlist responsif saat diklik. | [ ] Ya  /  [ ] Tidak | |
| 5 | **Kuis Pilihan Ganda** | Interaksi pemilihan jawaban (warna hijau/merah) berjalan lancar dan skor akhir tampil akurat. | [ ] Ya  /  [ ] Tidak | |
| 6 | **Kuis Essay & Praktik** | Tombol kunci jawaban berfungsi. Tombol kirim WhatsApp mengarah langsung ke WhatsApp guru. | [ ] Ya  /  [ ] Tidak | |
| 7 | **Fitur Aksesibilitas (UDL)** | Tombol Zoom Font dan Mode Disleksia mempermudah pembacaan dan tidak hilang saat ganti halaman. | [ ] Ya  /  [ ] Tidak | |

---

## 3. Pernyataan Persetujuan (Sign-off)

Dengan menandatangani dokumen ini, klien menyatakan bahwa platform **QOMAR** telah diuji secara menyeluruh dan memenuhi kriteria penerimaan proyek yang disepakati bersama.

- **Klien / Guru Penguji**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (Tanda Tangan)
- **Pimpinan Tim Pengembang**: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (Tanda Tangan)
