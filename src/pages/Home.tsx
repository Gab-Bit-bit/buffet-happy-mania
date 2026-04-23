import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SobreBuffet from '../components/SobreBuffet';
import Serviços from '../components/Serviços';

const backgroundImages = [
  '/images-webp/Salão/upSalao.webp',
  '/images-webp/Salão/salaoPrincipal.webp',
  '/images-webp/Salão/copa2.webp'
];

const HomeContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Troca automática de imagem a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 300); // tempo da transição
    }, 3500); // tempo entre trocas

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className={`hero ${isTransitioning ? 'transitioning' : ''}`}
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      >
        <div className="overlay" />

        <div className="hero-content">
          <h1>BEM-VINDO<br />AO BUFFET HAPPY MANIA</h1>
          <Link to="/servicos/ambientes" className="link-areas">Conheça nosso Salão</Link>
        </div>
      </section>
    </div>
  );
};

export default function Home() {
  const areasRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HomeContent />
      <SobreBuffet />
      <div ref={areasRef} id="servicos-cards">
        <Serviços />
      </div>
    </>
  );
}
