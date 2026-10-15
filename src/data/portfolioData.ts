import {
  PortfolioProfile,
  WorkExperience,
  OrganizationalExperience,
  ProjectItem,
  Certification,
  Achievement,
  SkillCategory,
} from '../types/portfolio';
import defaultAvatar from '../assets/images/regenerated_image_1792078700203.jpg';

export const initialProfile: PortfolioProfile = {
  fullName: 'MUHAMMAD FERDIYANTO',
  degree: 'S.Kom.',
  headline: 'Information Technology | Data Operations | Data Administration',
  location: 'Bondowoso, Jawa Timur, Indonesia',
  phone: '082330549599',
  email: 'ferdiyanto2727@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-ferdiyanto',
  summary:
    'Lulusan Teknik Informatika dari Universitas Nurul Jadid dengan rekam jejak mendukung operasional data dan kegiatan administratif lintas institusi pemerintah, pemasyarakatan, serta badan statistik. Memiliki sertifikasi dalam Data Science, Generative AI, Microsoft Azure, dan Manajemen Proyek dengan ketertarikan tinggi pada pemrosesan data, optimasi proses, dan solusi digital. Memiliki latar belakang kepemimpinan organisasi yang kuat, terbiasa dengan koordinasi tim, ketelitian administratif, dan integritas data.',
  university: 'Universitas Nurul Jadid (UNUJA)',
  major: 'S1 Teknik Informatika (Informatics Engineering)',
  graduationYear: '2021 – 2025',
  gpa: '3.44 / 4.00',
  thesisTitle:
    'Implementation Of Principal Component Analysis And K-Means Clustering In Optimization Of Stunting Risk Factors In Bondowoso',
  thesisDescription:
    'Penelitian penerapan algoritma reduksi dimensi Principal Component Analysis (PCA) dan K-Means Clustering untuk menganalisis klaster dan faktor risiko dominan kejadian stunting pada balita di wilayah Kabupaten Bondowoso.',
  avatarUrl: defaultAvatar,
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'bps-bondowoso',
    role: 'Mitra Sensus Ekonomi 2026',
    institution: 'Badan Pusat Statistik (BPS) Kabupaten Bondowoso',
    location: 'Bondowoso, Jawa Timur',
    period: 'Juni 2026 – Agustus 2026',
    badge: 'Statistik & Sensus',
    description:
      'Bertanggung jawab mengumpulkan, memeriksa, dan memverifikasi data lapangan sensus ekonomi untuk pelaku usaha dan rumah tangga di wilayah penugasan sesuai standar akurasi Badan Pusat Statistik.',
    highlights: [
      'Mengumpulkan data primer dari 550 responden (keluarga dan pelaku usaha) secara langsung (door to door).',
      'Memastikan kualitas dan integritas data yang dikumpulkan memenuhi SOP dan standar validasi BPS.',
      'Melakukan verifikasi faktual terhadap kepemilikan usaha, karakteristik operasional, dan parameter ekonomi regional.',
    ],
    skills: ['Validasi Data', 'Sensus Lapangan', 'Verifikasi Data BPS', 'Komunikasi Publik', 'Integritas Data'],
  },
  {
    id: 'lapas-bondowoso',
    role: 'Mentor Kemandirian (Magang Kemnaker Batch 2)',
    institution: 'Lembaga Pemasyarakatan (Lapas) Kelas IIB Bondowoso',
    location: 'Bondowoso, Jawa Timur',
    period: 'November 2025 – Mei 2026',
    badge: 'Kemenkumham & Kemnaker',
    description:
      'Mengembangkan serta menjalankan program pembinaan kemandirian kerja bagi Warga Binaan Pemasyarakatan (WBP) dan menyusun laporan evaluasi capaian bulanan secara komprehensif.',
    highlights: [
      'Menyusun dan mengimplementasikan program pelatihan kemandirian praktis guna meningkatkan keahlian WBP.',
      'Menciptakan inovasi kegiatan produktif bagi WBP dalam mengisi aktivitas harian yang terarah.',
      'Menyusun laporan kinerja bulanan terstruktur untuk monitoring evaluasi pimpinan dan dinas terkait.',
      'Berkoordinasi dengan tim internal lapas serta pihak eksternal untuk memfasilitasi program pemberdayaan.',
    ],
    skills: ['Manajemen Program', 'Penyusunan Laporan', 'Pelatihan Kemandirian', 'Koordinasi Lintas Sektor', 'Evaluasi Kinerja'],
  },
  {
    id: 'diskominfo-bondowoso',
    role: 'Magang Statistik dan Kriptografi',
    institution: 'Dinas Komunikasi dan Informatika (Diskominfo) Bondowoso',
    location: 'Bondowoso, Jawa Timur',
    period: 'Oktober 2024 – Januari 2025',
    badge: 'Statistik & Keamanan Informasi',
    description:
      'Membantu pemrosesan data statistik sektoral daerah dan mendukung tata kelola keamanan informasi persandian serta sosialisasi publik pemerintah daerah.',
    highlights: [
      'Membantu pemrosesan, tabulasi, dan analisis data statistik daerah untuk penyusunan laporan kedinasan.',
      'Berpartisipasi aktif dalam kegiatan sosialisasi informasi publik dan literasi digital kepada masyarakat Bondowoso.',
      'Mendukung tata kelola persandian/kriptografi dan manajemen keamanan informasi daerah sesuai regulasi teknis.',
    ],
    skills: ['Analisis Data Sektoral', 'Pengolahan Statistik Daerah', 'Kriptografi & Persandian', 'Pelaporan Kedinasan'],
  },
];

