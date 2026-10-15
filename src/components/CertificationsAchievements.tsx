import React, { useState } from 'react';
import { BadgeCheck, Trophy } from 'lucide-react';
import { Certification, Achievement } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface CertificationsAchievementsProps {
  certifications: Certification[];
  achievements: Achievement[];
  t: TranslationDict;
  lang: Language;
}

export const CertificationsAchievements: React.FC<CertificationsAchievementsProps> = ({
  certifications,
  achievements,
  t,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'cert' | 'award'>('cert');

  return (
    <section id="prestasi" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Tab Toggles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
              {t.achievements.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.achievements.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {t.achievements.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('cert')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'cert'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>{t.achievements.certTab} ({certifications.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('award')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'award'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{t.achievements.awardTab} ({achievements.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'cert' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-indigo-600">{cert.issuer}</span>
                    <span className="tabular-nums font-medium">{cert.year}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                    {cert.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  {cert.verifiedBadge ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {cert.verifiedBadge}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">{t.achievements.verifiedLabel}</span>
                  )}
                  <span className="text-[11px] text-slate-400">Dicoding / Partner</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Achievements & Awards */}
        {activeTab === 'award' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4 hover:border-slate-300 transition-colors shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-bold text-amber-700">
                      {lang === 'en' ? (ach.level === 'Nasional' ? 'National' : 'International') : ach.level}
                    </span>
                    <span className="tabular-nums font-semibold text-slate-700">{ach.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-600 mt-1">
                    {ach.event}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    {t.achievements.awardRankLabel} <span className="text-indigo-600">{ach.rank}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
