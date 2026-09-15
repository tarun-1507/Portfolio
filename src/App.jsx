import { useState, useEffect } from 'react';
import './index.css'; 
import { 
  Shield, Layers, ChevronRight, FileText, 
  MapPin, GraduationCap, Mail, Phone, Info, Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const profile = {
    name: "Bandari Tarun",
    title: "Senior US Mortgage Live Underwriter",
    subTitle: "Credit Risk, Collateral & Capacity Analyst",
    location: "Hyderabad, Telangana, India",
    phone: "756-926-0936",
    email: "bandarit1997@gmail.com",
    linkedin: "https://www.linkedin.com/in/tarun-bandari-a3452a3a9/",
    noticeStatus: "Immediate Joiner | Available Immediately",
    summary: "Senior US Mortgage Underwriter with 4.4 years of total professional experience, including 2.9 years of core US residential mortgage underwriting across Conventional guidelines (FNMA/FHLMC). Immediate joiner available with zero notice period. Proven expertise in complex self-employed income calculation using IRS Forms 1040, 1120, 1120-S, and 1065, clearing asset/collateral conditions, and supporting AUS findings in Encompass (LOS). Certified in Six Sigma Yellow Belt methodology, Prompt Engineering, and Root Cause Analysis (RCA)."
  };

  const experience = [
    {
      role: "Sr. Associate - Trans Processing",
      company: "Sutherland Mortgage Svcs Inc",
      period: "Feb 2026 - Present",
      bullets: [
        "Underwrite complex US Retail Mortgage applications, evaluating borrower creditworthiness, financial liabilities, and asset profiles in accordance with investor risk appetites and lending guidelines.",
        "Evaluate property valuation products, including automated models and full appraisals, to calculate accurate loan-to-value (LTV) risk metrics and clear collateral conditions.",
        "Manage a high-volume pipeline efficiently in LOS (Encompass), consistently meeting daily Turnaround Time (TAT) metrics while maintaining 100% data integrity.",
        "Analyze credit reports, title commitments, and insurance policies to identify liabilities and ensure files are clear of title or compliance defects prior to final sign-off.",
        "Review and clear complex underwriting conditions related to borrower assets and employment stability.",
        "Perform real-time compliance and fraud detection analysis to identify data discrepancies and mitigate risk prior to final approval."
      ]
    },
    {
      role: "Business Process Associate",
      company: "Adiel Technologies Pvt. Ltd",
      period: "Nov 2023 - Jan 2026",
      bullets: [
        "Evaluated mortgage loan applications and borrower documentation to verify property and loan conditions met FNMA & FHLMC underwriting guidelines.",
        "Calculated LTV, DTI, and qualifying income to support AUS findings (DU/LP) and resolved conditions through targeted document requests.",
        "Reviewed personal and business tax returns, including IRS Forms 1040, 1120, 1120-S, and 1065, to calculate qualifying income for self-employed borrowers.",
        "Underwrote new loan files and conditions within lender-defined turn times to maintain team SLA compliance.",
        "Conducted deep-dive analysis of the 4 Cs of Credit (Credit, Capacity, Capital, Collateral) for holistic borrower risk assessment.",
        "Utilized AUS-enabled internal underwriting engine and LOS platforms to execute credit decisions.",
        "Executed real-time Red Flag and Fraud Detection analysis to issue immediate loan approvals or denials."
      ]
    },
    {
      role: "Associate Technical Support",
      company: "Propanion India Pvt. Ltd",
      period: "July 2022 - Oct 2023",
      bullets: [
        "Resolved an average of 70+ customer inquiries daily via email and live chat, maintaining a 95% customer satisfaction rate.",
        "Managed cross-functional customer complaints, achieving a 90% first-contact resolution rate.",
        "Addressed customer feedback with empathy and professionalism to deliver positive customer outcomes."
      ]
    }
  ];

  const skills = {
    "Core Underwriting & Compliance": [
      "Credit Risk Assessment", "Deep Analysis of the 4 C's", "Red Flag & Fraud Detection", 
      "Quality Control", "Investor Overlay Guidelines", "FNMA / FHLMC Guidelines"
    ],
    "Financial & Risk Modeling": [
      "Cash Flow Analysis", "Qualifying Income Calculation (1040, 1120, 1065)", 
      "W-2 & Wage Earner Analysis", "LTV & DTI Calculation Expertise", "Appraisal & Collateral Analysis"
    ],
    "Systems & Documentation": [
      "AUS & LOS Navigation", "Encompass Platform", "VOE / VOA Verification", 
      "Credit Report Analysis", "Advanced MS Office / Excel"
    ],
    "Certifications & Competencies": [
      "Six Sigma Yellow Belt", "Prompt Engineering", "Root Cause Analysis (RCA)", 
      "Immediate Joiner", "High-Volume Pipeline Management", "TAT Optimization"
    ]
  };

  const education = [
    { degree: "Bachelor of Commerce (Computers)", institution: "Telangana University", location: "Nizamabad, Telangana", date: "June 2018" },
    { degree: "Intermediate", institution: "Sri Gayatri Junior College", location: "Hyderabad, Telangana", date: "June 2014" },
    { degree: "10th Standard", institution: "Bhashyam High School", location: "Hyderabad, Telangana", date: "June 2012" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#070b19] text-slate-100 antialiased font-sans pb-16 m-0 p-0 overflow-x-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full transition-all duration-1000 animate-pulse" />

      {/* Header Container Area */}
      <div className={`w-full bg-[#0c122c] border-b border-slate-800/80 shadow-lg shadow-black/20 transform transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <header className="max-w-6xl mx-auto py-10 px-6">
          
          {/* Immediate Availability Badge with Pulsing Indicator */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider font-extrabold text-emerald-400">
              ⚡ {profile.noticeStatus}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Profile Avatar with Glowing Active Ring */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center text-slate-400 font-extrabold text-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Bandari Tarun" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                  <span>BT</span>
                </div>
                <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Shield className="w-3.5 h-3.5" /> Risk Underwriting Portfolio
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  {profile.name}
                </h1>
                <p className="text-lg md:text-xl font-bold text-emerald-400 mt-1 transition-all duration-300 hover:text-emerald-300">{profile.title}</p>
                <p className="text-slate-400 text-xs md:text-sm font-medium mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> {profile.location}
                </p>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 hover:scale-[1.03] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-emerald-400/20 active:scale-[0.98] no-underline whitespace-nowrap"
            >
              <FileText className="w-4 h-4" /> 
              View Full Resume (PDF)
            </a>
          </div>

          <div className="border-t border-slate-800/60 pt-6">
            <h2 className="text-xs font-bold text-slate-400 flex items-center gap-2 mb-2 uppercase tracking-widest">
              <Info className="w-3.5 h-3.5 text-emerald-400" /> Executive Overview
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium max-w-5xl">
              {profile.summary}
            </p>
          </div>
        </header>
      </div>

      {/* Main Framework Content */}
      <main className={`max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 gap-6 transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Navigation Tab Menu */}
        <div className="flex flex-wrap gap-1 md:gap-2 border-b border-slate-800 pb-px">
          {[
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Core Skills & Certifications' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact Details' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 pb-4 font-bold text-sm tracking-wide transition-all duration-300 relative ${
                activeTab === tab.id ? 'text-emerald-400 font-black' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-400 rounded-full transition-all duration-300 ease-out ${activeTab === tab.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
            </button>
          ))}
        </div>

        {/* TAB 1: WORK HISTORY PANEL */}
        {activeTab === 'experience' && (
          <div className="space-y-6 mt-4 transition-all duration-300">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-[#111a3e]/60 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-emerald-950/20 hover:border-slate-700/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">{job.role}</h3>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#070b19] text-slate-300 border border-slate-800/60 whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-emerald-400 text-sm font-bold mb-5 tracking-wide">{job.company}</p>
                <ul className="space-y-3.5">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-slate-200 flex items-start gap-3 leading-relaxed group">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: UNIFORM CORE SKILLS & CERTIFICATIONS PANEL */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 transition-all duration-300">
            {Object.entries(skills).map(([category, list], idx) => (
              <div key={idx} className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md hover:border-slate-700 transition-all duration-300">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Layers className="w-4 h-4 text-emerald-400" /> {category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {list.map((skill, sIdx) => {
                    const isCert = ["Six Sigma Yellow Belt", "Prompt Engineering", "Root Cause Analysis (RCA)"].includes(skill);
                    const isBadge = skill === "Immediate Joiner";

                    return (
                      <span 
                        key={sIdx} 
                        className="text-xs font-bold px-3.5 py-2 rounded-xl border bg-[#070b19] border-slate-800 text-slate-200 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {isCert && <Award className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />}
                        {isBadge && <span className="mr-1 text-slate-400">⚡</span>}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ACADEMICS GRID */}
        {activeTab === 'education' && (
          <div className="space-y-4 mt-4 transition-all duration-300">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mt-0.5 shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{edu.degree}</h4>
                    <p className="text-sm font-medium text-slate-400 mt-0.5">{edu.institution} &bull; <span className="text-xs text-slate-500">{edu.location}</span></p>
                  </div>
                </div>
                <span className="self-start sm:self-center text-xs font-bold px-3 py-1.5 rounded-lg bg-[#070b19] text-emerald-400 border border-slate-800/60 whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CONTACT PANEL */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 transition-all duration-300">
            
            <a href={`mailto:${profile.email}`} className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Email Address</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors break-all">{profile.email}</p>
                </div>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Direct Contact</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">{profile.phone}</p>
                </div>
              </div>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <span className="font-extrabold text-base leading-none">in</span>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">LinkedIn Profile</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">View Profile</p>
                </div>
              </div>
            </a>

            <div className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md hover:border-slate-700 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Location</h4>
                  <p className="text-sm font-bold text-white mt-1">{profile.location}</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}import { useState, useEffect } from 'react';
import './index.css'; 
import { 
  Shield, Layers, ChevronRight, FileText, 
  MapPin, GraduationCap, Mail, Phone, Info, Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const profile = {
    name: "Bandari Tarun",
    title: "Senior US Mortgage Live Underwriter",
    subTitle: "Credit Risk, Collateral & Capacity Analyst",
    location: "Hyderabad, Telangana, India",
    phone: "756-926-0936",
    email: "bandarit1997@gmail.com",
    linkedin: "https://www.linkedin.com/in/tarun-bandari-a3452a3a9/",
    noticeStatus: "Immediate Joiner | Available Immediately",
    summary: "Senior US Mortgage Underwriter with 4.4 years of total professional experience, including 2.9 years of core US residential mortgage underwriting across Conventional guidelines (FNMA/FHLMC). Immediate joiner available with zero notice period. Proven expertise in complex self-employed income calculation using IRS Forms 1040, 1120, 1120-S, and 1065, clearing asset/collateral conditions, and supporting AUS findings in Encompass (LOS). Certified in Six Sigma Yellow Belt methodology, Prompt Engineering, and Root Cause Analysis (RCA)."
  };

  const experience = [
    {
      role: "Sr. Associate - Trans Processing",
      company: "Sutherland Mortgage Svcs Inc",
      period: "Feb 2026 - Present",
      bullets: [
        "Underwrite complex US Retail Mortgage applications, evaluating borrower creditworthiness, financial liabilities, and asset profiles in accordance with investor risk appetites and lending guidelines.",
        "Evaluate property valuation products, including automated models and full appraisals, to calculate accurate loan-to-value (LTV) risk metrics and clear collateral conditions.",
        "Manage a high-volume pipeline efficiently in LOS (Encompass), consistently meeting daily Turnaround Time (TAT) metrics while maintaining 100% data integrity.",
        "Analyze credit reports, title commitments, and insurance policies to identify liabilities and ensure files are clear of title or compliance defects prior to final sign-off.",
        "Review and clear complex underwriting conditions related to borrower assets and employment stability.",
        "Perform real-time compliance and fraud detection analysis to identify data discrepancies and mitigate risk prior to final approval."
      ]
    },
    {
      role: "Business Process Associate",
      company: "Adiel Technologies Pvt. Ltd",
      period: "Nov 2023 - Jan 2026",
      bullets: [
        "Evaluated mortgage loan applications and borrower documentation to verify property and loan conditions met FNMA & FHLMC underwriting guidelines.",
        "Calculated LTV, DTI, and qualifying income to support AUS findings (DU/LP) and resolved conditions through targeted document requests.",
        "Reviewed personal and business tax returns, including IRS Forms 1040, 1120, 1120-S, and 1065, to calculate qualifying income for self-employed borrowers.",
        "Underwrote new loan files and conditions within lender-defined turn times to maintain team SLA compliance.",
        "Conducted deep-dive analysis of the 4 Cs of Credit (Credit, Capacity, Capital, Collateral) for holistic borrower risk assessment.",
        "Utilized AUS-enabled internal underwriting engine and LOS platforms to execute credit decisions.",
        "Executed real-time Red Flag and Fraud Detection analysis to issue immediate loan approvals or denials."
      ]
    },
    {
      role: "Associate Technical Support",
      company: "Propanion India Pvt. Ltd",
      period: "July 2022 - Oct 2023",
      bullets: [
        "Resolved an average of 70+ customer inquiries daily via email and live chat, maintaining a 95% customer satisfaction rate.",
        "Managed cross-functional customer complaints, achieving a 90% first-contact resolution rate.",
        "Addressed customer feedback with empathy and professionalism to deliver positive customer outcomes."
      ]
    }
  ];

  const skills = {
    "Core Underwriting & Compliance": [
      "Credit Risk Assessment", "Deep Analysis of the 4 C's", "Red Flag & Fraud Detection", 
      "Quality Control", "Investor Overlay Guidelines", "FNMA / FHLMC Guidelines"
    ],
    "Financial & Risk Modeling": [
      "Cash Flow Analysis", "Qualifying Income Calculation (1040, 1120, 1065)", 
      "W-2 & Wage Earner Analysis", "LTV & DTI Calculation Expertise", "Appraisal & Collateral Analysis"
    ],
    "Systems & Documentation": [
      "AUS & LOS Navigation", "Encompass Platform", "VOE / VOA Verification", 
      "Credit Report Analysis", "Advanced MS Office / Excel"
    ],
    "Certifications & Competencies": [
      "Six Sigma Yellow Belt", "Prompt Engineering", "Root Cause Analysis (RCA)", 
      "Immediate Joiner", "High-Volume Pipeline Management", "TAT Optimization"
    ]
  };

  const education = [
    { degree: "Bachelor of Commerce (Computers)", institution: "Telangana University", location: "Nizamabad, Telangana", date: "June 2018" },
    { degree: "Intermediate", institution: "Sri Gayatri Junior College", location: "Hyderabad, Telangana", date: "June 2014" },
    { degree: "10th Standard", institution: "Bhashyam High School", location: "Hyderabad, Telangana", date: "June 2012" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#070b19] text-slate-100 antialiased font-sans pb-16 m-0 p-0 overflow-x-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full transition-all duration-1000 animate-pulse" />

      {/* Header Container Area */}
      <div className={`w-full bg-[#0c122c] border-b border-slate-800/80 shadow-lg shadow-black/20 transform transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <header className="max-w-6xl mx-auto py-10 px-6">
          
          {/* Immediate Availability Badge with Pulsing Indicator */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider font-extrabold text-emerald-400">
              ⚡ {profile.noticeStatus}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Profile Avatar with Glowing Active Ring */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center text-slate-400 font-extrabold text-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Bandari Tarun" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                  <span>BT</span>
                </div>
                <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Shield className="w-3.5 h-3.5" /> Risk Underwriting Portfolio
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  {profile.name}
                </h1>
                <p className="text-lg md:text-xl font-bold text-emerald-400 mt-1 transition-all duration-300 hover:text-emerald-300">{profile.title}</p>
                <p className="text-slate-400 text-xs md:text-sm font-medium mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> {profile.location}
                </p>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 hover:scale-[1.03] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-emerald-400/20 active:scale-[0.98] no-underline whitespace-nowrap"
            >
              <FileText className="w-4 h-4" /> 
              View Full Resume (PDF)
            </a>
          </div>

          <div className="border-t border-slate-800/60 pt-6">
            <h2 className="text-xs font-bold text-slate-400 flex items-center gap-2 mb-2 uppercase tracking-widest">
              <Info className="w-3.5 h-3.5 text-emerald-400" /> Executive Overview
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium max-w-5xl">
              {profile.summary}
            </p>
          </div>
        </header>
      </div>

      {/* Main Framework Content */}
      <main className={`max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 gap-6 transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Navigation Tab Menu */}
        <div className="flex flex-wrap gap-1 md:gap-2 border-b border-slate-800 pb-px">
          {[
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Core Skills & Certifications' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact Details' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 pb-4 font-bold text-sm tracking-wide transition-all duration-300 relative ${
                activeTab === tab.id ? 'text-emerald-400 font-black' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-400 rounded-full transition-all duration-300 ease-out ${activeTab === tab.id ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
            </button>
          ))}
        </div>

        {/* TAB 1: WORK HISTORY PANEL */}
        {activeTab === 'experience' && (
          <div className="space-y-6 mt-4 transition-all duration-300">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-[#111a3e]/60 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-emerald-950/20 hover:border-slate-700/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">{job.role}</h3>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#070b19] text-slate-300 border border-slate-800/60 whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-emerald-400 text-sm font-bold mb-5 tracking-wide">{job.company}</p>
                <ul className="space-y-3.5">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-slate-200 flex items-start gap-3 leading-relaxed group">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: UNIFORM CORE SKILLS & CERTIFICATIONS PANEL */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 transition-all duration-300">
            {Object.entries(skills).map(([category, list], idx) => (
              <div key={idx} className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md hover:border-slate-700 transition-all duration-300">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Layers className="w-4 h-4 text-emerald-400" /> {category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {list.map((skill, sIdx) => {
                    const isCert = ["Six Sigma Yellow Belt", "Prompt Engineering", "Root Cause Analysis (RCA)"].includes(skill);
                    const isBadge = skill === "Immediate Joiner";

                    return (
                      <span 
                        key={sIdx} 
                        className="text-xs font-bold px-3.5 py-2 rounded-xl border bg-[#070b19] border-slate-800 text-slate-200 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {isCert && <Award className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />}
                        {isBadge && <span className="mr-1 text-slate-400">⚡</span>}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ACADEMICS GRID */}
        {activeTab === 'education' && (
          <div className="space-y-4 mt-4 transition-all duration-300">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mt-0.5 shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{edu.degree}</h4>
                    <p className="text-sm font-medium text-slate-400 mt-0.5">{edu.institution} &bull; <span className="text-xs text-slate-500">{edu.location}</span></p>
                  </div>
                </div>
                <span className="self-start sm:self-center text-xs font-bold px-3 py-1.5 rounded-lg bg-[#070b19] text-emerald-400 border border-slate-800/60 whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CONTACT PANEL */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 transition-all duration-300">
            
            <a href={`mailto:${profile.email}`} className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Email Address</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors break-all">{profile.email}</p>
                </div>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Direct Contact</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">{profile.phone}</p>
                </div>
              </div>
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group bg-[#111a3e]/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 no-underline">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl transition-all duration-300">
                  <span className="font-extrabold text-base leading-none">in</span>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">LinkedIn Profile</h4>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">View Profile</p>
                </div>
              </div>
            </a>

            <div className="bg-[#111a3e]/60 border border-slate-800 p-6 rounded-2xl shadow-md hover:border-slate-700 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Location</h4>
                  <p className="text-sm font-bold text-white mt-1">{profile.location}</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}