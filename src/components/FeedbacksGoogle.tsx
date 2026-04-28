import React from "react";
import "./FeedbacksGoogle.css";

type Review = {
  author: string;
  date: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    author: "Anderson H Tsuruta",
    date: "Avaliação no Google",
    text: "Salão de festa maravilhoso !!! Comida de primeira, atendimento do Fábio e sua equipe de primeira, diversos Brinquedos modernos. Eu e minha família adoramos e com certeza fazemos mais festas com vcs.",
    rating: 5,
  },
  {
    author: "Rodrigo Maniezzo",
    date: "Avaliação no Google",
    text: "Buffet perfeito em todos os sentidos. Comida com muita variedade, quantidade e excelente sabor. Tudo muito novo e funcionando perfeitamente, crianças e adultos aproveitam da mesma forma. Equipe do Buffet atenciosa e muito profissional.",
    rating: 5,
  },
  {
    author: "Samara Ramos de Araujo",
    date: "Avaliação no Google",
    text: "O melhor buffet que já fui ou fiz festa!!! Comida maravilhosa, ambiente amplo, limpo e organizado, atendimento desde o dono, até a gerente da festa, garçons, IMPECÁVEL! Absurdamente feliz em ter feito a festa da minha filha com vocês! 100% de aprovação dos nossos convidados!!!",
    rating: 5,
  },
  {
    author: "Eduardo Nardi",
    date: "Avaliação no Google",
    text: "Espetacular em atendimento, salgados, doces etc. Vale a pena recomendo com louvor. Local limpo, grande, arejado, bem instalado e pessoal comprometido com o que faz. Nota mil. Localização ótima, rua Enta, V. Prudente com estacionamento valet, excelente.",
    rating: 5,
  },
  {
    author: "Marjorie Coppola",
    date: "Avaliação no Google",
    text: "Segunda vez que comemoro o aniversário dos meus filhos nesse buffet. Impecável, desde os brinquedos até o atendimento, e principalmente o atendimento, as comidas, as bebidas. Tudo bem servido. Todos saíram das duas festas falando BEM A SEMANA TODA. Que se divertiram, comeram e bebendo bem.",
    rating: 5,
  },
  {
    author: "Samara Ramos de Araujo",
    date: "Avaliação no Google",
    text: "O melhor buffet que já fui ou fiz festa!!!! Comida maravilhosa, ambiente amplo, limpo e organizado, atendimento desde o dono, até a gerente da festa, garçons IMPECÁVEL! Absurdamente feliz em ter feito a festa da minha filha com vocês! 100% de aprovação dos nossos convidados!!!",
    rating: 5,
  },

];

const googleReviewsUrl =
  "https://www.google.com/search?q=Buffet+Happy+Mania+avalia%C3%A7%C3%B5es";

const FeedbacksGoogle: React.FC = () => {
  return (
    <section className="feedbacks-google-section" aria-label="Feedbacks 5 estrelas do Google">
      <div className="feedbacks-google-header">
        <h2>
          O que falam do <span>Buffet Happy Mania</span>
        </h2>
        <p>Avaliações reais do Google.</p>
      </div>

      <div className="feedbacks-google-grid">
        {reviews.map((review, index) => (
          <article key={`${review.author}-${index}`} className="feedback-card">
            <div className="feedback-card-top">
              <strong>{review.author}</strong>
              <span>{review.date}</span>
            </div>
            <p>{review.text}</p>
            <div className="feedback-stars" aria-label={`${review.rating} estrelas`}>
              {"★".repeat(review.rating)}
            </div>
          </article>
        ))}
      </div>

      <div className="feedbacks-google-cta">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="feedbacks-google-button"
        >
          Ver todos os depoimentos no Google
        </a>
      </div>
    </section>
  );
};

export default FeedbacksGoogle;
