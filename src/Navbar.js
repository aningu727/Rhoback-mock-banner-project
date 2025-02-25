import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img
            src="../assets/rhoback-logo-newest.png"
            alt="Rhoback Logo"
            className="logo-image"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
