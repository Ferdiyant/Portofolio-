import React from 'react';
import { ArrowUp, Linkedin, Lock, Unlock } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  isOwner: boolean;
  onOpenOwnerAuth: () => void;
  onLogoutOwner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  isOwner,
  onOpenOwnerAuth,
  onLogoutOwner,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-indigo-500 text-white font-bold flex items-center justify-center text-xs">
                MF
              </span>
              <span className="text-white font-bold text-base tracking-tight">
                {profile.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
              Teknik Informatika · Data Operations · Administrasi Data · Berdomisili di Bondowoso, Jawa Timur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
            <a href="#pengalaman" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
            <a href="#keahlian" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#prestasi" className="hover:text-white transition-colors">Prestasi</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.fullName}. Seluruh hak cipta dilindungi.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <span aria-hidden="true">·</span>

            {/* Discrete Owner Mode Entry */}
            {isOwner ? (
              <button
                onClick={onLogoutOwner}
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
                title="Keluar dari mode pemilik"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Mode Pemilik Aktif (Keluar)</span>
              </button>
            ) : (
              <button
                onClick={onOpenOwnerAuth}
                className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                title="Hanya untuk pemilik portofolio"
              >
                <Lock className="w-3 h-3" />
                <span>Akses Pemilik</span>
              </button>
            )}

            <span aria-hidden="true">·</span>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
