
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, ProjectCategory, formatProjectDate } from '../types';
import Carousel from './Carousel';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // 小程序和H5都使用手机竖屏尺寸
  const isMobile = project.category === ProjectCategory.MINI_PROGRAM || project.category === ProjectCategory.H5;
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[506px]">
      <Link to={`/project/${project.id}`} className="relative h-56 shrink-0 w-full cursor-pointer overflow-hidden bg-slate-50">
        <Carousel images={project.images} isMobile={isMobile} />
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </Link>
      
      <div className="p-3 flex flex-col flex-1 min-h-0">
        <p className="text-xs text-slate-400 mb-1">{formatProjectDate(project.date)}</p>
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-7 h-14 shrink-0 line-clamp-2" title={project.title}>
          {project.title}
        </h3>
        <dl className="text-sm leading-5 space-y-2 mb-2">
          <div className="flex gap-3 h-5"><dt className="shrink-0 text-slate-400">问题</dt><dd className="text-slate-600 line-clamp-1" title={project.summary.problem}>{project.summary.problem}</dd></div>
          <div className="flex gap-3 h-5"><dt className="shrink-0 text-slate-400">职责</dt><dd className="text-slate-600 line-clamp-1" title={project.summary.responsibility}>{project.summary.responsibility}</dd></div>
          <div className="flex gap-3 h-6"><dt className="shrink-0 text-slate-400">技术</dt><dd className="flex gap-1 min-w-0 overflow-x-auto">{project.summary.techStack.map(tech => <span key={tech} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded whitespace-nowrap">{tech}</span>)}</dd></div>
          <div className="flex gap-3 h-5"><dt className="shrink-0 text-slate-400">结果</dt><dd className="text-slate-600 line-clamp-1" title={project.summary.result}>{project.summary.result}</dd></div>
        </dl>
        
        <Link 
          to={`/project/${project.id}`}
          className="mt-auto shrink-0 inline-flex items-center justify-center px-4 py-1.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors group"
        >
          查看详情
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
