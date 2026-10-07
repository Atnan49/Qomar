# Panduan Lengkap: Cara Pembuatan Website QOMAR

Dokumen ini menjelaskan langkah demi langkah bagaimana platform e-book komik digital interaktif **QOMAR** (Qira'atu-l-Komik Lughatul Arabiyah) dibuat dari awal hingga menjadi aplikasi web statis yang fungsional.

---

## Tahap 1: Persiapan dan Perencanaan Arsitektur
Sebelum mulai menulis kode, hal pertama yang dilakukan adalah menyusun arsitektur dan menyiapkan kerangka kerja (*framework*) tanpa *backend*.

1. **Pembuatan Struktur Folder Modular**
   Membuat folder terpisah untuk `css`, `js`, `Public/Image`, `Public/Video`, dan dokumen halaman. Hal ini dilakukan agar rapi dan tidak membingungkan.
2. **Pengumpulan Aset**
   Menyiapkan seluruh gambar (komik, ilustrasi flashcard), logo dalam format `.webp` (agar ukuran file kecil), rekaman suara MP3, dan video MP4 untuk dimasukkan ke folder media yang sesuai.

---

## Tahap 2: Pembuatan Basis Data Terpusat (Data.js)
Bukannya menulis teks langsung ke dalam file HTML satu per satu, pendekatan yang digunakan di QOMAR adalah memusatkan seluruh teks, soal, dan rujukan media ke satu file JavaScript.

1. Membuat file `js/data.js`.
2. Mendeklarasikan objek dan *array* seperti `kosaKataMateri` (berisi transliterasi, tulisan Arab, arti, path gambar, dan path audio).
3. Membuat daftar soal di array `kuisPG` lengkap dengan opsi jawaban dan penanda kunci jawaban yang benar (`correctIndex`).
4. **Alasan**: Jika guru ingin menambah soal atau mengubah materi, mereka hanya perlu mengubah file `data.js` ini tanpa harus menyentuh kode rumit lainnya.

---

## Tahap 3: Pembuatan Struktur HTML (Kerangka Antarmuka)
Pembuatan kerangka visual setiap halaman menggunakan tag semantik HTML5.

1. **Halaman Pembuka (`index.html`)**
   Berisi logo dan animasi judul beserta tombol *"Mulai Belajar"*.
2. **Dashboard Utama (`Public/Page/dashboard.html`)**
   Berisi menu kartu (Card) yang mengarah ke fitur Kosakata, Video, dan Kuis.
3. **Template Modul**
   Membuat `kosa_kata.html`, `video.html`, dan `kuis.html`. Di dalam `<head>`, ditambahkan import *Google Fonts* untuk font latin (`Inter`) dan font Arab (`Amiri` - agar harakat terbaca jelas).

---

## Tahap 4: Desain dan *Styling* (CSS)
Sistem desain difokuskan pada gaya *Glassmorphism* (efek kaca) dan tata letak inklusif (UDL).

1. **Pembuatan Variabel CSS (`common.css`)**
   Mendeklarasikan warna utama biru gelap (`#022680`) dan membuat *class* utility untuk efek kaca (`.glass-card`).
2. **Aksesibilitas UDL (Universal Design for Learning)**
   - Membuat *class* `.font-scale-110` hingga `.font-scale-160` yang berfungsi merubah persentase ukuran font dasar.
   - Membuat *class* `.dyslexia-mode` yang mana apabila aktif akan merubah *font-family* teks menjadi `OpenDyslexic` dan memperbesar spasi antar huruf (`letter-spacing`).
3. **Styling Spesifik**
   Mendesain *layout* khusus kuis (*tabbing*), *playlist* video, dan kartu kosakata.

---

## Tahap 5: Pemrograman Logika Interaktif (JavaScript)
Ini adalah tahap menggerakkan elemen statis menjadi aplikasi interaktif.

1. **Logika Kosakata (`js/kosa_kata.js`)**
   - Melakukan *looping* (perulangan) data dari `data.js` untuk membuat kartu kosakata secara otomatis.
   - Mengatur fungsi navigasi "Berikutnya" dan "Sebelumnya".
   - Mengaktifkan Audio Player saat tombol 🔊 ditekan.
2. **Logika Video (`js/video.js`)**
   - Mengisi menu *playlist* dari `data.js`.
   - Mengubah sumber (`src`) tag `<video>` di pemutar utama apabila salah satu item *playlist* diklik.
3. **Logika Kuis (`js/quiz.js`)**
   - **Pilihan Ganda**: Menambahkan algoritma yang mengecek apakah jawaban yang diklik sesuai dengan `correctIndex`. Jika benar, tombol menjadi hijau; jika salah, menjadi merah. Skor dijumlahkan di akhir dan dimunculkan ke dalam *popup modal*.
   - **Tugas Praktik**: Membuat fungsi yang merangkai teks, lalu mengubahnya menjadi tautan khusus `https://wa.me/628xxx?text=...` sehingga saat tombol diklik, aplikasi WhatsApp akan langsung terbuka membawa pesan otomatis.

---

## Tahap 6: Sinkronisasi Aksesibilitas (Local Storage)
Agar pengaturan besar kecilnya teks (Zoom) dan mode Disleksia tidak hilang saat pindah halaman:

1. Membuat fungsi JavaScript global di bagian `<head>` setiap halaman HTML.
2. Fungsi ini bertugas membaca nilai di `localStorage.getItem('fontScale')`.
3. Menerapkan skala tersebut langsung ke tag `<html>` sebelum halaman selesai di-*render* (untuk mencegah layar berkedip/FOUC).
4. Saat tombol konfigurasi `A+` atau mode Disleksia diklik oleh siswa, script akan melakukan `localStorage.setItem(...)` dan memuat ulang antarmuka (UI).

---

## Tahap 7: Testing & Finalisasi
Langkah terakhir dalam proses pembuatan adalah pengujian (*Quality Assurance*).
- Menjalankan website di *browser* komputer dan di *smartphone* secara bersamaan.
- Memastikan tata letak (*layout*) tidak hancur saat layar dikecilkan (Responsive Design).
- Memastikan file audio `.mp3` dan video `.mp4` diputar tanpa *delay*.
- Menguji API kirim tugas ke WhatsApp untuk memastikan pesan terkirim dengan format rapi.

Dengan mengikuti tahap-tahap di atas, QOMAR berevolusi dari sekumpulan file aset mentah menjadi platform *e-learning* yang interaktif, mudah diperbarui, dan ramah pengguna (aksesibel).
