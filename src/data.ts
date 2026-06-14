// @ts-nocheck
// ─────────────────────────────────────────────
// data.ts — All static content lives here.
// Update this file to change portfolio content.
// ─────────────────────────────────────────────
import ragImage from './assets/pii_rag_workflow.png';
import qrImage from './assets/qr_shortener_mockup.png';
import datasheetImage from './assets/Dataextract.png';

// ── Nav ────────────────────────────────────────
export const NAV_ITEMS = {
  zh: [
    { id: 'about', label: '關於' },
    // { id: 'services', label: '經歷' },
    // { id: 'portfolio', label: '作品' },
    { id: 'contact', label: '聯絡' },
  ],
  en: [
    { id: 'about', label: 'About' },
    // { id: 'services', label: 'Experience' },
    // { id: 'portfolio', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ],
};

// ── Skills ─────────────────────────────────────
export const SKILLS = [
  'Supply Chain Management', 'Inventory Management', 
  'Production Management' 
];

// ── Certificates ───────────────────────────────
// ── Certificates ───────────────────────────────
export const CERTIFICATES = {
  zh: [
    { 
      icon: 'fa-certificate', 
      name: 'Microsoft AI-900', 
      sub: 'Azure AI Fundamentals',
      tags: [] 
    },
    { 
      icon: 'fa-shield-alt', 
      name: '勞動部國家技術士證', 
      sub: '中華民國技術士檢定合格', 
      tags: ['電腦軟體應用 乙級', '電腦軟體應用 丙級', '門市服務 丙級', '會計事務－資訊 丙級'] 
    },
  ],
  en: [
    { 
      icon: 'fa-certificate', 
      name: 'Microsoft AI-900', 
      sub: 'Azure AI Fundamentals',
      tags: [] 
    },
    { 
      icon: 'fa-shield-alt', 
      name: 'National Technical Skills Test', 
      sub: 'Workforce Development Agency (WDA) Certified', 
      tags: ['Computer Application - Level B', 'Computer Application - Level C', 'Retail Services - Level C', 'Accounting System - Level C'] 
    },
  ],
};

// ── Hero ───────────────────────────────────────
export const HERO_CONTENT = {
  zh: {
    badge: 'Supply chain management & industrial management',
    nameJp: '徐珮瑄',
    line1: '', // 用空字串代替註解，同時畫面會聰明地隱藏！
    line2: '',
    desc: '',
    cta1: '探索作品集',
    cta2: '聯絡資訊',
  },
  en: {
    badge: 'Supply Chain Management & Industrial Management',
    nameJp: 'Pei-Hsuan Hsu',
    line1: '',
    line2: '',
    desc: '',
    cta1: 'View Portfolio',
    cta2: 'Get in Touch',
  },
};

// ── About ──────────────────────────────────────
export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  link: string;
  visualType: 'supply-chain' | 'remanufacturing' | 'rework' | 'green-investment';
  tags: string[];
}

