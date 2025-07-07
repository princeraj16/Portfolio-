import React from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  GitBranch, 
  Server, 
  BarChart3,
  Container,
  Cpu,
  Globe,
  Terminal,
  Layers,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Cloud',
      color: 'bg-olive-cream',
      borderColor: 'border-olive-cream',
      skills: [
        { name: 'Docker', icon: Container, level: 85, description: 'Containerization & orchestration' },
        { name: 'AWS', icon: Cloud, level: 80, description: 'Cloud infrastructure & services' },
        { name: 'Jenkins', icon: Cpu, level: 75, description: 'CI/CD pipeline automation' },
        { name: 'Git', icon: GitBranch, level: 90, description: 'Version control & collaboration' },
      ]
    },
    {
      title: 'Programming',
      color: 'bg-peach-beige',
      borderColor: 'border-peach-beige',
      skills: [
        { name: 'Python', icon: Code, level: 85, description: 'Backend development & scripting' },
        { name: 'JavaScript', icon: Globe, level: 80, description: 'Frontend & full-stack development' },
        { name: 'C++', icon: Terminal, level: 75, description: 'System programming & algorithms' },
        { name: 'React', icon: Layers, level: 85, description: 'Modern frontend frameworks' },
      ]
    },
    {
      title: 'Data Science',
      color: 'bg-pale-sage',
      borderColor: 'border-pale-sage',
      skills: [
        { name: 'Data Analysis', icon: BarChart3, level: 80, description: 'Statistical analysis & insights' },
        { name: 'Machine Learning', icon: Database, level: 75, description: 'Predictive modeling & AI' },
        { name: 'SQL', icon: Server, level: 85, description: 'Database management & queries' },
        { name: 'Statistics', icon: Shield, level: 70, description: 'Mathematical foundations' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-earthy-brown mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning DevOps, Cloud Computing, and Data Science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className={`${category.color} rounded-2xl p-6 shadow-lg border-2 ${category.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className="text-earthy-brown" size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-medium block">{skill.name}</span>
                          <span className="text-gray-600 text-sm">{skill.description}</span>
                        </div>
                      </div>
                      <div className="w-full bg-white/50 rounded-full h-2 mb-1">
                        <div 
                          className="bg-earthy-brown h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-600">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif text-gray-800 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Linux', 'Kubernetes', 'Terraform', 'Ansible', 'MongoDB', 
              'PostgreSQL', 'Redis', 'Nginx', 'Apache', 'Firebase',
              'GraphQL', 'Node.js', 'Express.js', 'Flask', 'Pandas',
              'NumPy', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'Tableau'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="bg-gradient-to-r from-olive-cream to-peach-beige rounded-full px-4 py-2 text-gray-700 border border-gray-200 hover:bg-earthy-brown hover:text-white transition-all duration-300 hover:scale-105 cursor-default shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Philosophy */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-olive-cream via-pale-sage to-peach-beige rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">My Approach to Technology</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed italic">
              "I believe in continuous learning and hands-on practice. Every technology I learn is backed by real projects 
              and practical applications. My goal is not just to know these tools, but to master them through consistent 
              practice and real-world problem solving."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;