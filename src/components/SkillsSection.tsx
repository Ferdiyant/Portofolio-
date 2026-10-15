import React from 'react';
import { Cpu, Users2, ShieldCheck } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface SkillsSectionProps {
  categories: SkillCategory[];
  t: TranslationDict;
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories, t, lang }) => {
  return (
    <section id="keahlian" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
            {t.skills.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 2-Column Skill Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  {catIdx === 0 ? (
                    <Cpu className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Users2 className="w-5 h-5 text-indigo-600" />
                  )}
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {catIdx === 0 ? t.skills.techTitle : t.skills.interpersonalTitle}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {category.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white p-3.5 rounded-lg border border-slate-200/80 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-semibold text-indigo-600">
                          {lang === 'en'
                            ? skill.level === 'Mahir'
                              ? 'Proficient'
                              : skill.level === 'Kompeten'
                              ? 'Competent'
                              : 'High'
                            : skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {catIdx === 0 ? t.skills.techAssurance : t.skills.interpersonalAssurance}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
