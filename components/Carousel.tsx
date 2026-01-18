
import React, { useState, useRef, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  isMobile?: boolean; // 是否为手机竖屏尺寸
  onImageClick?: (index: number) => void; // 图片点击回调
}

const Carousel: React.FC<CarouselProps> = ({ images, isMobile = false, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // 判断是否为视频文件的辅助函数
  const isVideoFile = (url: string): boolean => {
    if (!url) return false;
    const urlStr = url.toLowerCase();
    // 检查URL中是否包含视频扩展名
    return urlStr.includes('.mp4') || urlStr.includes('.webm') || urlStr.includes('.mov') || urlStr.includes('.m4v');
  };

  // 当切换到新索引时，播放当前视频并暂停其他视频
  useEffect(() => {
    const isCurrentVideo = (idx: number) => {
      return isVideoFile(images[idx]);
    };

    // 暂停所有视频
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== activeIndex) {
        video.pause();
      }
    });

    // 播放当前视频（如果是视频）
    if (isCurrentVideo(activeIndex)) {
      const currentVideo = videoRefs.current[activeIndex];
      if (currentVideo) {
        currentVideo.play().catch((error) => {
          // 自动播放可能被浏览器阻止，静默处理
          console.log('Video autoplay prevented:', error);
        });
      }
    }
  }, [activeIndex, images]);

  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, idx) => {
          const isVideo = isVideoFile(img);
          return (
            <div key={idx} className="min-w-full h-full flex items-center justify-center bg-slate-100 relative">
              {isVideo ? (
                <video 
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={img} 
                  className="w-full h-full object-contain cursor-pointer"
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls
                  preload="auto"
                  onClick={() => handleImageClick(idx)}
                  onLoadedData={(e) => {
                    // 视频加载完成后尝试播放
                    const video = e.currentTarget;
                    video.play().catch((err) => {
                      console.log('Video play failed:', err);
                    });
                  }}
                  onError={(e) => {
                    console.error('Video load error:', e);
                  }}
                />
              ) : (
                <img 
                  src={img} 
                  alt={`Slide ${idx}`} 
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() => handleImageClick(idx)}
                />
              )}
            </div>
          );
        })}
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${activeIndex === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
