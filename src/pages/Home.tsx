import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
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
    // Try to load user's photo
    (async () => {
      try {
        const img = await import('../assets/images/bala_portfolio_photo.jpg');
        setPhotoSrc(img.default);
      } catch (e) {
        setPhotoSrc('/bala_portfolio_photo.jpg');
      }
    })();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-text" variants={itemVariants}>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">M Balasubramanian</span>
              </h1>
              <h2 className="hero-subtitle">
                AI & Data Science Student | Machine Learning Enthusiast
              </h2>
              <p className="hero-description">
                I'm a passionate AI and Data Science student at St. Joseph's Institute of Technology, 
                Chennai. I specialize in machine learning, natural language processing, and building 
                intelligent systems that solve real-world problems. Currently pursuing B.Tech in 
                AI & Data Science with a CGPA of 8.87.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div className="hero-image" variants={itemVariants}>
              <div className="hero-avatar">
                {photoSrc ? (
                  <img src={photoSrc} alt="M Balasubramanian" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                ) : (
                  <img src="/placeholder.svg" alt="Profile placeholder" />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats" data-aos="fade-up">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Personal Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8.87</div>
              <div className="stat-label">Current CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Experience Section */}
      <section className="experience" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          
          {/* First Internship */}
          <div className="experience-card">
            <div className="experience-header">
              <h3>Python Intern</h3>
              <p className="company">M7 Corporation</p>
              <p className="duration">Jun 2025 - Jul 2025 · 2 mos</p>
              <p className="location">Chennai, Tamil Nadu, India · On-site</p>
            </div>
            <div className="experience-content">
              <ul>
                <li>Designed and implemented AI models for image validation and text classification, improving the efficiency of public grievance redressal systems.</li>
                <li>Conducted extensive research and experimentation with state-of-the-art deep learning models like MobileNet, Vision Transformer (ViT), CLIP, and YOLO for computer vision tasks.</li>
                <li>Managed and processed large datasets, applying techniques like image augmentation.</li>
                <li>Utilized vector databases like Milvus and FAISS for scalable and efficient similarity search in high-dimensional data.</li>
              </ul>
            </div>
          </div>

          {/* Second Internship */}
          <div className="experience-card">
            <div className="experience-header">
              <h3>Student Intern</h3>
              <p className="company">RULTOSH EDUFUN PRIVATE LIMITED</p>
              <p className="duration">Sep 2024 - Oct 2024 · 2 mos</p>
              <p className="location">Remote</p>
            </div>
            <div className="experience-content">
              <ul>
                <li>Gained hands-on experience in image recognition and segmentation techniques, improving model accuracy and efficiency.</li>
                <li>Worked on real-time image processing using computer vision algorithms for object detection.</li>
                <li>Contributed to data annotation, ensuring high-quality labeled datasets.</li>
                <li>Applied bounding box plotting techniques for enhanced image detection and visualization.</li>
              </ul>
            </div>
          </div>

          {/* Third Internship */}
          <div className="experience-card">
            <div className="experience-header">
              <h3>Student Intern</h3>
              <p className="company">Edunet Foundation</p>
              <p className="duration">Jun 2024 - Jul 2024 · 2 mos</p>
              <p className="location">Remote</p>
            </div>
            <div className="experience-content">
              <ul>
                <li>Gained hands-on experience with IBM Cloud tools, including Watson Studio.</li>
                <li>Conducted Exploratory Data Analysis (EDA) to uncover insights and inform decision-making processes.</li>
                <li>Developed Natural Language Processing (NLP) applications, enhancing the ability to process and analyze textual data.</li>
                <li>Strengthened understanding of artificial intelligence principles.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="skills-preview" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Machine Learning</h3>
              <p>Developing intelligent systems using Python, PyTorch, and scikit-learn for real-world applications and data analysis.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Natural Language Processing</h3>
              <p>Building conversational AI systems, chatbots, and NLP applications using Langchain and advanced language models.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3>Data Science & Analytics</h3>
              <p>Extracting insights from data using Python, PowerBI, and advanced analytics techniques for informed decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <div className="cta-actions">
              <Link to="/about" className="btn btn-primary">
                Get In Touch
              </Link>
              <a href="mailto:your.email@example.com" className="btn btn-outline">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
