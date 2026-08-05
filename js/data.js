/* ==========================================================================
   Centralized Data Store (data.js) - E-Book QOMAR
   ========================================================================== */

// 1. Data Flashcards Kosakata
const kosaKataMateri = {
  tema1: [
    {
      id: 1,
      arab: "عُنْوَانٌ",
      transliterasi: "‘Unwānun",
      arti: "Alamat",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gmbr alamat.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice alamat.mp3"
    },
    {
      id: 2,
      arab: "بَيْتٌ",
      transliterasi: "Baitun",
      arti: "Rumah",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar rumah.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice rumah.mp3"
    },
    {
      id: 3,
      arab: "شَارِعٌ",
      transliterasi: "Syāri‘un",
      arti: "Jalan",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar jalan.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/Voice jalan.mp3"
    },
    {
      id: 4,
      arab: "قَرْيَةٌ",
      transliterasi: "Qaryatun",
      arti: "Desa",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar desa.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice desa.mp3"
    },
    {
      id: 5,
      arab: "مَسْجِدٌ",
      transliterasi: "Masjidun",
      arti: "Masjid",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar masjid.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/Voice masjid.mp3"
    },
    {
      id: 6,
      arab: "مَدْرَسَةٌ",
      transliterasi: "Madrasatun",
      arti: "Sekolah",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar sekolah.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice sekolah.mp3"
    },
    {
      id: 7,
      arab: "دُكَّانٌ",
      transliterasi: "Dukkānun",
      arti: "Toko",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar toko.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice toko.mp3"
    },
    {
      id: 8,
      arab: "جَدٌّ",
      transliterasi: "Jaddun",
      arti: "Kakek",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar kakek.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/Voice kakek.mp3"
    },
    {
      id: 9,
      arab: "مَزْرَعَةٌ",
      transliterasi: "Mazra‘atun",
      arti: "Sawah",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/gambar sawah.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice sawah.mp3"
    },
    {
      id: 10,
      arab: "قَرِيْبٌ",
      transliterasi: "Qarībun",
      arti: "Dekat",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 1/dekattt.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 1/voice dekat.mp3"
    }
  ],
  tema2: [
    {
      id: 1,
      arab: "مِهْنَةٌ",
      transliterasi: "Mihnatun",
      arti: "Profesi",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/gambar profesi.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice profesi.mp3"
    },
    {
      id: 2,
      arab: "دَرَسَ - يَدْرُسُ",
      transliterasi: "Darasa - Yadrusu",
      arti: "Belajar",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/belajar.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice belajar.mp3"
    },
    {
      id: 3,
      arab: "طَبِيْبٌ",
      transliterasi: "Thabībun",
      arti: "Dokter",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/dokter.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice dokter.mp3"
    },
    {
      id: 4,
      arab: "مُدَرِّسَةٌ",
      transliterasi: "Mudarrisatun",
      arti: "Guru Perempuan",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/guru.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice guru perempuan.mp3"
    },
    {
      id: 5,
      arab: "طَبَّاخَةٌ",
      transliterasi: "Thabbākhatun",
      arti: "Koki Perempuan",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/koki.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice koki perempuan.mp3"
    },
    {
      id: 6,
      arab: "طَبَخَ - يَطْبُخُ",
      transliterasi: "Tabakha - Yatbukhu",
      arti: "Memasak",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/memasak.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice memasak.mp3"
    },
    {
      id: 7,
      arab: "سَاعَدَ - يُسَاعِدُ",
      transliterasi: "Sā‘ada - Yusā‘idu",
      arti: "Membantu",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/membantu.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice membantu.mp3"
    },
    {
      id: 8,
      arab: "زَرَعَ - يَزْرَعُ",
      transliterasi: "Zara‘a - Yazra‘u",
      arti: "Menanam",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/menanam.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice menanam.mp3"
    },
    {
      id: 9,
      arab: "عَلَّمَ - يُعَلِّمُ",
      transliterasi: "‘Allama - Yu‘allimu",
      arti: "Mengajar",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/mengajar.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice mengajar.mp3"
    },
    {
      id: 10,
      arab: "عَالَجَ - يُعَالِجُ",
      transliterasi: "‘Ālaja - Yu‘āliju",
      arti: "Mengobati",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/mengobati.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice mengobati.mp3"
    },
    {
      id: 11,
      arab: "خَيَّطَ - يُخَيِّطُ",
      transliterasi: "Khayyatha - Yukhayyithu",
      arti: "Menjahit",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/menjahit.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice menjahit.mp3"
    },
    {
      id: 12,
      arab: "بَاعَ - يَبِيْعُ",
      transliterasi: "Bā‘a - Yabī‘u",
      arti: "Menjual",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/menjual.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice menjual.mp3"
    },
    {
      id: 13,
      arab: "تَاجِرٌ",
      transliterasi: "Tājirun",
      arti: "Pedagang",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/pedagang.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice pedagang.mp3"
    },
    {
      id: 14,
      arab: "خَيَّاطَةٌ",
      transliterasi: "Khayyāthatun",
      arti: "Penjahit Perempuan",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/penjahit.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice penjahit pr.mp3"
    },
    {
      id: 15,
      arab: "مُمَرِّضَةٌ",
      transliterasi: "Mumarridhatun",
      arti: "Perawat Perempuan",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/perawat.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice perawat pr.mp3"
    },
    {
      id: 16,
      arab: "فَلَّاحٌ",
      transliterasi: "Fallāhun",
      arti: "Petani",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 2/petani.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 2/voice petani.mp3"
    }
  ],
  tema3: [
    {
      id: 1,
      arab: "أَمَلٌ",
      transliterasi: "Amalun",
      arti: "Cita-cita",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 3/cita cita.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 3/voice cita-cita.mp3"
    },
    {
      id: 2,
      arab: "مُهَنْدِسٌ",
      transliterasi: "Muhandisun",
      arti: "Arsitek / Insinyur",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 3/arsitek.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 3/voice arsitek.mp3"
    },
    {
      id: 3,
      arab: "جُنْدِيٌّ",
      transliterasi: "Jundiyyun",
      arti: "Tentara",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 3/tentara.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 3/voice tentara.mp3"
    },
    {
      id: 4,
      arab: "كَاتِبٌ",
      transliterasi: "Kātibun",
      arti: "Penulis",
      gambar: "../../MEDIA KOMIK/KOMIK BAB 3/penulis.webp",
      audio: "../../MEDIA KOMIK/KOMIK BAB 3/voice penulis.mp3"
    }
  ]
};

