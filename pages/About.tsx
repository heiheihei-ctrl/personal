
import React from 'react';

const About: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sidebar: Basic Info */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="bg-white p-2 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50 overflow-hidden">
               <img 
                src="https://picsum.photos/600/600?random=resume" 
                alt="钱盈熠" 
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
            
            <div className="space-y-6 bg-white p-6 rounded-2xl border border-blue-50 shadow-sm">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">钱盈熠</h1>
                <p className="text-blue-600 font-medium mt-1">全栈开发工程师 / 前端专家</p>
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
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-8 flex justify-center text-lg">🐙</span>
                  <a href="https://github.com/heiheihei-ctrl" target="_blank" className="text-blue-600 hover:underline">heiheihei-ctrl</a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">技能证书</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">计算机程序设计员 三级</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">网络与信息安全管理员 三级</span>
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
              自我评价
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
              💡 我是一名拥有两年实战经验的前端开发工程师，具备从需求分析、技术选型到部署上线的全流程能力。

📚 我善于从各种资源中汲取知识，在工作之余积极探索 <span className="text-blue-600 font-semibold">Next.js、Astro、Three.js</span> 等前沿框架。

🚀 我始终保持对新技术的好奇心，并乐于接受高挑战性的项目，追求代码质量与交互体验的完美平衡。
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              工作经历
            </h2>
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-blue-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">杭州一颗糯米网络科技有限公司</h3>
                  <span className="text-blue-600 font-semibold">2025.06 - 至今</span>
                </div>
                <p className="text-slate-500 font-medium mb-3 italic">全栈开发工程师</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                  <li>🎯 主导 Shopify、WordPress 及自建站项目的全栈开发与定制</li>
                  <li>🏗️ 独立设计技术方案，完成系统架构搭建，负责从零到一的完整交付</li>
                  <li>🚀 全权负责项目从开发环境到生产环境部署上线的全流程自动化管理</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">深圳市三合软件有限公司</h3>
                  <span className="text-slate-500 font-semibold">2023.06 - 2025.04</span>
                </div>
                <p className="text-slate-500 font-medium mb-3 italic">前端开发工程师</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                  <li>💻 负责公司核心项目的前端及部分后端接口开发，参与产品需求评审与系统设计</li>
                  <li>📦 根据具体业务需求承担模块化开发任务，按计划高质量完成交付目标</li>
                  <li>✅ 协助测试人员完成复杂业务逻辑下的系统测试，保障线上版本稳定性</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              荣誉奖项
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '第六届“传智杯”全国大学生 Web 前端挑战赛', award: '全国一等奖', date: '2024.04' },
                { title: '第五届“传智杯”全国大学生 Web 前端挑战赛', award: '全国优秀奖', date: '2023.05' },
                { title: '湖南省职业院校技能大赛“移动应用开发”', award: '三等奖', date: '2023.03' },
                { title: '湖南省第一届职业技能大赛“网站设计与开发”', award: '第四名', date: '2022.07' },
                { title: '2021-2022 学年度', award: '国家奖学金', date: '2022' },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-blue-600 text-xs font-bold mt-1">🏆 {item.award}</p>
                  </div>
                  <span className="text-slate-400 text-[10px] font-medium ml-4">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Skills Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              技术图谱
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">💻 前端核心 (Frontend Stack)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    精通 HTML5/CSS3 (Flex, Grid)，深耕 Vue 2/3 及 React 生态。熟练应用 <span className="font-semibold">Tailwind CSS</span>、TypeScript。擅长使用 <span className="font-semibold">Lottie</span> 实现动效及前端性能优化（懒加载、节流防抖）。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">⚙️ 后端与跨端 (Backend & Hybrid)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    具备 PHP (Laravel) 及 Java (SpringBoot, MyBatis-Plus) 开发经验。精通 UniApp 跨端开发及 Shopify 独立站生态。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">🔧 工程化与网络 (Engineering & Network)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    熟悉 Git 版本控制，了解计算机网络原理（HTTP, TCP/IP, HTTPS）及浏览器缓存机制、跨域解决方案。
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section>
             <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-3"></span>
              教育经历
            </h2>
            <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm space-y-4">
               <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800 text-base">🎓 国家开放大学</span>
                  <span className="text-slate-500 text-sm">计算机网络技术</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800 text-base">🎓 郴州技师学院 (预备技师班)</span>
                  <span className="text-slate-500 text-sm">计算机网络技术</span>
               </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
