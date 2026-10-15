import React, { useState } from 'react';
import { Briefcase, Users, Calendar } from 'lucide-react';
import { WorkExperience, OrganizationalExperience } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface ExperienceSectionProps {
  workExperiences: WorkExperience[];
  organizationalExperiences: OrganizationalExperience[];
  t: TranslationDict;
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  workExperiences,
  organizationalExperiences,
  t,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  return (
    <section id="pengalaman" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header & Functional Tab Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
              {t.experience.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.experience.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Interactive Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.experience.workTab} ({workExperiences.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('org')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'org'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{t.experience.orgTab} ({organizationalExperiences.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'work' && (
          <div className="space-y-6">
            {workExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-50/60 rounded-xl border border-slate-200 p-6 sm:p-7 transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                      <span>{exp.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                      {exp.badge && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-indigo-600 font-semibold">{exp.badge}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Clean unboxed period */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 shrink-0 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Brief description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Task Bullets */}
                <div className="mt-4 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-semibold text-slate-800 mb-2">
                    {t.experience.keyTasksLabel}
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unboxed skills tags with typographic separators */}
                <div className="mt-4 pt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">{t.experience.appliedCompetenciesLabel}</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span>{skill}</span>
                      {sIdx < exp.skills.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Organizational Leadership Experience */}
        {activeTab === 'org' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizationalExperiences.map((org) => (
              <div
                key={org.id}
                className="bg-slate-50/60 rounded-xl border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-medium">{org.organization}</span>
                    <span className="font-semibold text-slate-700 tabular-nums">{org.period}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {org.role}
                  </h3>

                  <ul className="mt-3.5 space-y-2 border-t border-slate-200/70 pt-3">
                    {org.highlights.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
