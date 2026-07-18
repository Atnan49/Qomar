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
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Alamat.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Alamat.mp3"
    },
    {
      id: 2,
      arab: "مَشْيٌ عَلَى الْأَقْدَامِ",
      transliterasi: "Masyun ‘alal Aqdāmi",
      arti: "Berjalan Kaki",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Berjalan Kaki.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Berjalan kaki.mp3"
    },
    {
      id: 3,
      arab: "قَرِيْبٌ",
      transliterasi: "Qarībun",
      arti: "Dekat",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Dekat.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Dekat.mp3"
    },
    {
      id: 4,
      arab: "قَرْيَةٌ",
      transliterasi: "Qaryatun",
      arti: "Desa",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Desa.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Desa.mp3"
    },
    {
      id: 5,
      arab: "جِدَارٌ",
      transliterasi: "Jidārun",
      arti: "Dinding",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Dinding.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Dinding.mp3"
    },
    {
      id: 6,
      arab: "بَيْتٌ",
      transliterasi: "Baitun",
      arti: "Rumah",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 1/Rumah.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 1/Rumah.mp3"
    }
  ],
  tema2: [
    {
      id: 1,
      arab: "يَعْمَلُ",
      transliterasi: "Ya‘malu",
      arti: "Bekerja",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Bekerja.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/bekerja.mp3"
    },
    {
      id: 2,
      arab: "طَبِيْبَةُ الْأَسْنَانِ",
      transliterasi: "Thabībatul Asnāni",
      arti: "Dokter Gigi",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Dokter Gigi.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/dokter gigi.mp3"
    },
    {
      id: 3,
      arab: "رَبَّةُ الْبَيْتِ",
      transliterasi: "Rabbatul Baiti",
      arti: "Ibu Rumah Tangga",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Ibu Rumah Tangga.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/ibu rumah tangga.mp3"
    },
    {
      id: 4,
      arab: "طَرِيْقٌ",
      transliterasi: "Tharīqun",
      arti: "Jalan",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Jalan.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/jalan.mp3"
    },
    {
      id: 5,
      arab: "مُرُوْرٌ",
      transliterasi: "Murūrun",
      arti: "Lalu Lintas",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Lalu Lintas.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/lalu lintas.mp3"
    },
    {
      id: 6,
      arab: "شُرْطِيٌّ",
      transliterasi: "Syurthiyyun",
      arti: "Polisi",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Polisi.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/Polisi.mp3"
    },
    {
      id: 7,
      arab: "مِهْنَةٌ",
      transliterasi: "Mihnatun",
      arti: "Profesi",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Profesi.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/Profesi.mp3"
    },
    {
      id: 8,
      arab: "مُسْتَشْفَى",
      transliterasi: "Mustasyfā",
      arti: "Rumah Sakit",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 2/Rumah Sakit.webp",
      audio: "../../MEDIA KOMIK/KOMIK TEMA 2/rumah sakit.mp3"
    }
  ],
  tema3: [
    {
      id: 1,
      arab: "تَعَلَّمَ",
      transliterasi: "Ta‘allama",
      arti: "Belajar",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/belajar.webp",
      audio: ""
    },
    {
      id: 2,
      arab: "طَبِيْبٌ",
      transliterasi: "Thabībun",
      arti: "Dokter",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/dokter.webp",
      audio: ""
    },
    {
      id: 3,
      arab: "مُدَرِّسٌ",
      transliterasi: "Mudarrisun",
      arti: "Guru",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/guru.webp",
      audio: ""
    },
    {
      id: 4,
      arab: "طَبَّاخٌ",
      transliterasi: "Thabbākhun",
      arti: "Koki",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/koki.webp",
      audio: ""
    },
    {
      id: 5,
      arab: "طَبْخٌ",
      transliterasi: "Tabkhun",
      arti: "Memasak",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/memasak.webp",
      audio: ""
    },
    {
      id: 6,
      arab: "مُسَاعَدَةٌ",
      transliterasi: "Musā‘adatun",
      arti: "Membantu",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/membantu.webp",
      audio: ""
    },
    {
      id: 7,
      arab: "زِرَاعَةٌ",
      transliterasi: "Zirā‘atun",
      arti: "Menanam",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/menanam.webp",
      audio: ""
    },
    {
      id: 8,
      arab: "تَعْلِيْمٌ",
      transliterasi: "Ta‘līmun",
      arti: "Mengajar",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/mengajar.webp",
      audio: ""
    },
    {
      id: 9,
      arab: "مُعَالَجَةٌ",
      transliterasi: "Mu‘ālajatun",
      arti: "Mengobati",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/mengobati.webp",
      audio: ""
    },
    {
      id: 10,
      arab: "خِيَاطَةٌ",
      transliterasi: "Khiyāthatun",
      arti: "Menjahit",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/menjahit.webp",
      audio: ""
    },
    {
      id: 11,
      arab: "بَيْعٌ",
      transliterasi: "Bai‘un",
      arti: "Menjual",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/menjual.webp",
      audio: ""
    },
    {
      id: 12,
      arab: "تَاجِرٌ",
      transliterasi: "Tājirun",
      arti: "Pedagang",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/pedagang.webp",
      audio: ""
    },
    {
      id: 13,
      arab: "خَيَّاطٌ",
      transliterasi: "Khayyāthun",
      arti: "Penjahit",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/penjahit.webp",
      audio: ""
    },
    {
      id: 14,
      arab: "مُمَرِّضَةٌ",
      transliterasi: "Mumarridhatun",
      arti: "Perawat",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/perawat.webp",
      audio: ""
    },
    {
      id: 15,
      arab: "فَلَّاحٌ",
      transliterasi: "Fallāhun",
      arti: "Petani",
      gambar: "../../MEDIA KOMIK/KOMIK TEMA 3/petani.webp",
      audio: ""
    }
  ]
};

