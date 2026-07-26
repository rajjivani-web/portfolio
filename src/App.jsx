import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaDownload, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaLayerGroup, 
  FaUsers, FaComment, FaClock, FaLightbulb, FaBullseye, FaAward, FaChevronRight, 
  FaBriefcase, FaHeart, FaBolt, FaPaperPlane, FaBars, FaTimes, FaArrowRight,
  FaCrown, FaStar, FaRocket, FaBuilding, FaIndustry, FaWhatsapp, FaUserTie
} from 'react-icons/fa';

// ✅ APNI PHOTO IMPORT KAREIN (YAHAN)
import profilePic from './assets/profile.jpg';

// ============================================================
// DATA - Aapke Resume Ke Hisaab Se Customized
// ============================================================

const personalInfo = {
  name: "RAJ JIVANI",
  title: "Laravel | Full-Stack Developer",
  tagline: "Building high-performance web solutions with Laravel, PHP & MySQL",
  email: "rajjivani100@gmail.com",
  phone: "+91 8511644844",
  location: "Sajjanper, Taluka- Tankara, District- Morbi, Gujarat",
  github: "https://github.com/rajjivani",
  linkedin: "https://linkedin.com/in/raj-jivani-dev",
  instagram: "https://www.instagram.com/mr_jivani_3/",
  profileImage: profilePic,
  about: "Results-driven Full-Stack Web Developer with 1+ year of experience and a proven track record of delivering 20+ live web solutions for commercial clients. Specialized in building dynamic admin panels, automated booking systems, and third-party API integrations (WhatsApp, Email, Payment Gateways). Successfully sold 4 high-value commercial projects and built 10+ white-label taxi solutions with custom UI/UX for different brands.",
  experience: [
    {
      company: "Deweb Technology",
      role: "Web Developer",
      period: "JUN 2025 - JULY 2026",
      achievements: [
        "Developed and deployed 20+ full-stack web applications from scratch",
        "Built advanced taxi booking engines with AJAX-based dynamic pricing",
        "Integrated WhatsApp Cloud API, SMTP Mail, and UPI Payment Gateways",
        "Successfully sold 4 high-value commercial projects"
      ]
    }
  ],
  projects: [
    // ===== 4 COMMERCIAL / SOLD PROJECTS (WITH LINKS) =====
    { 
      title: "Somnath Cab - Luxury Fleet", 
      description: "Premium luxury car rental & taxi service featuring Ferrari 812, Ferrari 488, Audi Etron, Audi Q5. Real-time booking, driver tracking, and instant WhatsApp integration for fleet management.", 
      tech: ["Laravel", "PHP", "MySQL", "WhatsApp API"], 
      image: "🚗", 
      category: "Commercial", 
      liveLink: "https://somnathcab.com",
    },
    { 
      title: "Madhav Sheet Metal Corp", 
      description: "45+ years of precision engineering excellence. Manufacturer of tractor, textile, automotive & stamping parts with 100% quality satisfaction and ISO-certified processes.", 
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"], 
      image: "🏭", 
      category: "Commercial", 
      liveLink: "https://madhavsmcorp.com",
    },
    { 
      title: "Atlanta Associates", 
      description: "Contract manufacturer & merchant exporter in pharmaceutical industry. Turnkey projects, product distribution, and quality wellness solutions with global reach.", 
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"], 
      image: "💊", 
      category: "Commercial", 
      liveLink: "https://atlantapharmic.com",
    },
    { 
      title: "Chartered Engineer Consultancy", 
      description: "Government approved chartered engineer offering strategy execution, revenue growth consulting, and professional engineering services for industrial projects.", 
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"], 
      image: "⚙️", 
      category: "Commercial", 
      liveLink: "https://palegoldenrod-turtle-665129.hostingersite.com/",
    },

    // ===== 10 PORTAL / PREMIUM TAXI WEBSITES (taxi1 to taxi10) =====
    { 
      title: "Taxi Portal 1", 
      description: "Premium taxi booking portal with live tracking & instant booking.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🚖", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi1/" 
    },
    { 
      title: "Taxi Portal 2", 
      description: "Advanced fleet management with dynamic pricing & analytics.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🚗", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi2/" 
    },
    { 
      title: "Taxi Portal 3", 
      description: "Multi-city cab booking with real-time driver dispatch.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🌍", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi3/" 
    },
    { 
      title: "Taxi Portal 4", 
      description: "Corporate travel solution with fleet management & reporting.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🏢", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi4/" 
    },
    { 
      title: "Taxi Portal 5", 
      description: "Executive EV service with concierge-level booking experience.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "👑", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi5/" 
    },
    { 
      title: "Taxi Portal 6", 
      description: "Smart multi-stop trip planner with route optimization.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "📍", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi6/" 
    },
    { 
      title: "Taxi Portal 7", 
      description: "Step-by-step booking wizard with intelligent suggestions.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🧙", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi7/" 
    },
    { 
      title: "Taxi Portal 8", 
      description: "White-glove concierge booking with premium vehicle selection.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🤵", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi8/" 
    },
    { 
      title: "Taxi Portal 9", 
      description: "Professional fleet dashboard with real-time analytics.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "📊", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi9/" 
    },
    { 
      title: "Taxi Portal 10", 
      description: "Ultimate booking suite with AI-powered ride recommendations.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🤖", 
      category: "Premium", 
      liveLink: "https://devwebtechnology.in/demo/taxi10/" 
    },

    // ===== 10 BASIC / WHITE-LABEL TAXI WEBSITES (staxicar1 to staxicar10) =====
    { 
      title: "White-Label Taxi 1", 
      description: "Clean, minimal EV landing with instant quote form.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🚘", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar1/" 
    },
    { 
      title: "White-Label Taxi 2", 
      description: "Modern wave-inspired design with smooth scroll storytelling.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🌊", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar2/" 
    },
    { 
      title: "White-Label Taxi 3", 
      description: "Teal-accented theme with clear CTA and vehicle gallery.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🎨", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar3/" 
    },
    { 
      title: "White-Label Taxi 4", 
      description: "Uncommon aesthetic with bold typography and dark tones.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🖤", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar4/" 
    },
    { 
      title: "White-Label Taxi 5", 
      description: "Eco-focused EV brand with sustainability storytelling.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🌿", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar5/" 
    },
    { 
      title: "White-Label Taxi 6", 
      description: "Teal edition with animated hero and feature highlights.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "💎", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar6/" 
    },
    { 
      title: "White-Label Taxi 7", 
      description: "Deep cobalt theme with premium vehicle showcase.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🔵", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar7/" 
    },
    { 
      title: "White-Label Taxi 8", 
      description: "Saffron-accented layout with trust signals & testimonials.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🟠", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar8/" 
    },
    { 
      title: "White-Label Taxi 9", 
      description: "Obsidian dark theme with high-contrast visual hierarchy.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "⬛", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar9/" 
    },
    { 
      title: "White-Label Taxi 10", 
      description: "Aurora gradient theme with futuristic UI elements.", 
      tech: ["Laravel", "PHP", "MySQL"], 
      image: "🌌", 
      category: "Basic", 
      liveLink: "https://devwebtechnology.in/demo/staxicar10/" 
    }
  ],
  skills: {
    programming: ["JavaScript", "PHP", "CSS", "HTML"],
    fullStack: ["Laravel", "WordPress", "Bootstrap", "Tailwind CSS"],
    backend: ["PHP", "MySQL", "API Integration", "Payment Gateways"],
    concepts: ["Full-Stack Development", "White-Label Solutions", "API Integration", "UI/UX Design"]
  },
  softSkills: [
    { icon: FaUsers, label: "Teamwork", desc: "Collaborative team player" },
    { icon: FaComment, label: "Communication", desc: "Clear & effective" },
    { icon: FaClock, label: "Time Management", desc: "Deadline-driven" },
    { icon: FaLightbulb, label: "Problem Solving", desc: "Creative solutions" },
    { icon: FaBullseye, label: "Goal Oriented", desc: "Results-driven" },
    { icon: FaAward, label: "Adaptability", desc: "Quick learner" }
  ]
};

