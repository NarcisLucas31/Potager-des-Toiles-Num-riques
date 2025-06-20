import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // ferme le menu au changement de route
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-img" />
        </Link>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/Apropos"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            À propos
          </NavLink>
          <NavLink
            to="/Projets"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projets
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button className="btn-dark">Contact</button>
          </NavLink>
        </ul>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
