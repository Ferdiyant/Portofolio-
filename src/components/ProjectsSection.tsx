import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  t: TranslationDict;
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, t, lang }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="proyek" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
              {t.projects.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.projects.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.projects.filterAll} ({projects.length})
            </button>
            <button
              onClick={() => setFilter('data-science')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'data-science'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.projects.filterDataScience}
            </button>
            <button
              onClick={() => setFilter('operations')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'operations'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.projects.filterOperations}
            </button>
            <button
              onClick={() => setFilter('systems')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'systems'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.projects.filterSystems}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Media frame */}
                <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Unboxed Metadata Line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{project.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lang === 'en' ? 'Verified Work' : 'Studi Kasus Nyata'}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Clean unboxed Tech Stack text with typographic separators */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                    {project.techStack.map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="font-medium text-slate-700">{tech}</span>
                        {tIdx < project.techStack.length - 1 && <span aria-hidden="true">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.projects.viewDetails} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-indigo-600">{selectedProject.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.period}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Media banner */}
              <div className="aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Problem Statement */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  {t.projects.modalProblemTitle}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {t.projects.modalMethodologyTitle}
                </div>
                <ul className="space-y-2">
                  {selectedProject.methodology.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact / Results */}
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  {t.projects.modalImpactTitle}
                </div>
                <ul className="space-y-2">
                  {selectedProject.impact.map((result, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {t.projects.modalTechTitle}
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span className="font-semibold text-slate-900">{tech}</span>
                      {tIdx < selectedProject.techStack.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Close */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              >
                {t.projects.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
