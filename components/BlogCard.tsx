import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, formatProjectDate } from '../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${featured ? 'md:flex-row md:col-span-2' : ''}`}>
      <Link
        to={`/blog/${post.id}`}
        className={`relative overflow-hidden ${featured ? 'md:w-2/5 h-48 md:h-auto' : 'h-44'}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center`}>
          <span className={`${featured ? 'text-6xl' : 'text-5xl'} drop-shadow-lg`}>{post.coverIcon}</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className={`p-6 flex flex-col flex-grow ${featured ? 'md:w-3/5' : ''}`}>
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
          <span>{formatProjectDate(post.date)}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>{post.readTime} 分钟阅读</span>
        </div>
        <h3 className={`font-bold text-slate-800 mb-2 leading-tight ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group mt-auto"
        >
          阅读全文
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