export const ABOUT_CONTENT = {
  zh: {
    edu: {
      eyebrow: 'Education',
      schools: [
        { 
          name: '國立臺灣科技大學', 
          dept: '工業管理研究所 (博士班)', 
          period: '2023 - Now',
          status: '博士候選人', 
          gpa: 'GPA: 4.19 / 4.3' 
        },
        { 
          name: '國立屏東大學', 
          dept: '行銷與流通管理學系 (碩士班)', 
          period: '2021 - 2023',
          thesis: '二階層供應鏈於碳排放及雙重通路訂價之研究', 
          gpa: 'Overall Average: 91.77 / 100' 
        },
        { 
          name: '國立屏東大學', 
          dept: '行銷與流通管理學系 (學士班)', 
          period: '2017 - 2021' ,
          gpa: 'Overall Average: 91.33 / 100' 
        }
      ],
      thesisLabel: '碩士論文',
    },
    certs: { eyebrow: 'Certificates' },
    paper: {
      eyebrow: 'Scholarly archive',
      title: '學術發表',
      list: [
        {
          id: 'paper1',
          title: 'The green product investment policy of carbon emission reduction on a competition duopoly and dual-channel supply chain',
          authors: 'Tsao, Y. C., Hsu, P. H., Wu, C. H., & Chen, T. H.',
          venue: 'International Journal of Systems Science: Operations & Logistics',
          year: '2024',
          abstract: '本研究探討了在雙頭壟斷製造商與零售商環境下的雙通路供應鏈系統。分析了定價策略、決策者的心理賬戶以及旨在減少碳排放的綠色產品投資政策對供應鏈決策的影響。研究顯示，綠色產品投資不僅能有效降低碳排放，還能透過消費者對綠色產品的偏好與品牌忠誠度，提升市場競爭力與企業獲利能力。',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'supply-chain',
          tags: ['Journal Paper', 'SCM', 'Carbon Reduction']
        }
      ] as PublicationItem[]
    },
    conference: {
      eyebrow: '',
      title: '國際研討會',
      list: [
        {
          id: 'conf1',
          title: 'Optimal production and intelligent decisions consider remanufacturing and carbon emission',
          authors: 'Hsu, P. H., Tsao, Y. C., & Chen, T. H.',
          venue: '2025 International Advanced Technology and Taiwan-Japan Engineering Forum, IAT&TJEF 2025',
          year: '2025',
          abstract: '本研究針對包含產品再製造與碳排放考量的供應鏈進行優化分析。建立數學模型探討製造商在面對碳排放限制與再製造技術時，如何制定最佳的生產批量與再製造比例，以在符合環境永續法規的同時，極大化企業利潤並實現綠色閉環供應鏈。',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'remanufacturing',
          tags: ['Conference', 'Remanufacturing', 'Circular Economy']
        },
        {
          id: 'conf2',
          title: 'Optimal production and quality policy consider rework and carbon emission',
          authors: 'Hsu, P. H., Tsao, Y. C., & Chen, T. H.',
          venue: '2025 30th ISSAT International Conference on Reliability & Quality in Design',
          year: '2025',
          abstract: '本研究在碳總量管制與交易（Cap-and-Trade）政策下，探討考量瑕疵品返工（Rework）與碳排放的製造系統最佳生產與品質政策。分析了返工過程中的碳足跡對決策的影響，並提出最佳的生產批量與品質檢驗策略，平衡環境成本與生產效益。',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'rework',
          tags: ['Conference', 'Quality Control', 'Rework Policy']
        },
        {
          id: 'conf3',
          title: "Analysis of manufacturers' investment in environmental protection equipment",
          authors: 'Hsu, P. H., & Chen, T. H.',
          venue: 'Chinese Association of Innovative Information and Applied Statistics',
          year: '2022',
          abstract: '本研究探討製造商對於環保設備（如減排與污染控制設備）的投資決策。透過統計與賽局模型分析政府環境規制作風對製造商投資行為、營運成本及長期市場競爭優勢的動態影響，為企業綠色轉型提供實務決策依據。',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'green-investment',
          tags: ['Conference', 'Green Finance', 'Policy Analysis']
        }
      ] as PublicationItem[]
    },
    skills: { eyebrow: 'Core Skills' },
  },
  en: {
    edu: {
      eyebrow: 'Education',
      schools: [
        { 
          name: 'National Taiwan University of Science and Technology', 
          dept: 'Department of Industrial Management', 
          period: '2023 - Now',
          status: 'Ph.D. Candidate',
          gpa: 'GPA: 4.19 / 4.3' 
        },
        { 
          name: 'National Pingtung University', 
          dept: 'Department of Marketing and Distribution Management', 
          period: '2021 - 2023',
          thesis: '"The Pricing and the Carbon Emission Reduction on a Dual Channel in the Two-tier Supply Chain"',
          gpa: 'Overall Average: 91.77 / 100' 
        },
        { 
          name: 'National Pingtung University', 
          dept: 'Department of Marketing and Distribution Management', 
          period: '2017 - 2021' ,
          gpa: 'Overall Average: 91.33 / 100'
        }
      ],
      thesisLabel: "Master's Thesis",
    },
    certs: { eyebrow: 'Certificates' },
    paper: {
      eyebrow: 'Scholarly archive',
      title: 'Journal Paper',
      list: [
        {
          id: 'paper1',
          title: 'The green product investment policy of carbon emission reduction on a competition duopoly and dual-channel supply chain',
          authors: 'Tsao, Y. C., Hsu, P. H., Wu, C. H., & Chen, T. H.',
          venue: 'International Journal of Systems Science: Operations & Logistics',
          year: '2024',
          abstract: "This study investigates a dual-channel supply chain system featuring duopoly manufacturers and retailers. It analyzes the impact of pricing policies, decision-makers' mental accounting, and green product investment policies for carbon emission reduction on supply chain decisions. The findings demonstrate that green product investments can effectively lower carbon emissions while enhancing market competitiveness and profitability, driven by consumer preference for green products and brand loyalty.",
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'supply-chain',
          tags: ['Journal Paper', 'SCM', 'Carbon Reduction']
        }
      ] as PublicationItem[]
    },
    conference: {
      eyebrow: '',
      title: 'Conference',
      list: [
        {
          id: 'conf1',
          title: 'Optimal production and intelligent decisions consider remanufacturing and carbon emission',
          authors: 'Hsu, P. H., Tsao, Y. C., & Chen, T. H.',
          venue: '2025 International Advanced Technology and Taiwan-Japan Engineering Forum, IAT&TJEF 2025',
          year: '2025',
          abstract: 'This study focuses on optimizing a supply chain that incorporates product remanufacturing and carbon emission constraints. A mathematical model is established to investigate how manufacturers should determine the optimal production lot size and remanufacturing ratio under carbon emission regulations, maximizing profits while achieving a sustainable closed-loop supply chain.',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'remanufacturing',
          tags: ['Conference', 'Remanufacturing', 'Circular Economy']
        },
        {
          id: 'conf2',
          title: 'Optimal production and quality policy consider rework and carbon emission',
          authors: 'Hsu, P. H., Tsao, Y. C., & Chen, T. H.',
          venue: '2025 30th ISSAT International Conference on Reliability & Quality in Design',
          year: '2025',
          abstract: 'Under a carbon cap-and-trade policy, this study explores the optimal production and quality decisions for a manufacturing system considering defective item rework and carbon emissions. It analyzes the impact of the carbon footprint during the rework process and determines the optimal production lot size and quality control policies.',
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'rework',
          tags: ['Conference', 'Quality Control', 'Rework Policy']
        },
        {
          id: 'conf3',
          title: "Analysis of manufacturers' investment in environmental protection equipment",
          authors: 'Hsu, P. H., & Chen, T. H.',
          venue: 'Chinese Association of Innovative Information and Applied Statistics',
          year: '2022',
          abstract: "This study analyzes manufacturers' decision-making regarding investment in environmental protection equipment. Using statistical and game-theoretic models, we examine the dynamic impact of government environmental regulations on investment behaviors, operating costs, and long-term market competitiveness.",
          link: 'https://doi.org/10.1080/23302674.2024.2419405',
          visualType: 'green-investment',
          tags: ['Conference', 'Green Finance', 'Policy Analysis']
        }
      ] as PublicationItem[]
    },
    skills: { eyebrow: 'Core Skills' },
  },
};

