import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');

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

  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, color: '#3776AB' },
        { name: 'Java', level: 85, color: '#F89820' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'SQL', level: 88, color: '#336791' },
        { name: 'R', level: 75, color: '#276DC3' },
      ],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch', level: 90, color: '#EE4C2C' },
        { name: 'Scikit-learn', level: 95, color: '#F7931E' },
        { name: 'Pandas', level: 92, color: '#150458' },
        { name: 'NumPy', level: 90, color: '#4DABCF' },
        { name: 'Matplotlib', level: 88, color: '#11557C' },
        { name: 'Natural Language Processing', level: 85, color: '#FF6B6B' },
        { name: 'Computer Vision', level: 80, color: '#4ECDC4' },
        { name: 'Deep Learning', level: 85, color: '#45B7D1' },
      ],
    },
    {
      category: 'Web Development & Tools',
      skills: [
        { name: 'Flask', level: 90, color: '#000000' },
        { name: 'Django', level: 80, color: '#092E20' },
        { name: 'Langchain', level: 85, color: '#1C3C3C' },
        { name: 'Microsoft PowerBI', level: 88, color: '#F2C811' },
        { name: 'IBM Watson Studio', level: 82, color: '#BE95FF' },
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'RESTful APIs', level: 88, color: '#FF6B6B' },
      ],
    },
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      level: 95,
      description: 'Analytical thinking and creative solutions',
    },
    {
      name: 'Communication',
      level: 90,
      description: 'Clear and effective team collaboration',
    },
    {
      name: 'Leadership',
      level: 85,
      description: 'Guiding teams and mentoring others',
    },
    {
      name: 'Adaptability',
      level: 92,
      description: 'Quick learning and embracing change',
    },
    {
      name: 'Time Management',
      level: 88,
      description: 'Efficient project planning and execution',
    },
    {
      name: 'Attention to Detail',
      level: 95,
      description: 'Thorough and precise work quality',
    },
  ];

  const achievements = [
    {
      title: 'Top 10 Finalist - Hack$Day Hackathon',
      issuer: 'Hack$Day',
      date: 'December 2024',
      description: 'Selected as part of the Top 10 Finalists out of 150 teams for developing an innovative solution under the IoT domain',
      icon: '🏆',
      color: '#FFD700',
    },
    {
      title: 'Student Intern - Edunet Foundation',
      issuer: 'Edunet Foundation',
      date: 'June - July 2024',
      description: 'Gained hands-on experience with IBM Cloud tools, including Watson Studio, and developed NLP applications',
      icon: '🔬',
      color: '#BE95FF',
    },
    {
      title: 'Student Intern - Rultosh Edufun',
      issuer: 'Rultosh Edufun Private Ltd',
      date: 'Sept - Oct 2024',
      description: 'Gained hands-on experience in image recognition and segmentation techniques, enhancing model accuracy and efficiency',
      icon: '👁️',
      color: '#4ECDC4',
    },
    {
      title: 'Publication - Deepfake Detection',
      issuer: 'Research Paper',
      date: 'November 2023',
      description: 'Comparative Analysis of Deepfake Detection Mechanism Using AI Architecture Models',
      icon: '📄',
      color: '#FF6B6B',
    },
    {
      title: 'Publication - Voice Biometrics',
      issuer: 'Research Paper',
      date: 'February 2025',
      description: 'Empowering Voice Biometrics: A Comprehensive Approach with the XEUS Model (To be published)',
      icon: '🎤',
      color: '#45B7D1',
    },
    {
      title: 'Academic Excellence',
      issuer: 'St. Joseph\'s Institute of Technology',
      date: '2022 - 2026',
      description: 'Maintaining CGPA of 8.87 in B.Tech Artificial Intelligence and Data Science program',
      icon: '🎓',
      color: '#9B59B6',
    },
  ];

  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'achievements', label: 'Achievements' },
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
    <div className="skills">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <motion.div
            className="skills-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="skills-title">Skills & Achievements</h1>
            <p className="skills-subtitle">
              A comprehensive overview of my technical expertise, soft skills,
              and professional achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="skills-tabs">
        <div className="container">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Tab */}
      {activeTab === 'technical' && (
        <section className="technical-skills" data-aos="fade-up">
          <div className="container">
            <motion.div
              className="skills-categories"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h2 className="category-title">{category.category}</h2>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Soft Skills Tab */}
      {activeTab === 'soft' && (
        <section className="soft-skills" data-aos="fade-up">
          <div className="container">
            <motion.div
              className="soft-skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <section className="achievements" data-aos="fade-up">
          <div className="container">
            <motion.div
              className="achievements-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-issuer">{achievement.issuer}</p>
                    <span className="achievement-date">{achievement.date}</span>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="skills-stats" data-aos="fade-up">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Technical Skills</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Soft Skills</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Average Proficiency</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
