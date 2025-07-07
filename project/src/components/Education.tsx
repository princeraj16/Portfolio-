import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Star, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Engineering College',
      location: 'Jaipur, India',
      duration: '2022 - 2026',
      status: 'Ongoing',
      description: 'Focusing on modern software development, DevOps practices, and data science methodologies. Actively participating in coding competitions and technical projects.',
      highlights: [
        'Core subjects: Data Structures, Algorithms, DBMS, OS',
        'Specialization in DevOps and Cloud Computing',
        'Data Science and Machine Learning coursework',
        'Active in coding competitions and hackathons'
      ],
      gpa: '8.5/10',
      color: 'bg-olive-cream',
      year: '2022-2026'
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Science (PCM)',
      institution: 'Senior Secondary School',
      location: 'Jaipur, India',
      duration: '2020 - 2022',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.',
      highlights: [
        'Mathematics: Advanced calculus and statistics',
        'Physics: Mechanics, electronics, and optics',
        'Chemistry: Organic and inorganic chemistry',
        'Computer Science: Basic programming concepts'
      ],
      gpa: '85%',
      color: 'bg-peach-beige',
      year: '2020-2022'
    },
    {
      degree: 'Secondary Education',
      field: 'Science & Mathematics',
      institution: 'Secondary School',
      location: 'Jaipur, India',
      duration: '2018 - 2020',
      status: 'Completed',
      description: 'Strong foundation in science and mathematics, with early exposure to computer science concepts.',
      highlights: [
        'Mathematics: Algebra, geometry, trigonometry',
        'Science: Biology, chemistry, physics',
        'Computer Science: Introduction to programming',
        'English and Hindi literature'
      ],
      gpa: '82%',
      color: 'bg-pale-sage',
      year: '2018-2020'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Consistent academic excellence',
      year: '2023-2024',
      icon: Award,
      color: 'text-yellow-600'
    },
    {
      title: 'Coding Competition',
      description: 'Top 10 in college coding contest',
      year: '2023',
      icon: Trophy,
      color: 'text-blue-600'
    },
    {
      title: 'Technical Paper',
      description: 'Published paper on DevOps practices',
      year: '2024',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintained high GPA throughout',
      year: '2022-Present',
      icon: Star,
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-ivory-white relative">
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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic journey and continuous learning in computer science and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-earthy-brown/20 hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative mb-16 md:mb-20 animate-slide-up ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-earthy-brown rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center" 
                   style={{ top: '2rem' }}>
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Year badge */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-earthy-brown text-white px-3 py-1 rounded-full text-sm font-medium hidden md:block ${
                index % 2 === 0 ? 'md:translate-x-16' : 'md:-translate-x-16'
              }`}>
                {edu.year}
              </div>

              <div className={`${edu.color} rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-lg text-gray-700 font-medium">{edu.field}</p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                    edu.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-green-100 text-green-800 border border-green-200'
                  }`}>
                    {edu.status}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap size={18} />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={18} />
                    <span>Score: {edu.gpa}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="text-lg font-serif text-gray-800 mb-3">Key Highlights:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-earthy-brown rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif text-gray-800 text-center mb-12">Academic Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <achievement.icon className={`${achievement.color} mx-auto mb-4`} size={32} />
                <h4 className="text-lg font-serif text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-700 mb-2 text-sm">{achievement.description}</p>
                <span className="text-xs text-gray-600 bg-earthy-brown/10 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-olive-cream via-pale-sage to-peach-beige rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Learning Philosophy</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed italic">
              "Education is not just about acquiring knowledge, but about developing the ability to think critically, 
              solve complex problems, and continuously adapt to new technologies. My journey in computer science 
              has taught me that learning never stops—it evolves with every project, every challenge, and every innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;