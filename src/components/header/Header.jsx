import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Activatr
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`side-menu ${menuOpen ? "open" : ""}`}>
          {/* Close button for sidebar */}
          {menuOpen && (
            <div className="close-button" onClick={closeMenu}>
              &times;
            </div>
          )}
          {/* Side menu items */}
          <ul className="menu-list">
            <li>Home</li>
            <li>Campaign Ideas</li>
            <li>Metric Measures</li>
            <li>Create Camapaign</li>
          </ul>
        </div>
        <div className="content">
          <div className="right">
            <div>
              
            </div>
          </div>
          <div className="left">
            <div className="title">
              <h1>
                Unlock Growth with ACTIVATR: Optimize Strategies, Empower
                Businesses.
              </h1>
              <p className="description">
                Experience precision marketing through geolocation targeting,
                AI-driven insights, and secure offline storage for enhanced data
                accessibility and security.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
