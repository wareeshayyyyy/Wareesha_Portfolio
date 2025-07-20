import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Terminal, Gamepad2, Calculator, CheckSquare, Users, Calendar, Star, GitBranch } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "CHESS-in-python",
      description: "A complete chess game implementation in Python with GUI and game logic",
      tech: ["Python"],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Banking-System",
      description: "A comprehensive banking system with account management and transaction features",
      tech: ["Programming"],
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Candy-Crush-Game",
      description: "Recreation of the popular Candy Crush game with matching mechanics",
      tech: ["Game Development"],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Election-Management-System",
      description: "Digital voting system with candidate management and result tracking",
      tech: ["C++"],
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "GitHub-Simulation-Project",
      description: "A simulation project replicating GitHub's version control features",
      tech: ["C++"],
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Sudoku-Game-in-Python",
      description: "Interactive Sudoku puzzle game with solver and generator algorithms",
      tech: ["Python"],
      icon: <Calculator className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const skills = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "C++", level: 85, color: "bg-red-500" },
    { name: "React", level: 80, color: "bg-cyan-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
    { name: "Git/GitHub", level: 80, color: "bg-gray-700" },
    { name: "Problem Solving", level: 95, color: "bg-purple-500" },
    { name: "Game Development", level: 70, color: "bg-pink-500" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Wareesha
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Wareesha
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Software Developer & Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with Python, C++, and modern web technologies. 
            Building everything from games to management systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 hover:bg-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate software developer from Chiniot, Pakistan, currently studying at FAST University CFD Campus. 
                  With a love for creating innovative solutions and solving complex problems, my journey in programming 
                  has led me to work on diverse projects ranging from game development to system management applications.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  With expertise in Python and C++, I enjoy building everything from interactive games 
                  like Chess and Candy Crush to practical applications like banking and election management systems.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Chiniot, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>56 GitHub Contributions</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl">
                  <Terminal className="w-8 h-8 text-blue-200 mb-4" />
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <p className="text-sm text-blue-200">Python, C++ system programming</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl">
                  <Gamepad2 className="w-8 h-8 text-purple-200 mb-4" />
                  <h3 className="font-semibold mb-2">Game Development</h3>
                  <p className="text-sm text-purple-200">Interactive games & simulations</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl">
                  <Database className="w-8 h-8 text-green-200 mb-4" />
                  <h3 className="font-semibold mb-2">System Design</h3>
                  <p className="text-sm text-green-200">Management systems & databases</p>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-xl">
                  <Code className="w-8 h-8 text-orange-200 mb-4" />
                  <h3 className="font-semibold mb-2">Problem Solving</h3>
                  <p className="text-sm text-orange-200">Algorithm design & optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={`https://github.com/wareeshayyyyy/${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible.skills ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to collaborate or just say hi, feel free to reach out!
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <a
                  href="https://github.com/wareeshayyyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-12 h-12 text-gray-400 group-hover:text-white mx-auto mb-4 transition-colors" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-sm text-gray-400">Check out my repositories</p>
                </a>
                <a
                  href="mailto:f223441@cfd.nu.edu.pk"
                  className="group bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-12 h-12 text-gray-400 group-hover:text-white mx-auto mb-4 transition-colors" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-gray-400">f223441@cfd.nu.edu.pk</p>
                </a>
                <div className="group bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                  <MapPin className="w-12 h-12 text-gray-400 group-hover:text-white mx-auto mb-4 transition-colors" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-gray-400">Chiniot, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Wareesha. Built with React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "What's yours will come."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;