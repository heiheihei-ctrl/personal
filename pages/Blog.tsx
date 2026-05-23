import React, { useState } from 'react';
import { BlogCategory } from '../types';
import { BLOG_POSTS } from '../blogPosts';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | '全部'>('全部');

  const categories = ['全部', ...Object.values(BlogCategory)];

  const filteredPosts = (selectedCategory === '全部'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory)
  ).sort((a, b) => b.date.localeCompare(a.date));

  const [featured, ...rest] = filteredPosts;

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 inline-flex items-center">
            <span className="w-8 h-px bg-blue-600 mr-2" />
            📝 技术博客
            <span className="w-8 h-px bg-blue-600 ml-2" />
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            记录<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">开发思考</span>与实践经验
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            分享 Shopify 独立站、前端工程化与项目实战中的心得体会
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-8 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as BlogCategory | '全部')}
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

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            {featured && <BlogCard post={featured} featured />}
            {rest.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-blue-50/50 rounded-3xl border border-dashed border-blue-200 mt-8">
            <p className="text-slate-400 italic">😊 该分类下暂无文章，敬请期待...</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
