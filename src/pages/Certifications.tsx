import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
  return (
    <div className="certifications">
      <section className="certifications-section">
        <div className="container">
          <h1 className="page-title">Certifications & Licenses</h1>
          <div className="certifications-grid">
            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/nvidia-logo.png" alt="NVIDIA" />
              </div>
              <div className="cert-content">
                <h3>Building RAG Agents with LLMs</h3>
                <p className="issuer">NVIDIA</p>
                <p className="issue-date">Issued Feb 2025</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/ibm-logo.png" alt="IBM" />
              </div>
              <div className="cert-content">
                <h3>Getting Started with Enterprise Data Science</h3>
                <p className="issuer">IBM</p>
                <p className="issue-date">Issued Jun 2024</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/ibm-logo.png" alt="IBM" />
              </div>
              <div className="cert-content">
                <h3>Getting Started with Enterprise-grade AI</h3>
                <p className="issuer">IBM</p>
                <p className="issue-date">Issued Jun 2024</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/mongodb-logo.png" alt="MongoDB" />
              </div>
              <div className="cert-content">
                <h3>Introduction to MongoDB</h3>
                <p className="issuer">MongoDB</p>
                <p className="issue-date">Issued May 2024</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/coursera-logo.png" alt="Coursera" />
              </div>
              <div className="cert-content">
                <h3>Calculus for Machine Learning and Data Science</h3>
                <p className="issuer">Coursera</p>
                <p className="issue-date">Issued Oct 2023</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/coursera-logo.png" alt="Coursera" />
              </div>
              <div className="cert-content">
                <h3>Linear Algebra for Machine Learning and Data Science</h3>
                <p className="issuer">Coursera</p>
                <p className="issue-date">Issued Sep 2023</p>
              </div>
            </div>

            <div className="certification-card" data-aos="fade-up">
              <div className="cert-logo">
                <img src="/logos/udemy-logo.png" alt="Udemy" />
              </div>
              <div className="cert-content">
                <h3>Programming with Python: HandsOn Introduction for Beginners</h3>
                <p className="issuer">Udemy</p>
                <p className="issue-date">Issued Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;