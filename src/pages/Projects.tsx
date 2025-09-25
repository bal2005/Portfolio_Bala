import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: 'ML-Based Intelligent Crop Recommendation System',
      description: 'An IoT-integrated crop recommendation system with real-time data from NPK sensors, pH sensors, and WeatherStack API.',
      longDescription: 'Developed an innovative IoT-based crop recommendation system that integrates real-time data from NPK sensors, pH sensors, and WeatherStack API. The system incorporates machine learning models for crop and fertilizer recommendations based on soil data, and includes a QA bot for addressing farmer queries. This project demonstrates practical application of ML in agriculture domain.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      technologies: ['Python', 'Flask', 'Machine Learning', 'IoT', 'WeatherStack API', 'RAG'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/CropSense-Web',
      featured: true,
      category: 'AI/ML',
    },
    {
      id: 2,
      title: 'Conversational Chatbot Using Python',
      description: 'An interactive educational chatbot built using Python and Chatterbot framework for enhanced learning experiences.',
      longDescription: 'Built a sophisticated chatbot using Python and the Chatterbot framework to deliver interactive and educational responses. The chatbot is designed for educational purposes, enabling interactive learning and user engagement. The system uses natural language processing to understand and respond to user queries effectively.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['Python', 'Django', 'Chatterbot', 'NLP', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/Capstone_Project_Edunet_Custom_Conversational_Chatbot',
      featured: true,
      category: 'AI/ML',
    },
    {
      id: 3,
      title: 'Flight Fare Price Prediction System',
      description: 'A machine learning model for flight fare prediction with 81.6% accuracy using Random Forest algorithm.',
      longDescription: 'Developed a comprehensive Flight Fare Prediction Model using Random Forest algorithm, achieving 81.6% accuracy through optimization via RandomizedSearchCV. The project involved feature engineering from datetime and categorical data, feature selection using ExtraTreesRegressor and VIF, and deployment as a Flask web application for real-time fare predictions.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/Flight_price_prediction',
      featured: false,
      category: 'AI/ML',
    },
    {
      id: 4,
      title: 'Deepfake Detection Research',
      description: 'Research project on comparative analysis of deepfake detection mechanisms using AI architecture models.',
      longDescription: 'Conducted comprehensive research on deepfake detection mechanisms, comparing various AI architecture models for identifying synthetic media. This research contributes to the field of computer vision and media forensics, addressing the growing concern of deepfake technology in digital media.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      technologies: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Research'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/deepfake-detection',
      featured: false,
      category: 'Research',
    },
    {
      id: 5,
      title: 'Voice Biometrics with XEUS Model',
      description: 'Advanced voice biometrics system using the XEUS model for comprehensive voice authentication.',
      longDescription: 'Developed an innovative voice biometrics system using the XEUS model, providing comprehensive voice authentication capabilities. This research project focuses on enhancing security through voice recognition technology and has been submitted for publication, demonstrating expertise in audio processing and biometric authentication.',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      technologies: ['Python', 'Audio Processing', 'Machine Learning', 'Biometrics', 'Research'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/Voice_Authentication_ESPNET',
      featured: true,
      category: 'Research',
    },
    {
      id: 6,
      title: 'IBM Watson Studio NLP Applications',
      description: 'Natural Language Processing applications developed during internship using IBM Cloud tools.',
      longDescription: 'Developed various NLP applications using IBM Watson Studio and cloud tools during internship at Edunet Foundation. Gained hands-on experience in processing and analyzing textual data, creating applications that can understand and generate human language effectively.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Python', 'IBM Watson Studio', 'NLP', 'Cloud Computing', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bal2005/ibm-watson-nlp',
      featured: false,
      category: 'AI/ML',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI/ML', label: 'AI/ML' },
    { id: 'Research', label: 'Research' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'IoT', label: 'IoT' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">
              A showcase of my recent work, featuring web applications,
              mobile apps, and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter">
        <div className="container">
          <div className="filter-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter} // Re-trigger animation when filter changes
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-content">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3>No projects found</h3>
                <p>No projects match the selected category. Try selecting a different filter.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats" data-aos="fade-up">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{projects.length}</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{projects.filter(p => p.featured).length}</div>
              <div className="stat-label">Featured Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <div className="cta-actions">
              <a href="mailto:your.email@example.com" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/about" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
