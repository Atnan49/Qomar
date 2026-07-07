/* ==========================================================================
   Centralized Data Store (data.js) - E-Book QOMAR
   ========================================================================== */

// 1. Data Flashcards Kosakata
const kosaKataMateri = [
  {
    id: 1,
    arab: "مَدْرَسَةٌ",
    transliterasi: "Madrasatun",
    arti: "Sekolah",
    gambar: "../Image/sekolah.webp"
  },
  {
    id: 2,
    arab: "فَصْلٌ",
    transliterasi: "Fashlun",
    arti: "Kelas",
    gambar: "../Image/kelas.webp"
  },
  {
    id: 3,
    arab: "كِتَابٌ",
    transliterasi: "Kitabun",
    arti: "Buku",
    gambar: "../Image/kitab.webp"
  },
  {
    id: 4,
    arab: "قَلَمٌ",
    transliterasi: "Qalamun",
    arti: "Pena",
    gambar: "../Image/qalam.webp"
  },
  {
    id: 5,
    arab: "مَكْتَبٌ",
    transliterasi: "Maktabun",
    arti: "Meja",
    gambar: "../Image/meja.webp"
  },
  {
    id: 6,
    arab: "كُرْسِيٌّ",
    transliterasi: "Kursiyyun",
    arti: "Kursi",
    gambar: "../Image/kursi.webp"
  }
];

// 2. Data Playlist Video
const videoMateri = [
  {
    id: 1,
    judul: "Peralatan Sekolah (الأدوات المدرسية)",
    deskripsi: "Tonton cerita komik tentang peralatan sekolah dalam Bahasa Arab bersama Ahmad dan Fatimah.",
    videoUrl: "../Video/peralatan_sekolah.mp4"
  },
  {
    id: 2,
    judul: "Di dalam Kelas (في الفصل)",
    deskripsi: "Pelajari benda-benda di dalam kelas seperti meja, kursi, dan papan tulis melalui visualisasi cerita komik interaktif.",
    videoUrl: "../Video/di_dalam_kelas.mp4"
  },
  {
    id: 3,
    judul: "Warga Sekolah (أفراد المدرسة)",
    deskripsi: "Kenali sebutan warga sekolah seperti guru, murid, dan satpam dalam Bahasa Arab melalui video komik menarik.",
    videoUrl: "../Video/warga_sekolah.mp4"
  }
];

// 3. Soal Kuis Pilihan Ganda (PG)
const kuisPG = [
  {
    id: 1,
    soal: "Apa arti dari kosakata 'مَدْرَسَةٌ'?",
    opsi: ["Masjid", "Rumah", "Sekolah"],
    correctIndex: 2
  }
];

// 4. Soal Kuis Essay
const kuisEssay = [
  {
    id: 1,
    soal: "Sebutkan 3 kosakata yang berhubungan dengan ruang kelas beserta artinya!",
    kunciJawaban: "Kunci: 1. مَكْتَبٌ (Meja), 2. كُرْسِيٌّ (Kursi), 3. سَبُّوْرَةٌ (Papan Tulis)."
  }
];

// 5. Informasi Kontak & Pengiriman Tugas Praktik
const praktikInfo = {
  nomorWA: "6285707602967",
  pesanDefault: "Assalamu'alaikum Wr. Wb. Pak/Bu Guru, berikut adalah rekaman tugas praktik membaca komik Bahasa Arab QOMAR saya.",
  instruksi: "Bacalah komik bab I dengan lantang. Rekam video berdurasi maksimal 2 menit, lalu klik tombol kirim di bawah ini untuk mengirimkannya langsung ke WhatsApp Guru."
};
