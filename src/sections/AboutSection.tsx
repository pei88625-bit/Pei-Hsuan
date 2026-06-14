// ─────────────────────────────────────────────
// sections/AboutSection.tsx
// ─────────────────────────────────────────────
import { useState } from 'react';
import { useLang } from '../LangContext';
import { SKILLS, CERTIFICATES, ABOUT_CONTENT, type PublicationItem } from '../data';

const PublicationVisual = ({ type, lang }: { type: PublicationItem['visualType']; lang: 'zh' | 'en' }) => {
  const isZh = lang === 'zh';

  switch (type) {
    case 'supply-chain':
      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-6 p-4">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-brand-500 mb-2">
            {isZh ? '雙通路綠色供應鏈架構' : 'Dual-Channel Green Supply Chain'}
          </div>
          
          {/* Cap & Trade Regulatory Box */}
          <div className="w-full max-w-[280px] p-3 bg-brand-950 text-white rounded-2xl text-[10px] text-center shadow-lg border border-brand-800 flex items-center justify-center gap-2 animate-pulse">
            <i className="fas fa-smog text-brand-400"></i>
            <span>{isZh ? '碳交易與減排政策限制' : 'Carbon Cap-and-Trade Policy'}</span>
          </div>

          <div className="flex items-center justify-between w-full max-w-[320px] relative">
            {/* Manufacturer Node */}
            <div className="z-10 w-24 h-24 rounded-3xl bg-white border border-brand-200 flex flex-col items-center justify-center p-2 text-center shadow-md hover:border-brand-500 hover:shadow-lg transition-all group">
              <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-950 mb-1 group-hover:scale-110 transition-transform">
                <i className="fas fa-industry"></i>
              </div>
              <span className="text-[10px] font-bold">{isZh ? '製造商' : 'Manufacturer'}</span>
              <span className="text-[8px] text-brand-500 mt-0.5">{isZh ? '綠色產品投資' : 'Green Inv.'}</span>
            </div>

            {/* Channels flow lines */}
            <div className="absolute inset-0 flex flex-col justify-center gap-6 pointer-events-none">
              {/* Direct Path line */}
              <div className="h-[2px] bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 w-full relative">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1.5 h-1.5 bg-brand-600 rounded-full animate-[ping_1.5s_infinite]"></div>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] font-bold text-brand-500 uppercase tracking-widest bg-white/80 px-1 rounded">
                  {isZh ? '直銷通路' : 'Direct'}
                </span>
              </div>
              {/* Retail Path line */}
              <div className="h-[2px] bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 w-full relative">
                <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 h-1.5 bg-brand-600 rounded-full animate-[ping_1.5s_infinite_delay-750ms]"></div>
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[7px] font-bold text-brand-500 uppercase tracking-widest bg-white/80 px-1 rounded">
                  {isZh ? '零售通路' : 'Retailer'}
                </span>
              </div>
            </div>

            {/* Customers Node */}
            <div className="z-10 w-24 h-24 rounded-3xl bg-white border border-brand-200 flex flex-col items-center justify-center p-2 text-center shadow-md hover:border-brand-500 hover:shadow-lg transition-all group">
              <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-950 mb-1 group-hover:scale-110 transition-transform">
                <i className="fas fa-users"></i>
              </div>
              <span className="text-[10px] font-bold">{isZh ? '市場/消費者' : 'Market'}</span>
              <span className="text-[8px] text-brand-500 mt-0.5">{isZh ? '綠色偏好' : 'Green Pref.'}</span>
            </div>
          </div>
        </div>
      );

    case 'remanufacturing':
      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 p-4">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-brand-500 mb-2">
            {isZh ? '產品再製造循環模型' : 'Remanufacturing Circular Model'}
          </div>

          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Circular Path Arrows using SVG */}
            <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 50 12 A 38 38 0 0 1 88 50" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <path d="M 88 50 A 38 38 0 0 1 50 88" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <path d="M 50 88 A 38 38 0 0 1 12 50" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <path d="M 12 50 A 38 38 0 0 1 50 12" fill="none" stroke="#0ea5e9" strokeWidth="3" />
            </svg>

            {/* Core Node */}
            <div className="absolute z-10 w-20 h-20 rounded-full bg-brand-950 text-white flex flex-col items-center justify-center p-2 text-center shadow-lg border border-brand-800">
              <i className="fas fa-recycle text-brand-400 text-lg mb-1 animate-spin"></i>
              <span className="text-[8px] font-bold uppercase tracking-widest">{isZh ? '閉環優化' : 'Closed Loop'}</span>
            </div>

            {/* Top Node: New Production */}
            <div className="absolute top-0 w-16 h-10 rounded-xl bg-white border border-brand-100 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[8px] font-bold">{isZh ? '新生產' : 'New Mfg'}</span>
              <span className="text-[6px] text-brand-500">{isZh ? '碳排放監測' : 'CO2 Monitored'}</span>
            </div>

            {/* Right Node: Market */}
            <div className="absolute right-0 w-16 h-10 rounded-xl bg-white border border-brand-100 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[8px] font-bold">{isZh ? '消費市場' : 'Market'}</span>
              <span className="text-[6px] text-brand-500">{isZh ? '產品銷售' : 'Sales'}</span>
            </div>

            {/* Bottom Node: Used Collection */}
            <div className="absolute bottom-0 w-16 h-10 rounded-xl bg-white border border-brand-100 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[8px] font-bold">{isZh ? '回收回收' : 'Collection'}</span>
              <span className="text-[6px] text-brand-500">{isZh ? '回收率優化' : 'Rate Opt.'}</span>
            </div>

            {/* Left Node: Remanufacturing */}
            <div className="absolute left-0 w-16 h-10 rounded-xl bg-white border border-brand-100 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[8px] font-bold">{isZh ? '再製造' : 'Remfg'}</span>
              <span className="text-[6px] text-brand-500">{isZh ? '省材降碳' : 'Low Carbon'}</span>
            </div>
          </div>
        </div>
      );

    case 'rework':
      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 p-4">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-brand-500 mb-2">
            {isZh ? '生產品質檢驗與返工流程' : 'Mfg Quality & Rework Flow'}
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-[320px]">
            {/* Step 1: Production */}
            <div className="w-36 py-2 bg-white border border-brand-200 rounded-xl text-center shadow-sm text-[10px] font-semibold flex items-center justify-center gap-2">
              <i className="fas fa-pallet text-brand-500"></i>
              <span>{isZh ? '批量生產製造' : 'Batch Production'}</span>
            </div>

            {/* Arrow */}
            <div className="w-[1.5px] h-6 bg-brand-300 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b-[1.5px] border-r-[1.5px] border-brand-400 rotate-45"></div>
            </div>

            {/* Step 2: Quality Inspection */}
            <div className="w-40 py-2.5 bg-brand-950 text-white rounded-2xl text-center shadow-md text-[10px] font-bold flex flex-col items-center gap-1 border border-brand-800">
              <div className="flex items-center gap-1.5">
                <i className="fas fa-clipboard-check text-brand-400"></i>
                <span>{isZh ? '品質判定節點' : 'Quality Inspection'}</span>
              </div>
              <span className="text-[8px] text-brand-400 font-light">{isZh ? '判定良品/瑕疵品' : 'Good / Defective'}</span>
            </div>

            {/* Split Paths */}
            <div className="flex justify-between w-full relative px-2">
              {/* Defective Path */}
              <div className="flex flex-col items-center gap-2 w-1/2">
                <div className="text-[8px] font-bold text-red-500 uppercase tracking-wider">{isZh ? '不合格 (瑕疵)' : 'Defective'}</div>
                <div className="w-24 py-2 bg-red-50 border border-red-200 rounded-xl text-center text-[9px] font-medium text-red-700 flex items-center justify-center gap-1 shadow-sm hover:scale-105 transition-transform">
                  <i className="fas fa-tools text-red-400"></i>
                  <span>{isZh ? '返工程序' : 'Rework Process'}</span>
                </div>
                <span className="text-[7px] text-red-500 font-light text-center">{isZh ? '返工碳排放成本' : 'Rework Carbon Cost'}</span>
              </div>

              {/* Good Path */}
              <div className="flex flex-col items-center gap-2 w-1/2">
                <div className="text-[8px] font-bold text-emerald-600 uppercase tracking-wider">{isZh ? '合格 (良品)' : 'Good'}</div>
                <div className="w-24 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-[9px] font-medium text-emerald-700 flex items-center justify-center gap-1 shadow-sm hover:scale-105 transition-transform">
                  <i className="fas fa-box text-emerald-400"></i>
                  <span>{isZh ? '產品出貨銷售' : 'Shipment / Sale'}</span>
                </div>
                <span className="text-[7px] text-emerald-600 font-light text-center">{isZh ? '無多餘碳稅負擔' : 'No Extra Tax'}</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'green-investment':
      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-5 p-4">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-brand-500 mb-2">
            {isZh ? '環保設備投資與減排決策' : 'Eco-Equipment Investment'}
          </div>

          <div className="flex items-center justify-center gap-4 w-full max-w-[320px]">
            {/* Box 1: Capital */}
            <div className="w-24 h-24 rounded-2xl bg-white border border-brand-200 shadow-sm flex flex-col items-center justify-center text-center p-2 group hover:border-brand-500 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand-950 mb-1">
                <i className="fas fa-coins text-brand-500"></i>
              </div>
              <span className="text-[9px] font-bold">{isZh ? '環保投資' : 'Capital Inv.'}</span>
              <span className="text-[7px] text-brand-500 mt-0.5">{isZh ? '設備採購資金' : 'Equipment Funding'}</span>
            </div>

            {/* Plus Icon */}
            <div className="text-brand-400 font-bold text-lg animate-pulse">+</div>

            {/* Box 2: Eco-Equipment */}
            <div className="w-24 h-24 rounded-2xl bg-brand-950 text-white shadow-md flex flex-col items-center justify-center text-center p-2 border border-brand-800">
              <div className="w-8 h-8 rounded-xl bg-brand-900 flex items-center justify-center text-brand-400 mb-1">
                <i className="fas fa-leaf text-brand-400"></i>
              </div>
              <span className="text-[9px] font-bold">{isZh ? '節能減排設備' : 'Eco Equipment'}</span>
              <span className="text-[7px] text-brand-400 mt-0.5">{isZh ? '降低製程碳足跡' : 'Reduces Carbon'}</span>
            </div>

            {/* Equal Arrow */}
            <div className="text-brand-400 font-bold text-lg animate-bounce">→</div>

            {/* Box 3: Savings */}
            <div className="w-24 h-24 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm flex flex-col items-center justify-center text-center p-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-950 mb-1">
                <i className="fas fa-chart-line text-emerald-600"></i>
              </div>
              <span className="text-[9px] font-bold text-emerald-800">{isZh ? '碳稅減免' : 'Tax Savings'}</span>
              <span className="text-[7px] text-emerald-600 mt-0.5">{isZh ? '提升長期利潤' : 'Increases Profits'}</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const AboutSection = () => {
  const { lang } = useLang();
  const t = ABOUT_CONTENT[lang];
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left: Education + Certificates */}
          <div className="space-y-10 reveal-up">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-8">{t.edu.eyebrow}</h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-100">
                
                {t.edu.schools.map((school, index) => (
                  <div key={school.name + index} className="relative">
                    <div className={`absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 ${index === 0 ? 'border-brand-950' : 'border-brand-200'} rounded-full z-10`}></div>
                    
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug min-w-0">{school.name}</h4>
                      <span className="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-wider whitespace-nowrap flex-shrink-0 mt-1.5">{school.period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <p className="text-sm md:text-brand-600 font-medium">{school.dept}</p>
                      {school.status && (
                        <span className="px-2 py-0.5 bg-brand-100 text-brand-950 rounded text-[10px] font-bold tracking-wide">
                          {school.status}
                        </span>
                      )}
                    </div>
                    
                    {school.thesis && (
                      <div className="p-4 md:p-5 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow mb-3">
                        <p className="text-xs md:text-sm font-bold text-brand-950 flex items-center gap-2 mb-2">
                          <i className="fas fa-file-alt text-brand-400"></i> {t.edu.thesisLabel}
                        </p>
                        <p className="text-xs md:text-sm text-brand-800 italic leading-relaxed">{school.thesis}</p>
                      </div>
                    )}

                    {school.gpa && (
                      <div className="text-[11px] font-bold text-brand-400 uppercase tracking-widest pl-1">
                        {school.gpa}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.certs.eyebrow}</h2>
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATES[lang as 'zh' | 'en'].map(cert => (
                  <div key={cert.name} className="p-5 border border-brand-100 rounded-3xl flex flex-col md:flex-row md:items-center gap-4 bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="text-brand-950 w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${cert.icon} text-lg`}></i>
                      </div>
                      <div>
                        <p className="text-base font-bold text-brand-950">{cert.name}</p>
                        <p className="text-xs text-brand-500 font-medium">{cert.sub}</p>
                      </div>
                    </div>
                    
                    {cert.tags && cert.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 md:pt-0 md:pl-4 md:border-l border-brand-100">
                        {cert.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-brand-50 border border-brand-200/60 text-brand-950 rounded-xl text-xs font-bold shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic Archive (Paper + Conference) + Skills */}
          <div className="space-y-10 reveal-up delay-200">

            {/* Scholarly Journal Paper */}
            <div className="space-y-4">
              {t.paper.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.paper.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.paper.title}</h3>
              <div className="space-y-4">
                {t.paper.list.map((item: PublicationItem) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPub(item)}
                    className="group relative p-6 bg-white border border-brand-100 rounded-3xl hover:border-brand-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex justify-between items-center gap-4"
                  >
                    <div className="space-y-2.5 min-w-0 flex-1">
                      <h4 className="text-base font-bold text-brand-950 leading-snug group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 items-center text-xs">
                        <span className="px-2 py-0.5 bg-brand-50 border border-brand-200 text-brand-600 text-[9px] font-bold rounded-md flex-shrink-0">
                          {item.year}
                        </span>
                        <span className="text-brand-500 truncate max-w-[150px] md:max-w-xs">
                          {item.venue}
                        </span>
                        <span className="text-brand-400 italic truncate max-w-[120px] md:max-w-[200px]">
                          {item.authors}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-50 group-hover:bg-brand-950 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <i className="fas fa-paper-plane text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Block */}
            <div className="space-y-4 pt-2">
              {t.conference.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.conference.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.conference.title}</h3>
              <div className="space-y-4">
                {t.conference.list.map((item: PublicationItem) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPub(item)}
                    className="group relative p-6 bg-white border border-brand-100 rounded-3xl hover:border-brand-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex justify-between items-center gap-4"
                  >
                    <div className="space-y-2.5 min-w-0 flex-1">
                      <h4 className="text-base font-bold text-brand-950 leading-snug group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 items-center text-xs">
                        <span className="px-2 py-0.5 bg-brand-50 border border-brand-200 text-brand-600 text-[9px] font-bold rounded-md flex-shrink-0">
                          {item.year}
                        </span>
                        <span className="text-brand-500 truncate max-w-[150px] md:max-w-xs">
                          {item.venue}
                        </span>
                        <span className="text-brand-400 italic truncate max-w-[120px] md:max-w-[200px]">
                          {item.authors}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-50 group-hover:bg-brand-950 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <i className="fas fa-paper-plane text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="pt-4">
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.skills.eyebrow}</h2>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-brand-950 text-white rounded-full text-[10px] md:text-xs font-medium cursor-default transition-all duration-300 hover:bg-brand-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Modal Window ── */}
      {selectedPub && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/40 backdrop-blur-md p-4 md:p-6 transition-all animate-fade-in" 
          onClick={() => setSelectedPub(null)}
        >
          <div 
            className="relative w-full max-w-5xl rounded-[2.5rem] md:rounded-[3rem] bg-white border border-brand-100 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPub(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white border border-brand-100 shadow-sm flex items-center justify-center text-brand-950 hover:bg-brand-50 hover:scale-105 active:scale-95 transition-all"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Left Panel: Diagram / Architecture Visualization */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-brand-50/55 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-brand-100/50 min-h-[320px] md:min-h-[440px]">
              <PublicationVisual type={selectedPub.visualType} lang={lang} />
            </div>

            {/* Right Panel: Abstract & Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full text-brand-500 border border-brand-200">
                  {selectedPub.id.startsWith('paper') 
                    ? (lang === 'zh' ? '期刊論文學術發表' : 'Scholarly Journal Paper')
                    : (lang === 'zh' ? '國際研討會學術發表' : 'International Conference')
                  }
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug">
                  {selectedPub.title}
                </h4>
                <div className="space-y-1 text-xs text-brand-500">
                  <p><strong>{lang === 'zh' ? '作者：' : 'Authors: '}</strong>{selectedPub.authors}</p>
                  <p><strong>{lang === 'zh' ? '發表平台：' : 'Venue: '}</strong>{selectedPub.venue} ({selectedPub.year})</p>
                </div>
                <div className="w-full h-[1px] bg-brand-100/70 my-2"></div>
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">
                    {lang === 'zh' ? '論文摘要' : 'Abstract'}
                  </h5>
                  <p className="text-xs md:text-sm text-brand-700 leading-relaxed text-justify break-words">
                    {selectedPub.abstract}
                  </p>
                </div>
              </div>

              {selectedPub.link && (
                <a 
                  href={selectedPub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-950 text-white rounded-full font-bold text-xs shadow-lg hover:shadow-brand-500/20 hover:-translate-y-1 active:scale-95 transition-all self-start"
                >
                  <span>{lang === 'zh' ? '查看文獻連結 (DOI)' : 'View Publication (DOI)'}</span>
                  <i className="fas fa-external-link-alt text-[9px] group-hover:translate-x-0.5 transition-transform"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};