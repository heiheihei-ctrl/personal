
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, ProjectCategory } from '../types';
import Carousel from './Carousel';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // 小程序和H5都使用手机竖屏尺寸
  const isMobile = project.category === ProjectCategory.MINI_PROGRAM || project.category === ProjectCategory.H5;
  // 手机尺寸项目使用手机竖屏高度，其他项目使用固定高度
  const imageHeight = isMobile ? 'h-80' : 'h-56';
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <Link to={`/project/${project.id}`} className={`relative ${imageHeight} w-full cursor-pointer overflow-hidden ${isMobile ? 'bg-slate-50' : ''}`}>
        <Carousel images={project.images} isMobile={isMobile} />
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-4 flex-grow whitespace-pre-line">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/project/${project.id}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors group"
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
