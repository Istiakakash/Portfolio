import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Linkedin, Mail, ChevronRight, ExternalLink, GraduationCap, Microscope, BookOpen, Users, Phone } from 'lucide-react';
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
        className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 ${isActive ? 'text-blue-700' : 'text-slate-500 hover:text-blue-600'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="#about" className="text-2xl font-extrabold text-slate-900 tracking-tighter hover:text-blue-700 transition-colors">
              S.I. AKASH
            </a>
            
            <div className="hidden lg:flex space-x-10">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#research">Research</NavLink>
              <NavLink href="#publications">Publications</NavLink>
              <NavLink href="#teaching">Teaching</NavLink>
              <NavLink href="#leadership">Leadership</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0">
            <div className="px-8 py-10 space-y-6 flex flex-col items-center text-base font-bold tracking-widest">
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

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-48 pb-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="group relative shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-[8px] border-white shadow-2xl">
              <img src={PROFILE.imageUrl} alt={PROFILE.name} className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-8 flex-1">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-4">{PROFILE.name}</h1>
              <p className="text-2xl md:text-3xl text-blue-700 font-bold">{PROFILE.title}</p>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
              {PROFILE.tagline}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-6">
              <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-900/20 transform hover:-translate-y-1">
                <Download size={20} /> Download CV
              </a>
              <div className="flex gap-3">
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 text-slate-600 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 rounded-full transition-all border border-slate-200 shadow-sm hover:shadow-md">
                  <Linkedin size={22} />
                </a>
                <a href={`mailto:${PROFILE.email}`} className="p-4 text-slate-600 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 rounded-full transition-all border border-slate-200 shadow-sm hover:shadow-md">
                  <Mail size={22} />
                </a>
                <a href={PROFILE.socials.googleScholar} target="_blank" rel="noreferrer" className="px-8 py-4 text-base bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-full text-slate-700 hover:text-blue-700 transition-all font-bold flex items-center gap-3 shadow-sm hover:shadow-md">
                  <BookOpen size={20} /> Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section id="education" className="py-32 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-5 mb-20">
            <div className="p-4 bg-blue-100 rounded-2xl text-blue-700 shadow-inner"><GraduationCap size={40} /></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">{edu.institution}</h3>
                    <span className="self-start text-xs font-bold bg-blue-600 text-white px-4 py-1.5 rounded-full uppercase tracking-wider shadow-blue-200 shadow-lg">{edu.period}</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-xl font-semibold text-slate-700 mb-1">{edu.degree}</p>
                    <p className="text-base text-slate-500 font-medium">{edu.location}</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl mb-8 border border-slate-100 inline-block">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">CGPA Score</span>
                    <span className="text-3xl font-black text-slate-900">{edu.gpa.split(' ')[0]}</span>
                    <span className="text-lg text-slate-400 ml-2 font-medium">/ 4.00</span>
                  </div>
                  <ul className="space-y-4">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex gap-4 text-base text-slate-600 leading-relaxed font-medium">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESEARCH --- */}
      <section id="research" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-5 mb-20">
            <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-700 shadow-inner"><Microscope size={40} /></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Research Focus</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {RESEARCH_INTERESTS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-1 bg-indigo-500 mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-12 pl-6 border-l-8 border-indigo-600">Research Experience</h3>
          <div className="space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">{exp.project}</h4>
                    <p className="text-indigo-600 text-lg font-bold">{exp.role}</p>
                    <p className="text-base text-slate-500 mt-1 italic font-medium">{exp.organization}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-slate-600 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">{exp.period}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex gap-4 text-slate-700 text-base leading-relaxed">
                      <ChevronRight size={20} className="text-indigo-500 shrink-0 mt-1" />
                      {resp}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PUBLICATIONS --- */}
      <section id="publications" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-900/50"><BookOpen size={40} /></div>
              <h2 className="text-4xl md:text-5xl font-extrabold">Publications</h2>
            </div>
            
            {/* Stats Cards */}
            <div className="flex gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center min-w-[120px] hover:bg-slate-700 transition-colors">
                <div className="text-4xl font-black text-blue-400 mb-1">{SCHOLAR_STATS.citations}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Citations</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center min-w-[120px] hover:bg-slate-700 transition-colors">
                <div className="text-4xl font-black text-white mb-1">{SCHOLAR_STATS.hIndex}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">h-index</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center min-w-[120px] hover:bg-slate-700 transition-colors">
                <div className="text-4xl font-black text-white mb-1">{SCHOLAR_STATS.i10Index}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">i10-index</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub) => (
              <a href={pub.link} key={pub.id} target="_blank" rel="noreferrer" className="block bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 group relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="flex justify-between items-start gap-8">
                   <div className="flex-1">
                     <h4 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                       {pub.title}
                     </h4>
                     <p className="text-base md:text-lg text-slate-400 mb-5 font-light leading-relaxed">{pub.authors}</p>
                     <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                       <span className="text-blue-300 bg-blue-500/20 px-4 py-1.5 rounded-full border border-blue-500/30">{pub.journal}</span>
                       <span className="text-slate-400 bg-slate-700 px-4 py-1.5 rounded-full border border-slate-600">{pub.year}</span>
                       <span className="text-emerald-300 bg-emerald-500/20 px-4 py-1.5 rounded-full border border-emerald-500/30">{pub.type}</span>
                     </div>
                   </div>
                   <div className="p-3 bg-slate-700 rounded-full group-hover:bg-blue-600 transition-colors shrink-0">
                     <ExternalLink size={24} className="text-slate-300 group-hover:text-white transition-colors" />
                   </div>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEACHING & LEADERSHIP --- */}
      <section id="teaching" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Teaching Column */}
            <div>
              <div className="flex items-center gap-5 mb-12">
                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-700"><Users size={32} /></div>
                <h2 className="text-3xl font-bold text-slate-900">Teaching</h2>
              </div>
              <div className="space-y-10">
                {TEACHING_EXPERIENCE.map((teach, idx) => (
                  <div key={idx} className="relative pl-8 border-l-4 border-emerald-100 hover:border-emerald-500 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{teach.role}</h3>
                    <p className="text-lg text-emerald-700 font-semibold mb-2">{teach.institution}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">{teach.period}</p>
                    {teach.courses.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-3">
                        {teach.courses.map((c, i) => (
                          <span key={i} className="text-xs font-bold bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 uppercase tracking-wide">{c}</span>
                        ))}
                      </div>
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed">{teach.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Column */}
            <div id="leadership">
              <div className="flex items-center gap-5 mb-12">
                <div className="p-3 bg-purple-100 rounded-xl text-purple-700"><Users size={32} /></div>
                <h2 className="text-3xl font-bold text-slate-900">Leadership</h2>
              </div>
              <div className="space-y-6">
                {LEADERSHIP.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg hover:bg-white border border-transparent hover:border-purple-100 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                      <span className="text-[10px] font-bold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-500 shadow-sm">{item.period}</span>
                    </div>
                    <p className="text-base text-purple-700 font-semibold mb-3">{item.organization}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Research Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_GALLERY.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <h3 className="font-bold text-white text-xl mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500 delay-100 font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h4 className="font-black text-slate-900 text-2xl tracking-tighter mb-3">S.I. AKASH</h4>
           <p className="text-slate-500 text-base mb-10 font-medium">Food Science Researcher | Prospective PhD Student</p>
           
           <div className="flex justify-center gap-8 mb-10">
             <a href={PROFILE.socials.linkedin} className="text-slate-300 hover:text-blue-700 transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
             <a href={`mailto:${PROFILE.email}`} className="text-slate-300 hover:text-blue-700 transition-colors transform hover:scale-110"><Mail size={28} /></a>
             <a href={`tel:${PROFILE.phone}`} className="text-slate-300 hover:text-blue-700 transition-colors transform hover:scale-110"><Phone size={28} /></a>
           </div>

           <div className="text-sm text-slate-400 font-semibold tracking-wide">
             © {new Date().getFullYear()} Sarif Istiak Akash. All Rights Reserved.
           </div>
        </div>
      </footer>

    </div>
  );
}
