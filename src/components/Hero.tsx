import React, { useState } from 'react';
import { Mail, Check, Copy, MapPin, MessageCircle, FileText, Camera } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';
import heroProfilePhoto from '../assets/images/regenerated_image_1792078700203.jpg';

interface HeroProps {
  profile: PortfolioProfile;
  isOwner: boolean;
  onOpenOwnerPhotoModal: () => void;
  onOpenResume: () => void;
  t: TranslationDict;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  isOwner,
  onOpenOwnerPhotoModal,
  onOpenResume,
  t,
  lang,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentSummary =
    lang === 'en'
      ? 'Information Technology graduate from Universitas Nurul Jadid with experience supporting data and administrative activities across government, correctional, and statistical environments. Completed training in Data Science, Generative AI, Microsoft Azure, and Project Management, with an interest in data processing, technology, and digital solutions. Strong organizational background with experience in coordination, administration, and teamwork.'
      : profile.summary;

  return (
    <section id="hero" className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Status Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-3">
              <span>{t.hero.statusKicker}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              {profile.fullName}
              <span className="text-indigo-600 font-semibold text-2xl sm:text-3xl ml-2">
                {profile.degree}
              </span>
            </h1>

            {/* Roles Headline */}
            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-700">
              {t.hero.rolesHeadline}
            </p>

            {/* Location & Alma Mater */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span>{t.hero.gradPrefix}</span>
            </div>

            {/* Bio summary */}
            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {currentSummary}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/62${profile.phone.startsWith('0') ? profile.phone.slice(1) : profile.phone}?text=${encodeURIComponent(
                  lang === 'id'
                    ? 'Halo Muhammad Ferdiyanto, saya melihat portofolio Anda.'
                    : 'Hello Muhammad Ferdiyanto, I viewed your portfolio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.hero.contactWa}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? t.hero.emailCopied : profile.email}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.hero.viewCvSummary}</span>
              </button>
            </div>

            {/* Quick target roles */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{t.hero.careerFocusLabel}</span>
              {t.hero.rolesList.map((role, idx) => (
                <React.Fragment key={idx}>
                  <span>{role}</span>
                  {idx < t.hero.rolesList.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-sky-500 border border-slate-200">
                <img
                  src={profile.avatarUrl || heroProfilePhoto}
                  alt={profile.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = heroProfilePhoto;
                  }}
                />
                
                {/* Only owner sees the change photo affordance */}
                {isOwner && (
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={onOpenOwnerPhotoModal}
                      className="px-3 py-1.5 bg-slate-900/90 hover:bg-indigo-600 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{t.hero.changePhotoBtn}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Caption / Proof Strip */}
              <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-900">{profile.fullName}</p>
                  <p className="text-[11px] text-slate-500">{profile.university}</p>
                </div>
                {isOwner ? (
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {t.hero.ownerActiveBadge}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 font-medium">
                    {t.hero.officialPhotoBadge}
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metric Strip below the split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="border-r border-slate-100 last:border-r-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              {t.hero.metrics.censusCount}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {t.hero.metrics.censusLabel}
            </div>
          </div>
          <div className="border-r border-slate-100 last:border-r-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 tabular-nums">
              {t.hero.metrics.gpaVal}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {t.hero.metrics.gpaLabel}
            </div>
          </div>
          <div className="border-r border-slate-100 last:border-r-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              {t.hero.metrics.certCount}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {t.hero.metrics.certLabel}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              {t.hero.metrics.awardCount}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {t.hero.metrics.awardLabel}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