// 1.5. Data Komik dan Transkrip Dialogue
const komikMateri = {
  tema1: {
    judulArab: "عُنْوَانُ بَيْتِ طَاهِرٍ",
    judulIndo: "Alamat Rumah Tahir",
    halaman: [
      "../../MEDIA KOMIK/KOMIK TEMA 1/Komik tema 1..webp"
    ],
    dialog: [
      { pembicara: "إبراهيم", arab: "أَيْنَ عُنْوَانُ بَيْتِكَ، يَا طَاهِرٍ؟", arti: "Di mana alamat rumahmu, wahai Tahir?" },
      { pembicara: "طَاهِرٌ", arab: "عُنْوَانُ بَيْتِيْ فِيْ قَرْيَةِ كَايُوْ مَانِيْسْ (kayu manis)", arti: "Alamat rumahku di desa Kayu Manis." },
      { pembicara: "إبراهيم", arab: "مَا لَوْنُ الْجِدَارِ فِيْ بَيْتِكَ؟", arti: "Apa warna dinding di rumahmu?" },
      { pembicara: "طَاهِرٌ", arab: "لَوْنُ الْجِدَارِ فِيْ بَيْتِيْ أَخْضَرُ", arti: "Warna dinding di rumahku hijau." },
      { pembicara: "إبراهيم", arab: "هَلْ بَيْتُكَ قَرِيْبٌ مِنَ الْمَسْجِدِ؟", arti: "Apakah rumahmu dekat dari masjid?" },
      { pembicara: "طَاهِرٌ", arab: "نَعَمْ، بَيْتِيْ قَرِيْبٌ مِنَ الْمَسْجِدِ", arti: "Ya, rumahku dekat dari masjid." },
      { pembicara: "إبراهيم", arab: "هَلْ تُصَلِّيْ فِيْ الْمَسْجِدِ جَمَاعَةً كُلَّ يَوْمٍ؟", arti: "Apakah kamu shalat berjamaah di masjid setiap hari?" },
      { pembicara: "طَاهِرٌ", arab: "نَعَمْ، أُصَلِّيْ فِيْ الْمَسْجِدِ جَمَاعَةً كُلَّ يَوْمٍ.", arti: "Ya, saya shalat berjamaah di masjid setiap hari." },
      { pembicara: "إبراهيم", arab: "كَيْفَ تَذْهَبُ إِلَى الْمَسْجِدِ؟", arti: "Bagaimana kamu pergi ke masjid?" },
      { pembicara: "إبراهيم", arab: "أَذْهَبُ إِلَىْ الْمَسْجِدِ بِالْمَشْيِ عَلَى الأَقْدَامِ.", arti: "Saya pergi ke masjid dengan berjalan kaki." }
    ]
  },
  tema2: {
    judulArab: "اَلْمِهْنَةُ",
    judulIndo: "Profesi",
    halaman: [
      "../../MEDIA KOMIK/KOMIK TEMA 2/Komik tema 2 . page 1 revisi.webp",
      "../../MEDIA KOMIK/KOMIK TEMA 2/komik tema 2. page 2.webp"
    ],
    dialog: [
      { pembicara: "فَوْزِيَّةُ", arab: "صَبَاحُ الْخَيْرِ، يَا فِطْرِيَا", arti: "Selamat pagi, wahai Fitriya." },
      { pembicara: "فِطْرِيَا", arab: "صَبَاحَ الْنُّوْرِ. مَنْ هٰذَا، يَا فَوْزِيَّةُ؟", arti: "Selamat pagi juga. Siapa ini, wahai Fauziyah?" },
      { pembicara: "فَوْزِيَّةُ", arab: "هٰذَا أَبِيْ. هُوَ شُرْطِيٌّ.", arti: "Ini ayahku. Beliau adalah seorang polisi." },
      { pembicara: "فِطْرِيَا", arab: "مَاذَا يَعْمَلُ الشُّرْطِيُّ؟", arti: "Apa yang dilakukan polisi?" },
      { pembicara: "فَوْزِيَّةُ", arab: "الشُّرْطِيُّ يُنَظِّمُ الْمُرُوْرَ فِى الطَّرِيْقِ.", arti: "Polisi mengatur lalu lintas di jalan." },
      { pembicara: "فِطْرِيَا", arab: "مَنْ جَانِبَ أَبِيْكِ، يَا فَوْزِيَّةُ؟", arti: "Siapa di samping ayahmu, wahai Fauziyah?" },
      { pembicara: "فَوْزِيَّةُ", arab: "تِلْكَ عَمَّتِيْ. هِيَ طَبِيْبَةُ الأَسْنَانِ.", arti: "Itu bibiku. Beliau adalah seorang dokter gigi." },
      { pembicara: "فِطْرِيَا", arab: "أَيْنَ تَعْمَلُ طَبِيْبَةُ الأَسْنَانِ؟", arti: "Di mana dokter gigi bekerja?" },
      { pembicara: "فَوْزِيَّةُ", arab: "طَبِيْبَةُ الأَسْنَانِ تَعْمَلُ فِيْ الْمُسْتَشْفَى", arti: "Dokter gigi bekerja di rumah sakit." },
      { pembicara: "فِطْرِيَا", arab: "هَلْ أُمُّكِ شُرْطِيَّةٌ؟", arti: "Apakah ibumu seorang polisi?" },
      { pembicara: "فَوْزِيَّةُ", arab: "لاَ، بَلْ أَمِّيْ رَبَّةُ الْبَيْتِ.", arti: "Tidak, melainkan ibuku seorang ibu rumah tangga." },
      { pembicara: "فِطْرِيَا", arab: "شُكْرًا عَلَى إِجَابَتِكِ.", arti: "Terima kasih atas jawabanmu." },
      { pembicara: "فَوْزِيَّةُ", arab: "عَفْوًا", arti: "Sama-sama." }
    ]
  },
  tema3: {
    judulArab: "الْأَمَلُ فِيْ الْمُسْتَقْبَلِ",
    judulIndo: "Cita-cita di Masa Depan",
    halaman: [
      "../../MEDIA KOMIK/KOMIK TEMA 4/ChatGPT Image Jun 27, 2026, 05_22_42 PM.webp"
    ],
    dialog: [
      { pembicara: "حَنِيْفٌ", arab: "مَسَاءَ الْخَيْرِ", arti: "Selamat sore." },
      { pembicara: "فَوْزَانُ", arab: "مَسَاءَ الْنُّوْرِ", arti: "Selamat sore juga." },
      { pembicara: "حَنِيْفٌ", arab: "مَاذَا تَعَلَّمْتَ فِيْ الْفَصْلِ، يَا فَوْزَانُ؟", arti: "Apa yang kamu pelajari di kelas, wahai Fauzan?" },
      { pembicara: "فَوْزَانُ", arab: "فِيْ الْفَصْلِ تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِيْ الْمُسْتَقْبَلِ، يَا حَنِيْفُ.", arti: "Di kelas saya mempelajari macam-macam cita-cita di masa depan, wahai Hanif." },
      { pembicara: "حَنِيْفٌ", arab: "مَا أَنْوَاعُ الْأَمَلِ؟", arti: "Apa saja macam-macam cita-cita itu?" },
      { pembicara: "فَوْزَانُ", arab: "أَنْوَاعُ الْأَمَلِ هُوَ مُهَنْدِسٌ وَشُرْطِيٌّ وَجُنْدِيٌّ وغَيْرُهَا.", arti: "Macam-macam cita-cita itu adalah insinyur, polisi, tentara, dan lainnya." },
      { pembicara: "حَنِيْفٌ", arab: "هَلْ لَكَ أَمَلٌ فِيْ الْمُسْتَقْبَلِ؟", arti: "Apakah kamu memiliki cita-cita di masa depan?" },
      { pembicara: "فَوْزَانُ", arab: "نَعَمْ، لِيْ أَمَلٌ فِيْ الْمُسْتَقْبَلِ", arti: "Ya, saya memiliki cita-cita di masa depan." },
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
    deskripsi: "Pelajari cara menyebutkan alamat rumah, nomor telepon, dan nama jalan dalam Bahasa Arab melalui cerita komik interaktif Ahmad dan Fatimah.",
    videoUrl: "../Video/video_komik_bab1.mp4"
  },
  {
    id: 2,
    judul: "Bab 2 : الْمِهْنَةُ",
    deskripsi: "Tonton cerita komik menarik tentang pengenalan berbagai jenis profesi dan pekerjaan dalam Bahasa Arab.",
    videoUrl: "../Video/video_komik_bab2.mp4"
  },
  {
    id: 3,
    judul: "Bab 3 : أَمَلِيْ",
    deskripsi: "Temukan cara mengungkapkan impian, harapan, dan cita-cita masa depan dalam Bahasa Arab.",
    videoUrl: "../Video/video_komik_bab3.mp4"
  }
];

// 3. Soal Kuis Pilihan Ganda (PG)
const kuisPG = [
    {
        id: 1,
        soal: "مَا عُنْوَانُ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "فِي شَارِعِ سُوْدِرْمَانَ (Jl. Sudirman)",
            "فِي شَارِعِ وِجَايَا كُسُوْمَا (Jl. Wijaya Kusuma)",
            "فِي شَارِعِ وِجَايَنْتُوْ (Jl. Wijayanto)",
            "فِي شَارِعِ أَحْمَدَ يَانِي (Jl. Ahmad Yani)"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        soal: "أَيْنَ يَعْمَلُ الطَّبِيْبُ؟",
        pilihan: [
            "فِي الْمُسْتَشْفَى",
            "فِي السُّوْقِ",
            "فِي الْمَدْرَسَةِ",
            "فِي الْمَطْعَمِ"
        ],
        correctIndex: 0
    },
    {
        id: 3,
        soal: "مَنْ يَبِيْعُ السِّلَعَ فِي السُّوْقِ؟",
        pilihan: [
            "الطَّبِيْبُ",
            "الْفَلَّاحُ",
            "التَّاجِرُ",
            "الْمُدَرِّسُ"
        ],
        correctIndex: 2
    },
    {
        id: 4,
        soal: "مَا مَعْنَى هٰذِهِ الصُّورَةِ؟",
        pilihan: [
            "الْمَدْرَسَةُ",
            "السُّوْقُ",
            "الْمُسْتَشْفَى",
            "الْمَسْجِدُ"
        ],
        correctIndex: 3,
        gambar: "../../Public/Image/image1.webp"
    },
    {
        id: 5,
        soal: "مَا مِهْنَةُ هٰذِهِ الصُّورَة ؟",
        pilihan: [
            "طَبِيْبٌ",
            "تَاجِرٌ",
            "فَلَّاحٌ",
            "شُرْطِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/image2.webp"
    },
    {
        id: 6,
        soal: "مَاذَا تُعَلِّمُ الْمُدَرِّسَةُ؟",
        pilihan: [
            "اللُّغَةَ الإِنْدُونِيْسِيَّةَ",
            "اللُّغَةَ الْعَرَبِيَّةَ",
            "الرِّيَاضِيَّاتِ",
            "الْعُلُومَ"
        ],
        correctIndex: 1
    },
    {
        id: 7,
        soal: "مَا أَمَلُ فَوْزَانَ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "مُهَنْدِسًا",
            "كَاتِبًا",
            "شُرْطِيًّا",
            "طَبِيْبًا"
        ],
        correctIndex: 3
    },
    {
        id: 8,
        soal: "مَا أَمَلُ حَنِيْفٍ فِي الْمُسْتَقْبَلِ؟",
        pilihan: [
            "كَاتِبًا",
            "طَبِيْبًا",
            "مُهَنْدِسًا",
            "جُنْدِيًّا"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        soal: "مَا مِهْنَةُ هٰذَا الرَّجُلِ؟",
        pilihan: [
            "فَلَّاحٌ",
            "تَاجِرٌ",
            "مُهَنْدِسٌ",
            "جُنْدِيٌّ"
        ],
        correctIndex: 0,
        gambar: "../../Public/Image/image3.webp"
    },
    {
        id: 10,
        soal: "مَا مَعْنَى هٰذِهِ الصُّورَةِ؟",
        pilihan: [
            "مُهَنْدِسٌ",
            "طَبِيْبٌ",
            "شُرْطِيٌّ",
            "كَاتِبٌ"
        ],
        correctIndex: 2,
        gambar: "../../Public/Image/image4.webp"
    },
    {
        id: 11,
        soal: "أَيْنَ عُنْوَانُ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "فِي شَارِعِ وِجَايَا كُسُوْمَا",
            "فِي شَارِعِ وِجَايَنْتُوْ",
            "فِي شَارِعِ سُوْدِرْمَانَ",
            "فِي شَارِعِ أَحْمَدَ يَانِي"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },
    {
        id: 12,
        soal: "مَاذَا يُوْجَدُ جَانِبَ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "سُوْقٌ",
            "مَدْرَسَةٌ",
            "نَهْرٌ",
            "مَسْجِدٌ كَبِيْرٌ"
        ],
        correctIndex: 3,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّانِ.</span>"
    },
    {
        id: 13,
        soal: "مَاذَا يُوْجَدُ أَمَامَ بَيْتِ نَجِيْبٍ؟",
        pilihan: [
            "دُكَّانٌ",
            "مَدْرَسَةٌ إِبْتِدَائِيَّةٌ",
            "مَزْرَعَةٌ",
            "مُسْتَشْفًى"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا نَجِيْبٌ. لَهُ بَيْتٌ. عُنْوَانُ بَيْتِهِ فِي شَارِعِ وِجَايَا كُسُوْمَا. جَانِبَ بَيْتِهِ مَسْجِدٌ كَبِيْرٌ، وَأَمَامَ بَيْتِهِ مَدْرَسَةٌ إِبْتِدَائِيَّةٌ. بَيْتُهُ قَرِيْبٌ مِنَ الدُّكَّان.</span>"
    },
    {
        id: 14,
        soal: "مَا مِهْنَةُ الأَبِ؟",
        pilihan: [
            "تَاجِرٌ",
            "طَبِيْبٌ",
            "مُدَرِّسٌ",
            "فَلَّاحٌ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 15,
        soal: "أَيْنَ تَعْمَلُ الأُمُّ؟",
        pilihan: [
            "فِي الْمَدْرَسَةِ",
            "فِي السُّوْقِ",
            "فِي الْمَطْعَمِ",
            "فِي الْمَزْرَعَةِ"
        ],
        correctIndex: 2,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 16,
        soal: "مَنْ تُسَاعِدُ الطَّبِيْبَ؟",
        pilihan: [
            "الأُمُّ",
            "مُمِرِّضَةٌ",
            "الْجَدَّةُ",
            "الْعَمَّةُ"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>هٰذَا أَبِيْ. هُوَ طَبِيْبٌ. يُعَالِجُ الْمَرْضَى فِي الْمُسْتَشْفَى. وَهٰذِهِ أُمِّيْ طَبَّاخَةٌ. تَطْبَخُ الأَطْعِمَةَ فِي الْمَطْعَمِ. وَأُخْتِيْ الْكَبِيْرَةُ مُمَرِّضَةٌ، تُسَاعِدُ الطَّبِيْبَ فِي الْمُسْتَشْفَى.</span>"
    },
    {
        id: 17,
        soal: "مَاذَا تَعَلَّمَ فَوْزَانُ فِي الْفَصْلِ؟",
        pilihan: [
            "أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ",
            "أَنْوَاعَ الْحَيَوَانَاتِ",
            "أَنْوَاعَ الْفَوَاكِهِ",
            "أَنْوَاعَ الْمِهَنِ"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 18,
        soal: "مَاذَا أَمَلُ فَوْزَانُ فِيْ الْمُسْتَقْبَلِ؟",
        pilihan: [
            "مُهَنْدِسًا",
            "طَبِيْبًا",
            "جُنْدِيًّا",
            "تَاجِرًا"
        ],
        correctIndex: 1,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 19,
        soal: "مَاذَا يُرِيْدُ حَنِيْفٌ أَنْ يَكُوْنَ؟",
        pilihan: [
            "طَبِيْبًا",
            "شُرْطِيًّا",
            "مُهَنْدِسًا",
            "كَاتِبًا"
        ],
        correctIndex: 3,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    },
    {
        id: 20,
        soal: "مَنْ يُرِيْدُ أَنْ يَكُوْنَ طَبِيْبًا؟",
        pilihan: [
            "فَوْزَانُ",
            "نَجِيْبٌ",
            "الطَّبِيْبُ",
            "حَنِيْفٌ"
        ],
        correctIndex: 0,
        contextText: "<b>اِقْرَأِ النَّصَّ الآتِيَ ثُمَّ أَجِبْ عَنِ الأَسْئِلَةِ.</b><br><i>Bacalah Teks Di bawah ini kemudian jawablah soal dengan tepat!</i><br><br><span class='arabic-context-text'>قَالَ حَنِيْفٌ: مَاذَا تَعَلَّمْتَ فِي الْفَصْلِ؟ قَالَ فَوْزَانُ: تَعَلَّمْتُ أَنْوَاعَ الْأَمَلِ فِي الْمُسْتَقْبَلِ. أُرِيْدُ أَنْ أَكُوْنَ طَبِيْبًا. فَقَالَ حَنِيْفٌ: أَمَّا أَنَا فَأُرِيْدُ أَنْ أَكُوْنَ كَاتِبًا.</span>"
    }
];

// 4. Soal Kuis Essay
const kuisEssay = [
    {
        id: 1,
        soal: "Tuliskan arti dari kata berikut dalam Bahasa Indonesia: مَكْتَبَةٌ (Maktabatun).",
        kpiJawaban: "Perpustakaan"
    },
    {
        id: 2,
        soal: "Sebutkan 3 kosakata Bahasa Arab tentang benda-benda di dalam kelas beserta artinya!",
        kpiJawaban: "Contoh jawaban: 1) كِتَابٌ (Kitābun) = Buku, 2) قَلَمٌ (Qalamun) = Pena, 3) كُرْسِيٌّ (Kursi) = Kursi."
    },
    {
        id: 3,
        soal: "Buatlah satu kalimat sederhana dalam Bahasa Arab menggunakan kata  مُعَلِّمٌ  (Mu'allimun)!",
        kpiJawaban: "Contoh jawaban: اَلْمُعَلِّمُ فِي الْمَدْرَسَةِ (Al-Mu'allimu fī al-Madrasati) = Guru di sekolah."
    },
    {
        id: 4,
        soal: "Sebutkan nama-nama hari dalam Bahasa Arab yang kamu ketahui!",
        kpiJawaban: "Ahad (Minggu), Al-Itsnain (Senin), Ats-Tsulatsa (Selasa), Al-Arbi'a (Rabu), Al-Khamis (Kamis), Al-Jumu'ah (Jumat), As-Sabt (Sabtu)."
    },
    {
        id: 5,
        soal: "Kapan iqamah dikumandangkan?",
        kpiJawaban: "Iqamah dikumandangkan ketika shalat berjamaah akan segera dimulai (sebagai tanda untuk merapatkan barisan)."
    }
];

// 5. Informasi Kontak & Pengiriman Tugas Praktik
const praktikInfo = {
    instruksi: "Rekam video dirimu sedang membaca teks komik Bahasa Arab dari buku QOMAR dengan suara lantang dan jelas. Pastikan wajahmu terlihat dalam video dan durasi minimal 1 menit. Kirim video rekaman melalui WhatsApp ke Guru dengan menekan tombol di bawah ini.",
    nomorWA: "6285707602967",
    namaGuru: "Ustadzah Ocktavia Annisa",
    templatePesan: "Assalamu'alaikum, Ustadzah. Saya kirim tugas praktik membaca komik Bahasa Arab QOMAR. Berikut video rekaman saya. Terima kasih. 🙏"
};
