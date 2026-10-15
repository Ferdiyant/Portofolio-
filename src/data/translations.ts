export type Language = 'id' | 'en';

export interface TranslationDict {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    achievements: string;
    contact: string;
    viewCv: string;
    contactBtn: string;
    ownerMode: string;
    changePhoto: string;
    editData: string;
    exitOwner: string;
  };
  hero: {
    statusKicker: string;
    rolesHeadline: string;
    locationPrefix: string;
    gradPrefix: string;
    contactWa: string;
    emailCopied: string;
    copyEmail: string;
    viewCvSummary: string;
    careerFocusLabel: string;
    rolesList: string[];
    officialPhotoBadge: string;
    ownerActiveBadge: string;
    changePhotoBtn: string;
    metrics: {
      censusCount: string;
      censusLabel: string;
      gpaVal: string;
      gpaLabel: string;
      certCount: string;
      certLabel: string;
      awardCount: string;
      awardLabel: string;
    };
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    thesisLabel: string;
    coreCompetenciesTitle: string;
    competencies: string[];
    targetRolesTitle: string;
    targetRolesDesc: string;
    targetRoles: { title: string; desc: string }[];
    mobilityTitle: string;
    mobilityDesc: string;
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    workTab: string;
    orgTab: string;
    keyTasksLabel: string;
    appliedCompetenciesLabel: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterDataScience: string;
    filterOperations: string;
    filterSystems: string;
    viewDetails: string;
    modalProblemTitle: string;
    modalMethodologyTitle: string;
    modalImpactTitle: string;
    modalTechTitle: string;
    modalCloseBtn: string;
  };
  skills: {
    kicker: string;
    title: string;
    subtitle: string;
    techTitle: string;
    interpersonalTitle: string;
    techAssurance: string;
    interpersonalAssurance: string;
  };
  achievements: {
    kicker: string;
    title: string;
    subtitle: string;
    certTab: string;
    awardTab: string;
    verifiedLabel: string;
    awardRankLabel: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailSub: string;
    phoneLabel: string;
    phoneSub: string;
    locationLabel: string;
    locationSub: string;
    linkedinLabel: string;
    linkedinSub: string;
    openLinkedin: string;
    copyBtn: string;
    copiedBtn: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    purposeLabel: string;
    purposeOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    forwardWaBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnotherBtn: string;
  };
  resume: {
    previewTitle: string;
    previewSub: string;
    printBtn: string;
    closeBtn: string;
    summaryHeading: string;
    educationHeading: string;
    workHeading: string;
    orgHeading: string;
    certHeading: string;
    awardHeading: string;
    skillsHeading: string;
    footerNote: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  id: {
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek & Riset',
      skills: 'Keahlian',
      achievements: 'Sertifikasi & Prestasi',
      contact: 'Kontak',
      viewCv: 'Lihat CV',
      contactBtn: 'Hubungi',
      ownerMode: 'Mode Pemilik',
      changePhoto: 'Ganti Foto',
      editData: 'Edit Data',
      exitOwner: 'Keluar',
    },
    hero: {
      statusKicker: 'Tersedia untuk Peluang Baru · Data & TI',
      rolesHeadline: 'Information Technology · Data Operations · Data Administration',
      locationPrefix: 'Bondowoso, Jawa Timur, Indonesia',
      gradPrefix: 'Lulusan Universitas Nurul Jadid (IPK 3.44)',
      contactWa: 'WhatsApp Langsung',
      emailCopied: 'Email Disalin!',
      copyEmail: 'Salin Email',
      viewCvSummary: 'Lihat Ringkasan CV',
      careerFocusLabel: 'Fokus Karir:',
      rolesList: ['Administrasi Data', 'IT Support', 'Data Operations', 'Junior Data Analyst'],
      officialPhotoBadge: 'Foto Resmi',
      ownerActiveBadge: 'Mode Pemilik Aktif',
      changePhotoBtn: 'Ganti Foto Saya',
      metrics: {
        censusCount: '550+',
        censusLabel: 'Responden Sensus Terverifikasi',
        gpaVal: '3.44',
        gpaLabel: 'IPK Sarjana Teknik Informatika',
        certCount: '5+',
        certLabel: 'Sertifikasi Resmi (BPS & Microsoft)',
        awardCount: '4',
        awardLabel: 'Penghargaan Nasional & Internasional',
      },
    },
    about: {
      kicker: '01. Profil & Pendidikan',
      title: 'Tentang Muhammad Ferdiyanto',
      subtitle:
        'Latar belakang akademis di bidang Teknik Informatika dengan pengalaman praktis dalam validasi data lapangan, tata kelola statistik, serta kepemimpinan organisasi.',
      thesisLabel: 'Judul Skripsi / Tugas Akhir:',
      coreCompetenciesTitle: 'Keahlian Inti & Nilai Tambah',
      competencies: [
        'Kepatuhan SOP dan integritas akurasi data statistik teruji di BPS',
        'Penguasaan metodologi PCA & K-Means untuk reduksi dan klastering data',
        'Sertifikasi resmi Microsoft Fabric & Azure AI untuk ekosistem cloud',
        'Kemampuan komunikasi publik dan koordinasi tim lintas instansi',
      ],
      targetRolesTitle: 'Target Peran & Penempatan',
      targetRolesDesc:
        'Memiliki kesiapan penuh untuk segera berkontribusi secara profesional pada lingkungan pemerintah, BUMN, perbankan, maupun korporasi swasta:',
      targetRoles: [
        {
          title: 'Data Administration & Operations',
          desc: 'Penginputan, verifikasi kualitas, pembersihan, dan standarisasi arsip data.',
        },
        {
          title: 'Junior Data Analyst',
          desc: 'Pengolahan statistik, tabulasi, pemodelan data dasar, dan visualisasi wawasan.',
        },
        {
          title: 'IT Support & Technical Assistant',
          desc: 'Pemeliharaan operasional sistem informasi, perangkat keras, dan bantuan pengguna.',
        },
        {
          title: 'Administrative & Reporting Officer',
          desc: 'Penyusunan berkas kedinasan, korespondensi resmi, dan pelaporan evaluasi program.',
        },
      ],
      mobilityTitle: 'Kesiapan Mobilitas Kerja',
      mobilityDesc:
        'Berdomisili di Bondowoso, Jawa Timur, dan terbuka untuk penempatan kerja di wilayah Jawa Timur (Surabaya, Malang, Jember, Banyuwangi) maupun opsi WFH / Hybrid di seluruh Indonesia.',
    },
    experience: {
      kicker: '02. Pengalaman Profesional & Kepemimpinan',
      title: 'Rekam Jejak Kerja & Organisasi',
      subtitle:
        'Pengalaman langsung di lingkungan institusi pemerintah (BPS, Diskominfo, Lapas IIB) dan rekam jejak kepemimpinan organisasi kepemudaan & santri.',
      workTab: 'Pengalaman Kerja',
      orgTab: 'Pengalaman Organisasi',
      keyTasksLabel: 'Tanggung Jawab & Capaian Kunci:',
      appliedCompetenciesLabel: 'Kompetensi yang diterapkan:',
    },
    projects: {
      kicker: '03. Studi Kasus & Karya Nyata',
      title: 'Proyek Data, Riset & Operasional',
      subtitle:
        'Implementasi nyata dari tugas akhir pemodelan machine learning hingga operasional sensus statistik dan tata kelola administrasi publik.',
      filterAll: 'Semua',
      filterDataScience: 'Data Science & AI',
      filterOperations: 'Data Operations',
      filterSystems: 'Pelaporan & Tata Kelola',
      viewDetails: 'Lihat Detail Studi Kasus',
      modalProblemTitle: 'Latar Belakang / Tantangan',
      modalMethodologyTitle: 'Metodologi & Langkah Kerja',
      modalImpactTitle: 'Hasil & Dampak',
      modalTechTitle: 'Alat & Teknologi yang Digunakan',
      modalCloseBtn: 'Tutup',
    },
    skills: {
      kicker: '04. Keahlian & Kompetensi',
      title: 'Keterampilan Teknis & Interpersonal',
      subtitle:
        'Kombinasi analisis data berbasis metodologi, pengoperasian teknologi cloud Microsoft/Google, serta kepemimpinan koordinatif yang teruji.',
      techTitle: 'Keahlian Teknis & Data (Technical Skills)',
      interpersonalTitle: 'Keahlian Interpersonal & Manajerial',
      techAssurance: 'Didukung pelatihan resmi Dicoding, BPS, dan Microsoft',
      interpersonalAssurance: 'Terbukti melalui kepengurusan organisasi regional 2019–2025',
    },
    achievements: {
      kicker: '05. Kredibilitas & Prestasi',
      title: 'Sertifikasi Pelatihan & Penghargaan',
      subtitle:
        'Sertifikasi kompetensi resmi dari BPS, Microsoft, dan Google Developers, serta pencapaian kompetisi tingkat nasional dan internasional.',
      certTab: 'Sertifikasi',
      awardTab: 'Penghargaan',
      verifiedLabel: 'Terverifikasi',
      awardRankLabel: 'Kategori / Predikat:',
    },
    contact: {
      kicker: '06. Kontak & Kolaborasi',
      title: 'Mari Terhubung & Berdiskusi',
      subtitle:
        'Terbuka untuk tawaran posisi Data Administration, IT Support, Data Operations, Junior Data Analyst, maupun proyek kolaborasi data.',
      emailLabel: 'Alamat Email',
      emailSub: 'Respon cepat dalam 24 jam',
      phoneLabel: 'Telepon / WhatsApp',
      phoneSub: 'Aktif untuk panggilan & pesan teks',
      locationLabel: 'Domisili Saat Ini',
      locationSub: 'Siap penempatan Jawa Timur (Surabaya, Malang, Jember) atau WFH / Remote.',
      linkedinLabel: 'Profil LinkedIn',
      linkedinSub: 'Terhubung secara profesional',
      openLinkedin: 'Buka',
      copyBtn: 'Salin',
      copiedBtn: 'Tersalin',
      formTitle: 'Kirim Pesan / Undangan Diskusi',
      formSub: 'Isi form di bawah ini untuk mengirimkan pesan atau hubungi langsung via WhatsApp.',
      nameLabel: 'Nama Lengkap / Instansi *',
      namePlaceholder: 'Contoh: HRD PT Sinergi / Bpk. Ahmad',
      contactLabel: 'Email / Nomor WhatsApp Anda',
      contactPlaceholder: 'email@perusahaan.com / 0812...',
      purposeLabel: 'Tujuan Pesan',
      purposeOptions: [
        'Peluang Kerja / Rekrutmen (Data & IT)',
        'Undangan Wawancara / Seleksi Kerja',
        'Proyek Analisis & Validasi Data',
        'Diskusi Lainnya',
      ],
      messageLabel: 'Pesan Anda *',
      messagePlaceholder: 'Tuliskan detail tawaran pekerjaan, lingkup tugas, atau pertanyaan Anda...',
      sendBtn: 'Kirim Pesan',
      forwardWaBtn: 'Teruskan ke WhatsApp',
      successTitle: 'Pesan Anda Berhasil Terkirim!',
      successDesc:
        'Terima kasih telah menghubungi. Muhammad Ferdiyanto akan segera meninjau pesan Anda dan merespon secepat mungkin.',
      sendAnotherBtn: 'Kirim pesan lain',
    },
    resume: {
      previewTitle: 'Curriculum Vitae Preview',
      previewSub: '· Siap Cetak & Kirim',
      printBtn: 'Cetak / Simpan PDF',
      closeBtn: 'Tutup',
      summaryHeading: 'Ringkasan Profesional (Professional Summary)',
      educationHeading: 'Pendidikan (Education)',
      workHeading: 'Pengalaman Kerja (Work Experience)',
      orgHeading: 'Pengalaman Organisasi (Organizational Experience)',
      certHeading: 'Sertifikasi & Pelatihan',
      awardHeading: 'Prestasi & Penghargaan',
      skillsHeading: 'Keahlian (Skills)',
      footerNote: 'Format resmi sesuai standar kurikulum vitae profesional',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects & Research',
      skills: 'Skills',
      achievements: 'Certifications & Awards',
      contact: 'Contact',
      viewCv: 'View CV',
      contactBtn: 'Contact Me',
      ownerMode: 'Owner Mode',
      changePhoto: 'Change Photo',
      editData: 'Edit Profile',
      exitOwner: 'Log Out',
    },
    hero: {
      statusKicker: 'Open to New Opportunities · Data & IT',
      rolesHeadline: 'Information Technology · Data Operations · Data Administration',
      locationPrefix: 'Bondowoso, East Java, Indonesia',
      gradPrefix: 'Graduate of Nurul Jadid University (GPA 3.44)',
      contactWa: 'Chat on WhatsApp',
      emailCopied: 'Email Copied!',
      copyEmail: 'Copy Email',
      viewCvSummary: 'View Resume / CV',
      careerFocusLabel: 'Target Roles:',
      rolesList: ['Data Administration', 'IT Support', 'Data Operations', 'Junior Data Analyst'],
      officialPhotoBadge: 'Official Photo',
      ownerActiveBadge: 'Owner Mode Active',
      changePhotoBtn: 'Change Photo',
      metrics: {
        censusCount: '550+',
        censusLabel: 'Field Respondents Verified',
        gpaVal: '3.44',
        gpaLabel: 'Informatics Engineering GPA',
        certCount: '5+',
        certLabel: 'Official Certifications (BPS & Microsoft)',
        awardCount: '4',
        awardLabel: 'National & International Awards',
      },
    },
    about: {
      kicker: '01. Profile & Education',
      title: 'About Muhammad Ferdiyanto',
      subtitle:
        'Informatics Engineering graduate with hands-on experience in field data validation, regional statistical governance, and organizational leadership.',
      thesisLabel: 'Undergraduate Thesis Title:',
      coreCompetenciesTitle: 'Core Strengths & Value Add',
      competencies: [
        'Strict SOP compliance and data integrity proven in BPS field census operations',
        'Expertise in PCA dimensionality reduction & K-Means clustering algorithms',
        'Certified in Microsoft Fabric & Azure AI for modern cloud workflows',
        'Strong public communication and multi-stakeholder cross-sector coordination',
      ],
      targetRolesTitle: 'Target Roles & Career Focus',
      targetRolesDesc:
        'Fully prepared to contribute with high dedication across public sector, state enterprises, banking, or corporate environments:',
      targetRoles: [
        {
          title: 'Data Administration & Operations',
          desc: 'Data entry, quality assurance, cleaning, and archival governance.',
        },
        {
          title: 'Junior Data Analyst',
          desc: 'Statistical tabulation, baseline data modeling, and actionable insights.',
        },
        {
          title: 'IT Support & Technical Assistant',
          desc: 'System maintenance, hardware/software troubleshooting, and end-user support.',
        },
        {
          title: 'Administrative & Reporting Officer',
          desc: 'Official correspondence, government documentation, and progress reporting.',
        },
      ],
      mobilityTitle: 'Work Mobility & Readiness',
      mobilityDesc:
        'Based in Bondowoso, East Java. Available for on-site placement in East Java (Surabaya, Malang, Jember) or Remote / WFH opportunities worldwide.',
    },
    experience: {
      kicker: '02. Professional Track Record & Leadership',
      title: 'Work & Organizational Experience',
      subtitle:
        'Direct experience across government and statistical bodies (BPS, Diskominfo, Lapas IIB) alongside youth leadership tenures.',
      workTab: 'Work Experience',
      orgTab: 'Organizational Leadership',
      keyTasksLabel: 'Key Responsibilities & Deliverables:',
      appliedCompetenciesLabel: 'Applied Competencies:',
    },
    projects: {
      kicker: '03. Case Studies & Research',
      title: 'Data Projects, Research & Operations',
      subtitle:
        'Real-world executions ranging from machine learning thesis modeling to door-to-door census validation and public digital governance.',
      filterAll: 'All Works',
      filterDataScience: 'Data Science & AI',
      filterOperations: 'Data Operations',
      filterSystems: 'Governance & Reporting',
      viewDetails: 'Read Case Study',
      modalProblemTitle: 'Context & Challenge',
      modalMethodologyTitle: 'Methodology & Workflow',
      modalImpactTitle: 'Results & Impact',
      modalTechTitle: 'Tools & Technologies Used',
      modalCloseBtn: 'Close',
    },
    skills: {
      kicker: '04. Skills & Competencies',
      title: 'Technical & Interpersonal Expertise',
      subtitle:
        'A balanced combination of methodological data analysis, Microsoft/Google cloud technologies, and proven team coordination.',
      techTitle: 'Technical & Data Skills',
      interpersonalTitle: 'Interpersonal & Management Skills',
      techAssurance: 'Backed by certified training from BPS, Dicoding, and Microsoft',
      interpersonalAssurance: 'Demonstrated through regional organization leadership 2019–2025',
    },
    achievements: {
      kicker: '05. Credibility & Honors',
      title: 'Certifications, Training & Awards',
      subtitle:
        'Official credentials from BPS Pusdiklat, Microsoft, and Google Developers, alongside national and international competition accolades.',
      certTab: 'Certifications',
      awardTab: 'Awards & Honors',
      verifiedLabel: 'Verified Credential',
      awardRankLabel: 'Rank / Recognition:',
    },
    contact: {
      kicker: '06. Contact & Collaboration',
      title: 'Get In Touch',
      subtitle:
        'Open to entry-level roles in Data Administration, IT Support, Data Operations, Junior Data Analyst, and data collaboration projects.',
      emailLabel: 'Email Address',
      emailSub: 'Quick reply within 24 hours',
      phoneLabel: 'Phone / WhatsApp',
      phoneSub: 'Active for voice calls & WhatsApp messaging',
      locationLabel: 'Current Location',
      locationSub: 'Open to East Java placement or Remote / Hybrid work arrangements.',
      linkedinLabel: 'LinkedIn Profile',
      linkedinSub: 'Connect professionally',
      openLinkedin: 'Open',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      formTitle: 'Send a Message / Interview Inquiry',
      formSub: 'Fill out the form below or start a direct conversation via WhatsApp.',
      nameLabel: 'Full Name / Company *',
      namePlaceholder: 'e.g., HR Team PT Sinergi / John Doe',
      contactLabel: 'Your Email or Phone Number',
      contactPlaceholder: 'email@company.com / +62...',
      purposeLabel: 'Subject / Purpose',
      purposeOptions: [
        'Job Opportunity / Recruitment (Data & IT)',
        'Interview Invitation',
        'Data Analysis & Validation Project',
        'General Inquiry',
      ],
      messageLabel: 'Your Message *',
      messagePlaceholder: 'Tell me about your job opening, scope of work, or questions...',
      sendBtn: 'Send Message',
      forwardWaBtn: 'Continue on WhatsApp',
      successTitle: 'Message Sent Successfully!',
      successDesc:
        'Thank you for reaching out. Muhammad Ferdiyanto will review your message and reply promptly.',
      sendAnotherBtn: 'Send another message',
    },
    resume: {
      previewTitle: 'Curriculum Vitae Preview',
      previewSub: '· Print & Share Ready',
      printBtn: 'Print / Save PDF',
      closeBtn: 'Close',
      summaryHeading: 'Professional Summary',
      educationHeading: 'Education',
      workHeading: 'Work Experience',
      orgHeading: 'Organizational Experience',
      certHeading: 'Certifications & Training',
      awardHeading: 'Achievements & Awards',
      skillsHeading: 'Skills & Competencies',
      footerNote: 'Official curriculum vitae format ready for recruitment review',
    },
  },
};
