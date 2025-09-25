import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
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
    // Try to load user's photo if present
    (async () => {
      try {
        const img = await import('../assets/images/bala_portfolio_photo.jpg');
        setPhotoSrc(img.default);
      } catch (e) {
        // Prefer user-provided public image if present; else placeholder
        setPhotoSrc('/bala_portfolio_photo.jpg');
      }
    })();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
      school: 'St. Joseph\'s Institute of Technology, Chennai',
      year: '2022 - 2026',
      description: 'Current CGPA: 8.87. Specialized in machine learning, natural language processing, and data analytics.',
    },
    {
      degree: 'Higher Secondary Education (12th Grade)',
      school: 'Sri Sankara Vidhyashramam, Chennai',
      year: '2022',
      description: 'Percentage: 91%. Focused on science and mathematics.',
    },
    {
      degree: 'Secondary Education (10th Grade)',
      school: 'Sri Sankara Vidhyashramam, Chennai',
      year: '2020',
      description: 'Percentage: 87.8%. Strong foundation in core subjects.',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bal2005',
      icon: 'github',
      username: '@bal2005',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/balasubramanian-m-9222a225a/',
      icon: 'linkedin',
      username: 'balasubramanian-m-9222a225a',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/balasubramanian_1/',
      icon: 'leetcode',
      username: 'balasubramanian_1',
    },
    {
      name: 'Email',
      url: 'mailto:balavan2005@gmail.com',
      icon: 'email',
      username: 'balavan2005@gmail.com',
    },
    {
      name: 'Phone',
      url: 'tel:+919941175799',
      icon: 'phone',
      username: '+91-9941175799',
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      github: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      linkedin: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      twitter: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      leetcode: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3l-9 9 9 9"/>
          <path d="M8 12h12"/>
        </svg>
      ),
      email: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-text">
              <h1 className="about-title">About Me</h1>
              <p className="about-subtitle">
                Passionate developer creating digital experiences that matter
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section" data-aos="fade-up">
        <div className="container">
          <div className="bio-content">
            <div className="bio-image">
              <div className="image-placeholder">
                {photoSrc ? (
                  <img src={photoSrc} alt="M Balasubramanian" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem', position: 'relative', zIndex: 1 }} loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }} />
                ) : (
                  <div className="placeholder-content">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <p>Your Photo Here</p>
                  </div>
                )}
              </div>
            </div>
            <div className="bio-text">
              <h2>Hello, I'm M Balasubramanian</h2>
              <div className="bio-description">
                <p>
                  I'm a passionate AI and Data Science student at St. Joseph's Institute of Technology, 
                  Chennai, currently pursuing my B.Tech with a CGPA of 8.87. My journey in artificial 
                  intelligence began with a fascination for how machines can learn and make intelligent 
                  decisions, leading me to specialize in machine learning and natural language processing.
                </p>
                <p>
                  I have hands-on experience in developing ML-based systems, including an intelligent 
                  crop recommendation system with IoT integration and a conversational chatbot. My 
                  projects demonstrate my ability to apply theoretical knowledge to solve real-world 
                  problems, particularly in agriculture and education domains.
                </p>
                <p>
                  I'm also actively involved in research, with publications on deepfake detection 
                  mechanisms and voice biometrics. My goal is to contribute to the advancement of 
                  AI technology and create solutions that can make a meaningful impact on society.
                </p>
              </div>
              <div className="bio-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">Location:</span>
                  <span className="highlight-value">Chennai, India</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Education:</span>
                  <span className="highlight-value">B.Tech AI & Data Science</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">CGPA:</span>
                  <span className="highlight-value">8.87/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-school">{edu.school}</h4>
                  <span className="education-year">{edu.year}</span>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Connect With Me</h2>
          <div className="social-links-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">
                  {getIcon(social.icon)}
                </div>
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p>{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
