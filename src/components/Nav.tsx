import React, { useState, useEffect } from "react";
import "./Nav.css";
import {
  useLocation,
  Link,
} from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "navbar-home" : "navbar-default"
      }`}
    >
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menu de navegação"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="logo">
        <figure>
          <img src="/images-webp/logoBuffet.webp" alt="Logo Buffet" />
        </figure>
      </div>
      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <Link
            to="/"
            className="links"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/#servicos-cards"
            className="links"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const el = document.getElementById("servicos-cards");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
          >
            Serviços
          </Link>
          <Link
            to="/mesas-tematicas"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Mesas Temáticas
          </Link>
          <Link
            to="/servicos/ambientes"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Ambientes
          </Link>
          <Link
            to="/servicos/cardapio"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Cardápio
          </Link>
          <Link
            to="/servicos/arcade"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Arcade
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
