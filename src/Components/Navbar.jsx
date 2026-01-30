import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "skills", label: "Skills", icon: "💻" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span
            className="logo-text"
            onClick={() => {
              scrollToSection("home");
            }}
          >
            Sidharth
          </span>
          <div className="logo-underline"></div>
        </div>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`navbar-link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <div className="nav-indicator"></div>
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <button
            className="cta-button"
            onClick={() => scrollToSection("contact")}
          >
            <span>Contact</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
