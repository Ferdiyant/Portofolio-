import React, { useState, useEffect } from 'react';
import {
  initialProfile,
  workExperiences,
  organizationalExperiences,
  projectsData,
  certificationsData,
  achievementsData,
  skillCategories,
} from './data/portfolioData';
import { translations, Language } from './data/translations';
import { PortfolioProfile } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsAchievements } from './components/CertificationsAchievements';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import { OwnerAuthModal } from './components/OwnerAuthModal';
import { OwnerPhotoModal } from './components/OwnerPhotoModal';

const LOCAL_STORAGE_KEY = 'm_ferdiyanto_portfolio_profile_v3';
const OWNER_AUTH_KEY = 'm_ferdiyanto_owner_session_v1';
const LANG_STORAGE_KEY = 'm_ferdiyanto_portfolio_lang';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY) as Language;
      if (savedLang === 'id' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // fallback
    }
    return 'id';
  });

  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialProfile;
  });

  const [isOwner, setIsOwner] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(OWNER_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [ownerPin, setOwnerPin] = useState<string>(() => {
    try {
      return sessionStorage.getItem('m_owner_pin') || '2727';
    } catch {
      return '2727';
    }
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const t = translations[lang];

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
  };

  // Fetch server profile on load so EVERY visitor gets the real uploaded photo & latest info
  useEffect(() => {
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.profile && Object.keys(data.profile).length > 0) {
          setProfile((prev) => ({
            ...prev,
            ...data.profile,
          }));
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.profile));
        }
      })
      .catch((err) => {
        console.warn('Using local fallback profile:', err);
      });
  }, []);

  const handleOwnerSuccess = (pin: string) => {
    setIsOwner(true);
    setOwnerPin(pin);
    sessionStorage.setItem(OWNER_AUTH_KEY, 'true');
    sessionStorage.setItem('m_owner_pin', pin);
  };

  const handleLogoutOwner = () => {
    setIsOwner(false);
    sessionStorage.removeItem(OWNER_AUTH_KEY);
    sessionStorage.removeItem('m_owner_pin');
  };

  const handlePhotoSaved = (newUrl: string) => {
    const updated = { ...profile, avatarUrl: newUrl };
    setProfile(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

    // Also sync to server so all visitors see it
    fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pin: ownerPin,
        profile: updated,
      }),
    }).catch(() => {});
  };

  const handleSaveProfile = async (updated: PortfolioProfile) => {
    setProfile(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

    try {
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pin: ownerPin,
          profile: updated,
        }),
      });
    } catch (err) {
      console.warn('Profile saved in local state:', err);
    }
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setIsEditorOpen(false);

    fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pin: ownerPin,
        profile: initialProfile,
      }),
    }).catch(() => {});
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isOwner={isOwner}
        onOpenOwnerPhotoModal={() => setIsPhotoModalOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
        onLogoutOwner={handleLogoutOwner}
        phone={profile.phone}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          profile={profile}
          isOwner={isOwner}
          onOpenOwnerPhotoModal={() => setIsPhotoModalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          t={t}
          lang={lang}
        />

        {/* 2. Profil & Pendidikan (Thesis, IPK, Target Roles) */}
        <AboutSection profile={profile} t={t} lang={lang} />

        {/* 3. Rekam Jejak Kerja & Kepemimpinan Organisasi */}
        <ExperienceSection
          workExperiences={workExperiences}
          organizationalExperiences={organizationalExperiences}
          t={t}
          lang={lang}
        />

        {/* 4. Proyek Data, Riset & Operasional */}
        <ProjectsSection projects={projectsData} t={t} lang={lang} />

        {/* 5. Keahlian Teknis & Interpersonal */}
        <SkillsSection categories={skillCategories} t={t} lang={lang} />

        {/* 6. Sertifikasi & Prestasi */}
        <CertificationsAchievements
          certifications={certificationsData}
          achievements={achievementsData}
          t={t}
          lang={lang}
        />

        {/* 7. Kontak Langsung & Formulir Kirim Pesan */}
        <ContactSection profile={profile} t={t} lang={lang} />
      </main>

      {/* Footer with Discrete Owner Entry */}
      <Footer
        profile={profile}
        isOwner={isOwner}
        onOpenOwnerAuth={() => setIsAuthOpen(true)}
        onLogoutOwner={handleLogoutOwner}
      />

      {/* Resume Modal with Print-to-PDF support */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        workExperiences={workExperiences}
        organizationalExperiences={organizationalExperiences}
        certifications={certificationsData}
        achievements={achievementsData}
        t={t}
        lang={lang}
      />

      {/* Owner Authentication Modal */}
      <OwnerAuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleOwnerSuccess}
      />

      {/* Owner Photo Modal */}
      <OwnerPhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhotoUrl={profile.avatarUrl}
        ownerPin={ownerPin}
        onPhotoSaved={handlePhotoSaved}
      />

      {/* Profile Personalizer (Owner Only) */}
      <EditProfileModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
