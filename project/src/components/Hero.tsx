import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const skills = 'Git · Docker · Python · AWS · Jenkins · ReactJS';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < skills.length) {
        setTypedText(skills.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // This would typically link to a resume file
    window.open('#', '_blank');
  };

  const handleConnectClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-ivory-white via-pale-sage to-peach-beige relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-earthy-brown rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-olive-cream rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-peach-beige rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Wave SVG Background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-32 text-white opacity-30" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="currentColor"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="currentColor"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 animate-slide-up">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Prince Raj Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 animate-slide-up">
            Hello, I'm{' '}
            <span
              className="text-earthy-brown bg-gradient-to-r from-earthy-brown to-olive-cream bg-clip-text text-transparent hover:animate-bounce-once"
            >
              Prince Raj Sharma
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            DevOps & Data Science Explorer
          </p>
          
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-700 mb-4 font-medium">Tech Stack:</p>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 max-w-md mx-auto">
              <span className="text-earthy-brown font-mono text-lg">
                {typedText}
                <span className="border-r-2 border-earthy-brown animate-pulse ml-1"></span>
              </span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up italic" style={{ animationDelay: '0.6s' }}>
            "Automating Ideas with DevOps, Powering Insights with Data Science."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={handleDownloadResume}
              className="bg-earthy-brown hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={handleConnectClick}
              className="bg-white/50 backdrop-blur-sm hover:bg-white/80 text-earthy-brown border border-earthy-brown/20 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              Let's Connect
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={24} className="text-earthy-brown opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;