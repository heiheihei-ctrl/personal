import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../blogPosts';
import { formatProjectDate } from '../types';

const renderContent = (content: string) => {
  return content.split('\n\n').map((block, index) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold text-slate-900 mt-10 mb-4 flex items-center">
          <span className="w-6 h-1 bg-blue-600 mr-3 rounded-full"></span>
          {block.replace('## ', '')}
        </h2>
      );
    }

    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <p key={index} className="text-slate-800 font-semibold mt-6 mb-2">
          {block.replace(/\*\*/g, '')}
        </p>
      );
    }

    if (block.includes('\n• ')) {
      const [title, ...items] = block.split('\n');
      return (
        <div key={index} className="my-4">
          {title && <p className="text-slate-700 font-medium mb-3">{title.replace(/\*\*/g, '')}</p>}
          <ul className="space-y-2 pl-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                <span>{item.replace('• ', '')}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <p key={index} className="text-slate-600 leading-relaxed text-lg my-4">
        {block}
      </p>
    );
  });
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">😔 未找到该文章</h2>
        <button
          onClick={() => navigate('/blog')}
          className="text-blue-600 hover:underline font-medium"
        >
          返回博客列表
        </button>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回博客
        </button>
      </div>

      <div className={`relative h-56 md:h-72 bg-gradient-to-br ${post.coverGradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl md:text-8xl drop-shadow-2xl opacity-90">{post.coverIcon}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-20">
        <header className="bg-white rounded-3xl shadow-xl shadow-blue-100/30 border border-blue-50 p-8 md:p-12 mb-12">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>{formatProjectDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{post.readTime} 分钟阅读</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>作者：YY (钱盈熠)</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-xl border border-slate-100">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">📚 相关文章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="group p-5 bg-blue-50/50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <p className="text-xs text-slate-400 mb-2">{formatProjectDate(related.date)}</p>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors"
          >
            浏览更多文章
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
