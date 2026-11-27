import React, { useMemo, useState } from 'react';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { useI18n } from '../i18n';

const Home: React.FC = () => {
  const { m } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  const categories: (ProjectCategory | 'all')[] = ['all', ...Object.values(ProjectCategory)];

  const filteredProjects = useMemo(() => {
    const list = selectedCategory === 'all' ? [...PROJECTS] : PROJECTS.filter((p) => p.category === selectedCategory);
    return list.sort((a, b) => {
      // Shopify cases lead the default view — this portfolio is used to win storefront work.
      const priority = (p: typeof a) => (p.category === ProjectCategory.SHOPIFY ? 0 : 1);
      return priority(a) - priority(b) || b.date.localeCompare(a.date);
    });
  }, [selectedCategory]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-16 sm:pt-24 pb-12 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-[11px] sm:text-xs mb-4 inline-flex items-center">
            <span className="w-6 sm:w-8 h-px bg-blue-600 mr-2"></span>
            {m.home.greeting}
            <span className="w-6 sm:w-8 h-px bg-blue-600 ml-2"></span>
          </p>
          <h1 className="text-[2rem] leading-[1.2] sm:text-5xl md:text-7xl font-black text-slate-900 mb-7 tracking-tight">
            {m.home.h1a}
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent py-1">
              {m.home.h1b}
            </span>
          </h1>
          <div className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto font-medium space-y-2">
            {m.home.heroLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center space-x-2 text-slate-600 text-sm bg-white/70 px-4 py-2 rounded-full border border-blue-100 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>{m.home.available}</span>
            </div>
            <a
              href="mailto:19154916318@163.com"
              className="inline-flex items-center text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 px-5 py-2 rounded-full transition-colors"
            >
              {m.home.servicesCta}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{m.home.servicesTitle}</h2>
            <p className="text-sm text-slate-500 mt-1">{m.home.servicesSub}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {m.home.services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-blue-50 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-2xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1.5">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{service.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{m.home.workTitle}</h2>
            <p className="text-sm text-slate-500 mt-1">{m.home.workSub}</p>
          </div>
          <span className="text-xs font-bold text-slate-400">{m.home.projectsCount(filteredProjects.length)}</span>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-6 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`px-5 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 ring-4 ring-slate-100'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {m.categories[cat] ?? cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <div className="col-span-full text-center py-20 bg-blue-50/50 rounded-3xl border border-dashed border-blue-200">
              <p className="text-slate-400 italic">{m.home.empty}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