// 1.5. Data Komik dan Transkrip Dialogue
const komikMateri = {
  tema1: {
    judulArab: "الْعُنْوَانُ",
    judulIndo: "Alamat",
    halaman: [
      "../../MEDIA KOMIK/KOMIK BAB 1/Komik bab 1. p1.webp",
      "../../MEDIA KOMIK/KOMIK BAB 1/komik bab 1. p2.webp"
    ],
    dialog: [
      { pembicara: "Najib", arab: "هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. لِبَيْتِهِ عُنْوَانٌ.", arti: "Ini Najib. Dia memiliki rumah. Rumahnya memiliki alamat." },
      { pembicara: "Najib", arab: "عُنْوَانُ بَيْتِهِ فِيْ شَارِعِ وِجَايَا كُسُوْمَا (Wijaya Kusuma) وَسَطَ الْقَرْيَةِ. اِسْمُ قَرْيَتِهِ جَاتِيْ سُوْبُوْ (Jati Sobo).", arti: "Alamat rumahnya di Jalan Wijaya Kusuma di tengah desa. Nama desanya Jati Sobo." },
      { pembicara: "Najib", arab: "جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ. أَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.", arti: "Di samping rumahnya ada masjid yang besar. Di depan rumahnya ada Sekolah Dasar (Madrasah Ibtidaiyah). Rumahnya dekat dari toko." },
      { pembicara: "Najib", arab: "عُنْوَانُ الدُّكَّانِ فِي شَارِعِ وِجَايَنْتُوْ (Wijayanto). أَمَّا عُنْوَانُ بَيْتِ جَدِّ نَجِيْبٍ فِيْ شَارِعِ سُوْدِرْمَانُ (Sudirman).", arti: "Alamat toko di Jalan Wijayanto. Adapun alamat rumah kakek Najib di Jalan Sudirman." },
      { pembicara: "Najib", arab: "حَوْلَ بَيْتِ جَدِّهِ مَزْرَعَةٌ وَاسِعَةٌ. فِيْ قَرْيَةِ جَدِّهِ نَهْرٌ طَوِيْلٌ.", arti: "Di sekitar rumah kakeknya ada sawah yang luas. Di desa kakeknya ada sungai yang panjang." }
    ]
  },
  tema2: {
    judulArab: "مِهْنَةُ أُسْرَةِ نَجِيْبَةَ",
    judulIndo: "Profesi Keluarga Najibah",
    halaman: [
      "../../MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 2 . p 1.webp",
      "../../MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 2. p2.webp",
      "../../MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 3. p3.webp"
    ],
    dialog: [
      { pembicara: "Najibah", arab: "اِسْمِيْ نَجِيْبَةُ. أَنَا تِلْمِيْذَةٌ. أَدْرُسُ فِيْ الْفَصْلِ الرَّابِعِ بِالْمَدْرِسَةِ الإِبْتِدَائِيَّةِ.", arti: "Namaku Najibah. Aku adalah seorang siswi. Aku belajar di kelas empat Sekolah Dasar." },
      { pembicara: "Najibah", arab: "هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. هُوَ يُعَالِجُ الْمَرْضَى فِيْ الْمُسْتَشْفَى.", arti: "Ini ayahku. Beliau adalah seorang dokter. Beliau mengobati orang sakit di rumah sakit." },
      { pembicara: "Najibah", arab: "وَهٰذِهِ أُمِّيْ. هِيَ طَبَّاخَةٌ. هِيَ تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ.", arti: "Dan ini ibuku. Beliau adalah seorang koki. Beliau memasak makanan di restoran." },
      { pembicara: "Najibah", arab: "وَهٰذِهِ أُخْتِيْ الْكَبِيْرَةُ. هِيَ مُمَرِّضَةٌ. هِيَ تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.", arti: "Dan ini kakak perempuanku. Beliau adalah seorang perawat. Beliau membantu dokter di rumah sakit." },
      { pembicara: "Najibah", arab: "وَهٰذَا عَمِّيْ. هُوَ تَاجِرٌ. هُوَ يَبِيْعُ السِّلْعَةَ فِي السُّوْقِ.", arti: "Dan ini pamanku. Beliau adalah seorang pedagang. Beliau menjual barang dagangan di pasar." },
      { pembicara: "Najibah", arab: "وهٰذِهِ عَمَّتِيْ. هِيَ مُدَرِّسَةٌ. هِيَ تُعَلِّمُ اللُّغَةَ الْعَرَبِيَّةَ إِلَى التَّلاَمِيْذِ فِي الْمَدْرَسَةِ.", arti: "Dan ini bibiku. Beliau adalah seorang guru. Beliau mengajar Bahasa Arab kepada murid-murid di sekolah." },
      { pembicara: "Najibah", arab: "وَهٰذَا جَدِّيْ. هُوَ فَلاَّحٌ. هُوَ يَزْرَعُ الأَرُزَّ فِي الْمَZْرَعَةِ.", arti: "Dan ini kakekku. Beliau adalah seorang petani. Beliau menanam padi di sawah." },
      { pembicara: "Najibah", arab: "وهٰذِهِ جَدّتِيْ. هِيَ خَيَّاطَةٌ. هِيَ تُخَيِّطُ الْمَلاَبِسَ فِي الْبَيْتِ.", arti: "Dan ini nenekku. Beliau adalah seorang penjahit. Beliau menjahit pakaian di rumah." }
    ]
  },
  tema3: {
    judulArab: "الْأَمَلُ فِيْ الْمُسْتَقْبَلِ",
    judulIndo: "Cita-cita di Masa Depan",
    halaman: [
      "../../MEDIA KOMIK/KOMIK BAB 3/komik bab 3.webp"
    ],
    dialog: [
      { pembicara: "حَنِيْفٌ", arab: "مَسَاءَ الْخَيْرِ", arti: "Selamat sore." },
      { pembicara: "فَوْزَانُ", arab: "مَسَاءَ الْنُّوْرِ", arti: "Selamat sore juga." },
      { pembicara: "حَنِيْفٌ", arab: "مَاذَا تَعَلَّمْتَ فِيْ الْفَصْلِ، يَا فَوْزَانُ؟", arti: "Apa yang kamu pelajari di kelas, wahai Fauzan?" },
      { pembicara: "فَوْزَانُ", arab: "فِيْ الْفَصْلِ تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِيْ الْمُسْتَقْبَلِ، يَا حَنِيْفُ.", arti: "Di kelas saya mempelajari macam-macam cita-cita di masa depan, wahai Hanif." },
      { pembicara: "حَنِيْفٌ", arab: "مَا أَنْوَاعُ الْأَمَلِ؟", arti: "Apa saja macam-macam cita-cita itu?" },
      { pembicara: "فَوْزَانُ", arab: "أَنْوَاعُ الْأَمَلِ هِيَ مُهَنْدِسٌ وَشُرْطِيٌّ وَجُنْدِيٌّ وَغَيْرُهَا.", arti: "Macam-macam cita-cita itu adalah insinyur, polisi, tentara, dan lainnya." },
      { pembicara: "حَنِيْفٌ", arab: "هَلْ لَكَ أَمَلٌ فِيْ الْمُسْتَقْبَلِ، يَا فَوْزَانُ؟", arti: "Apakah kamu memiliki cita-cita di masa depan, wahai Fauzan?" },
      { pembicara: "فَوْزَانُ", arab: "نَعَمْ، لِيْ أَمَلٌ فِيْ الْمُسْتَقْبَلِ.", arti: "Ya, saya memiliki cita-cita di masa depan." },
      { pembicara: "حَنِيْفٌ", arab: "مَا أَمَلُكَ فِي الْمُسْتَقْبَلِ؟", arti: "Apa cita-citamu di masa depan?" },
      { pembicara: "فَوْزَانُ", arab: "أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. وَمَا أَمَلُكَ، يَا حَنِيْفُ؟", arti: "Aku ingin menjadi seorang dokter. Dan apa cita-citamu, wahai Hanif?" },
      { pembicara: "حَنِيْفٌ", arab: "أُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.", arti: "Aku ingin menjadi seorang penulis." }
    ]
  }
};

