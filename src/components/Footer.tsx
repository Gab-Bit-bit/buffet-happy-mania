import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-content">
        <div className="bio-area">
          <h3>Buffet Happy Mania</h3>
          <p>
            O Buffet Happy Mania convida você para realização de sua festa. Para
            completar a diversão o Happy Mania tem brinquedos incríveis que
            certamente irão fazer a alegria das crianças. Garantia aos pais de
            um serviço responsável, cuidadoso e de muita qualidade, o Happy
            Mania tem o compromisso em realizar festas com toda a praticidade
            para quem busca estes serviços.
          </p>
        </div>

        <div className="buffet-info">
          <h3>Unidade Mooca</h3>
          <div className="whatsapp-links">
            <a
              href="https://wa.me/5511947497395"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              (11) 94749-7395
            </a>
            <a
              href="https://wa.me/5511969279779"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              (11) 96927-9779
            </a>
            <a
              href="mailto:buffet@happymania.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link email-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#fff",
                marginTop: "4px",
              }}
            >
              <svg
                style={{ marginRight: "7px" }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z" />
              </svg>
              buffet@happymania.com.br
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Enta,+253,+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link location-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#fff",
                marginTop: "4px",
              }}
            >
              <svg
                style={{ marginRight: "7px" }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Rua Enta, 253, SP
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
                gap: "8px",
                color: "#fff",
                fontSize: "15px",
              }}
            >
              <span style={{ marginRight: "8px" }}>Social:</span>
              <a
                href="https://www.instagram.com/buffethappymania/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#fff",
                }}
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 7.7 353.3 6c-35.3-1.7-138.6-1.7-173.9 0-35.3 1.7-66.7 9.9-92.1 36.2S7.7 123.4 6 158.7c-1.7 35.3-1.7 138.6 0 173.9 1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.3 1.7 138.6 1.7 173.9 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.3 1.7-138.6 0-173.9zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" />
                </svg>
              </a>
              <span style={{ color: "#fff", margin: "0 6px", fontWeight: 400 }}>
                |
              </span>
              <a
                href="https://www.facebook.com/buffethappymania/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#fff",
                }}
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
              <span style={{ color: "#fff", margin: "0 6px", fontWeight: 400 }}>
                |
              </span>
              <a
                href="https://www.tiktok.com/@buffethappymania0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#fff",
                }}
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M34.5 7c0 4.7 3.8 8.5 8.5 8.5v5.1c-2.3.2-4.6-.2-6.7-1.2v13.7c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.2 0 .5 0 .7 0v5.2c-.2 0-.5-.1-.7-.1-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8V7h5.4z"
                      fill="#fff"
                    />
                    <path
                      d="M34.5 7c0 4.7 3.8 8.5 8.5 8.5v5.1c-2.3.2-4.6-.2-6.7-1.2v13.7c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.2 0 .5 0 .7 0v5.2c-.2 0-.5-.1-.7-.1-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8V7h5.4z"
                      fill="#25F4EE"
                    />
                    <path
                      d="M41.7 20.6c-2.3.2-4.6-.2-6.7-1.2v13.7c0 7.2-5.8 13-13 13-4.2 0-7.9-2-10.3-5.1 2.3 2.1 5.4 3.4 8.7 3.4 7.2 0 13-5.8 13-13V19.4c2.1 1 4.4 1.4 6.7 1.2v-5.1c-1.1 0-2.2-.2-3.2-.5v5.6z"
                      fill="#FE2C55"
                    />
                    <path
                      d="M21.3 35.7c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8c.2 0 .5 0 .7.1v-5.2c-.2 0-.5-.1-.7-.1-7.2 0-13 5.8-13 13 0 4.2 2 7.9 5.1 10.3 2.1 1.9 4.8 3.1 7.9 3.1 2.1 0 4.1-.6 5.8-1.6-1.1.3-2.2.5-3.4.5z"
                      fill="#fff"
                    />
                    <path
                      d="M21.3 35.7c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8c.2 0 .5 0 .7.1v-5.2c-.2 0-.5-.1-.7-.1-7.2 0-13 5.8-13 13 0 4.2 2 7.9 5.1 10.3 2.1 1.9 4.8 3.1 7.9 3.1 2.1 0 4.1-.6 5.8-1.6-1.1.3-2.2.5-3.4.5z"
                      fill="#FE2C55"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#232323",
          color: "#f5f5f5",
          fontSize: "15px",
          borderTop: "1px solid #444",
          marginTop: "18px",
          minHeight: "38px",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 400,
            marginTop: "10px",
          }}
        >
          Criador
          <span style={{ color: "#888", margin: "0 6px" }}>|</span>
          <a
            href="https://github.com/Gab-Bit-bit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffa500")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f5f5")}
          >
            Gabriel de Conto
          </a>
          <img
            loading="lazy"
            src="/images-webp/Criador/meuPerfil.webp"
            alt="Gabriel de Conto"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "8px",
              border: "2px solid #ffa500",
              boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
            }}
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
