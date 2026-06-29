# Technical & Architecture Specification - Panduan Pengembang
## Proyek: E-Book Komik Digital QOMAR

---

## 1. Struktur Folder Repositori (Directory Structure)

Repositori proyek disusun dengan modularitas berbasis file statis (HTML, CSS, JS) agar ringan saat di-load. Tim pengembang wajib mengikuti susunan folder berikut:

```
Qomar/
├── .gitignore                    # File penyaring git
├── index.html                    # Halaman Pembuka (Welcome Splash Screen)
├── Srs.md                        # Panduan SRS lokal Markdown
├── Srs.docx                      # Panduan SRS lokal Word Doc
├── convert_srs.py                # Utilitas python kompilator dokumen
├── Documentation/                # Rangkaian Dokumen Pra-Pengembangan
│   ├── 1_Spesifikasi_Klien_PRD.md
│   ├── 2_Spesifikasi_Teknis_Arsitektur.md
│   ├── 3_Roadmap_WBS.md
│   └── 4_Rencana_Pengujian_QA_UAT.md
├── css/
│   ├── common.css                # Variabel warna (tokens), UDL kelas, & animasi global
│   ├── welcome.css               # Gaya visual khusus halaman pembuka (index.html)
│   ├── index.css                 # Gaya visual dashboard pembelajaran
│   ├── kosa_kata.css             # Gaya visual modul flashcards kosa kata
│   ├── video.css                 # Gaya visual modul playlist video
│   └── kuis.css                  # Gaya visual modul kuis 3-tab
├── js/
│   ├── data.js                   # Centralized Data Store (database statis)
│   ├── kosa_kata.js              # Logika interaktif slider kosa kata
│   ├── video.js                  # Logika pemutar playlist video
│   └── quiz.js                   # Logika tab-switching dan penilaian kuis
└── Public/
    ├── fonts/                    # Berkas huruf (OpenDyslexic)
    ├── Image/                    # Aset gambar statis dan logo
    │   └── logo.webp
    ├── Page/                     # Folder halaman modul terisolasi
    │   ├── dashboard.html        # Dashboard Hub Utama
    │   ├── kosa_kata.html        # Kerangka struktur kosa kata
    │   ├── video.html            # Kerangka struktur playlist video
    │   └── Kuis.html             # Kerangka struktur kuis 3-tab
    └── Video/                    # File MP4 video komik pembelajaran lokal
```

---

## 2. Centralized Data Store Schema (`data.js`)

Seluruh data konten bersifat dinamis dan **tidak boleh ditulis secara hardcoded** di dalam file HTML/JS modul. Seluruh data dideklarasikan secara global di berkas `js/data.js` menggunakan struktur objek/array berikut:

```javascript
// 1. Data Flashcards Kosakata
const kosaKataMateri = [
  {
    id: 1,
    arab: "مَدْرَسَةٌ",
    transliterasi: "Madrasatun",
    arti: "Sekolah",
    gambar: "../Image/sekolah.webp" // path relatif dari folder Public/Page/
  },
  // ... data lainnya
];

// 2. Data Playlist Video
const videoMateri = [
  {
    id: 1,
    judul: "Perkenalan di Sekolah",
    deskripsi: "Tonton komik perkenalan Bahasa Arab di sekolah bersama Ahmad dan Fatimah.",
    videoUrl: "../Video/perkenalan.mp4"
  },
  // ... data lainnya
];

// 3. Soal Kuis Pilihan Ganda (PG)
const kuisPG = [
  {
    id: 1,
    soal: "Apa arti dari kosakata 'مَدْرَسَةٌ'?",
    opsi: ["Masjid", "Rumah", "Sekolah"],
    correctIndex: 2 // Opsi C (0-indexed)
  },
  // ... data lainnya
];

// 4. Soal Kuis Essay
const kuisEssay = [
  {
    id: 1,
    soal: "Sebutkan 3 kosakata yang berhubungan dengan ruang kelas beserta artinya!",
    kunciJawaban: "Kunci: 1. مَكْتَبٌ (Meja), 2. كُرْسِيٌّ (Kursi), 3. سَبُّوْرَةٌ (Papan Tulis)."
  },
  // ... data lainnya
];

// 5. Informasi Kontak & Pengiriman Tugas Praktik
const praktikInfo = {
  nomorWA: "6285707602967",
  pesanDefault: "Assalamu'alaikum Wr. Wb. Pak/Bu Guru, berikut adalah rekaman tugas praktik membaca komik Bahasa Arab QOMAR saya.",
  instruksi: "Bacalah komik bab I dengan lantang. Rekam video berdurasi maksimal 2 menit, lalu klik tombol kirim di bawah ini untuk mengirimkannya langsung ke WhatsApp Guru."
};
```

