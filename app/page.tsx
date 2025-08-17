'use client';
import { Variants } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Server,
  Database,
  Globe,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Zap,
  Heart
} from 'lucide-react';
import Image from 'next/image'
import { motion } from 'framer-motion'; // Import motion from framer-motion


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // ✅ This is a cubic bezier array
    },
  },
};

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'WebSockets'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'VS Code'],
    programmingLanguages: ['Java', 'C', 'SQL']
  };

const projects = [
  {
    title: 'FarmToTable | Fresh Produce Marketplace',
    description: 'A full-stack e-commerce marketplace connecting farmers directly to consumers, enabling secure Browse, seamless ordering, and real-time tracking of fresh produce orders.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Axios', 'Multer', 'Cloudinary', 'Nodemailer'],
    features: ['User & Admin Portals', 'Live Analytics Dashboard', 'Order & Inventory Management', 'Secure Authentication'],
    github: 'https://github.com/Prakash-S1ngh/Farm-To-Table',
    demo: 'https://farmtotable-demo.com',
    image: 'https://images.pexels.com/photos/4557596/pexels-photo-4557596.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'CampusConnect | Student–Alumni Networking Platform',
    description: 'A professional networking platform that bridges students and alumni for mentorship, referrals, and freelancing collaborations with integrated live chat and video calling.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'WebRTC'],
    features: ['Live Chat & Video Calls', 'Mentorship & Networking', 'Freelancing Hub', 'Collaborative Whiteboard'],
    github: 'https://github.com/Prakash-S1ngh/CampusConnect',
    demo: 'https://campusconnect-demo.com',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'CodeCollab | Real-Time Collaborative Coding Platform',
    description: 'A live collaborative coding platform supporting 2–4 participants with real-time video, screen sharing, AI-assisted suggestions, and multi-user interaction.',
    technologies: ['Next.js', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
    features: ['Live Coding & Video Chat', 'AI Code Suggestions', 'Screen Sharing', 'Session Scheduling & Dashboard'],
    github: 'https://github.com/Prakash-S1ngh/CodeCollab',
    demo: 'https://codecollab-demo.com',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'DormMu | Hostel Management Web App',
    description: 'A full-stack hostel management system where students can register, request accommodation, and wait for admin approval. Admin manages room allocations, tracks student details, and oversees staff for hostel maintenance.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'Tailwind CSS'],
    features: ['User Registration & Authentication', 'Room Allocation System', 'Admin Dashboard', 'Staff Management & Maintenance Tracking'],
    github: 'https://github.com/Prakash-S1ngh/DormMu',
    demo: 'https://hostelease-demo.com',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

  const experience = [
    {
      type: 'education',
      title: 'Bachelor of Computer Application',
      organization: 'Gossner College',
      duration: '2020 - 2023',
      location: 'Ranchi, Jharkhand',
      cgpa: '8.12',
      highlights: [
        'Graduated with Distinction',
        'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies, Software Engineering'
      ],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      type: 'education',
      title: 'Master of Computer Application',
      organization: 'Maulana Azad National Institute of Technology',
      duration: '2023 - 2026',
      location: 'Bhopal, Madhya Pradesh',
      cgpa: '8.39',
      highlights: [
        'CGPA: 8.39/10 (current)',
        'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies, Software Engineering'
      ],
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  // Framer Motion variants for badge animations (staggered)
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PS
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="relative">
              <img
                src="/ProfilePic.jpeg"
                alt="Prakash Kumar Singh"
                className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-blue-500 shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Prakash Kumar Singh
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Fullstack Developer & Computer Science Student
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating innovative web solutions and learning cutting-edge technologies.
                Currently seeking internship opportunities to grow and contribute to impactful projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <a
                href="https://drive.google.com/file/d/17Qf4GUSB-gWW11wZhWJH45aIo76YrqxO/view?usp=sharing"
                download
                className="border-border hover:bg-accent px-8 py-3 text-lg transition-all duration-300 hover:scale-105 inline-block rounded-md border"
              >
                <Download className="w-4 h-4 mr-2 inline" />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://github.com/Prakash-S1ngh" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/prakash-kumar-singh-17b710287/" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:prakashsingh.dev14@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/PrakashSingh6632/" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200" target="_blank" rel="noopener noreferrer">
                {/* Use a custom SVG icon for LeetCode */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.6 3.4a1 1 0 011.4 1.4L14.8 9h2.7a1 1 0 010 2h-6a1 1 0 01-.8-1.6L16.2 3.4zM6.4 20.6a1 1 0 01-1.4-1.4L9.2 15H6.5a1 1 0 110-2h6a1 1 0 01.8 1.6L7.8 20.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-16">
            <button onClick={() => scrollToSection('about')} className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-dot-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate Computer Science student with a strong foundation in fullstack development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my coding journey in 2021 and have been passionate about technology ever since.
                I love solving complex problems and building applications that make a difference in people's lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a fullstack developer, I enjoy working with both frontend and backend technologies.
                I'm always eager to learn new frameworks and tools that can help me become a better developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focusing on modern web technologies like React, Next.js, and Node.js,
                while also exploring cloud technologies and DevOps practices.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Problem Solver</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Team Player</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Quick Learner</Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">Detail Oriented</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-1 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer workspace"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Gradient for Skills */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-pink-950/10 animate-pulse-bg"></div>
        {/* Subtle SVG pattern or shapes */}
        <svg className="absolute inset-0 z-0 opacity-10" width="100%" height="100%">
          <defs>
            <pattern id="pattern-zigzag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-zigzag)" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <Sparkles className="inline-block w-8 h-8 mr-2 text-yellow-500 animate-pulse" />
              My Tech Stack & Skills
              <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-500 animate-pulse" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are the technologies and tools I excel with, shaping my fullstack development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Frontend */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 dark:bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce">
                    <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {skills.frontend.map((skill) => (
                      <motion.div key={skill}>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300
                                 hover:bg-blue-200 dark:hover:bg-blue-800/70 cursor-pointer
                                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 dark:bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce" style={{ animationDelay: '0.1s' }}>
                    <Server className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {skills.backend.map((skill) => (
                      <motion.div key={skill} >
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300
                                 hover:bg-green-200 dark:hover:bg-green-800/70 cursor-pointer
                                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Database */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500/10 dark:bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce" style={{ animationDelay: '0.2s' }}>
                    <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Database Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {skills.database.map((skill) => (
                      <motion.div key={skill} >
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300
                                 hover:bg-purple-200 dark:hover:bg-purple-800/70 cursor-pointer
                                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-500/10 dark:bg-orange-400/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce" style={{ animationDelay: '0.3s' }}>
                    <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Development Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {skills.tools.map((skill) => (
                      <motion.div key={skill}>
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300
                                 hover:bg-orange-200 dark:hover:bg-orange-800/70 cursor-pointer
                                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Programming Languages */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card/70 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/10 dark:bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce" style={{ animationDelay: '0.4s' }}>
                    <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {skills.programmingLanguages.map((lang) => (
                      <motion.div key={lang}>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300
                                 hover:bg-yellow-200 dark:hover:bg-yellow-800/70 cursor-pointer
                                 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                          {lang}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-border bg-card/80 backdrop-blur-sm hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground hover:scale-105 transition-transform">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:scale-105 transition-transform"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <Button size="sm" className="flex-1 hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-50/50 to-blue-50/50 dark:from-purple-950/10 dark:to-blue-950/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My academic background and professional experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-muted-foreground"><MapPin className="inline w-4 h-4 mr-1" />{item.location}</span>
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 ml-2">CGPA: {item.cgpa}</Badge>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-sm w-fit bg-accent">
                            {item.duration}
                          </Badge>
                        </div>
                        <CardDescription className="text-base font-medium text-muted-foreground">
                          {item.organization}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {item.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-dot-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">prakashsingh.dev14@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Twitter</h3>
                <p className="text-muted-foreground">
                  <a
                    href="https://x.com/PrakashKum57687?t=Wq6HWloO3itZjb-nSmPutQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    https://x.com/PrakashKum57687?t=Wq6HWloO3itZjb-nSmPutQ&s=09
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Ranchi , Jharkhand</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">
                  <a href='https://www.linkedin.com/in/prakash-kumar-singh-17b710287/' className="text-blue-600 hover:underline dark:text-blue-400">
                    www.linkedin.com/in/prakash-kumar-singh-17b710287
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prakash Kumar Singh</h3>
            <p className="text-muted-foreground mb-6">
              Fullstack Developer • Computer Science Student • Problem Solver
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Prakash-S1ngh" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="www.linkedin.com/in/prakash-kumar-singh-17b710287" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:prakashsingh.dev14@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <Separator className="mb-8" />

            <p className="text-muted-foreground text-sm">
              © 2025 Prakash Kumar Singh . All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
