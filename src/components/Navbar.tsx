import React from 'react';
import { FileText, MessageCircle, LogOut, Camera, Edit3, Globe } from 'lucide-react';
import { Language, TranslationDict } from '../data/translations';

interface NavbarProps {
  onOpenResume: () => void;
  isOwner: boolean;
  onOpenOwnerPhotoModal: () => void;
  onOpenEditor: () => void;
  onLogoutOwner: () => void;
  phone: string;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  t: TranslationDict;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  isOwner,
  onOpenOwnerPhotoModal,
  onOpenEditor,
  onLogoutOwner,
  phone,
  lang,
  onToggleLang,
  t,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs group-hover:bg-indigo-700 transition-colors">
            MF
          </span>
          <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
            M. Ferdiyanto
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#tentang" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.about}
          </a>
          <a href="#pengalaman" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.experience}
          </a>
          <a href="#proyek" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.projects}
          </a>
          <a href="#keahlian" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.skills}
          </a>
          <a href="#prestasi" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.achievements}
          </a>
          <a href="#kontak" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Language Switcher + Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Language Toggle: ID / EN */}
          <div className="inline-flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => onToggleLang('id')}
              className={`px-2 py-1 rounded-md transition-all ${
                lang === 'id'
                  ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2 py-1 rounded-md transition-all ${
                lang === 'en'
                  ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {isOwner && (
            <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 p-1 rounded-lg">
              <button
                onClick={onOpenOwnerPhotoModal}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 rounded transition-colors"
                title={t.nav.changePhoto}
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{t.nav.changePhoto}</span>
              </button>
              <button
                onClick={onOpenEditor}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 rounded transition-colors"
                title={t.nav.editData}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{t.nav.editData}</span>
              </button>
              <button
                onClick={onLogoutOwner}
                className="p-1 text-slate-500 hover:text-rose-600 rounded"
                title={t.nav.exitOwner}
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>{t.nav.viewCv}</span>
          </button>

          <a
            href={`https://wa.me/62${phone.startsWith('0') ? phone.slice(1) : phone}?text=${encodeURIComponent(
              lang === 'id'
                ? 'Halo Muhammad Ferdiyanto, saya melihat portofolio Anda dan tertarik untuk berdiskusi.'
                : 'Hello Muhammad Ferdiyanto, I came across your portfolio and would like to connect.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t.nav.contactBtn}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
