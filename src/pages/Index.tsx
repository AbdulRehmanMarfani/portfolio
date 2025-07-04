
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
  X
} from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Backend Developer', 'Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast'];
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
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 88 }
    ],
    frontend: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 78 },
      { name: 'Tailwind CSS', level: 80 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 72 }
    ]
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Spring Boot backend',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication and real-time updates',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      title: 'ML Model Deployment',
      description: 'Machine learning model deployment with Flask and Docker containerization',
      tech: ['Python', 'Flask', 'Docker', 'scikit-learn'],
      github: '#',
      live: '#'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-12345'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-67890'
    },
    {
      title: 'GitHub Actions Certification',
      issuer: 'GitHub',
      date: '2024',
      credentialId: 'GH-11111'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Viki</div>
            
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
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

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-8">
              <p className="text-yellow-400 text-lg mb-2 font-medium">👋 Hey, there!</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                I'm <span className="text-primary bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Viki</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6 h-12">
                a <span className="text-blue-400 font-semibold">{typedText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
              <p className="text-gray-400 mb-2">from Pondicherry, India.</p>
              <div className="flex items-center space-x-2 text-gray-400 mb-8">
                <Briefcase className="h-4 w-4" />
                <span>TCS</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-6 mb-8">
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
                <a href="https://github.com/i-viki" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10" asChild>
                <a href="https://linkedin.com/in/viki" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image with Blend Effect */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background geometric shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/46b6d654-d282-454f-bacc-9c6d47b1b985.png" 
                  alt="Viki - Backend Developer"
                  className="w-full h-auto object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 filter contrast-110 brightness-110"
                />
                {/* Overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Accent elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom attribution */}
        <div className="absolute bottom-4 left-4 text-gray-500 text-sm">
          Designed by jv
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                <div className="text-6xl text-white">👨‍💻</div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Backend Developer with 2+ years of experience at TCS, specializing in building scalable web applications and APIs. I love solving complex problems and turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Code is like humor. When you have to explain it, it's bad." - Cory House
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-primary" />
                  Backend
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
                <CardTitle className="flex items-center">
                  <Palette className="h-6 w-6 mr-2 text-primary" />
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
                <CardTitle className="flex items-center">
                  <Code2 className="h-6 w-6 mr-2 text-primary" />
                  Tools & DevOps
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
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
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
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience & Education</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg">Backend Developer</h3>
                    <p className="text-primary font-medium">Tata Consultancy Services (TCS)</p>
                    <p className="text-sm text-gray-500 mb-2">2022 - Present • Pondicherry, India</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Developed REST APIs using Spring Boot and Java</li>
                      <li>• Implemented JWT authentication and authorization</li>
                      <li>• Unit testing with JUnit and Mockito</li>
                      <li>• Database design and optimization with MySQL</li>
                      <li>• Collaborated with cross-functional teams using Agile methodology</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg">Bachelor of Technology</h3>
                    <p className="text-primary font-medium">Computer Science & Engineering</p>
                    <p className="text-sm text-gray-500 mb-2">2018 - 2022 • CGPA: 8.5/10</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Focused on software engineering, data structures, algorithms, and database management systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-primary" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                      <p className="text-xs text-gray-400 mt-1">ID: {cert.credentialId}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Download my complete resume to learn more about my experience and qualifications.
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
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities and interesting projects. 
                Whether you want to discuss a project or just say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">viki.developer@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Pondicherry, India</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Viki</h3>
              <p className="text-gray-400">
                Backend Developer passionate about creating scalable solutions and clean code.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/i-viki" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/viki" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:viki.developer@email.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Viki. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
