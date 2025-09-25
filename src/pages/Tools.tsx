import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Tools.css';

const Tools: React.FC = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    };
    initAOS();
  }, []);

  const toolCategories = [
    {
      title: 'Programming Languages',
      description: 'Core programming languages for development and data science',
      tools: [
        {
          name: 'Python',
          description: 'High-level programming language for data science and AI',
          icon: '🐍',
          proficiency: 95,
          color: '#3776AB',
        },
        {
          name: 'Java',
          description: 'Object-oriented programming language for enterprise applications',
          icon: '☕',
          proficiency: 85,
          color: '#F89820',
        },
        {
          name: 'JavaScript',
          description: 'Dynamic programming language for web development',
          icon: '🟨',
          proficiency: 80,
          color: '#F7DF1E',
        },
        {
          name: 'SQL',
          description: 'Structured Query Language for database management',
          icon: '🗄️',
          proficiency: 88,
          color: '#336791',
        },
        {
          name: 'R',
          description: 'Statistical computing and graphics language',
          icon: '📊',
          proficiency: 75,
          color: '#276DC3',
        },
      ],
    },
    {
      title: 'Machine Learning & AI',
      description: 'Frameworks and libraries for artificial intelligence and machine learning',
      tools: [
        {
          name: 'PyTorch',
          description: 'Open source machine learning framework for deep learning',
          icon: '🔥',
          proficiency: 90,
          color: '#EE4C2C',
        },
        {
          name: 'Scikit-learn',
          description: 'Machine learning library for Python',
          icon: '🤖',
          proficiency: 95,
          color: '#F7931E',
        },
        {
          name: 'Pandas',
          description: 'Data manipulation and analysis library for Python',
          icon: '🐼',
          proficiency: 92,
          color: '#150458',
        },
        {
          name: 'NumPy',
          description: 'Fundamental package for scientific computing with Python',
          icon: '🔢',
          proficiency: 90,
          color: '#4DABCF',
        },
        {
          name: 'Matplotlib',
          description: 'Comprehensive library for creating static, animated, and interactive visualizations',
          icon: '📈',
          proficiency: 88,
          color: '#11557C',
        },
        {
          name: 'Langchain',
          description: 'Framework for developing applications powered by language models',
          icon: '🔗',
          proficiency: 85,
          color: '#1C3C3C',
        },
      ],
    },
    {
      title: 'Web Development',
      description: 'Frameworks and tools for web application development',
      tools: [
        {
          name: 'Flask',
          description: 'Lightweight WSGI web application framework for Python',
          icon: '🌶️',
          proficiency: 90,
          color: '#000000',
        },
        {
          name: 'Django',
          description: 'High-level Python web framework for rapid development',
          icon: '🎯',
          proficiency: 80,
          color: '#092E20',
        },
        {
          name: 'HTML5/CSS3',
          description: 'Markup and styling languages for web development',
          icon: '🌐',
          proficiency: 85,
          color: '#E34F26',
        },
        {
          name: 'JavaScript',
          description: 'Dynamic programming language for interactive web pages',
          icon: '🟨',
          proficiency: 80,
          color: '#F7DF1E',
        },
        {
          name: 'RESTful APIs',
          description: 'Architectural style for designing networked applications',
          icon: '🔌',
          proficiency: 88,
          color: '#FF6B6B',
        },
        {
          name: 'Git',
          description: 'Distributed version control system for tracking changes',
          icon: '📝',
          proficiency: 90,
          color: '#F05032',
        },
      ],
    },
    {
      title: 'Data Science & Analytics',
      description: 'Tools for data analysis, visualization, and business intelligence',
      tools: [
        {
          name: 'Microsoft PowerBI',
          description: 'Business analytics service for data visualization and insights',
          icon: '📊',
          proficiency: 88,
          color: '#F2C811',
        },
        {
          name: 'IBM Watson Studio',
          description: 'Cloud-based environment for data scientists and AI developers',
          icon: '🧠',
          proficiency: 82,
          color: '#BE95FF',
        },
        {
          name: 'Jupyter Notebook',
          description: 'Open-source web application for creating and sharing documents',
          icon: '📓',
          proficiency: 90,
          color: '#F37626',
        },
        {
          name: 'Tableau',
          description: 'Data visualization and business intelligence software',
          icon: '📈',
          proficiency: 75,
          color: '#E97627',
        },
        {
          name: 'Excel',
          description: 'Spreadsheet application for data analysis and visualization',
          icon: '📋',
          proficiency: 85,
          color: '#217346',
        },
        {
          name: 'Google Colab',
          description: 'Cloud-based Jupyter notebook environment for machine learning',
          icon: '☁️',
          proficiency: 88,
          color: '#F9AB00',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="tools">
      {/* Hero Section */}
      <section className="tools-hero">
        <div className="container">
          <motion.div
            className="tools-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="tools-title">Tools & Technologies</h1>
            <p className="tools-subtitle">
              A comprehensive collection of technologies, frameworks, and tools
              I use to build amazing digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="tools-categories">
        <div className="container">
          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {toolCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="category-section"
                variants={itemVariants}
                data-aos="fade-up"
              >
                <div className="category-header">
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
                <div className="tools-grid">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      className="tool-card"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="tool-header">
                        <div className="tool-icon" style={{ backgroundColor: tool.color }}>
                          {tool.icon}
                        </div>
                        <div className="tool-info">
                          <h3 className="tool-name">{tool.name}</h3>
                          <p className="tool-description">{tool.description}</p>
                        </div>
                      </div>
                      <div className="tool-proficiency">
                        <div className="proficiency-bar">
                          <div
                            className="proficiency-fill"
                            style={{
                              width: `${tool.proficiency}%`,
                              backgroundColor: tool.color,
                            }}
                          ></div>
                        </div>
                        <span className="proficiency-text">{tool.proficiency}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="tools-stats" data-aos="fade-up">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Tools Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Average Proficiency</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
