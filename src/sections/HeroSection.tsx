// ─────────────────────────────────────────────
// sections/HeroSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { HERO_CONTENT } from '../data';
import profilePhoto from '../assets/Pei_110_.jpg';

export const HeroSection = () => {
  const { lang } = useLang();
  const t = HERO_CONTENT[lang];

  return (
    <header id="home" className="relative flex items-center justify-center pt-24 pb-6 overflow-hidden bg-grid">
      <div className="px-6 relative z-10 reveal-up w-full max-w-4xl mx-auto">
        
        {/* 頂部專業領域徽章 */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-brand-200 rounded-full">
            {t.badge}
          </span>
        </div>

        {/* 名字 + 照片：桌面版左右排列，手機版上下堆疊 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-6">
          
          {/* 左側：名字 */}
          <div className="text-center md:text-right">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none whitespace-nowrap">
              <span>{t.nameJp}</span>
            </h1>
          </div>

          {/* 右側：照片 */}
          <div className="relative group flex-shrink-0">
            {/* 裝飾背景圓環 */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-200 via-brand-100 to-brand-50 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:scale-[1.03] transition-all duration-500">
              <img
                src={profilePhoto}
                alt="Pei-Hsuan Hsu"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 當未來取消註解時，標題與介紹才會平滑長出來 */}
        {(t.line1 || t.line2) && (
          <h2 className="text-center text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6 leading-none">
            {t.line1 && <span className="text-brand-600 mr-2">{t.line1}</span>}
            {t.line2 && <span className="block text-brand-600 mt-2">{t.line2}</span>}
          </h2>
        )}

        {t.desc && (
          <p className="text-center max-w-xl mx-auto text-base md:text-lg text-brand-600 font-light mb-8 px-4">
            {t.desc}
          </p>
        )}

        {/* 按鈕區塊 */}
        <div className="flex items-center justify-center gap-5 px-4 mt-4">
          
          {t.line1 && (
            <a href="#portfolio" className="group relative px-8 md:px-12 py-4 md:py-5 bg-brand-950 text-white rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-brand-500/40 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">{t.cta1}</span>
              <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform relative z-10"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          )}

          {/* 聯絡資訊按鈕 */}
          <a href="#contact" className="group relative px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-brand-200/50 backdrop-blur-md text-brand-950 rounded-full font-bold text-sm hover:bg-white/10 hover:border-brand-950/30 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl">
            <span>{t.cta2}</span>
            <i className="fas fa-paper-plane text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all"></i>
          </a>

        </div>
      </div>
      
      {/* 底部下滑提示線 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-brand-400 to-transparent"></div>
      </div>
    </header>
  );
};