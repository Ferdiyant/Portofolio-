import React from 'react';
import { X, Printer } from 'lucide-react';
import {
  PortfolioProfile,
  WorkExperience,
  OrganizationalExperience,
  Certification,
  Achievement,
} from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';
import defaultAvatar from '../assets/images/regenerated_image_1792078700203.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  workExperiences: WorkExperience[];
  organizationalExperiences: OrganizationalExperience[];
  certifications: Certification[];
  achievements: Achievement[];
  t: TranslationDict;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  workExperiences,
  organizationalExperiences,
  certifications,
  achievements,
  t,
  lang,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentSummary =
    lang === 'en'
      ? 'Information Technology graduate from Universitas Nurul Jadid with experience supporting data and administrative activities across government, correctional, and statistical environments. Completed training in Data Science, Generative AI, Microsoft Azure, and Project Management, with an interest in data processing, technology, and digital solutions. Strong organizational background with experience in coordination, administration, and teamwork. Seeking entry-level opportunities in Data Administration, IT Support, Data Operations, or Junior Data Analyst roles.'
      : profile.summary;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden border border-slate-200">
        
        {/* Modal Toolbar (hidden in print) */}
        <div className="no-print bg-slate-100 border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900">{t.resume.previewTitle}</span>
            <span className="text-xs text-slate-500">{t.resume.previewSub}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resume.printBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              title={t.resume.closeBtn}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-900 space-y-6 bg-white font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {profile.fullName}
              </h1>
              <div className="text-xs font-semibold text-indigo-700 tracking-wide mt-1">
                {t.hero.rolesHeadline}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
                <span>{profile.location}</span>
                <span aria-hidden="true">·</span>
                <span>{profile.phone}</span>
                <span aria-hidden="true">·</span>
                <span>{profile.email}</span>
              </div>
            </div>

            {/* Permanent Official Photo */}
            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border border-slate-200 bg-sky-500 shrink-0 self-start sm:self-center">
              <img
                src={profile.avatarUrl || defaultAvatar}
                alt={profile.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultAvatar;
                }}
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.resume.summaryHeading}
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {currentSummary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.resume.educationHeading}
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between font-bold text-xs text-slate-900">
                <span>{lang === 'en' ? 'Bachelor of Informatics Engineering' : profile.major}, {profile.university}</span>
                <span className="tabular-nums">{profile.graduationYear} · GPA / IPK {profile.gpa}</span>
              </div>
              <p className="text-xs text-slate-600 italic">
                {lang === 'en' ? 'Thesis:' : 'Skripsi:'} {profile.thesisTitle}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.resume.workHeading}
            </h2>
            <div className="space-y-4">
              {workExperiences.map((w) => (
                <div key={w.id} className="space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline gap-1 text-xs font-bold text-slate-900">
                    <span>{w.institution}</span>
                    <span className="font-normal text-slate-500 tabular-nums">{w.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-indigo-700">
                    {w.role}
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs">
                    {w.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.resume.orgHeading}
            </h2>
            <div className="space-y-3">
              {organizationalExperiences.map((org) => (
                <div key={org.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{org.organization} – {org.role}</span>
                    <span className="font-normal text-slate-500 tabular-nums">{org.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 mt-1 text-slate-600">
                    {org.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {t.resume.certHeading}
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {certifications.map((c) => (
                  <li key={c.id}>
                    <span className="font-semibold text-slate-900">{c.name}</span>
                    <div className="text-[11px] text-slate-500">{c.issuer} ({c.year})</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {t.resume.awardHeading}
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {achievements.map((a) => (
                  <li key={a.id}>
                    <span className="font-semibold text-slate-900">{a.title}</span> – {a.event} ({a.year})
                    <div className="text-[11px] text-slate-500">{a.level} · {a.rank}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              {t.resume.skillsHeading}
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>{lang === 'en' ? 'Technical:' : 'Teknis:'}</strong> Data Processing, Data Validation, Data Analysis, Data Science, Statistical Data Support, Machine Learning (PCA & K-Means), Generative AI, Microsoft Azure, Microsoft Fabric, Project Management, Documentation, Data Administration, Reporting.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed mt-1">
              <strong>Interpersonal:</strong> Leadership, Project Management, Public Communication, Administration & Secretarial, Coordination, Teamwork, Problem Solving, Adaptability.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="no-print bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {t.resume.footerNote}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs cursor-pointer"
            >
              {t.resume.printBtn}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 cursor-pointer"
            >
              {t.resume.closeBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