export const organizationalExperiences: OrganizationalExperience[] = [
  {
    id: 'fks-bondowoso',
    role: 'Ketua Umum (General Chairperson)',
    organization: 'Forum Komunikasi Santri Bondowoso (FKS)',
    period: '2023 – 2025',
    highlights: [
      'Memimpin jalannya organisasi kedaerahan santri dengan ratusan anggota aktif.',
      'Menyusun dan mengesahkan rencana program kerja strategis tahunan.',
      'Membangun komunikasi harmonis antar anggota, alumni, dan pembina organisasi.',
    ],
  },
  {
    id: 'regional-head-nurul-jadid',
    role: 'Kepala Wilayah (2023–2025) & Sekretaris Wilayah (2021–2023)',
    organization: 'Pengurus Wilayah Pondok Pesantren Nurul Jadid',
    period: '2021 – 2025',
    highlights: [
      'Mengelola administrasi kewilayahan santri dan mengkoordinasikan kegiatan operasional santri berkelanjutan.',
      'Memimpin rapat koordinasi berkala serta memantau kedisiplinan dan kesejahteraan santri.',
    ],
  },
  {
    id: 'haul-harlah-committee',
    role: 'Divisi Kesekretariatan',
    organization: 'Kepanitiaan Haul dan Harlah PP. Nurul Jadid',
    period: '2021 – 2025',
    highlights: [
      'Mengelola surat-menyurat resmi, database pendataan peserta, dan administrasi kesekretariatan acara skala ribuan jamaah.',
    ],
  },
  {
    id: 'journalism-internship',
    role: 'Anggota Jurnalistik Kampus',
    organization: 'Magang Jurnalistik UNUJA',
    period: '2023 – 2024',
    highlights: [
      'Melakukan proofreading naskah dan mempublikasikan konten berita informatif di media resmi kampus.',
    ],
  },
  {
    id: 'intelligent-student-org',
    role: 'Wakil Ketua (2020–2021) & Anggota Pendidikan (2019–2020)',
    organization: 'Organisasi Siswa Berprestasi / Intelligent Student Organizations',
    period: '2019 – 2021',
    highlights: [
      'Merancang rencana kerja program pendidikan serta melakukan evaluasi berkala berkas capaian program.',
      'Mengawasi dan mengontrol ketertiban serta kelancaran aktivitas harian dan mingguan.',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'stunting-data-science',
    title: 'Optimasi Faktor Risiko Stunting dengan PCA & K-Means Clustering',
    category: 'data-science',
    categoryLabel: 'Data Science & AI',
    period: '2024 – 2025',
    summary:
      'Riset skripsi implementasi Principal Component Analysis (PCA) untuk reduksi variabel dan K-Means Clustering untuk segmentasi klaster faktor risiko stunting di Bondowoso.',
    problem:
      'Prevalensi stunting di tingkat daerah memiliki banyak variabel demografis dan gizi yang kompleks dan saling berkorelasi, sehingga memerlukan reduksi dimensi serta pengelompokan prioritas wilayah intervensi.',
    methodology: [
      'Pembersihan data (data cleaning), imputasi nilai kosong, dan standardisasi variabel kesehatan balita.',
      'Reduksi dimensi menggunakan Principal Component Analysis (PCA) untuk mempertahankan variansi informasi utama.',
      'Penentuan jumlah klaster optimal (Elbow Method & Silhouette Score) dilanjutkan pengelompokan K-Means.',
      'Interpretasi klaster untuk merekomendasikan target intervensi kebijakan kesehatan.',
    ],
    impact: [
      'Menemukan kombinasi faktor dominan penyebab risiko stunting balita di tingkat kecamatan.',
      'Menghasilkan rekomendasi prioritas klaster intervensi pencegahan stunting berbasis data.',
      'Meraih predikat skripsi sarjana dengan IPK 3.44 di Teknik Informatika UNUJA.',
    ],
    techStack: ['Python', 'PCA Algorithm', 'K-Means', 'Data Analysis', 'Scikit-Learn', 'Statistical Modeling'],
    image: '/src/assets/images/project_fintech_screen_1792070799751.jpg',
  },
  {
    id: 'bps-census-data-ops',
    title: 'Pengumpulan & Validasi Data Sensus Ekonomi 2026 BPS Bondowoso',
    category: 'operations',
    categoryLabel: 'Data Operations',
    period: '2026',
    summary:
      'Operasional pendataan lapangan, validasi integritas data, dan verifikasi silang terhadap 550 responden pelaku usaha dan rumah tangga.',
    problem:
      'Diperlukan pendataan door-to-door yang disiplin, akurat, dan sesuai standar metodologi BPS tanpa duplikasi maupun kesalahan entri data di lapangan.',
    methodology: [
      'Wawancara langsung door-to-door kepada pemilik usaha mikro, kecil, menengah, dan rumah tangga.',
      'Pemeriksaan kelengkapan instrumen kuesioner sensus dan validasi logika silang antar pertanyaan.',
      'Input data terverifikasi ke dalam sistem pelaporan berkala mitra sensus.',
    ],
    impact: [
      'Menuntaskan target 550 kuesioner responden dengan tingkat keakuratan dan verifikasi 100%.',
      'Mendukung ketercukupan data statistik ekonomi mikro Kabupaten Bondowoso.',
    ],
    techStack: ['Data Verification', 'Field Survey', 'BPS Methodology', 'Cross Validation', 'Data Quality Control'],
    image: '/src/assets/images/project_ecommerce_screen_1792070800176.jpg',
  },
  {
    id: 'lapas-reporting-system',
    title: 'Sistem Pembinaan & Pelaporan Kinerja Kemandirian WBP',
    category: 'systems',
    categoryLabel: 'Administrasi & Laporan',
    period: '2025 – 2026',
    summary:
      'Perancangan modul pelatihan kemandirian serta standarisasi pelaporan bulanan kinerja pemberdayaan warga binaan di Lapas IIB Bondowoso.',
    problem:
      'Proses pelaporan program pembinaan dan monitoring keaktifan narapidana membutuhkan format yang rapi, transparan, dan mudah dipantau oleh pimpinan lembaga.',
    methodology: [
      'Penyusunan kurikulum pelatihan keterampilan kerja berbasis potensi lokal.',
      'Pembuatan template instrumen evaluasi kemajuan peserta pembinaan secara berkala.',
      'Kompilasi laporan kinerja bulanan terstandarisasi untuk monitoring Kemenkumham dan Kemnaker.',
    ],
    impact: [
      'Peningkatan keterlibatan aktif WBP dalam pelatihan kemandirian produktif.',
      'Penyampaian laporan kinerja bulanan secara tepat waktu dan akuntabel.',
    ],
    techStack: ['Reporting Framework', 'Program Management', 'Documentation', 'Administrative Governance'],
    image: '/src/assets/images/project_health_app_1792070800949.jpg',
  },
  {
    id: 'diskominfo-statistics-governance',
    title: 'Pengolahan Statistik Daerah & Tata Kelola Persandian Kriptografi',
    category: 'governance',
    categoryLabel: 'Tata Kelola Data & TI',
    period: '2024 – 2025',
    summary:
      'Analisis dataset statistik daerah dan pendampingan tata kelola keamanan informasi kriptografi pada Diskominfo Bondowoso.',
    problem:
      'Data sektoral pemerintah daerah tersebar di berbagai OPD dan membutuhkan harmonisasi serta pengamanan informasi yang memadai.',
    methodology: [
      'Kompilasi dan kurasi data sektoral lintas instansi pemerintah daerah.',
      'Pemeriksaan konsistensi statistik sebelum dimasukkan ke dalam buku laporan tahunan.',
      'Dukungan prosedur pengamanan persandian informasi dinas.',
    ],
    impact: [
      'Membantu percepatan penyusunan draft laporan statistik sektoral kabupaten.',
      'Meningkatkan pemahaman masyarakat melalui sosialisasi informasi pemerintah daerah.',
    ],
    techStack: ['Statistical Tabulation', 'Data Governance', 'Regional Informatics', 'Information Security'],
    image: '/src/assets/images/project_ai_platform_1792070801053.jpg',
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'bps-mooc',
    name: 'MOOC Pelatihan Petugas SE2026',
    issuer: 'Pusdiklat Badan Pusat Statistik (BPS)',
    year: '2026',
    focus: 'Metodologi Pendataan & Integritas Sensus Ekonomi',
    verifiedBadge: 'Resmi BPS',
  },
  {
    id: 'dicoding-fabric',
    name: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia & Microsoft',
    year: '2025',
    focus: 'Data Lakehouse, Fabric Pipelines, Analytics & Machine Learning',
    verifiedBadge: 'Microsoft Certified Partner',
  },
  {
    id: 'dicoding-azure-genai',
    name: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    issuer: 'Dicoding Indonesia & Microsoft',
    year: '2025',
    focus: 'Azure OpenAI Service, Prompt Engineering & RAG Implementation',
    verifiedBadge: 'Microsoft Certified Partner',
  },
  {
    id: 'dicoding-project-management',
    name: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia & Google Developers',
    year: '2024',
    focus: 'Agile Framework, Sprint Planning, Risk Management, Team Coordination',
    verifiedBadge: 'Google Developers',
  },
  {
    id: 'dicoding-financial',
    name: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    focus: 'Prinsip Keuangan, Alokasi Aset & Pengambilan Keputusan Bisnis',
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'chem-olympiad',
    title: 'Medali Emas (Gold Medal)',
    event: 'National Chemistry Olympiad',
    level: 'Nasional',
    year: '2021',
    rank: 'Peringkat 1 Nasional',
  },
  {
    id: 'essay-competition',
    title: 'Runner Up (Juara 2)',
    event: 'National Essay Competition',
    level: 'Nasional',
    year: '2023',
    rank: 'Runner Up Nasional',
  },
  {
    id: 'poetry-creation',
    title: 'Juara 2 (2nd Place)',
    event: 'National Poetry Creation Event',
    level: 'Nasional',
    year: '2022',
    rank: 'Juara 2 Nasional',
  },
  {
    id: 'young-paper-intl',
    title: 'Young Paper Award',
    event: '2024 International Essay Contest for Young People',
    level: 'Internasional',
    year: '2024',
    rank: 'International Finalist / Selected Paper',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Keahlian Teknis & Data (Technical Skills)',
    items: [
      { name: 'Data Processing & Tabulation', level: 'Mahir', description: 'Pembersihan, penyaringan, dan transformasi dataset' },
      { name: 'Data Validation & Quality Check', level: 'Mahir', description: 'Audit akurasi data lapangan sesuai standar statistik' },
      { name: 'Data Science & Machine Learning', level: 'Kompeten', description: 'Principal Component Analysis (PCA) & K-Means Clustering' },
      { name: 'Generative AI & Microsoft Azure', level: 'Kompeten', description: 'Penerapan Azure AI Services dan integrasi AI' },
      { name: 'Microsoft Fabric', level: 'Kompeten', description: 'Alur pipeline data terpadu dan analisis berbasis cloud' },
      { name: 'Data Administration & Reporting', level: 'Mahir', description: 'Penyusunan berkas kedinasan, dokumentasi, dan arsip data' },
      { name: 'Information Technology Support', level: 'Mahir', description: 'Troubleshooting dasar, sistem informasi, dan perangkat lunak' },
    ],
  },
  {
    title: 'Keahlian Interpersonal & Manajerial',
    items: [
      { name: 'Leadership & Team Coordination', level: 'Tinggi', description: 'Pengalaman memimpin organisasi santri skala daerah' },
      { name: 'Project & Event Management', level: 'Tinggi', description: 'Perencanaan kerja terstruktur, evaluasi, dan timeline' },
      { name: 'Public Communication', level: 'Tinggi', description: 'Wawancara sensus 550 responden & public speaking santri' },
      { name: 'Administrative & Secretarial', level: 'Tinggi', description: 'Tata kelola surat menyurat, korespondensi, dan logistik acara' },
      { name: 'Problem Solving & Adaptability', level: 'Tinggi', description: 'Cepat menyesuaikan diri di lingkungan pemerintahan & institusi' },
    ],
  },
];
