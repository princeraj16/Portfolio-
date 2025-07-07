import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Clock, Target, Cloud } from 'lucide-react';

const Certifications = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'C and C++ Fundamentals',
      subtitle: 'Advanced Level',
      issuer: 'Programming Institute',
      date: '2024',
      status: 'Completed',
      description: 'Comprehensive certification covering advanced C and C++ programming concepts, data structures, algorithms, and memory management.',
      skills: ['C Programming', 'C++', 'Data Structures', 'Algorithms', 'Memory Management', 'Object-Oriented Programming'],
      color: 'bg-olive-cream',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'AWS Cloud Practitioner',
      subtitle: 'Foundation Level',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress',
      description: 'Foundation-level certification covering AWS cloud concepts, services, security, architecture, and pricing models.',
      skills: ['AWS Services', 'Cloud Computing', 'Security', 'Architecture', 'Cost Management'],
      color: 'bg-peach-beige',
      icon: Clock,
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Docker Certified Associate',
      subtitle: 'Professional Level',
      issuer: 'Docker Inc.',
      date: '2024',
      status: 'Planned',
      description: 'Professional certification validating skills in containerization, Docker orchestration, and container management.',
      skills: ['Docker', 'Containerization', 'Orchestration', 'DevOps', 'Microservices'],
      color: 'bg-pale-sage',
      icon: Target,
      iconColor: 'text-purple-600'
    }
  ];

  const handleCardFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planned':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-ivory-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg 
          className="w-full h-16 text-ivory-white" 
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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="perspective-1000 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className={`relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 cursor-pointer ${
                  flippedCard === cert.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardFlip(cert.id)}
              >
                {/* Front of card */}
                <div className={`absolute inset-0 ${cert.color} rounded-2xl p-6 shadow-lg border border-white/20 backface-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <cert.icon className={cert.iconColor} size={28} />
                      <div className={`text-sm px-3 py-1 rounded-full border ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{cert.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4">{cert.issuer}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Click to view details</p>
                      <ExternalLink className="mx-auto text-earthy-brown" size={20} />
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 ${cert.color} rounded-2xl p-6 shadow-lg border border-white/20 backface-hidden rotate-y-180 flex flex-col justify-between`}>
                  <div>
                    <h3 className="text-lg font-serif text-gray-800 mb-4">{cert.title}</h3>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{cert.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-white/50 text-xs px-2 py-1 rounded-full text-gray-700 border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif text-gray-800 mb-8">Upcoming Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Google Cloud Professional', icon: Cloud, color: 'text-blue-500' },
              { name: 'Kubernetes Administrator', icon: Award, color: 'text-purple-500' },
              { name: 'Python for Data Science', icon: CheckCircle, color: 'text-green-500' },
              { name: 'Machine Learning Specialist', icon: Target, color: 'text-orange-500' }
            ].map((cert, index) => (
              <div 
                key={cert.name}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:bg-white/80 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <cert.icon className={cert.color} size={20} />
                  <span className="text-sm bg-earthy-brown text-white px-2 py-1 rounded-full">
                    Planning
                  </span>
                </div>
                <h4 className="text-gray-800 font-medium text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Philosophy */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-olive-cream to-peach-beige rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Continuous Learning</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed italic">
              "Certifications are not just badges—they represent my commitment to mastering technologies and staying 
              current with industry standards. Each certification is backed by hands-on projects and real-world applications."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;