// ── Work History ───────────────────────────────
export interface WorkItem {
  company: string;
  location: string;
  period: string;
  title: string;
  icon: string;
  dark: boolean;
  present?: boolean;
  bullets?: { label: string; text: string }[];
  desc?: string;
  tags: string[];
  github?: string;
}

export const WORK_HISTORY: Record<'zh' | 'en', WorkItem[]> = {
  zh: [
    {
      company: '麟數據 LNDATA',
      location: '',
      period: '2026 - NOW',
      title: 'MLOps Engineer',
      icon: 'fa-brain',
      dark: true,
      present: true,
      desc: 'GenBI 系統開發與研發，建構自動化代理工作流。',
      tags: [],
    },
    {
      company: 'DELL',
      location: 'Taipei, Taiwan',
      period: 'Jul 2024 – Apr 2025',
      title: 'GenAI 硬體自動化測試系統',
      icon: 'fa-microchip',
      dark: false,
      bullets: [
        { label: '分散式對話系統：', text: '整合 TTS 與自訂義角色，使裝置能在多輪對話中動態切換角色，實現自動化語音互動測試。' },
        { label: '準確率驗證：', text: '導入 Whisper 模型轉錄錄音，透過關鍵字匹配演算法自動驗證測試結果。' },
      ],
      tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
    },
    {
      company: 'Foxlink',
      location: 'Taipei, Taiwan',
      period: 'Oct 2023 – Dec 2024',
      title: '預知保養系統',
      icon: 'fa-industry',
      dark: false,
      bullets: [
        { label: '預測性維護：', text: '結合 Ensemble Learning 預測耗材最佳更換時機，成功提升 90% 維護效率。' },
        { label: '全端視覺化平台：', text: '以 FastAPI + React.js 建構系統，優化操作人員工作流程與 UX。' },
      ],
      tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
      github: 'https://github.com/imlacha/foxlink-second.git',
    },
  ],
  en: [
    {
      company: 'LNDATA',
      location: '',
      period: '2026 - NOW',
      title: 'MLOps Engineer',
      icon: 'fa-brain',
      dark: true,
      present: true,
      desc: 'Leading GenBI system development and building automated agentic workflows.',
      tags: [],
    },
    {
      company: 'DELL',
      location: 'Taipei, Taiwan',
      period: 'Jul 2024 – Apr 2025',
      title: 'GenAI Hardware Automation Testing System',
      icon: 'fa-microchip',
      dark: false,
      bullets: [
        { label: 'Multi-Agent Dialogue System: ', text: 'Integrated TTS with custom personas, enabling dynamic role-switching across multi-turn conversations for automated voice interaction testing.' },
        { label: 'Accuracy Validation: ', text: 'Deployed Whisper for audio transcription, combined with keyword-matching algorithms to automatically verify test outcomes.' },
      ],
      tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
    },
    {
      company: 'Foxlink',
      location: 'Taipei, Taiwan',
      period: 'Oct 2023 – Dec 2024',
      title: 'Predictive Maintenance System',
      icon: 'fa-industry',
      dark: false,
      bullets: [
        { label: 'Predictive Maintenance: ', text: 'Applied Ensemble Learning to predict optimal spare-part replacement timing, achieving a 90% improvement in maintenance efficiency.' },
        { label: 'Full-Stack Dashboard: ', text: 'Built with FastAPI + React.js to optimize operator workflows and UX.' },
      ],
      tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
      github: 'https://github.com/imlacha/foxlink-second.git',
    },
  ],
};

