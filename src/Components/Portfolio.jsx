import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles.css";
import myPhoto from "../assets/profile.jpg";

const Portfolio = () => {
  // State for profile photo - user can update this
  const [profilePhoto, setProfilePhoto] = useState(myPhoto);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Skills data
  const skills = [
    {
      name: "Java",
      icon: "☕",
      description:
        "Object-oriented programming and enterprise application development",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Modern ES6+ features and asynchronous programming",
    },
    {
      name: "React.js",
      icon: "⚛️",
      description: "Building interactive UIs with components and hooks",
    },
    {
      name: "SQL Database",
      icon: "🗄️",
      description: "Database design, queries, and management",
    },
  ];

  // Education data - easily editable
  const education = [
    {
      year: "2020 - 2024",
      degree:
        "B.E Computer Science Artificial Intelligence And Machine Learning",
      school: "University Of Mumbai",
      description:
        "Focused on software development, algorithms, and web technologies",
    },
    {
      year: "2019 - 2020",
      degree: "Higher Secondary Education",
      school: "New English Junior & College",
      description: "Science stream with Computer Science",
    },
    {
      year: "2018 - 2020",
      degree: "Secondary School Education",
      school: "New English High School",
      description: "Science stream with Computer Science",
    },
  ];

  return (
    <div className="portfolio">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section gradient-bg" id="home">
        <div className="hero-content">
          <div className="profile-photo-container">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Sidharth"
                className="profile-photo"
                onClick={() => setIsModalOpen(true)}
              />
            ) : (
              <div className="profile-placeholder">S</div>
            )}
          </div>

          {isModalOpen && (
            <div className="photo-modal" onClick={() => setIsModalOpen(false)}>
              <div className="photo-modal-content">
                <img src={profilePhoto} alt="Sidharth enlarged" />
              </div>
            </div>
          )}

          <h1 className="hero-title">Sidharth Kamble</h1>
          <p className="hero-subtitle">Front-end Developer</p>
          <p className="hero-description">
            Passionate about crafting visually stunning, highly responsive, and
            user‑friendly web applications that seamlessly blend modern design
            principles with cutting‑edge technologies. I strive to deliver
            digital experiences that are not only aesthetically pleasing but
            also intuitive, accessible, and optimized for performance, ensuring
            that every project reflects best practices and a commitment to
            excellence
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid perspective-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div
                key={index}
                className="education-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="education-card">
                  <div className="education-year">{edu.year}</div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
