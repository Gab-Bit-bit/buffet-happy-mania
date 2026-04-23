import React from "react";
import "./SobreBuffet.css";

const QuemCuida: React.FC = () => {
  return (
    <div className="sobreBuffet-container">
      <h2 className="titulo-sobreBuffet">
        Sobre o <span>Buffet Happy Mania</span>
      </h2>
      <p className="subtitulo-sobreBuffet">Transformamos sonhos em festas alegres e inesquecíveis.</p>
      
      <div className="buffet-content">
        <div className="buffet-photo">
          <img loading="lazy" src="/images-webp/entradaBuffet.webp" alt="Salão Principal do Buffet Happy Mania" />
        </div>
        
        <div className="buffet-bio">
          <h3>Nossa História</h3>
          <p>
            O Buffet Happy Mania nasceu da paixão por criar momentos mágicos e inesquecíveis. 
            Com quase 30 anos de experiência no mercado de eventos, nos dedicamos a transformar 
            cada celebração em uma experiência única e personalizada.
          </p>
          
          <p>
            Nossa missão é proporcionar não apenas um local para festas, mas um espaço onde 
            sonhos se realizam. Com uma equipe dedicada e experiente, oferecemos serviços 
            completos que incluem decoração, buffet, animação e toda a infraestrutura necessária 
            para que seu evento seja perfeito.
          </p>
          
          <p>
            O salão principal, com capacidade para até 200 convidados, foi projetado para 
            oferecer conforto e elegância. Nossa cozinha prepara pratos deliciosos com ingredientes 
            frescos e de qualidade, garantindo uma experiência gastronômica excepcional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemCuida;