// ── Projects ───────────────────────────────────
export interface ProjectItem {
  dark: boolean;
  label: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  image: string;
  delay?: boolean;
}

export const PROJECTS: Record<'zh' | 'en', ProjectItem[]> = {
  zh: [
    {
      dark: true,
      label: 'AI Security Architecture',
      title: '雙流隱私保護 RAG 系統',
      desc: '透過「去識別化中介層」實現「零真實個資」的外部 LLM 檢索，確保企業級資料安全性。',
      tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/imlacha/PII-Mocking-RAG/',
      image: ragImage,
      delay: false,
    },
    {
      dark: false,
      label: 'Backend Infrastructure',
      title: 'QR Code 縮網址系統',
      desc: '基於 FastAPI 的高效能縮網址與動態 QR Code 生成系統，支援點擊分析與 Docker 快速部署。',
      tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
      github: 'https://github.com/imlacha/qrcode-sys',
      image: qrImage,
      delay: true,
    },
    {
      dark: false,
      label: 'Datasheet Extractor',
      title: '電子元件規格 Datasheet 萃取系統',
      desc: '基於 LangGraph 狀態機與 MCP 微服務架構，結合多模態視覺與雙代理（Dual-Agent）自適應校正，精準解析複雜晶片圖紙與電氣表格，準確率達 95-97%。',
      tags: ['LLM', 'LangGraph', 'MCP', 'FastAPI', 'Python', 'Pydantic'],
      github: 'https://github.com/imlacha/elec-spec-extract-agent/',
      image: datasheetImage,
      delay: true,
    },
  ],
  en: [
    {
      dark: true,
      label: 'AI Security Architecture',
      title: 'Dual-Stream Privacy-Preserving RAG',
      desc: 'A "de-identification middleware" ensures zero real PII is ever sent to external LLMs, delivering enterprise-grade data security in retrieval-augmented generation.',
      tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/imlacha/PII-Mocking-RAG/',
      image: ragImage,
      delay: false,
    },
    {
      dark: false,
      label: 'Backend Infrastructure',
      title: 'QR Code URL Shortener',
      desc: 'High-performance URL shortening and dynamic QR Code generation built on FastAPI, with click analytics and one-command Docker deployment.',
      tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
      github: 'https://github.com/imlacha/qrcode-sys',
      image: qrImage,
      delay: true,
    },
    {
      dark: false,
      label: 'Datasheet Extractor',
      title: 'Electronic Component Datasheet Extraction System',
      desc: 'An enterprise-grade parser built on LangGraph StateGraph and MCP microservices, leveraging multimodal vision and a dual-agent self-correction mechanism to extract component specs with 95-97% accuracy.',
      tags: ['LLM-Based', 'LangGraph', 'MCP', 'FastAPI', 'Python'],
      github: 'https://github.com/imlacha/elec-spec-extract-agent/',
      image: datasheetImage,
      delay: true,
    },
  ],
};

// ── Services Section headings ──────────────────
export const SERVICES_CONTENT = {
  zh: { eyebrow: 'Work History', title: '實戰專案背景' },
  en: { eyebrow: 'Work History', title: 'Professional Background' },
};

// ── Portfolio Section headings ─────────────────
export const PORTFOLIO_CONTENT = {
  zh: { eyebrow: 'Selected Works', title: '專案作品集' },
  en: { eyebrow: 'Selected Works', title: 'Portfolio' },
};