// 2. Data Playlist Video
const videoMateri = [
  {
    id: 1,
    judul: "Bab 1 : الْعُنْوَانُ",
    deskripsi: "Pelajari cara menyebutkan alamat rumah, nama jalan, desa, sawah, dan masjid dalam Bahasa Arab melalui cerita Najib.",
    videoUrl: "../Video/video_komik_bab1.mp4"
  },
  {
    id: 2,
    judul: "Bab 2 : مِهْنَةُ أُسْرَةِ نَجِيْبَةَ",
    deskripsi: "Pelajari kosakata berbagai jenis profesi dan pekerjaan anggota keluarga dalam Bahasa Arab melalui cerita Najibah.",
    videoUrl: "../Video/video_komik_bab2.mp4"
  },
  {
    id: 3,
    judul: "Bab 3 : الْأَمَلُ فِيْ الْمُسْتَقْبَلِ",
    deskripsi: "Temukan cara mengungkapkan impian, harapan, dan cita-cita masa depan dalam Bahasa Arab melalui percakapan Hanif dan Fauzan.",
    videoUrl: "../Video/video_komik_bab3.mp4"
  }
];

// 3. Soal Kuis Pilihan Ganda (PG) - Per Bab (Bab 1: 10 Soal, Bab 2: 10 Soal, Bab 3: 10 Soal)
const kuisPG = [
    // =============================================
    // BAB 1: الْعُنْوَانُ (Soal 1 - 10)
    // =============================================
    {
        id: 1,
        bab: 1,
        soal: "مَا مَعْنَى كَلِمَةِ \"العُنْوَانُ\"؟",
        pilihan: [
            "Alamat",
            "Profesi",
            "Pedagang",
            "Rumah"
        ],
        correctIndex: 0
    },
    {
        id: 2,
        bab: 1,
        soal: "أَيْنَ عُنْوَانُ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "فِيْ شَارِعِ سُوْدِرْمَانَ",
            "فِيْ شَارِعِ وِجَايَنْتُوْ",
            "فِيْ شَارِعِ أَحْمَدْ يَانِي",
            "فِيْ شَارِعِ وِجَايَا كُسُوْمَا"
        ],
        correctIndex: 3
    },
    {
        id: 3,
        bab: 1,
        soal: "مَا اسْمُ قَرْيَةِ نَجِيْبٍ؟",
        pilihan: [
            "جَاتِيْ سُوْبُوْ",
            "سُوْدِرْمَانَ",
            "نَحجَاوِي",
            "أَحْمَدْ يَانِي"
        ],
        correctIndex: 0
    },
    {
        id: 4,
        bab: 1,
        soal: "مَا أَمَامَ بَيْتِ نَجِيْبِِ؟",
        pilihan: [
            "مُسْتَشْفَى",
            "مَدْرَسَةٌ اِبْتِدَائِيَّةٌ",
            "سُوْقٌ",
            "مَسْجِدٌ"
        ],
        correctIndex: 1,
        gambar: "../../Public/Image/quiz/bab1/img_bab1_rId5.jpeg"
    },
    {
        id: 5,
        bab: 1,
        soal: "أَيْنَ عُنْوَانُ بَيْتِ جَدِّ نَجِيْبٍ؟",
        pilihan: [
            "شَارِعِ وِجَايَا كُسُوْمَا",
            "شَارِعِ وِجَايَنْتُوْ",
            "شَارِعِ سُوْدِرْمَانَ",
            "شَارِعِ مَالِيُوْبُوْرُوْ"
        ],
        correctIndex: 2
    },
    {
        id: 6,
        bab: 1,
        soal: "مَا حَوْلَ بَيْتِ جَدِّ نَجِيْبِِ؟",
        pilihan: [
            "مَدْرَسَةٌ وَاسِعَةٌ",
            "دُكَّانٌ وَاسِعٌ",
            "مَسْجِدٌ كَبِيْرٌ",
            "مَزْرَعَةٌ وَاسِعَةٌ"
        ],
        correctIndex: 3,
        gambar: "../../Public/Image/quiz/bab1/img_bab1_rId6.jpeg"
    },
    {
        id: 7,
        bab: 1,
        soal: "Apa Arti Dari Kalimat di Bawah ini?\nفِيْ قَرْيَةِ جَدِّهِ نَهْرٌ طَوِيْلٌ",
        pilihan: [
            "Di desa kakeknya terdapat sungai yang panjang",
            "Di desa kakeknya terdapat gunung yang tinggi",
            "Di desa ibunya terdapat warung yang luas",
            "Di desa ayahnya ada Sungai yang panjang"
        ],
        correctIndex: 0
    },
    {
        id: 8,
        bab: 1,
        soal: "مَا هٰذَا؟ هٰذَا.......",
        pilihan: [
            "مَزْرَعَةٌ وَاسِعَةٌ",
            "نَهْرٌ طَوِيْلٌ",
            "بُسْتَانٌ طَوِيْلٌ",
            "بَيْتٌ كَبِيْرٌ"
        ],
        correctIndex: 1,
        gambar: "../../Public/Image/quiz/bab1/img_bab1_rId7.jpeg"
    },
    {
        id: 9,
        bab: 1,
        soal: "مَا جَانِبَ بَيْتِ نَجِيْبِِ؟",
        pilihan: [
            "بُسْتَانٌ كَبِيْرٌ",
            "مَسْجِدٌ كَبِيْرٌ",
            "قَرْيَةٌ صَغِيْرَةٌ",
            "مَدْرَسَةٌ وَاسِعَةٌ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks di bawah ini, kemudian jawablah pertanyaan nomor 9 & 10 dengan tepat sesuai isi teks!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. لِبَيْتِهِ عُنْوَانٌ. عُنْوَانُ بَيْتِهِ فِيْ شَارِعِ وِجَايَا كُسُوْمَا (Wijaya Kusuma) وَسَطَ الْقَرْيَةِ. اِسْمُ قَرْيَتِهِ جَاتِيْ سُوْبُوْ (Jati Sobo). جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ. أَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },
    {
        id: 10,
        bab: 1,
        soal: "بَيْتُ نَجِيْبِِ قَرِيْبٌ مِنَ .......",
        pilihan: [
            "الْفَصْلِ",
            "الْمَسْجِدِ",
            "الدُّكَّانِ",
            "النَّهْرِ"
        ],
        correctIndex: 2,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks di bawah ini, kemudian jawablah pertanyaan nomor 9 & 10 dengan tepat sesuai isi teks!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. لِبَيْتِهِ عُنْوَانٌ. عُنْوَانُ بَيْتِهِ فِيْ شَارِعِ وِجَايَا كُسُوْمَا (Wijaya Kusuma) وَسَطَ الْقَرْيَةِ. اِسْمُ قَرْيَتِهِ جَاتِيْ سُوْبُوْ (Jati Sobo). جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ. أَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },

    // =============================================
    // BAB 2: الْمِهْنَةُ (Soal 11 - 20)
    // =============================================
    {
        id: 11,
        bab: 2,
        soal: "مَا مَعْنَى كَلِمَةِ \"الْمِهْنَةُ\"؟",
        pilihan: [
            "Alamat",
            "Profesi",
            "Pedagang",
            "Rumah"
        ],
        correctIndex: 1
    },
    {
        id: 12,
        bab: 2,
        soal: "مَنْ يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى؟",
        pilihan: [
            "الْمُدَرِّسُ",
            "الطَّبِيْبُ",
            "التَّاجِرُ",
            "الشُّرْطِيُّ"
        ],
        correctIndex: 1,
        gambar: "../../Public/Image/quiz/bab2/img_bab2_rId7.jpeg"
    },
    {
        id: 13,
        bab: 2,
        soal: "Apa Arti Dari Kalimat di Bawah ini?\nوَهٰذِهِ أُمِّيْ هِيَ طَبَّاخَةٌ",
        pilihan: [
            "Halaman Kebunku Sangat Hijau",
            "Ini ayahku seorang arsitek",
            "Dan ini ibuku, dia adalah koki",
            "Ibuku seorang guru"
        ],
        correctIndex: 2
    },
    {
        id: 14,
        bab: 2,
        soal: "مَنْ هُوَ؟ هُوَ.......",
        pilihan: [
            "تَاجِرٌ",
            "مُدَرِّسٌ",
            "مُهَنْدِسٌ",
            "شُرْطِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/quiz/bab2/img_bab2_rId8.jpeg"
    },
    {
        id: 15,
        bab: 2,
        soal: "مَنْ يُعَلِّمُ التَّلَامِيذَ فِي الْمَدْرَسَةِ؟",
        pilihan: [
            "الطَّبِيبُ",
            "الْمُعَلِّمُ",
            "التَّاجِرُ",
            "الْفَلَّاحُ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ الْجُمْلَةَ الآتِيَةَ ثُمَّ أَجِبْ عَنِ السُّؤَالِ.</b><br><i>Bacalah kalimat berikut, kemudian pilihlah jawaban yang benar!</i><br><br><span class='arabic-context-text'>الْمُعَلِّمُ يُعَلِّمُ التَّلَامِيذَ فِي الْمَدْرَسَةِ.</span>"
    },
    {
        id: 16,
        bab: 2,
        soal: "مَاذَا يَعْمَلُ هٰذَا الرَّجُلُ؟",
        pilihan: [
            "يُعَالِجُ الْمَرْضَى",
            "يَبِيعُ السِّلَعَ",
            "يُعَلِّمُ التَّلَامِيذَ",
            "يَزْرَعُ الأَرُزَّ فِي الْمَزْرَعَةِ"
        ],
        correctIndex: 3,
        gambar: "../../Public/Image/quiz/bab2/img_bab2_rId9.jpg"
    },
    {
        id: 17,
        bab: 2,
        soal: "وَهٰذَا عَمِّيْ. هُوَ تَاجِرٌ. هُوَ يَبِيْعُ …..... فِي السُّوْقِ",
        pilihan: [
            "بَصَلٌ أَحْمَرُ",
            "فِلْفِلٌ",
            "الْأَرُزَّ",
            "السِّلْعَةَ"
        ],
        correctIndex: 3,
        gambar: "../../Public/Image/quiz/bab2/img_bab2_rId10.jpeg"
    },
    {
        id: 18,
        bab: 2,
        soal: "وَهٰذِهِ أُمِّيْ. هِيَ طَبَّاخَةٌ. هِيَ تَطْبَخُ الأَطْعِمَةَ فِي……..",
        pilihan: [
            "السُّوْقِ",
            "الْمَطْعَمِ",
            "الْمُسْتَشْفَى",
            "الْمَدْرَسَةِ"
        ],
        correctIndex: 1
    },
    {
        id: 19,
        bab: 2,
        soal: "فِي أَيِّ فَصْلٍ تَدْرُسُ نَجِيْبَةُ؟",
        pilihan: [
            "فِيْ الْفَصْلِ الْخَامِسِ",
            "فِيْ الْفَصْلِ الثَّالِثِ",
            "فِيْ الْفَصْلِ الرَّابِعِ",
            "فِيْ الْفَصْلِ السَّادِسِ"
        ],
        correctIndex: 2,
        contextText: "<b>اِقْرَأِ الْجُمْلَةَ الآتِيَةَ ثُمَّ أَجِبْ عَنِ السُّؤَالِ.</b><br><i>Bacalah Kalimat dibawah ini, kemudian jawablah pertanyaan dengan tepat!</i><br><br><span class='arabic-context-text'>اِسْمِيْ نَجِيْبَةُ. أَنَا تِلْمِيْذَةٌ. أَدْرُسُ فِيْ الْفَصْلِ الرَّابِعِ بِالْمَدْرَسَةِ الإِبْتِدَائِيَّةِ.</span>"
    },
    {
        id: 20,
        bab: 2,
        soal: "مَاذَا تَعْمَلُ مُمَرِّضَةٌ؟",
        pilihan: [
            "تَبِيْعُ السِّلْعَةَ فِي السُّوْقِ",
            "تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى",
            "تَدْرُسُ فِي الْمَدْرَسَةِ",
            "تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْبَخِ"
        ],
        correctIndex: 1
    },

    // =============================================
    // BAB 3: أَمَلِيْ (Soal 21 - 30)
    // =============================================
    {
        id: 21,
        bab: 3,
        soal: "مَا مَعْنَى كَلِمَةِ \"أَمَلِيْ\"؟",
        pilihan: [
            "Alamat",
            "Profesi",
            "Cita-citaku",
            "Sekolahku"
        ],
        correctIndex: 2
    },
    {
        id: 22,
        bab: 3,
        soal: "مَاذَا تَعَلَّمَ فَوْزَانُ فِي الْفَصْلِ؟",
        pilihan: [
            "أَنْوَاعَ الْأَمَلِ",
            "أَنْوَاعَ الْحَيَوَانِ",
            "أَنْوَاعَ النَّبَاتَاتِ",
            "أَنْوَاعَ الْأَلْوَانِ"
        ],
        correctIndex: 0
    },
    {
        id: 23,
        bab: 3,
        soal: "Apa Arti Dari Kalimat di Bawah ini?\nهَلْ لَكَ أَمَلٌ فِيْ الْمُسْتَقْبَلِ، يَا فَوْزَانُ؟",
        pilihan: [
            "Apakah kamu mempunyai cita-cita di masa depan Fauzan?",
            "Apakah ibumu seorang dokter gigi, Fauzan?",
            "Dimanakah Alamat rumah mu, hanif?",
            "Apakah kamu mempunyai kakak Perempuan, Fauzan?"
        ],
        correctIndex: 0
    },
    {
        id: 24,
        bab: 3,
        soal: "مَنْ هُوَ؟ هُوَ.......",
        pilihan: [
            "تَاجِرٌ",
            "مُدَرِّسٌ",
            "مُهَنْدِسٌ",
            "شُرْطِيٌّ"
        ],
        correctIndex: 2,
        gambar: "../../Public/Image/quiz/bab3/img_bab3_rId7.jpeg"
    },
    {
        id: 25,
        bab: 3,
        soal: "مَا أَمَلُ فَوْزَانَ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "تَاجِرٌ",
            "مُدَرِّسٌ",
            "فَلاَّحٌ",
            "طَبِيْبٌ"
        ],
        correctIndex: 3,
        contextText: "<b>اِقْرَأِ الْحِوَارَ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ (25-26).</b><br><i>Bacalah percakapan berikut untuk soal nomor 25 & 26, kemudian pilihlah jawaban yang benar!</i><br><br><span class='arabic-context-text'>حَنِيْفٌ: مَا أَمَلُكَ فِيْ الْمُسْتَقْبَلِ؟<br>فَوْزَانُ: أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. وَمَا أَمَلُكَ، يَا حَنِيْفُ؟<br>حَنِيْفٌ: أُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا</span>"
    },
    {
        id: 26,
        bab: 3,
        soal: "مَا أَمَلُ حَنِيْفٍ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "جُنْدِيٌّ",
            "كَاتِبٌ",
            "طَبِيْبٌ",
            "فَلاَّحٌ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ الْحِوَارَ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ (25-26).</b><br><i>Bacalah percakapan berikut untuk soal nomor 25 & 26, kemudian pilihlah jawaban yang benar!</i><br><br><span class='arabic-context-text'>حَنِيْفٌ: مَا أَمَلُكَ فِيْ الْمُسْتَقْبَلِ؟<br>فَوْزَانُ: أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. وَمَا أَمَلُكَ، يَا حَنِيْفُ؟<br>حَنِيْفٌ: أُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا</span>"
    },
    {
        id: 27,
        bab: 3,
        soal: "مَا أَمَلُ هٰذِهِ الصُّوْرَةِ؟",
        pilihan: [
            "مُهَنْدِسٌ",
            "شُرْطِيٌّ",
            "طَبِيْبٌ",
            "كَاتِبٌ"
        ],
        correctIndex: 1,
        gambar: "../../Public/Image/quiz/bab3/img_bab3_rId8.png"
    },
    {
        id: 28,
        bab: 3,
        soal: "أَنْوَاعُ الْأَمَلِ هِيَ ……. وَغَيْرُهَا",
        pilihan: [
            "قَلَمٌ كِتَابٌ كُرْسِيٌّ",
            "أَحْمَرٌ أَسْفَرٌ أَخْضَرٌ",
            "مُهَنْدِسٌ وَشُرْطِيٌّ وَجُنْدِيٌّ",
            "عِنَبٌ تُفَّاحَةٌ بُرْتُقَالٌ"
        ],
        correctIndex: 2
    },
    {
        id: 29,
        bab: 3,
        soal: "مَا أَمَلُ هٰذِهِ الصُّوْرَةِ؟",
        pilihan: [
            "جُنْدِيٌّ",
            "مُدَرِّسٌ",
            "تَاجِرٌ",
            "شُرْطِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/quiz/bab3/img_bab3_rId9.jpeg"
    },
    {
        id: 30,
        bab: 3,
        soal: "مَنْ يَتَحَدَّثُ فِي الْحِوَارِ؟",
        pilihan: [
            "نَجِيْبٌ وَخَدِيْجَةُ",
            "حَنِيْفٌ وَفَوْزَانُ",
            "مُحَمَّدٌ وَعَلِيٌّ",
            "خَالِدٌ وَعُمَرُ"
        ],
        correctIndex: 1
    }
];

// 5. Informasi Kontak & Pengiriman Tugas Praktik
const praktikInfo = {
    instruksi: "Rekam video dirimu sedang membaca teks komik Bahasa Arab dari buku QOMAR dengan suara lantang dan jelas. Pastikan wajahmu terlihat dalam video dan durasi minimal 1 menit. Kirim video rekaman melalui WhatsApp ke Guru dengan menekan tombol di bawah ini.",
    nomorWA: "6285707602967",
    namaGuru: "Ustadzah Annisa Ocktavia",
    templatePesan: "Assalamu'alaikum, Ustadzah. Saya kirim tugas praktik membaca komik Bahasa Arab QOMAR. Berikut video rekaman saya. Terima kasih. 🙏"
};
