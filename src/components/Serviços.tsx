import React from "react";
import "./Serviços.css";
import { Link } from "react-router-dom";

const Servicos: React.FC = () => {
  return (
    <section className="areasDeAtuacao">
      <h2 className="titulo-servicos">
        Tudo para <span>Encantar Sua Festa</span>
      </h2>
      <p className="subtitulo-servicos">
        Descubra tudo o que oferecemos para tornar sua festa única e
        inesquecível.
      </p>
      <div className="serviços-container">
        <Link to="/servicos/ambientes" className="areas-card">
          <img loading="lazy" src="/images-webp/Salão/salaoCard.webp" alt="salao" />
          <p>Ambientes</p>
        </Link>
        <Link to="/mesas-tematicas" className="areas-card">
          <img loading="lazy" src="/images-webp/Mesas Temáticas/Safári Luxo/mesaZoologico.webp" alt="mesas temáticas" />
          <p>Mesas Temáticas</p>
        </Link>
        <Link to="/servicos/arcade" className="areas-card">
          <img loading="lazy" src="/images-webp/Arcade/arcade6.webp" alt="arcade" />
          <p>Arcade</p>
        </Link>
        <Link to="/servicos/cardapio" className="areas-card">
          <img
            loading="lazy"
            src="/images-webp/CardápioBuffet/cardapio.webp"
            alt="cardapio"
          />
          <p>Cardápio</p>
        </Link>
        <Link to="/servicos/bar" className="areas-card">
          <img loading="lazy" src="/images-webp/Bebidas/drinks.webp" alt="bebidas" />
          <p>Bar / Bebidas</p>
        </Link>
      </div>
    </section>
  );
};

export default Servicos;
