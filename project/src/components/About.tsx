import React from 'react';
import { User, MapPin, GraduationCap, Code, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-ivory-white relative">
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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-earthy-brown" size={24} />
                <h3 className="text-2xl font-serif text-gray-800">Who I Am</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate B.Tech CSE student with a deep fascination for DevOps, Cloud Computing, and Data Science. 
                My journey in technology is driven by the desire to bridge the gap between development and operations while 
                extracting meaningful insights from data.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-earthy-brown" size={24} />
                <h3 className="text-2xl font-serif text-gray-800">My Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To automate complex processes, optimize cloud infrastructure, and transform raw data into actionable insights 
                that drive business decisions and technological innovation.
              </p>
            </div>
          </div>
          
          {/* Right Column - Details */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-earthy-brown" size={24} />
                <h3 className="text-2xl font-serif text-gray-800">Location</h3>
              </div>
              <p className="text-gray-700">Based in Jaipur, India 🇮🇳</p>
              <p className="text-gray-600 text-sm mt-2">Open to remote opportunities worldwide</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-earthy-brown" size={24} />
                <h3 className="text-2xl font-serif text-gray-800">Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering, focusing on modern technologies 
                and industry-relevant skills that prepare me for the evolving tech landscape.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-earthy-brown" size={24} />
                <h3 className="text-2xl font-serif text-gray-800">Passion</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I love solving complex problems, learning new technologies, and contributing to open-source projects. 
                When not coding, you'll find me exploring the latest in cloud architecture and data analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif text-gray-800 text-center mb-12">My Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-earthy-brown/20 hidden md:block"></div>
            
            {[
              {
                year: '2022',
                title: 'Started B.Tech CSE',
                description: 'Began my journey in Computer Science Engineering',
                side: 'left'
              },
              {
                year: '2023',
                title: 'Discovered DevOps',
                description: 'Fell in love with automation and cloud technologies',
                side: 'right'
              },
              {
                year: '2024',
                title: 'Data Science Focus',
                description: 'Expanded into data analytics and machine learning',
                side: 'left'
              },
              {
                year: 'Present',
                title: 'Building Portfolio',
                description: 'Creating projects and gaining practical experience',
                side: 'right'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`relative mb-8 md:mb-12 animate-slide-up ${
                  item.side === 'left' ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-earthy-brown rounded-full border-4 border-white shadow-lg hidden md:block" 
                     style={{ top: '1rem' }}></div>
                
                <div className={`bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-olive-cream to-pale-sage' : 'from-peach-beige to-olive-cream'
                } rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 ${
                  item.side === 'left' ? 'md:mr-8 md:text-right' : 'md:ml-8'
                }`}>
                  <div className="text-earthy-brown font-bold text-lg mb-2">{item.year}</div>
                  <h4 className="text-xl font-serif text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;