import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Linkedin, Mail, ChevronRight, ExternalLink, BookOpen, Phone } from 'lucide-react';
import { PROFILE, RESEARCH_INTERESTS, EDUCATION, EXPERIENCE, PUBLICATIONS, SCHOLAR_STATS, TEACHING_EXPERIENCE, LEADERSHIP, RESEARCH_GALLERY } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'research', 'publications', 'teaching', 'leadership', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = activeSection === href.replace('#', '');
    return (
      <a 
        href={href} 
        className={`text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${isActive ? 'text-amber-600' : 'text-slate-500 hover:text-slate-900'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-amber-100 selection:text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#about" className="text-xl font-serif font-bold text-slate-900 tracking-tight hover:text-amber-700 transition-colors">
              S.I. AKASH
            </a>
            
            <div className="hidden lg:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#research">Research</NavLink>
              <NavLink href="#publications">Publications</NavLink>
              <NavLink href="#teaching">Teaching</NavLink>
              <NavLink href="#leadership">Leadership</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl absolute w-full left-0">
            <div className="px-8 py-8 space-y-6 flex flex-col items-center text-sm font-bold tracking-widest">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#research">Research</NavLink>
              <NavLink href="#publications">Publications</NavLink>
              <NavLink href="#teaching">Teaching</NavLink>
              <NavLink href="#leadership">Leadership</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section id="about" className="relative pt-40 pb-32 flex items-center min-h-[90vh]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
           {/* Make sure hero-bg.jpg is in your public folder! */}
           <img src="./hero-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="group relative shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-slate-900 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={PROFILE.imageUrl} alt={PROFILE.name} className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" />
              </div>
            </div>
            
            <div className="text-center md:text-left space-y-6 flex-1">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-3">{PROFILE.name}</h1>
                <p className="text-xl md:text-2xl text-amber-700 font-medium tracking-wide">{PROFILE.title}</p>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light border-l-4 border-amber-500 pl-6">
                {PROFILE.tagline}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-none uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Download size={16} /> Download CV
                </a>
                <div className="flex gap-3">
                  <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 text-slate-600 hover:text-white hover:bg-slate-900 border border-slate-300 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${PROFILE.email}`} className="p-3 text-slate-600 hover:text-white hover:bg-slate-900 border border-slate-300 transition-all">
                    <Mail size={20} />
                  </a>
                  <a href={PROFILE.socials.googleScholar} target="_blank" rel="noreferrer" className="px-6 py-3 text-xs uppercase tracking-widest border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition-all font-bold flex items-center gap-2">
                    <BookOpen size={16} /> Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section id="education" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-amber-500"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{edu.institution}</h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{edu.period}</span>
                </div>
                <div className="mb-4 pl-4 border-l-2 border-slate-200 group-hover:border-amber-500 transition-colors">
                  <p className="text-lg font-serif italic text-slate-700">{edu.degree}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                </div>
                <div className="bg-slate-50 p-4 mb-4 border border-slate-100 inline-block">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">CGPA</span>
                  <span className="text-2xl font-serif font-bold text-slate-900">{edu.gpa.split(' ')[0]}</span>
                  <span className="text-sm text-slate-400 ml-2">/ 4.00</span>
                </div>
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <div className="w-1 h-1 bg-amber-500 mt-2 shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESEARCH --- */}
      <section id="research" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-amber-500"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Research Focus</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {RESEARCH_INTERESTS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-slate-200 hover:border-amber-500">
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-serif">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Research Experience</h3>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 hover:border-amber-500/50 transition-colors duration-300 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 hover:bg-amber-500 transition-colors"></div>
                <div className="pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{exp.project}</h4>
                      <p className="text-amber-700 font-medium mt-1">{exp.role}</p>
                      <p className="text-sm text-slate-400 mt-1 italic">{exp.organization}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex gap-3 text-slate-600 text-sm">
                        <ChevronRight size={14} className="text-amber-500 shrink-0 mt-1" />
                        {resp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PUBLICATIONS --- */}
      <section id="publications" className="py-24 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-amber-500"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Publications</h2>
            </div>
            
            <div className="flex gap-8 border-b border-slate-700 pb-4">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-white">{SCHOLAR_STATS.citations}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-white">{SCHOLAR_STATS.hIndex}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">h-index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-white">{SCHOLAR_STATS.i10Index}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">i10-index</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {PUBLICATIONS.map((pub) => (
              <a href={pub.link} key={pub.id} target="_blank" rel="noreferrer" className="block bg-slate-800/30 p-6 border-l-2 border-slate-700 hover:border-amber-500 hover:bg-slate-800 transition-all duration-300 group">
                 <div className="flex justify-between items-start gap-6">
                   <div>
                     <h4 className="text-lg font-serif font-medium text-slate-200 group-hover:text-amber-400 transition-colors mb-2 leading-snug">
                       {pub.title}
                     </h4>
                     <p className="text-sm text-slate-500 mb-3 font-light italic">{pub.authors}</p>
                     <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest">
                       <span className="text-slate-400">{pub.journal}</span>
                       <span className="text-amber-600">• {pub.year}</span>
                     </div>
                   </div>
                   <ExternalLink size={18} className="text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" />
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEACHING & LEADERSHIP --- */}
      <section id="teaching" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[2px] bg-amber-500"></div>
                <h2 className="text-2xl font-serif font-bold text-slate-900">Teaching</h2>
              </div>
              <div className="space-y-8">
                {TEACHING_EXPERIENCE.map((teach, idx) => (
                  <div key={idx} className="group">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-700 transition-colors">{teach.role}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-1">{teach.institution}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-3">{teach.period}</p>
                    {teach.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {teach.courses.map((c, i) => (
                          <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 uppercase tracking-wide">{c}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="leadership">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[2px] bg-amber-500"></div>
                <h2 className="text-2xl font-serif font-bold text-slate-900">Leadership</h2>
              </div>
              <div className="space-y-6">
                {LEADERSHIP.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 border border-slate-100 hover:border-amber-200 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900">{item.role}</h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.period}</span>
                    </div>
                    <p className="text-sm text-amber-700 font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Research Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH_GALLERY.map((item) => (
              <div key={item.id} className="group relative overflow-hidden aspect-[4/5] cursor-pointer bg-slate-200">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-serif font-bold text-white text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition duration-500">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <h4 className="font-serif font-bold text-slate-900 text-xl tracking-tight mb-2">S.I. AKASH</h4>
           <p className="text-slate-500 text-sm mb-8 font-light italic">Food Science Researcher | Prospective PhD Student</p>
           
           <div className="flex justify-center gap-6 mb-8">
             <a href={PROFILE.socials.linkedin} className="text-slate-400 hover:text-amber-600 transition-colors"><Linkedin size={20} /></a>
             <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-amber-600 transition-colors"><Mail size={20} /></a>
             <a href={`tel:${PROFILE.phone}`} className="text-slate-400 hover:text-amber-600 transition-colors"><Phone size={20} /></a>
           </div>

           <div className="text-xs text-slate-400 font-medium tracking-wide">
             © {new Date().getFullYear()} Sarif Istiak Akash. All Rights Reserved.
           </div>
        </div>
      </footer>

    </div>
  );
}
