# Product Requirement Document (PRD) - Spesifikasi Klien
## Proyek: E-Book Komik Digital QOMAR

---

## 1. Latar Belakang & Deskripsi Proyek

**QOMAR (*Qira'atu-l-Komik Lughatul Arabiyah*)** adalah platform pembelajaran Bahasa Arab berbasis web interaktif yang dikembangkan khusus untuk siswa Kelas IV Madrasah Ibtidaiyah (MI). Proyek ini lahir untuk menjawab tantangan rendahnya minat baca siswa terhadap materi pembelajaran tradisional dan sulitnya memahami kosakata Bahasa Arab secara mandiri.

Dengan mengintegrasikan media komik digital yang kaya visual, audio pelafalan, video pembelajaran interaktif, dan latihan kuis yang ramah anak, QOMAR dirancang untuk meningkatkan keterampilan membaca (*Mahārah Qirā'ah*) siswa secara menyenangkan, mandiri, dan inklusif.

---

## 2. Visi, Misi & Sasaran Proyek

- **Visi**: Mewujudkan media pembelajaran Bahasa Arab tingkat sekolah dasar yang inovatif, menarik, dan ramah terhadap kebutuhan belajar setiap siswa.
- **Misi**:
  - Menyajikan materi Bahasa Arab melalui komik digital interaktif.
  - Membantu pemahaman kosakata baru secara mandiri melalui visualisasi kartu kata (*flashcards*).
  - Menerapkan prinsip *Universal Design for Learning* (UDL) agar materi mudah diakses oleh siswa dengan berbagai tingkat kemampuan membaca.
- **Sasaran Pengguna**: Siswa Kelas IV Madrasah Ibtidaiyah (MI) dan guru pengampu mata pelajaran Bahasa Arab MI.

---

## 3. Fitur Utama Sistem

Platform pembelajaran QOMAR terbagi ke dalam 5 bagian utama:

### A. Halaman Pembuka (Welcome Splash Screen)
Halaman awal yang bersih dan estetik untuk menyambut siswa. Berisi:
- Logo QOMAR berbentuk persegi melengkung (*squircle*) yang dinamis.
- Motto pembelajaran: *"اَلْقِرَاءَةُ مِفْتَاحُ الْعِلْمِ"* (Membaca adalah kunci ilmu).
- Tombol aksi utama "Mulai Belajar" untuk mengarahkan pengguna ke Dashboard Utama.

### B. Dashboard Pembelajaran (Hub Utama)
Pusat navigasi siswa untuk memilih jalur belajar mereka. Dashboard memuat:
- Tautan cepat menuju 3 modul utama: **Kosa Kata**, **Video**, dan **Kuis**.
- Sinopsis ringkas platform QOMAR untuk memberikan gambaran materi.
- Kontak person tim pengembang/guru jika siswa memerlukan panduan lebih lanjut.

### C. Modul 1: Slider Kosa Kata
Alat bantu belajar kosakata (flashcards) sebelum siswa membaca komik atau menonton video. Fitur meliputi:
- Menampilkan teks Arab besar, cara membaca (transliterasi latin), arti kata, dan ilustrasi visual.
- Navigasi slide yang interaktif (geser layar, tombol panah keyboard, dan klik tombol navigasi bawah).
- Bar indikator kemajuan (*progress bar*) untuk melihat persentase kosakata yang telah dipelajari.

### D. Modul 2: Pemutar & Daftar Putar Video
Media visualisasi cerita komik. Fitur meliputi:
- Pemutar video utama berformat aspek rasio *widescreen* 16:9 yang stabil.
- Panel Daftar Putar (*Playlist*) di samping/bawah pemutar untuk berpindah ke judul video lain.
- Deskripsi penjelasan isi materi video yang sedang diputar.

### E. Modul 3: Kuis Interaktif (3-Tab Kuis)
Fitur evaluasi belajar mandiri siswa yang terdiri dari 3 metode pengujian:
- **Tab 1: Pilihan Ganda (PG)**: Soal interaktif dengan pilihan A, B, C. Warna tombol otomatis berubah menjadi hijau (jika benar) atau merah (jika salah) setelah opsi dipilih. Di akhir kuis, muncul dialog overlay (pop-up) yang menampilkan skor akhir siswa.
- **Tab 2: Soal Essay**: Latihan pemahaman mendalam di mana siswa dapat menuliskan jawaban mereka pada kolom yang disediakan. Terdapat tombol "Buka Kunci Jawaban" untuk melakukan koreksi mandiri.
- **Tab 3: Tugas Praktik**: Instruksi tugas rekaman video membaca komik yang dapat dikirimkan langsung ke guru melalui integrasi tombol WhatsApp.

---

## 4. Universal Design for Learning (UDL) & Aksesibilitas

Untuk memastikan platform ini inklusif bagi semua anak (termasuk yang mengalami kesulitan membaca ringan/disleksia), sistem dilengkapi Toolbar Aksesibilitas di bagian atas header halaman materi:
1. **Pengatur Ukuran Teks (Zoom Font)**: Siswa dapat memperbesar ukuran teks dari 100% hingga 160% (dengan interval kenaikan 10%) menggunakan tombol `A-` dan `A+`.
2. **Mode Font Disleksia (Dyslexia Font)**: Siswa dapat mengaktifkan font khusus (OpenDyslexic/Comic Sans) melalui tombol toggle agar teks lebih mudah dibaca.
3. **Penyimpanan Preferensi (Persistence)**: Seluruh pengaturan ukuran font dan mode disleksia yang dipilih akan disimpan di komputer siswa (`localStorage`) sehingga tidak akan tereset saat berpindah halaman.

> [!IMPORTANT]
> **Keterbatasan Sistem**: Sesuai dengan kesepakatan bersama, fitur pengubah suara/pembaca teks otomatis (**Text-to-Speech / TTS ditiadakan**) pada platform ini. Seluruh navigasi dan audio dilakukan secara manual.

---

## 5. Kriteria Penerimaan Klien (Client Acceptance Criteria)

Klien (Pihak Sekolah/Guru) menyatakan produk ini siap rilis apabila memenuhi kriteria berikut:
1. Seluruh materi kosakata, video, dan soal kuis termuat dengan benar sesuai kurikulum kelas IV MI.
2. Tampilan web responsif saat diakses dari komputer, laptop, maupun ponsel pintar (smartphone).
3. Tombol UDL bekerja dengan semestinya dan menyimpan pengaturan pengguna.
4. Nilai kuis pilihan ganda terhitung secara akurat dan tombol kirim tugas WhatsApp berfungsi mengirimkan hasil ke nomor guru yang dituju.
