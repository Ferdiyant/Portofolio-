import React from 'react';
import { GraduationCap, BookOpen, Building2, CheckCircle2 } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface AboutSectionProps {
  profile: PortfolioProfile;
  t: TranslationDict;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, t, lang }) => {
  return (
    <section id="tentang" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
            {t.about.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Academic Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Degree Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {lang === 'en' ? 'Bachelor of Informatics Engineering' : profile.major}
                    </h3>
                    <span className="text-xs font-semibold text-indigo-600 tabular-nums">
                      {profile.graduationYear}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {profile.university} · GPA / IPK: <span className="font-bold text-slate-900">{profile.gpa}</span>
                  </p>
                  
                  {/* Skripsi Box */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{t.about.thesisLabel}</span>
                    </div>
                    <p className="text-xs text-slate-700 italic font-serif leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                      "{profile.thesisTitle}"
                    </p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {lang === 'en'
                        ? 'Research applying Principal Component Analysis (PCA) dimensionality reduction and K-Means Clustering algorithms to discover risk patterns and dominant factors influencing childhood stunting prevalence across Bondowoso Regency.'
                        : profile.thesisDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies Overview */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                {t.about.coreCompetenciesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                {t.about.competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Target Roles & Mobility */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Roles Target Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {t.about.targetRolesTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {t.about.targetRolesDesc}
              </p>

              <div className="space-y-2.5">
                {t.about.targetRoles.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Location & Mobility Info */}
            <div className="bg-indigo-50/60 rounded-xl border border-indigo-100 p-5 text-xs text-indigo-950">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>{t.about.mobilityTitle}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {t.about.mobilityDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
