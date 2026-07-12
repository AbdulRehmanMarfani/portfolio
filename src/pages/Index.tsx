import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Mail, Moon, Sun, Menu, X, Code2, Palette, Database, ExternalLink, Briefcase, GraduationCap, Phone, MapPin, Download, Award } from 'lucide-react';

const roles = ['Software Engineer', 'AI Applications Developer', 'Full-Stack Builder'];

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} relative`} style={{
      backgroundImage: "url('/portfolio/lovable-uploads/about-bg.gif')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
              <div className="font-bold text-lg sm:text-xl" style={{ color: darkMode ? '#FFFFFF' : '#1F2937' }}>
                Abdul Rehman
              </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent px-4">
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-20 bg-white/100 dark:bg-gray-900/100 rounded-2xl shadow-2xl px-8 py-12 overflow-hidden">
          {/* SVG Background Decorations */}
          <svg className="absolute left-0 top-0 w-[1800px] h-full pointer-events-none" viewBox="0 0 1800 700" fill="none" style={{ zIndex: 1 }}>
            <polygon points="320,700 900,0 1480,700" fill={darkMode ? "#2563eb" : "#fbbf24"} opacity={darkMode ? 0.055 : 0.15} />
            <polygon points="0,700 480,300 960,700" fill={darkMode ? "#60a5fa" : "#34d399"} opacity={darkMode ? 0.0375 : 0.10} />
            <polygon points="880,700 1360,180 1800,700" fill={darkMode ? "#a78bfa" : "#f472b6"} opacity={darkMode ? 0.0325 : 0.0875} />
            <polygon points="220,700 440,500 660,700" fill={darkMode ? "#38bdf8" : "#f87171"} opacity={darkMode ? 0.025 : 0.0625} />
            <polygon points="1380,700 1680,420 1800,700" fill={darkMode ? "#c084fc" : "#facc15"} opacity={darkMode ? 0.025 : 0.0625} />
            <polygon points="780,700 900,350 1020,700" fill={darkMode ? "#818cf8" : "#60a5fa"} opacity={darkMode ? 0.07 : 0.175} />
          </svg>

          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-start justify-center space-y-4 md:space-y-6">
            <span className="text-yellow-500 font-semibold text-base md:text-lg flex items-center">
              <span className="mr-2">👋</span> Hey, there!
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              I'm <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">Abdul Rehman</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              a {typedText}<span className="animate-blink">|</span>
            </h2>
            <div className="text-gray-700 dark:text-gray-400 mt-2 flex flex-col gap-1 text-base md:text-lg">
              <span>from Karachi, Pakistan.</span>
              <span className="flex items-center gap-2">
                <Mail className="inline h-4 w-4 text-gray-500 dark:text-gray-400" />
                Software Engineer & Full-Stack Builder
              </span>
            </div>
            <div className="flex space-x-6 mt-4">
              {['Home', 'About', 'Resume', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline"
                  style={{ color: darkMode ? '#FFFFFF' : '#1F2937' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/abdulrehmanmarfani" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-700 dark:text-white hover:text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-rehman-marfani-4aa587276" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-white hover:text-primary" />
              </a>
              <a href="https://www.instagram.com/marfani._.priv/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-700 dark:text-white hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center relative z-20 mb-8 md:mb-0">
            <div className="rounded-xl shadow-2xl bg-white/10 dark:bg-gray-900/40 relative overflow-hidden w-64 h-80 xs:w-56 xs:h-64 sm:w-72 sm:h-80 md:w-[320px] md:h-[370px]">
              <img
                src="/portfolio/lovable-uploads/Grad Pic.jpeg"
                alt="Abdul Rehman"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90 shadow-lg m-0" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white/80 dark:bg-gray-900/80 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-48 md:w-64 h-48 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/portfolio/lovable-uploads/ChatGPT Image Jul 7, 2025, 06_45_24 PM.png"
                  alt="Abdul Rehman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-2000 dark:text-gray-300 mb-6">
                I'm a Software Engineer and AI Applications Developer with a strong foundation in full-stack development, automation, and machine learning. I completed my Cambridge A Levels in Mathematics, Physics, and Computer Science at Cedar College (Graduated June 2026).
              </p>
              <p className="text-base md:text-lg text-black dark:text-gray-300 mb-6">
                I build end-to-end applications spanning React and TypeScript front-ends, FastAPI back-ends, and AI-powered features using tools like Whisper and Hugging Face. My passion lies in solving complex problems and fostering collaboration in tech communities.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
                  "AI applications developer and full-stack builder, always eager to learn and build innovative solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 bg-white/80 dark:bg-gray-900/80 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: darkMode ? '#F5F7F9' : '#111827' }}>Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 rounded-lg transition-all duration-300" style={{ 
              backgroundColor: darkMode ? '#050C1D' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2744' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7F9' : '#111827' }}>
                <Database className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7F9' : '#111827' }} />
                Backend & APIs
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', level: 95 },
                  { name: 'REST APIs', level: 90 },
                  { name: 'FastAPI', level: 88 },
                  { name: 'Scikit-learn', level: 82 },
                  { name: 'Pandas', level: 85 },
                  { name: 'NumPy', level: 85 },
                  { name: 'BeautifulSoup', level: 88 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: darkMode ? '#F1F3F5' : '#111827' }}>{skill.name}</span>
                      <span className="text-sm" style={{ color: darkMode ? '#6E7482' : '#6B7280' }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full" style={{ backgroundColor: darkMode ? '#27334B' : '#E8EDF5' }}>
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: darkMode ? '#F5F7F9' : '#182238' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300" style={{ 
              backgroundColor: darkMode ? '#050C1D' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2744' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7F9' : '#111827' }}>
                <Palette className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7F9' : '#111827' }} />
                Frontend
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'React 18', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'JavaScript (ES6+)', level: 85 },
                  { name: 'Tailwind CSS', level: 88 },
                  { name: 'HTML5', level: 90 },
                  { name: 'CSS3', level: 88 },
                  { name: 'Responsive Design', level: 85 },
                  { name: 'Bootstrap', level: 70 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: darkMode ? '#F1F3F5' : '#111827' }}>{skill.name}</span>
                      <span className="text-sm" style={{ color: darkMode ? '#6E7482' : '#6B7280' }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full" style={{ backgroundColor: darkMode ? '#27334B' : '#E8EDF5' }}>
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: darkMode ? '#F5F7F9' : '#182238' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300" style={{ 
              backgroundColor: darkMode ? '#050C1D' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2744' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7F9' : '#111827' }}>
                <Code2 className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7F9' : '#111827' }} />
                Tools & Technologies
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Git', level: 85 },
                  { name: 'Electron', level: 80 },
                  { name: 'WebSockets', level: 82 },
                  { name: 'VS Code', level: 90 },
                  { name: 'Bash', level: 75 },
                  { name: 'Tkinter', level: 80 },
                  { name: 'Google Sheets API', level: 85 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: darkMode ? '#F1F3F5' : '#111827' }}>{skill.name}</span>
                      <span className="text-sm" style={{ color: darkMode ? '#6E7482' : '#6B7280' }}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full" style={{ backgroundColor: darkMode ? '#27334B' : '#E8EDF5' }}>
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: darkMode ? '#F5F7F9' : '#182238' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-white/80 dark:bg-gray-900/80 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Memora',
                description: 'Local-first desktop app for offline academic document processing, featuring a local Whisper transcription pipeline, async file handling, and durable SQLite storage.',
                tech: ['Electron', 'React', 'TypeScript', 'FastAPI', 'Whisper', 'SQLite'],
                github: '',
                live: '',
              },
              {
                title: 'AI Race Engineer',
                description: 'Multi-agent race strategy engine for the Toyota GR Cup using the Gemini API, with a low-latency FastAPI and WebSockets telemetry pipeline feeding a real-time dashboard.',
                tech: ['Gemini API', 'FastAPI', 'WebSockets', 'Tailwind CSS', 'Framer Motion'],
                github: '',
                live: '',
              },
              {
                title: 'ClariNote',
                description: 'All-in-one focus and study workspace with Pomodoro timer, flashcards, progress tracking, and an AI assistant.',
                tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'AI'],
                github: '',
                live: 'https://clarinote.vercel.app',
              },
              {
                title: 'Exercise Tracker',
                description: 'GUI application that tracks workouts and logs them to Google Sheets using Nutritionix API for exercise data',
                tech: ['Python', 'Tkinter', 'Google Sheets API', 'Nutritionix API'],
                github: 'https://github.com/AbdulRehmanMarfani/Exercise-Tracker',
                live: '#',
              },
              {
                title: 'Trading News Alert',
                description: 'Automated system that monitors stock price changes and sends relevant news alerts via SMS notifications',
                tech: ['Python', 'Alpha Vantage API', 'NewsAPI', 'Twilio'],
                github: 'https://github.com/AbdulRehmanMarfani/Trading-News-Alert',
                live: '#',
              },
              {
                title: 'Rain Alert',
                description: 'Weather monitoring application that sends SMS alerts when rain is forecasted in your area',
                tech: ['Python', 'OpenWeatherMap API', 'Twilio', 'Automation'],
                github: 'https://github.com/AbdulRehmanMarfani/Rain-Alert',
                live: '#',
              },
              {
                title: 'Quiz App',
                description: 'Interactive quiz application with multiple categories and difficulty levels built with Python',
                tech: ['Python', 'Tkinter', 'JSON', 'GUI Design'],
                github: 'https://github.com/AbdulRehmanMarfani/Quiz-App',
                live: '#',
              },
              {
                title: 'ISS Overhead Notifier',
                description: 'Tracks the International Space Station and sends notifications when it passes overhead your location',
                tech: ['Python', 'ISS API', 'Email', 'Automation'],
                github: 'https://github.com/AbdulRehmanMarfani/ISS-Overhead-Notifier',
                live: '#',
              },
              {
                title: 'Flash Card App',
                description: 'Digital flashcard application for language learning with spaced repetition algorithm',
                tech: ['Python', 'Tkinter', 'CSV', 'Learning Algorithm'],
                github: 'https://github.com/AbdulRehmanMarfani/Flash-Card-App',
                live: '#',
              },
              {
                title: 'Pomodoro Timer',
                description: 'GUI-based productivity timer application implementing the Pomodoro Technique for better focus',
                tech: ['Python', 'Tkinter', 'GUI Design', 'Productivity'],
                github: 'https://github.com/AbdulRehmanMarfani/Pomodoro-GUI-Application',
                live: '#',
              },
              {
                title: 'US States Guessing Game',
                description: 'Interactive educational game where players guess US states on a map with score tracking',
                tech: ['Python', 'Turtle Graphics', 'Pandas', 'Game Development'],
                github: 'https://github.com/AbdulRehmanMarfani/US-States-Guessing-Game',
                live: '#',
              },
              {
                title: 'Snake Game',
                description: 'Classic Snake game implementation with score tracking and smooth gameplay mechanics',
                tech: ['Python', 'Turtle Graphics', 'Game Development', 'OOP'],
                github: 'https://github.com/AbdulRehmanMarfani/Snake-Game',
                live: '#',
              },
              {
                title: 'Portfolio Website',
                description: 'Responsive personal website with modal previews and custom dark-themed styling',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
                github: 'https://github.com/abdulrehmanmarfani/portfolio',
                live: 'https://abdulrehmanmarfani.github.io/portfolio/',
              },
            ].map((project, index) => (
              <div key={index} className="rounded-lg overflow-hidden transition-all duration-300 flex flex-col" style={{ 
                backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
                border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
                boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
              }}>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>{project.title}</h3>
                  <p className="text-sm mb-4" style={{ color: darkMode ? '#8E98AA' : '#64748B' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((technology) => (
                      <span key={technology} className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: darkMode ? '#1D273B' : '#EFF3F8', color: darkMode ? '#F2F4F7' : '#1F2937' }}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-auto">
                    {project.title === 'Portfolio Website' ? (
                      <div className="w-full">
                        <button disabled className="w-full rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2" style={{ 
                          backgroundColor: darkMode ? 'transparent' : '#FFFFFF',
                          color: darkMode ? '#F5F7FA' : '#111827',
                          border: `1px solid ${darkMode ? '#263248' : '#D7DFEA'}`
                        }}>
                          You are already here
                        </button>
                      </div>
                    ) : (project.title === 'Memora' || project.title === 'AI Race Engineer') ? (
                      <div className="w-full">
                        <button disabled className="w-full rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2" style={{ 
                          backgroundColor: darkMode ? 'transparent' : '#FFFFFF',
                          color: darkMode ? '#F5F7FA' : '#111827',
                          border: `1px solid ${darkMode ? '#263248' : '#D7DFEA'}`
                        }}>
                          Private Project
                        </button>
                      </div>
                    ) : (
                      <>
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2" style={{ 
                            backgroundColor: darkMode ? 'transparent' : '#FFFFFF',
                            color: darkMode ? '#F5F7FA' : '#111827',
                            border: `1px solid ${darkMode ? '#263248' : '#D7DFEA'}`
                          }}>
                            <Github className="h-4 w-4 mr-1" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                            Code
                          </a>
                        )}
                        {project.live && project.live !== '#' && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2" style={{ 
                            backgroundColor: darkMode ? '#F5F7FA' : '#182238',
                            color: darkMode ? '#1B2233' : '#FFFFFF'
                          }}>
                            <ExternalLink className="h-4 w-4 mr-1" style={{ color: darkMode ? '#1B2233' : '#FFFFFF' }} />
                            Live
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-white/80 dark:bg-gray-900/80 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Experience & Education</h2>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="p-6 rounded-lg transition-all duration-300" style={{ 
              backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>
                <Briefcase className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                Experience & Leadership
              </h3>
              <div className="space-y-6">
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#F4C430' : '#EAB308'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Chief Operating Officer</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#F4C430' : '#EAB308' }}>Cedar CODES</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>September 2025 - Present • Cedar College</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Direct operations for a 50-member student tech society, coordinating event production, outreach campaigns, and technical curricula across a 14-member executive board</li>
                    <li>• Spearheaded organizational and logistics strategy that won the school's prestigious annual SCORE Award Trophy</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#3B82F6' : '#3B82F6'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Module Co-Lead — QWERTY</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#3B82F6' : '#3B82F6' }}>Scinova Science Olympiad IX</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>January 2026 • 250+ Attendees</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Co-led the launch of Scinova IX's first computer science module, QWERTY; designed competitive programming tasks and event flow for 250+ attendees</li>
                    <li>• Presented winning participants at the closing ceremony and supported judging criteria for module evaluation</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#22C55E' : '#22C55E'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Junior Executive</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#22C55E' : '#22C55E' }}>Scinova Science Olympiad VIII</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>January 2025 • 250+ Attendees</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Supported modular planning and logistical coordination across Physics, Robotics, and Mathematics tracks for 250+ student attendees</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#F5F7FA' : '#182238'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Co-Lead & Workshop Facilitator</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Hackpocalypse 2025</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>2025 • 110+ Participants</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Co-led event operations, registration pipelines, and schedule management for a hackathon with 110+ participants</li>
                    <li>• Designed and facilitated a hands-on Pygame workshop introducing students to game development and software fundamentals</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#3B82F6' : '#3B82F6'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Co-Lead</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#3B82F6' : '#3B82F6' }}>Daydream Karachi</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>2024 • 1,000+ Attendees</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Managed live operations, supplier logistics, and venue scheduling for a student festival hosting 1,000+ attendees</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#F4C430' : '#EAB308'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Data Science Intern (Virtual)</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#F4C430' : '#EAB308' }}>British Airways (Forage)</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>July 2025 • Remote Simulation</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Completed a simulation focusing on how data science is a critical component of British Airways' success</li>
                    <li>• Scraped and analysed customer review data to uncover findings</li>
                    <li>• Built a predictive model to understand factors that influence buying behaviour</li>
                    <li>• Credential ID: Z2c6B5Nav2ETJkXrw</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#3B82F6' : '#3B82F6'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Frontend Developer</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#3B82F6' : '#3B82F6' }}>Portfolio Project</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>January 2024 - Present • Karachi, Pakistan</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Created responsive personal website with HTML, CSS, and JS</li>
                    <li>• Implemented modal previews and responsive design</li>
                    <li>• Styled using custom fonts and dark-themed palette</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#22C55E' : '#22C55E'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Freelance Python Developer</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#22C55E' : '#22C55E' }}>Self-Employed</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>January 2023 - Present • Remote</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Built Python automation tools using multiple APIs</li>
                    <li>• Developed GUI and CLI applications</li>
                    <li>• Integrated Google Sheets API and SMS/WhatsApp notifications</li>
                  </ul>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#F5F7FA' : '#182238'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Teaching Assistant</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Private Tuition</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>January 2023 - January 2024 • Karachi</p>
                  <ul className="text-xs md:text-sm space-y-1" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>
                    <li>• Taught programming and mathematics to students</li>
                    <li>• Created simplified learning plans and materials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300" style={{ 
              backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>
                <GraduationCap className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#3B82F6' : '#3B82F6'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Cambridge A Levels</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#3B82F6' : '#3B82F6' }}>Cedar College Karachi</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>Graduated June 2026 • Mathematics, Physics, Computer Science</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>Achieved Straight A Grades at AS Level • Dean's List • Honour Roll. Active member of CREW and Cedar CODES clubs; part of the organizing team for Robotics & Physics modules at Scinova VIII.</p>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#22C55E' : '#22C55E'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Cambridge O Levels</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#22C55E' : '#22C55E' }}>Private Studies Karachi</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>March 2024 • Mathematics, Physics, Chemistry, Computer Science</p>
                </div>
                <div className="pl-4" style={{ borderLeft: `4px solid ${darkMode ? '#F5F7FA' : '#182238'}` }}>
                  <h3 className="font-semibold text-base md:text-lg" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Cambridge O Levels</h3>
                  <p className="font-medium text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Happy Home School Karachi</p>
                  <p className="text-xs md:text-sm mb-2" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>August 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section id="awards" className="py-16 md:py-20 bg-white/80 dark:bg-gray-900/80 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-lg transition-all duration-300" style={{ 
            backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
            border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
            boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.08)'
          }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>
              <Award className="h-5 w-5 mr-2" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
              Awards & Professional Certifications
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Awards & Leadership</h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-3 md:p-4 transition-all duration-300" style={{ 
                    backgroundColor: darkMode ? 'rgba(244, 196, 48, 0.1)' : '#FFF9E6',
                    borderColor: darkMode ? '#F4C430' : '#F3E3A3'
                  }}>
                    <h5 className="font-semibold text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>CREW & CODES Leadership</h5>
                    <p className="text-xs md:text-sm" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>Shortlisted for leadership positions at Cedar College</p>
                  </div>
                  <div className="border rounded-lg p-3 md:p-4 transition-all duration-300" style={{ 
                    backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : '#EEF5FF',
                    borderColor: darkMode ? '#3B82F6' : '#D7E6FF'
                  }}>
                    <h5 className="font-semibold text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Scinova 2025 Organizer</h5>
                    <p className="text-xs md:text-sm" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>Co-managed Robotics, Physics & Math modules</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Professional Certifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { src: '/portfolio/lovable-uploads/198db4a9-86f5-427b-9641-18d8a9350267.png', title: 'Python Course - Kaggle', issuer: 'Kaggle', date: '2023', credentialId: 'KAGGLE-PY-01' },
                    { src: '/portfolio/lovable-uploads/afd615f2-8af3-4838-a9c2-54ec7b0f3d22.png', title: 'Crash Course on Python', issuer: 'Google', date: 'Sep 2023', credentialId: 'GOOGLE-PY-001' },
                    { src: '/portfolio/lovable-uploads/785b7b38-7f47-435d-8967-072da1b36a5b.png', title: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'Oct 2023', credentialId: 'IBM-DS-001' },
                    { src: '/portfolio/lovable-uploads/58ff92f1-3b51-4a39-94d7-04e7d2fe7e9f.png', title: 'Introduction to Python', issuer: 'Data Flair', date: '2023', credentialId: 'DF-PY-001' },
                    { src: '/portfolio/lovable-uploads/135ed8d5-f2d4-4278-8bb7-aed77d9297b8.png', title: 'Python Essentials 1', issuer: 'Cisco Networking Academy', date: 'Sep 2023', credentialId: 'CISCO-PY-1' },
                    { src: '/portfolio/lovable-uploads/42b053d9-45a6-4294-9a5d-be7f40656bd0.png', title: 'Python Essentials 2', issuer: 'Cisco Networking Academy', date: 'Sep 2023', credentialId: 'CISCO-PY-2' },
                    { src: '/portfolio/lovable-uploads/british-airways-forage-ds-certificate.jpg', title: 'Data Science Job Simulation', issuer: 'British Airways (Forage)', date: 'Jul 2025', credentialId: 'Z2c6B5Nav2ETJkXrw' },
                    { src: '/portfolio/lovable-uploads/hp-life-data-science-analytics.jpg', title: 'Data Science & Analytics', issuer: 'HP LIFE', date: 'Jan 2026', credentialId: 'HP-DSA-001' },
                  ].map((cert, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer" style={{ 
                      backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
                      borderColor: darkMode ? '#1A2743' : '#DCE3EE',
                      boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 2px 8px rgba(15,23,42,0.06)'
                    }} onClick={() => setSelectedCert(cert.src)}>
                      <img src={cert.src} alt={cert.title} className="w-full h-32 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
                      <div className="p-2 md:p-3">
                        <h5 className="font-semibold text-xs md:text-sm" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>{cert.title}</h5>
                        <p className="text-xs" style={{ color: darkMode ? '#F5F7FA' : '#5F6B7A' }}>{cert.issuer}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs" style={{ color: darkMode ? '#6F788A' : '#6B7280' }}>{cert.date}</p>
                          <p className="text-xs" style={{ color: darkMode ? '#6E7482' : '#9CA3AF' }}>ID: {cert.credentialId}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-3xl max-h-[90vh] w-full">
            <img src={selectedCert} alt="Certificate" className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section id="resume" className="py-16 md:py-20 px-4" style={{ backgroundColor: darkMode ? '#1A202C' : '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: darkMode ? '#FFFFFF' : '#111827' }}>Resume</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8" style={{ color: darkMode ? '#C7CDD8' : '#5F6B7A' }}>Download my complete resume to learn more about my experience, projects, and qualifications as a Python Developer.</p>
          <a href="/portfolio/Abdul%20Rehman%20Marfani%20Resume.pdf" download className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-8 border-transparent" style={{ 
            backgroundColor: darkMode ? '#FFFFFF' : '#182238',
            color: darkMode ? '#1F2937' : '#FFFFFF',
            boxShadow: darkMode ? '0 2px 8px rgba(0,0,0,0.20)' : '0 2px 8px rgba(15,23,42,0.12)'
          }} onMouseEnter={(e) => { 
            if (darkMode) { 
              e.currentTarget.style.backgroundColor = '#F3F4F6'; 
              e.currentTarget.style.color = '#111827'; 
            } else { 
              e.currentTarget.style.backgroundColor = '#24314A'; 
            } 
          }} onMouseLeave={(e) => { 
            if (darkMode) { 
              e.currentTarget.style.backgroundColor = '#FFFFFF'; 
              e.currentTarget.style.color = '#1F2937'; 
            } else { 
              e.currentTarget.style.backgroundColor = '#182238'; 
            } 
          }}>
            <Download className="h-5 w-5 mr-2" style={{ color: darkMode ? '#1F2937' : '#FFFFFF' }} />
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4" style={{ 
        backgroundColor: darkMode ? '#252F3F' : '#F8FAFC',
        borderTop: `1px solid ${darkMode ? '#1A2434' : '#F5F7FB'}`
      }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-lg p-6" style={{ 
              backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 4px 12px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Let's Connect</h3>
              <p className="text-sm md:text-base mb-6 md:mb-8" style={{ color: darkMode ? '#C8CFDB' : '#5F6B7A' }}>I'm always interested in hearing about new opportunities, exciting projects, and collaboration possibilities. Whether you want to discuss Python automation, web development, or just say hi, I'll try my best to get back to you!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                  <span className="text-sm md:text-base break-all" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>abdulrehmanmarfani84@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                  <span className="text-sm md:text-base" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>+92 3473752831</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" style={{ color: darkMode ? '#F5F7FA' : '#111827' }} />
                  <span className="text-sm md:text-base" style={{ color: darkMode ? '#D4DAE5' : '#5F6B7A' }}>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-6" style={{ 
              backgroundColor: darkMode ? '#040A1A' : '#FFFFFF',
              border: `1px solid ${darkMode ? '#1A2743' : '#DCE3EE'}`,
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.35)' : '0 4px 12px rgba(15,23,42,0.08)'
            }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: darkMode ? '#F5F7FA' : '#111827' }}>Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <input type="text" placeholder="Name" required className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2" style={{ 
                  backgroundColor: darkMode ? '#171F2F' : '#F5F7FB',
                  borderColor: darkMode ? '#39465F' : '#DCE3EE',
                  color: darkMode ? '#F5F7FA' : '#111827'
                }} />
                <input type="email" placeholder="Email" required className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2" style={{ 
                  backgroundColor: darkMode ? '#171F2F' : '#F5F7FB',
                  borderColor: darkMode ? '#39465F' : '#DCE3EE',
                  color: darkMode ? '#F5F7FA' : '#111827'
                }} />
                <textarea placeholder="Message" required rows={4} className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2" style={{ 
                  backgroundColor: darkMode ? '#171F2F' : '#F5F7FB',
                  borderColor: darkMode ? '#39465F' : '#DCE3EE',
                  color: darkMode ? '#F5F7FA' : '#111827'
                }}></textarea>
                <button type="submit" className="w-full py-2 px-4 rounded-md transition-colors border-transparent" style={{ 
                  backgroundColor: darkMode ? '#F5F7FA' : '#182238',
                  color: darkMode ? '#252F44' : '#FFFFFF',
                  boxShadow: darkMode ? '0 2px 8px rgba(0,0,0,0.20)' : '0 2px 8px rgba(15,23,42,0.12)'
                }} onMouseEnter={(e) => { 
                  if (darkMode) { 
                    e.currentTarget.style.backgroundColor = '#F3F4F6'; 
                    e.currentTarget.style.color = '#111827'; 
                  } else { 
                    e.currentTarget.style.backgroundColor = '#24314A'; 
                  } 
                }} onMouseLeave={(e) => { 
                  if (darkMode) { 
                    e.currentTarget.style.backgroundColor = '#F5F7FA'; 
                    e.currentTarget.style.color = '#252F44'; 
                  } else { 
                    e.currentTarget.style.backgroundColor = '#182238'; 
                  } 
                }}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Abdul Rehman Marfani</h3>
              <p className="text-sm md:text-base text-gray-400">Python Developer passionate about automation, web development, and creating innovative solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block text-sm md:text-base text-gray-400 hover:text-white transition-colors">{item}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/abdulrehmanmarfani" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/abdul-rehman-marfani-4aa587276" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/marfani._.priv/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:abdulrehmanmarfani84@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-xs md:text-sm">© 2025 Abdul Rehman Marfani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
