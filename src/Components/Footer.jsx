import React from "react";
import "./Footer.css";

const Footer = () => {
  const contactInfo = {
    email: "sidharthkamble911@gmail.com",
    phone: "+91 7841912372",
    location: "India",
  };

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "https://github.com/Sidharth461" },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/yourusername",
    },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/yourusername" },
    { name: "Email", icon: "📧", url: `mailto:${contactInfo.email}` },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          {/* Contact Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="contact-value"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="contact-value"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-nav">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#skills" className="footer-link">
                Skills
              </a>
              <a href="#education" className="footer-link">
                Education
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sidharth. All rights reserved.
          </p>
          <p className="footer-tagline">Built with Using React.js & CSS</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration decoration-1"></div>
      <div className="footer-decoration decoration-2"></div>
      <div className="footer-decoration decoration-3"></div>
    </footer>
  );
};

export default Footer;
