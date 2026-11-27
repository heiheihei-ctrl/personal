import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import Carousel from '../components/Carousel';
import ImageModal from '../components/ImageModal';
import { localizeProject, useFormatDate, useI18n } from '../i18n';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, m } = useI18n();
  const formatDate = useFormatDate();
  const project = PROJECTS.find((p) => p.id === id);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{m.detail.notFound}</h2>
        <button onClick={() => navigate('/')} className="text-blue-600 hover:underline font-medium">
          {m.detail.backHome}
        </button>
      </div>
    );
  }

  const localized = localizeProject(project, lang);

  // 小程序和H5都使用手机竖屏尺寸
  const isMobile = localized.category === ProjectCategory.MINI_PROGRAM || localized.category === ProjectCategory.H5;
  // 手机尺寸项目使用手机竖屏比例 (9:16)，其他项目使用常规比例
  const aspectClass = isMobile ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-[4/3] md:aspect-video';

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {m.detail.back}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main Content: Gallery */}
          <div className="lg:col-span-8">
            <div className={`rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-blue-100/30 border border-blue-50 ${isMobile ? 'flex justify-center' : ''}`}>
              <div className={`${aspectClass} w-full`}>
                <Carousel
                  images={localized.images}
                  isMobile={isMobile}
                  onImageClick={(index) => {
                    setCurrentImageIndex(index);
                    setModalOpen(true);
                  }}
                />
              </div>
            </div>

            <ImageModal
              images={localized.images}
              currentIndex={currentImageIndex}
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onChangeIndex={setCurrentImageIndex}
            />

            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{m.detail.overview}</h2>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {localized.description}
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{m.detail.process}</h2>
                <ol className="list-decimal pl-6 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                  {localized.implementation.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          {/* Sidebar: Metadata */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4 inline-block">
                  {m.categories[localized.category] ?? localized.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {localized.title}
                </h1>
                <p className="mt-3 text-sm text-slate-400">{formatDate(localized.date)}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{m.detail.stack}</h3>
                  <div className="flex flex-wrap gap-2">
                    {localized.summary.techStack.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  {localized.link && localized.link !== '#' ? (
                    <a
                      href={localized.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all group"
                    >
                      {m.detail.visit}
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 text-sm text-center border border-dashed border-slate-200">
                      {m.detail.private}
                    </div>
                  )}

                  <p className="mt-4 text-center text-xs text-slate-400">{m.detail.contactNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-8">{m.detail.moreTitle}</h2>
          <div className="flex justify-center space-x-4">
            <Link to="/" className="px-6 py-2 bg-white text-slate-600 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all font-medium">
              {m.detail.moreCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
