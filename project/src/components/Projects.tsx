import React from 'react';
import { Github, ExternalLink, Clock, Code, Database, Cloud, Zap, Users, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      title: 'DevOps Projects',
      icon: Cloud,
      description: 'Automation and infrastructure projects',
      projects: [
        {
          title: 'CI/CD Pipeline Automation',
          description: 'Automated deployment pipeline using Jenkins, Docker, and AWS for seamless code integration and deployment.',
          status: 'Coming Soon',
          tech: ['Jenkins', 'Docker', 'AWS', 'Git', 'Terraform'],
          color: 'bg-olive-cream',
          features: ['Automated testing', 'Multi-environment deployment', 'Rollback capabilities']
        },
        {
          title: 'Infrastructure as Code',
          description: 'Terraform-based infrastructure management for scalable cloud resources with monitoring and alerting.',
          status: 'In Development',
          tech: ['Terraform', 'AWS', 'Ansible', 'Linux', 'CloudWatch'],
          color: 'bg-peach-beige',
          features: ['Auto-scaling', 'Cost optimization', 'Security compliance']
        }
      ]
    },
    {
      title: 'Data Science Projects',
      icon: Database,
      description: 'Analytics and machine learning solutions',
      projects: [
        {
          title: 'Customer Analytics Dashboard',
          description: 'Interactive dashboard for customer behavior analysis with real-time insights and predictive analytics.',
          status: 'Planning',
          tech: ['Python', 'Pandas', 'Plotly', 'SQL', 'Streamlit'],
          color: 'bg-pale-sage',
          features: ['Real-time analytics', 'Predictive modeling', 'Interactive visualizations']
        },
        {
          title: 'Predictive Model Pipeline',
          description: 'End-to-end ML pipeline for predictive analytics with automated model training and deployment.',
          status: 'Research Phase',
          tech: ['Python', 'Scikit-learn', 'Docker', 'Flask', 'MLflow'],
          color: 'bg-olive-cream',
          features: ['Automated training', 'Model versioning', 'API deployment']
        }
      ]
    },
    {
      title: 'Web Development',
      icon: Code,
      description: 'Modern web applications and interfaces',
      projects: [
        {
          title: 'Personal Portfolio',
          description: 'Modern, responsive portfolio website built with React, featuring smooth animations and glassmorphism design.',
          status: 'Live',
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
          color: 'bg-peach-beige',
          features: ['Responsive design', 'Smooth animations', 'SEO optimized']
        },
        {
          title: 'Task Management App',
          description: 'Full-stack task management application with real-time updates, team collaboration, and progress tracking.',
          status: 'Coming Soon',
          tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
          color: 'bg-pale-sage',
          features: ['Real-time collaboration', 'Progress tracking', 'Team management']
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Development':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Coming Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Planning':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Research Phase':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Live':
        return <Zap className="inline w-4 h-4 mr-1" />;
      case 'In Development':
        return <Code className="inline w-4 h-4 mr-1" />;
      case 'Coming Soon':
        return <Clock className="inline w-4 h-4 mr-1" />;
      case 'Planning':
        return <Lightbulb className="inline w-4 h-4 mr-1" />;
      case 'Research Phase':
        return <Database className="inline w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          className="w-full h-16 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Innovative projects spanning DevOps automation, data science, and web development
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <category.icon className="text-earthy-brown" size={32} />
                  <h3 className="text-3xl font-serif text-gray-800">{category.title}</h3>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div 
                    key={project.title}
                    className={`${project.color} rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-all duration-300 group hover:shadow-xl`}
                    style={{ animationDelay: `${categoryIndex * 0.2 + projectIndex * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white/50 rounded-full hover:bg-white/80 transition-colors duration-300">
                          <Github size={16} className="text-gray-700" />
                        </button>
                        <button className="p-2 bg-white/50 rounded-full hover:bg-white/80 transition-colors duration-300">
                          <ExternalLink size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-xl font-serif text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-800 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-earthy-brown rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-white/50 text-xs px-3 py-1 rounded-full text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.status === 'Coming Soon' && (
                      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                        <p className="text-sm text-gray-600 text-center italic">
                          This project is currently in development. Stay tuned for updates!
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Projects Planned', icon: Lightbulb },
            { number: '3', label: 'In Development', icon: Code },
            { number: '15+', label: 'Technologies', icon: Database },
            { number: '∞', label: 'Learning', icon: Users }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-gradient-to-r from-olive-cream to-peach-beige rounded-2xl p-6 text-center shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="text-earthy-brown mx-auto mb-2" size={24} />
              <div className="text-2xl font-serif font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-700 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-olive-cream via-pale-sage to-peach-beige rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Let's build something amazing together!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-earthy-brown hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;