---

## 3. Sistem Aksesibilitas UDL (Universal Design for Learning)

Setiap pengembang modul (`kosa_kata`, `video`, `Kuis`) **wajib** menyertakan fungsi sinkronisasi preferensi aksesibilitas berikut pada peristiwa `DOMContentLoaded` di berkas `.js` masing-masing:

### A. Kode Sinkronisasi UDL
```javascript
function loadUDLPreferences() {
    const scale = localStorage.getItem('fontScale') || '100';
    const dyslexia = localStorage.getItem('dyslexiaMode') === 'true';
    
    // 1. Terapkan kelas skala font ke elemen html
    document.documentElement.className = `font-scale-${scale}`;
    
    // 2. Terapkan kelas dyslexia-mode ke body
    if (dyslexia) {
        document.body.classList.add('dyslexia-mode');
    } else {
        document.body.classList.remove('dyslexia-mode');
    }
}
```

### B. CSS Tokens untuk UDL (`css/common.css`)
- **Skala Font**: Disediakan dari `.font-scale-100` hingga `.font-scale-160` (interval 10%) untuk melipatgandakan ukuran kontainer utama.
- **Dyslexia Font Mode**:
  ```css
  body.dyslexia-mode {
    font-family: var(--font-dyslexia) !important; /* OpenDyslexic / Comic Sans */
    letter-spacing: 0.05em;
    word-spacing: 0.12em;
  }
  body.dyslexia-mode * {
    font-family: inherit !important;
    line-height: 1.8 !important;
  }
  /* Kecuali teks Arab, tetap menggunakan font Amiri agar harakat terbaca jelas */
  body.dyslexia-mode [lang="ar"], body.dyslexia-mode .arabic-text {
    font-family: var(--font-arabic) !important;
  }
  ```

---

## 4. Standar Desain Visual & UI (Design Tokens)

Agar tampilan e-book konsisten dan bernilai estetis tinggi (premium), perhatikan hal berikut:

1. **Efek Glassmorphism**:
   - Seluruh kartu konten wajib menggunakan kelas `.glass-card` atau `.glass-card-strong` yang memiliki latar belakang putih semi-transparan (`rgba(255,255,255,0.88)`), filter blur latar belakang (`backdrop-filter: blur(30px)`), dan border kebiruan yang halus (`rgba(2, 38, 128, 0.25)`).
2. **Tipografi**:
   - Teks Latin menggunakan font **Inter** atau **Segoe UI** dengan bobot yang jelas (300 s.d 800).
   - Teks Arab menggunakan font Google **Amiri** dengan ukuran minimal `1.5em` kali lebih besar dari teks latin agar tanda harakat terbaca jelas oleh anak-anak.
3. **Kontrol Navigasi Mobile-First**:
   - Tombol navigasi ("Sebelumnya", "Berikutnya") wajib dipasang menempel di dasar layar (`position: fixed`).
   - Lebar elemen pembungkus tombol navigasi dibatasi maksimal **`max-width: 560px`** agar sejajar presisi secara vertikal dengan kartu konten di atasnya pada layar desktop/tablet.
4. **Skema Warna Logo**:
   - Biru Tua (Deep Blue) `#022680` sebagai warna utama.
   - Pink Accents `#E2528C` untuk penanda interaktif.
   - Teal Accents `#139C80` untuk tombol penyelesaian modul.
   - Kuning Emas `#FFCF27` untuk aksen judul atau lencana penghargaan.
5. **Aksen Interaktif**:
   - Seluruh elemen interaktif (tombol opsi, tautan navigasi) harus memiliki transisi transisi hover yang halus (durasi `0.3s` dengan fungsi transisi `cubic-bezier(0.34, 1.56, 0.64, 1)` untuk memberi efek memantul/spring lembut).
