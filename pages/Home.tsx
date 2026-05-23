
import React, { useState } from 'react';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants.tsx';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | '全部'>('全部');

  const categories = ['全部', ...Object.values(ProjectCategory)];

  const filteredProjects = (selectedCategory === '全部' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory)
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 inline-flex items-center">
            <span className="w-8 h-px bg-blue-600 mr-2"></span>
            👋 你好，我是 YY (钱盈熠)
            <span className="w-8 h-px bg-blue-600 ml-2"></span>
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            连接代码与设计，<br/>打造 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">数字化极致体验</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            💻 专注于前端开发、Shopify 独立站定制及移动端全栈解决方案<br/>
            🏆 两年前端开发实战，屡获国家级技术奖项<br/>
            ✨ 致力于为品牌创造商业价值，用技术驱动业务增长
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 text-slate-500 text-sm bg-white/50 px-4 py-2 rounded-full border border-blue-100 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>✨ Available for projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-8 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 ring-4 ring-slate-100' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-blue-50/50 rounded-3xl border border-dashed border-blue-200">
              <p className="text-slate-400 italic">😊 在该分类下暂无作品，敬请期待...</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
