import React from 'react';
import avatar from '../assets/avatar.jpg';
import { useI18n } from '../i18n';

const About: React.FC = () => {
  const { m } = useI18n();
  const about = m.about;

  const withHighlight = (text: string, highlight: string) => {
    if (!highlight || !text.includes(highlight)) return text;
    const [before, after] = text.split(highlight);
    return (
      <>
        {before}
        <span className="text-blue-600 font-semibold">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 sm:py-16 lg:py-24 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Sidebar: Basic Info */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="mx-auto w-1/2 lg:w-full bg-white p-2 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50 overflow-hidden">
              <img src={avatar} alt={about.name} className="w-full aspect-square object-cover rounded-2xl" />
            </div>

            <div className="space-y-6 bg-white p-6 rounded-2xl border border-blue-50 shadow-sm">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">{about.name}</h1>
                <p className="text-blue-600 font-medium mt-1">{about.role}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-8 flex justify-center text-lg">📞</span>
                  <span>+86 19154916318</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-8 flex justify-center text-lg">📧</span>
                  <span>19154916318@163.com</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-8 flex justify-center text-lg">🎂</span>
                  <span>2003.09.19</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{about.certsTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {about.certs.map((cert) => (
                    <span key={cert} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              {about.summaryTitle}
            </h2>
            <div className="text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              {about.summary.map((paragraph, i) => (
                <p key={i}>
                  {paragraph.pre}
                  {paragraph.highlight ? (
                    <span className="text-blue-600 font-semibold">{paragraph.highlight}</span>
                  ) : null}
                  {paragraph.post}
                </p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              {about.experienceTitle}
            </h2>
            <div className="space-y-10">
              {about.jobs.map((job, index) => (
                <div key={job.company} className="relative pl-7 sm:pl-8 border-l-2 border-blue-100">
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white ${
                      index === 0 ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  ></div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{job.company}</h3>
                    <span className={`${index === 0 ? 'text-blue-600' : 'text-slate-500'} font-semibold whitespace-nowrap`}>
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium mb-3 italic">
                    {job.role}
                    {job.site ? (
                      <>
                        {' · '}
                        <a href={job.site} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline not-italic">
                          {job.site.replace('https://', '')}
                        </a>
                      </>
                    ) : null}
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              {about.awardsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.awards.map((item) => (
                <div key={item.title} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-blue-600 text-xs font-bold mt-1">🏆 {item.award}</p>
                  </div>
                  <span className="text-slate-400 text-[10px] font-medium whitespace-nowrap">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Skills Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              {about.skillsTitle}
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm space-y-4">
                {about.skills.map((skill) => (
                  <div key={skill.title}>
                    <h4 className="text-sm font-bold text-slate-800 mb-2">{skill.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{withHighlight(skill.text, skill.highlight)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              {about.educationTitle}
            </h2>
            <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm space-y-4">
              {about.education.map((item) => (
                <div key={item.school} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-bold text-slate-800 text-base">{item.school}</span>
                  <span className="text-slate-500 text-sm">{item.major}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