// ============================================================
// COMPONENTS
// ============================================================

const Section = ({ children, className = "" }) => (
  <section className={`py-20 px-4 md:px-8 ${className}`}>{children}</section>
);

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
  >
    {children}
    <span className="block w-20 h-1 bg-red-600 mx-auto mt-4"></span>
  </motion.h2>
);

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/25",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/25",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 ${className}`}>
    {children}
  </div>
);

// ============================================================
// MAIN APP
// ============================================================

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef
  };

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const resumeContent = `
╔══════════════════════════════════════════════════════════════════╗
║                         RAJ JIVANI                           ║
║                   LARAVEL | FULL-STACK DEVELOPER             ║
╠══════════════════════════════════════════════════════════════════╣
║  CONTACT                                                     ║
║  📞 +91 8511644844                                          ║
║  ✉️ rajjivani100@gmail.com                                  ║
║  📍 Sajjanper, Taluka- Tankara, District- Morbi, Gujarat   ║
║  🔗 linkedin.com/in/raj-jivani-dev                         ║
╠══════════════════════════════════════════════════════════════════╣
║  PROFILE                                                     ║
║  ${personalInfo.about}                                       ║
╠══════════════════════════════════════════════════════════════════╣
║  EXPERIENCE                                                  ║
║  Deweb Technology | Web Developer | JUN 2025 - JULY 2026    ║
║  • Developed and deployed 20+ full-stack web applications   ║
║  • Built advanced taxi booking engines with AJAX-based      ║
║    dynamic pricing                                           ║
║  • Integrated WhatsApp Cloud API, SMTP Mail, and UPI        ║
║    Payment Gateways                                          ║
║  • Successfully sold 4 high-value commercial projects       ║
╠══════════════════════════════════════════════════════════════════╣
║  SKILLS                                                      ║
║  Laravel | PHP | MySQL | JavaScript | WordPress             ║
║  Bootstrap | Tailwind CSS | Payment Gateways                ║
╚══════════════════════════════════════════════════════════════════╝
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Raj_Jivani_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const section of sections) {
        const ref = sectionRefs[section];
        if (ref && ref.current) {
          const el = ref.current;
          const offset = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= offset && scrollY < offset + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif] overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            RJ<span className="text-red-600">.</span>
          </span>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors duration-300 cursor-pointer ${
                    activeSection === id ? 'text-red-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <Button variant="primary" onClick={() => scrollToSection('contact')}>
              Hire Me <FaChevronRight size={16} />
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5 py-4 px-4 flex flex-col gap-4"
          >
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`text-left py-2 transition-colors ${
                    activeSection === id ? 'text-red-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <Button variant="primary" onClick={() => scrollToSection('contact')} className="w-full justify-center">
              Hire Me
            </Button>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION - UPDATED FOR CLIENTS + RECRUITERS */}
      <div ref={homeRef}>
        <Section id="home" className="pt-32 md:pt-40 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium flex items-center gap-2"
                >
                  🚀 Available for Projects & Freelance Work
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm <br />
                  <span className="text-red-600">{personalInfo.name}</span>
                </h1>
                
                <p className="text-xl text-gray-400">{personalInfo.title}</p>
                <p className="text-gray-500 max-w-md">{personalInfo.tagline}</p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="primary" onClick={() => scrollToSection('contact')}>
                    Let's Work Together <FaArrowRight size={18} />
                  </Button>
                  <Button variant="outline" onClick={downloadResume}>
                    <FaDownload size={18} /> Download Resume
                  </Button>
                </div>

                {/* 📌 NEW: Dual Purpose Badge */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs">
                    <FaBriefcase size={12} /> Open for Freelance
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs">
                    <FaUserTie size={12} /> Open for Hire
                  </span>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-2xl">
                    <FaGithub />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-2xl">
                    <FaInstagram />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-white transition-colors text-2xl">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Profile Image */}
            <Reveal delay={0.3}>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl shadow-red-600/20 border-4 border-red-600/30 overflow-hidden">
                  {personalInfo.profileImage ? (
                    <img 
                      src={personalInfo.profileImage} 
                      alt="Raj Jivani" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span className="text-8xl">👨‍💻</span>';
                      }}
                    />
                  ) : (
                    <span className="text-8xl">👨‍💻</span>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 bg-black border border-red-600/30 rounded-full p-3">
                  <FaBolt className="text-red-500" size={24} />
                </div>
                <div className="absolute -top-4 -left-4 bg-black border border-red-600/30 rounded-full p-3">
                  <FaCode className="text-red-500" size={24} />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* ABOUT SECTION */}
      <div ref={aboutRef}>
        <Section id="about" className="bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle>About Me</SectionTitle>
            <Reveal>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  👋 <span className="text-red-500 font-bold">Hello!</span>
                </p>
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  {personalInfo.about}
                </p>
                {/* 📌 NEW: Dual Purpose Message */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                    💼 Looking for Freelance Projects
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                    🤝 Open to Full-Time Roles
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pt-6 text-gray-500">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <FaEnvelope size={18} /> {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <FaPhone size={18} /> {personalInfo.phone}
                  </a>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt size={18} /> {personalInfo.location}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* SKILLS SECTION */}
      <div ref={skillsRef}>
        <Section id="skills">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Skillset</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Programming Languages", skills: personalInfo.skills.programming, icon: FaCode },
                { title: "Full Stack", skills: personalInfo.skills.fullStack, icon: FaLayerGroup },
                { title: "Backend", skills: personalInfo.skills.backend, icon: FaServer },
                { title: "CS Concepts", skills: personalInfo.skills.concepts, icon: FaDatabase }
              ].map((category, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card className="h-full hover:-translate-y-2">
                    <category.icon className="text-red-500 mb-4" size={32} />
                    <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* PROJECTS SECTION */}
      <div ref={projectsRef}>
        <Section id="projects" className="bg-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>My Projects</SectionTitle>
            <p className="text-center text-gray-400 mb-8">24+ Projects Delivered • 4 Commercial Sales • 20+ Taxi Solutions</p>
            
            {/* Commercial Projects */}
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaRocket className="text-green-400" /> Commercial Projects <span className="text-sm text-green-400 font-normal">(Sold & Live)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {personalInfo.projects.filter(p => p.category === "Commercial").map((project, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <Card className="h-full hover:-translate-y-2 group border-green-500/40 bg-green-500/5">
                    <div className="text-5xl mb-4">{project.image}</div>
                    <div className="inline-block px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-400 mb-2">🚀 Live</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                        🌐 Visit Site
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* Premium Projects */}
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCrown className="text-yellow-500" /> Premium (10)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {personalInfo.projects.filter(p => p.category === "Premium").map((project, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <Card className="h-full hover:-translate-y-2 group border-yellow-500/20">
                    <div className="text-5xl mb-4">{project.image}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-yellow-500/20 rounded-full text-xs text-yellow-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-sm font-medium flex items-center gap-1">
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* Basic Projects */}
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaStar className="text-blue-400" /> Basic (10)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalInfo.projects.filter(p => p.category === "Basic").map((project, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <Card className="h-full hover:-translate-y-2 group border-blue-500/20">
                    <div className="text-5xl mb-4">{project.image}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-sm font-medium flex items-center gap-1">
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* EXPERIENCE SECTION */}
      <div ref={experienceRef}>
        <Section id="experience">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-6">
              {personalInfo.experience.map((exp, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-red-500 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-red-500 mt-1">▸</span> {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:text-right">
                        <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-xs font-medium">Completed</span>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* SOFT SKILLS */}
      <Section id="soft-skills" className="bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Soft Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalInfo.softSkills.map((skill, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <Card className="text-center h-full hover:border-red-500/50">
                  <skill.icon className="text-red-500 mx-auto mb-2" size={28} />
                  <h4 className="text-white font-medium text-sm">{skill.label}</h4>
                  <p className="text-gray-500 text-xs">{skill.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION - UPDATED WITH DUAL MESSAGE */}
      <div ref={contactRef}>
        <Section id="contact" className="bg-red-600/10">
          <div className="max-w-2xl mx-auto">
            <SectionTitle>Let's Connect</SectionTitle>
            <p className="text-center text-gray-400 mb-8">📌 For Freelance Projects • 💼 For Full-Time Roles • 🤝 Any Collaboration</p>
            <Reveal>
              <Card className="bg-black/50 backdrop-blur-sm border-red-600/30">
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
                  window.location.href = `mailto:${personalInfo.email}?subject=Project Inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`;
                  alert('📩 Thank you! Your message has been sent. I will get back to you soon!');
                }}>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Your Email</label>
                    <input type="email" name="email" placeholder="john@example.com" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Message</label>
                    <textarea name="message" rows="5" placeholder="Tell me about your project, job opportunity, or anything else..." required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none" />
                  </div>
                  <Button variant="primary" type="submit" className="w-full justify-center">
                    Send Message <FaPaperPlane size={18} />
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <FaEnvelope size={16} /> {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <FaPhone size={16} /> {personalInfo.phone}
                  </a>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt size={16} /> {personalInfo.location}</div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind & Framer Motion.</p>
        <p className="mt-1">Made with <FaHeart className="inline text-red-500" size={14} /> in Gujarat</p>
        <p className="mt-1 text-xs text-gray-600">Available for Freelance Projects & Full-Time Opportunities</p>
      </footer>

    </div>
  );
}

export default App;
