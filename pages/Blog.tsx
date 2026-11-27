import React, { useMemo, useState } from 'react';
import { BlogCategory } from '../types';
import { BLOG_POSTS } from '../blogPosts';
import BlogCard from '../components/BlogCard';
import { localizePost, useI18n } from '../i18n';

const Blog: React.FC = () => {
  const { lang, m } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const categories: (BlogCategory | 'all')[] = ['all', ...Object.values(BlogCategory)];

  const filteredPosts = useMemo(() => {
    const list = selectedCategory === 'all' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === selectedCategory);
    return list
      .map((post) => localizePost(post, lang))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [selectedCategory, lang]);

  const [featured, ...rest] = filteredPosts;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 inline-flex items-center">
            <span className="w-8 h-px bg-blue-600 mr-2" />
            📝 {m.blog.title}
            <span className="w-8 h-px bg-blue-600 ml-2" />
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
            {m.blog.h1a}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{m.blog.h1b}</span>
            {m.blog.h1c}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            {m.blog.sub}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-8 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 ring-4 ring-slate-100'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat === 'all' ? m.blog.all : m.blog.categories[cat] ?? cat}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            {featured && <BlogCard post={featured} featured />}
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-blue-50/50 rounded-3xl border border-dashed border-blue-200 mt-8">
            <p className="text-slate-400 italic">😊 {m.home.empty}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
