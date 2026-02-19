/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Code2, 
  Search, 
  Megaphone, 
  Palette, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Zap,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919011140878"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
    <span className="absolute right-full mr-4 px-4 py-2 bg-white text-dark text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us!
    </span>
  </motion.a>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 font-bold text-2xl tracking-tighter ${className}`}>
    <div className="relative w-12 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* D Shape */}
        <path 
          d="M10 10 V50 H25 C40 50 50 40 50 30 C50 20 40 10 25 10 Z" 
          fill="#3b82f6" 
        />
        {/* M Shape with Wave */}
        <path 
          d="M55 50 V20 L75 40 L95 20 V50" 
          stroke="#8b5cf6" 
          strokeWidth="10" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Wave Swoosh */}
        <path 
          d="M20 35 Q45 15 70 35 T100 25" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          className="opacity-80"
        />
        {/* Pixel Dots */}
        <rect x="85" y="5" width="4" height="4" fill="#8b5cf6" />
        <rect x="92" y="12" width="4" height="4" fill="#8b5cf6" />
        <rect x="88" y="18" width="3" height="3" fill="#8b5cf6" />
      </svg>
    </div>
    <span className="gradient-text">Digital Mayur</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-dark/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 rounded-full gradient-bg text-white text-sm font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-dark/70 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 rounded-xl gradient-bg text-white font-bold shadow-lg shadow-primary/25">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-l-[100px]" />
      <div className="absolute top-1/4 -left-20 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Growth Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Grow Your Business <br />
            <span className="gradient-text">Digitally</span> with <br />
            Digital Mayur
          </h1>
          <p className="text-lg text-dark/60 mb-10 max-w-lg leading-relaxed">
            We help brands grow with web design, SEO, and digital marketing. 
            Transform your online presence into a powerful growth engine.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full gradient-bg text-white font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:+919011140878"
              className="px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-bold hover:bg-primary/5 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="font-semibold text-dark/80">Trusted by 500+ businesses</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/agency/800/800" 
              alt="Digital Growth" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 glass-card p-6 rounded-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/50 uppercase">Conversion Rate</p>
                <p className="text-xl font-extrabold text-dark">+145%</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 z-20 glass-card p-6 rounded-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Search />
              </div>
              <div>
                <p className="text-xs font-bold text-dark/50 uppercase">SEO Ranking</p>
                <p className="text-xl font-extrabold text-dark">Top 3 Results</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "Custom, responsive websites that convert visitors into loyal customers.",
      icon: <Code2 className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google and drive organic traffic to your business.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-indigo-500"
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven strategies to grow your brand and increase ROI.",
      icon: <Megaphone className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      title: "Branding & Logo",
      desc: "Unique visual identities that tell your brand's story effectively.",
      icon: <Palette className="w-8 h-8" />,
      color: "bg-pink-500"
    },
    {
      title: "Social Media",
      desc: "Engage your audience and build a community around your brand.",
      icon: <Share2 className="w-8 h-8" />,
      color: "bg-orange-500"
    },
    {
      title: "GMB Optimization",
      desc: "Experts in GMB creation, verification, and local ranking to dominate search results.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.11.44-.04.9.2 1.28.23.35.6.58 1.01.62v8.21c0 1.1.9 2 2 2h13.38c1.1 0 2-.9 2-2v-8.21c.4-.04.78-.27 1.01-.62.24-.38.31-.84.2-1.28zM18.69 5l1.05 4.37c.05.19.01.35-.03.44-.04.08-.13.19-.31.19-.29 0-.56-.26-.59-.6l-.5-4.4H18.69zM13 5h1.96l.54 4.52c.02.15-.02.3-.11.42-.09.12-.24.21-.41.21-.35 0-.62-.26-.64-.59L13.85 5H13zm-3.96 0H11l-.49 4.56c-.02.33-.29.59-.64.59-.17 0-.32-.09-.41-.21-.09-.12-.13-.27-.11-.42L9.89 5h-.85zm-4.37 4.37L6.56 5h1.38l-.5 4.4c-.03.34-.3.6-.59.6-.18 0-.27-.11-.31-.19-.04-.09-.08-.25-.03-.44zM18 19H6v-8.1c.03 0 .05.01.09.01.67 0 1.25-.33 1.62-.85.37.52.94.85 1.62.85.67 0 1.25-.33 1.62-.85.37.52.94.85 1.62.85.67 0 1.25-.33 1.62-.85.37.52.95.85 1.62.85.04 0 .06-.01.09-.01V19z" />
        </svg>
      ),
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">What We Do Best</h3>
          <p className="text-dark/60">
            We offer a comprehensive suite of digital services designed to help 
            your business thrive in the modern online landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-dark/60 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/about/800/1000" 
              alt="About Digital Mayur" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-primary/20 rounded-[40px] translate-x-6 translate-y-6 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
            A Creative Agency That <br />
            <span className="gradient-text">Empowers</span> Small Businesses
          </h3>
          <p className="text-lg text-dark/60 mb-8 leading-relaxed">
            Digital Mayur is a creative digital agency dedicated to helping small 
            businesses and startups establish a powerful online presence. We believe 
            that every brand has a story worth telling, and we use technology 
            and design to tell it beautifully.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Results-driven digital strategies",
              "Expert team of designers & developers",
              "Personalized approach for every client",
              "Transparent communication & reporting"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-semibold text-dark/80">{item}</span>
              </motion.div>
            ))}
          </div>
          <button className="px-8 py-4 rounded-full gradient-bg text-white font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
            Discover Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: "E-Commerce App", 
      category: "Web Development", 
      img: "https://picsum.photos/id/20/800/600",
      results: "200% Increase in Sales",
      challenge: "Slow loading times and poor mobile conversion.",
      solution: "Implemented a headless commerce architecture with optimized asset delivery."
    },
    { 
      title: "SaaS Dashboard", 
      category: "UI/UX Design", 
      img: "https://picsum.photos/id/180/800/600",
      results: "45% Better Retention",
      challenge: "Complex navigation leading to user drop-offs.",
      solution: "Simplified the user journey with a clean, intuitive dashboard layout."
    },
    { 
      title: "Brand Identity", 
      category: "Branding", 
      img: "https://picsum.photos/id/445/800/600",
      results: "Global Brand Recognition",
      challenge: "Outdated visual identity that didn't resonate with modern audiences.",
      solution: "Created a vibrant, scalable design system that works across all platforms."
    },
    { 
      title: "SEO Campaign", 
      category: "Digital Marketing", 
      img: "https://picsum.photos/id/532/800/600",
      results: "Top 3 Google Rankings",
      challenge: "Low organic visibility in a highly competitive niche.",
      solution: "Executed a comprehensive content strategy and technical SEO audit."
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark text-white rounded-[60px] mx-4 my-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Recent Projects We've Completed</h3>
          </div>
          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold">
            View All Projects
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] mb-8 shadow-2xl">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <p className="text-primary font-bold mb-2 uppercase tracking-widest text-xs">{project.category}</p>
                <h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-white text-dark rounded-[40px] overflow-hidden shadow-2xl z-10"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all z-20"
                >
                  <X />
                </button>
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-full">
                    <img 
                      src={selectedProject.img} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-10 md:p-16">
                    <p className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">{selectedProject.category}</p>
                    <h4 className="text-4xl font-extrabold mb-6">{selectedProject.title}</h4>
                    
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-2">The Challenge</p>
                        <p className="text-lg text-dark/70">{selectedProject.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-2">Our Solution</p>
                        <p className="text-lg text-dark/70">{selectedProject.solution}</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Key Result</p>
                        <p className="text-2xl font-extrabold text-dark">{selectedProject.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CEO at TechFlow",
      content: "Digital Mayur transformed our online presence. Our traffic has increased by 200% since we started working with them.",
      img: "https://picsum.photos/seed/t1/100/100"
    },
    {
      name: "Rahul Mehta",
      role: "Founder of GreenLeaf",
      content: "The best agency we've ever worked with. Their attention to detail and creative approach is unmatched.",
      img: "https://picsum.photos/seed/t2/100/100"
    },
    {
      name: "Anjali Deshmukh",
      role: "Marketing Director",
      content: "Professional, responsive, and results-oriented. They truly care about the success of their clients.",
      img: "https://picsum.photos/seed/t3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">What Our Clients Say</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-slate-50 border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg text-dark/70 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold text-dark">{t.name}</h5>
                  <p className="text-sm text-dark/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Let's Build Something <br /> Great Together</h3>
            <p className="text-lg text-dark/60 mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. 
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark/50 uppercase">Email Us</p>
                  <p className="text-lg font-bold">hello@digitalmayur.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark/50 uppercase">Call Us</p>
                  <p className="text-lg font-bold">+91 9011140878</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark/50 uppercase">Our Office</p>
                  <p className="text-lg font-bold">Madhukunj, Tilke Colony-Nashik-422002</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl shadow-primary/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark/70 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark/70 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark/70 ml-1">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+91 90111 40878"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark/70 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 rounded-2xl gradient-bg text-white font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Logo className="mb-8" />
            <p className="text-dark/60 leading-relaxed mb-8">
              Empowering brands with innovative digital solutions. 
              We turn your vision into reality.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'facebook', icon: <Facebook className="w-4 h-4" /> },
                { name: 'twitter', icon: <Twitter className="w-4 h-4" /> },
                { name: 'instagram', icon: <Instagram className="w-4 h-4" /> },
                { name: 'linkedin', icon: <Linkedin className="w-4 h-4" /> }
              ].map(social => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-dark/60 hover:bg-primary hover:text-white transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8">Quick Links</h5>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-dark/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8">Services</h5>
            <ul className="space-y-4">
              {['Web Design', 'SEO Optimization', 'Digital Marketing', 'Branding', 'GMB Services'].map(item => (
                <li key={item}>
                  <a href="#" className="text-dark/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8">Newsletter</h5>
            <p className="text-dark/60 mb-6">Subscribe to get the latest news and updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-6 py-4 rounded-full bg-slate-100 border-none outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full gradient-bg text-white text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-dark/40 text-sm">
            © 2026 Digital Mayur. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-dark/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
