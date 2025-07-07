import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'princerajsharma857@gmail.com',
      link: 'mailto:princerajsharma857@gmail.com',
      color: 'text-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-6367063091',
      link: 'tel:+916367063091',
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      link: 'https://wa.me/916367063091',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, India 🇮🇳',
      link: null,
      color: 'text-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/princeraj-sharma/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-50'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/916367063091',
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    {
      icon: Mail,
      name: 'Gmail',
      url: 'mailto:princerajsharma857@gmail.com',
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: '#',
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-serif text-gray-800 mb-8">Let's Connect</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're looking to collaborate on a project, need DevOps consultation, 
              or want to discuss data science opportunities, I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 bg-earthy-brown/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className={`${contact.color}`} size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{contact.label}</p>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-800 hover:text-earthy-brown transition-colors duration-300 font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-serif text-gray-800 mb-4">Follow Me</h4>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-earthy-brown/10 rounded-full flex items-center justify-center text-gray-600 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 shadow-md`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-olive-cream/50 to-peach-beige/50 rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-earthy-brown focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-earthy-brown focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-earthy-brown focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-earthy-brown focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-earthy-brown hover:bg-opacity-90 disabled:bg-opacity-50 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Clock size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-olive-cream to-pale-sage rounded-2xl p-6 text-center shadow-lg animate-slide-up hover:scale-105 transition-transform duration-300">
            <MessageCircle className="text-earthy-brown mx-auto mb-4" size={32} />
            <h4 className="text-xl font-serif text-gray-800 mb-2">Quick Chat</h4>
            <p className="text-gray-700 mb-4">Available for quick discussions on WhatsApp</p>
            <a 
              href="https://wa.me/916367063091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-earthy-brown text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-gradient-to-r from-peach-beige to-olive-cream rounded-2xl p-6 text-center shadow-lg animate-slide-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
            <Mail className="text-earthy-brown mx-auto mb-4" size={32} />
            <h4 className="text-xl font-serif text-gray-800 mb-2">Email Me</h4>
            <p className="text-gray-700 mb-4">For detailed discussions and collaborations</p>
            <a 
              href="mailto:princerajsharma857@gmail.com"
              className="inline-block bg-earthy-brown text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>

          <div className="bg-gradient-to-r from-pale-sage to-peach-beige rounded-2xl p-6 text-center shadow-lg animate-slide-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <Linkedin className="text-earthy-brown mx-auto mb-4" size={32} />
            <h4 className="text-xl font-serif text-gray-800 mb-2">LinkedIn</h4>
            <p className="text-gray-700 mb-4">Connect professionally and see my updates</p>
            <a 
              href="https://www.linkedin.com/in/princeraj-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-earthy-brown text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;