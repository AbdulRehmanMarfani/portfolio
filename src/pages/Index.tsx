import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Palette,
  Database,
  Moon,
  Sun,
  Menu,
  X,
  Instagram
} from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const roles = ['Python Developer', 'Frontend Developer', 'Aspiring Full-Stack Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing animation effect
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

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = {
    backend: [
      { name: 'Python', level: 95 },
      { name: 'APIs Integration', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'BeautifulSoup', level: 88 }
    ],
    frontend: [
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'Bootstrap', level: 70 },
      { name: 'Responsive Design', level: 85 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Bash', level: 75 },
      { name: 'Tkinter', level: 80 },
      { name: 'Google Sheets API', level: 85 }
    ]
  };

  const projects = [
    {
      title: 'Exercise Tracker',
      description: 'GUI application that tracks workouts and logs them to Google Sheets using Nutritionix API for exercise data',
      tech: ['Python', 'Tkinter', 'Google Sheets API', 'Nutritionix API'],
      github: 'https://github.com/AbdulRehmanMarfani/Exercise-Tracker',
      live: '#'
    },
    {
      title: 'Trading News Alert',
      description: 'Automated system that monitors stock price changes and sends relevant news alerts via SMS notifications',
      tech: ['Python', 'Alpha Vantage API', 'NewsAPI', 'Twilio'],
      github: 'https://github.com/AbdulRehmanMarfani/Trading-News-Alert',
      live: '#'
    },
    {
      title: 'Rain Alert',
      description: 'Weather monitoring application that sends SMS alerts when rain is forecasted in your area',
      tech: ['Python', 'OpenWeatherMap API', 'Twilio', 'Automation'],
      github: 'https://github.com/AbdulRehmanMarfani/Rain-Alert',
      live: '#'
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz application with multiple categories and difficulty levels built with Python',
      tech: ['Python', 'Tkinter', 'JSON', 'GUI Design'],
      github: 'https://github.com/AbdulRehmanMarfani/Quiz-App',
      live: '#'
    },
    {
      title: 'ISS Overhead Notifier',
      description: 'Tracks the International Space Station and sends notifications when it passes overhead your location',
      tech: ['Python', 'ISS API', 'Email', 'Automation'],
      github: 'https://github.com/AbdulRehmanMarfani/ISS-Overhead-Notifier',
      live: '#'
    },
    {
      title: 'Flash Card App',
      description: 'Digital flashcard application for language learning with spaced repetition algorithm',
      tech: ['Python', 'Tkinter', 'CSV', 'Learning Algorithm'],
      github: 'https://github.com/AbdulRehmanMarfani/Flash-Card-App',
      live: '#'
    },
    {
      title: 'Pomodoro Timer',
      description: 'GUI-based productivity timer application implementing the Pomodoro Technique for better focus',
      tech: ['Python', 'Tkinter', 'GUI Design', 'Productivity'],
      github: 'https://github.com/AbdulRehmanMarfani/Pomodoro-GUI-Application',
      live: '#'
    },
    {
      title: 'US States Guessing Game',
      description: 'Interactive educational game where players guess US states on a map with score tracking',
      tech: ['Python', 'Turtle Graphics', 'Pandas', 'Game Development'],
      github: 'https://github.com/AbdulRehmanMarfani/US-States-Guessing-Game',
      live: '#'
    },
    {
      title: 'Snake Game',
      description: 'Classic Snake game implementation with score tracking and smooth gameplay mechanics',
      tech: ['Python', 'Turtle Graphics', 'Game Development', 'OOP'],
      github: 'https://github.com/AbdulRehmanMarfani/Snake-Game',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal website with modal previews and custom dark-themed styling',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/abdulrehmanmarfani/portfolio',
      live: 'https://abdulrehmanmarfani.github.io/portfolio/'
    }
  ];

  const certificateImages = [
    {
      src: '/lovable-uploads/198db4a9-86f5-427b-9641-18d8a9350267.png',
      title: 'Python Course - Kaggle',
      issuer: 'Kaggle',
      date: '2023',
      credentialId: 'KAGGLE-PY-01'
    },
    {
      src: '/lovable-uploads/afd615f2-8af3-4838-a9c2-54ec7b0f3d22.png',
      title: 'Crash Course on Python',
      issuer: 'Google',
      date: '2023',
      credentialId: 'GOOGLE-PY-001'
    },
    {
      src: '/lovable-uploads/785b7b38-7f47-435d-8967-072da1b36a5b.png',
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-DS-001'
    },
    {
      src: '/lovable-uploads/58ff92f1-3b51-4a39-94d7-04e7d2fe7e9f.png',
      title: 'Introduction to Python',
      issuer: 'Data Flair',
      date: '2023',
      credentialId: 'DF-PY-001'
    },
    {
      src: '/lovable-uploads/135ed8d5-f2d4-4278-8bb7-aed77d9297b8.png',
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      credentialId: 'CISCO-PY-1'
    },
    {
      src: '/lovable-uploads/42b053d9-45a6-4294-9a5d-be7f40656bd0.png',
      title: 'Python Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      credentialId: 'CISCO-PY-2'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedCertificate} 
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg sm:text-xl text-primary">Abdul Rehman</div>
            
            {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
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

      {/* Hero Section with Blended Background */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 px-4">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 400L200 200L400 600L600 100L800 500L1000 300L1200 400V800H0V400Z" fill="url(#gradient1)" />
              <path d="M0 600L300 300L600 700L900 200L1200 500V800H0V600Z" fill="url(#gradient2)" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6 md:mb-8">
              <p className="text-yellow-400 text-base md:text-lg mb-2 font-medium">👋 Hey, there!</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                I'm <span className="text-primary bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Abdul Rehman</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 h-8 md:h-12">
                a <span className="text-blue-400 font-semibold">{typedText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
              <p className="text-gray-400 mb-2">from Karachi, Pakistan.</p>
              <div className="flex items-center space-x-2 text-gray-400 mb-6 md:mb-8">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm sm:text-base">Freelance Python Developer</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-4 md:space-x-6 mb-6 md:mb-8">
              {['Home', 'About', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10" asChild>
                <a href="https://github.com/abdulrehmanmarfani" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10" asChild>
                <a href="https://www.linkedin.com/in/abdul-rehman-marfani-4aa587276" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10" asChild>
                <a href="https://www.instagram.com/marfani._.priv/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image with Blend Effect */}
          <div className="relative order-first md:order-last">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              {/* Background geometric shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-24 md:w-32 h-24 md:h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-16 md:w-24 h-16 md:h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/46b6d654-d282-454f-bacc-9c6d47b1b985.png" 
                  alt="Abdul Rehman Marfani - Python Developer"
                  className="w-full h-auto object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 filter contrast-110 brightness-110"
                />
                {/* Overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Accent elements */}
              <div className="absolute -bottom-4 -right-4 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-48 md:w-64 h-48 md:h-64 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Python logo with book */}
                <div className="relative">
                  <div className="text-4xl md:text-6xl mb-2">🐍</div>
                  <div className="text-2xl md:text-3xl absolute -bottom-2 -right-2">📚</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a dynamic Python Developer with a strong foundation in web development and automation. Currently pursuing my Cambridge A Levels in Computer Science, Mathematics, and Physics at Cedar College.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                I excel in creating innovative solutions through Python automation, API integrations, and building responsive web applications. My passion lies in solving complex problems and fostering collaboration in tech communities.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
                  "Python automation and API integration enthusiast, always eager to learn and build innovative solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Backend Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Database className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Backend & APIs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Frontend Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Palette className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Code2 className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-white dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">Featured Projects</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2 md:space-x-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">Experience & Education</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Frontend Developer</h3>
                    <p className="text-primary font-medium text-sm md:text-base">Portfolio Project</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">January 2024 - Present • Karachi, Pakistan</p>
                    <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Created responsive personal website with HTML, CSS, and JS</li>
                      <li>• Implemented modal previews and responsive design</li>
                      <li>• Styled using custom fonts and dark-themed palette</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Freelance Python Developer</h3>
                    <p className="text-blue-500 font-medium text-sm md:text-base">Self-Employed</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">January 2023 - Present • Remote</p>
                    <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Built Python automation tools using multiple APIs</li>
                      <li>• Developed GUI and CLI applications</li>
                      <li>• Integrated Google Sheets API and SMS/WhatsApp notifications</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Teaching Assistant</h3>
                    <p className="text-green-500 font-medium text-sm md:text-base">Private Tuition</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">January 2023 - January 2024 • Karachi</p>
                    <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Taught programming and mathematics to students</li>
                      <li>• Created simplified learning plans and materials</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Cambridge A Levels</h3>
                    <p className="text-primary font-medium text-sm md:text-base">Cedar College Karachi</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">Expected June 2026 • Computer Science, Mathematics, Physics</p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Active member of CREW and Cedar CODES clubs. Part of organizing team for Robotics & Physics modules at Scinnova VIII.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Cambridge O Levels</h3>
                    <p className="text-blue-500 font-medium text-sm md:text-base">Private Studies Karachi</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">March 2024 • Mathematics, Physics, Chemistry, Computer Science</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-base md:text-lg">Cambridge O Levels</h3>
                    <p className="text-green-500 font-medium text-sm md:text-base">Happy Home School Karachi</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">August 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards & Professional Certifications */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Award className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Awards & Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm md:text-base">Awards & Leadership</h4>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="border rounded-lg p-3 md:p-4 bg-yellow-50 dark:bg-yellow-900/20">
                      <h5 className="font-semibold text-sm md:text-base">CREW & CODES Leadership</h5>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Shortlisted for leadership positions at Cedar College</p>
                    </div>
                    <div className="border rounded-lg p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20">
                      <h5 className="font-semibold text-sm md:text-base">Scinova 2025 Organizer</h5>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Co-managed Robotics, Physics & Math modules</p>
                    </div>
                  </div>
                </div>
                
                {/* Professional Certifications Gallery */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm md:text-base">Professional Certifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificateImages.map((cert, index) => (
                      <div 
                        key={index} 
                        className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedCertificate(cert.src)}
                      >
                        <img 
                          src={cert.src} 
                          alt={cert.title}
                          className="w-full h-32 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-2 md:p-3">
                          <h5 className="font-semibold text-xs md:text-sm">{cert.title}</h5>
                          <p className="text-xs text-primary">{cert.issuer}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-gray-500">{cert.date}</p>
                            <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 md:py-20 bg-white dark:bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">Resume</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
            Download my complete resume to learn more about my experience, projects, and qualifications as a Python Developer.
          </p>
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                I'm always interested in hearing about new opportunities, exciting projects, and collaboration possibilities. 
                Whether you want to discuss Python automation, web development, or just say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 break-all">abdulrehmanmarfani84@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">+92 3473752831</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm md:text-base"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Abdul Rehman Marfani</h3>
              <p className="text-sm md:text-base text-gray-400">
                Python Developer passionate about automation, web development, and creating innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
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
            <p className="text-xs md:text-sm">&copy; 2024 Abdul Rehman Marfani. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;