import React, { useState, useEffect } from "react";
import "./Nav.css";
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleSectionNavigation = (sectionId?: string) => {
    setMenuOpen(false);

    if (!sectionId) {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      navigate("/");
      return;
    }

    if (isHome) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
              e.preventDefault();
              handleSectionNavigation();
            }}
          >
            Home
          </Link>
          <Link
            to="/#sobre"
            className="links"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation("sobre");
            }}
          >
            Sobre
          </Link>
          <Link
            to="/#servicos"
            className="links"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation("servicos");
            }}
          >
            Serviços
          </Link>
          <Link
            to="/#feedbacks"
            className="links"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation("feedbacks");
            }}
          >
            Feedbacks
          </Link>
          <Link
            to="/#contato"
            className="links"
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation("contato");
            }}
          >
            Contato
          </Link>
        </nav>
      </div>
      <button
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Fechar menu de navegação"
      />
    </header>
  );
};

export default Navbar;
