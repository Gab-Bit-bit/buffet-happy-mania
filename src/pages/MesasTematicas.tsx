import React, { useMemo, useState } from "react";
import "./Pages.css";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 15;

const mesas = [
  { src: "/images-webp/mesas-tematicas/mesa-02.webp", alt: "Mesa temática decorada - foto 2" },
  { src: "/images-webp/mesas-tematicas/mesa-03.webp", alt: "Mesa temática decorada - foto 3" },
  { src: "/images-webp/mesas-tematicas/mesa-04.webp", alt: "Mesa temática decorada - foto 4" },
  { src: "/images-webp/mesas-tematicas/mesa-05.webp", alt: "Mesa temática decorada - foto 5" },
  { src: "/images-webp/mesas-tematicas/mesa-06.webp", alt: "Mesa temática decorada - foto 6" },
  { src: "/images-webp/mesas-tematicas/mesa-07.webp", alt: "Mesa temática decorada - foto 7" },
  { src: "/images-webp/mesas-tematicas/mesa-08.webp", alt: "Mesa temática decorada - foto 8" },
  { src: "/images-webp/mesas-tematicas/mesa-09.webp", alt: "Mesa temática decorada - foto 9" },
  { src: "/images-webp/mesas-tematicas/mesa-10.webp", alt: "Mesa temática decorada - foto 10" },
  { src: "/images-webp/mesas-tematicas/mesa-11.webp", alt: "Mesa temática decorada - foto 11" },
  { src: "/images-webp/mesas-tematicas/mesa-12.webp", alt: "Mesa temática decorada - foto 12" },
  { src: "/images-webp/mesas-tematicas/mesa-13.webp", alt: "Mesa temática decorada - foto 13" },
  { src: "/images-webp/mesas-tematicas/mesa-14.webp", alt: "Mesa temática decorada - foto 14" },
  { src: "/images-webp/mesas-tematicas/mesa-15.webp", alt: "Mesa temática decorada - foto 15" },
  { src: "/images-webp/mesas-tematicas/mesa-16.webp", alt: "Mesa temática decorada - foto 16" },
  { src: "/images-webp/mesas-tematicas/mesa-17.webp", alt: "Mesa temática decorada - foto 17" },
  { src: "/images-webp/mesas-tematicas/mesa-18.webp", alt: "Mesa temática decorada - foto 18" },
  { src: "/images-webp/mesas-tematicas/mesa-19.webp", alt: "Mesa temática decorada - foto 19" },
  { src: "/images-webp/mesas-tematicas/mesa-20.webp", alt: "Mesa temática decorada - foto 20" },
  { src: "/images-webp/mesas-tematicas/mesa-22.webp", alt: "Mesa temática decorada - foto 22" },
  { src: "/images-webp/mesas-tematicas/mesa-23.webp", alt: "Mesa temática decorada - foto 23" },
  { src: "/images-webp/mesas-tematicas/mesa-24.webp", alt: "Mesa temática decorada - foto 24" },
  { src: "/images-webp/mesas-tematicas/mesa-25.webp", alt: "Mesa temática decorada - foto 25" },
  { src: "/images-webp/mesas-tematicas/mesa-26.webp", alt: "Mesa temática decorada - foto 26" },
  { src: "/images-webp/mesas-tematicas/mesa-27.webp", alt: "Mesa temática decorada - foto 27" },
  { src: "/images-webp/mesas-tematicas/mesa-28.webp", alt: "Mesa temática decorada - foto 28" },
  { src: "/images-webp/mesas-tematicas/mesa-29.webp", alt: "Mesa temática decorada - foto 29" },
  { src: "/images-webp/mesas-tematicas/mesa-30.webp", alt: "Mesa temática decorada - foto 30" },
  { src: "/images-webp/mesas-tematicas/mesa-31.webp", alt: "Mesa temática decorada - foto 31" },
  { src: "/images-webp/mesas-tematicas/mesa-32.webp", alt: "Mesa temática decorada - foto 32" },
  { src: "/images-webp/mesas-tematicas/mesa-33.webp", alt: "Mesa temática decorada - foto 33" },
  { src: "/images-webp/mesas-tematicas/mesa-34.webp", alt: "Mesa temática decorada - foto 34" },
  { src: "/images-webp/mesas-tematicas/mesa-35.webp", alt: "Mesa temática decorada - foto 35" },
  { src: "/images-webp/mesas-tematicas/mesa-37.webp", alt: "Mesa temática decorada - foto 37" },
  { src: "/images-webp/mesas-tematicas/mesa-38.webp", alt: "Mesa temática decorada - foto 38" },
  { src: "/images-webp/mesas-tematicas/mesa-39.webp", alt: "Mesa temática decorada - foto 39" },
];

export default function MesasTematicas() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = mesas.length;

  const paginatedMesas = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return mesas.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="titulo">
      <h2>Mesas Temáticas</h2>
      <div className="subtitulo">
        <p>Conheça todas nossas mesas temáticas para tornar a sua festa mais especial, com decoração personalizada e visual encantador para aniversários.</p>
      </div>
      <div className="img-container">
        {paginatedMesas.map((mesa) => (
          <img
            key={mesa.src}
            loading="lazy"
            src={mesa.src}
            alt={mesa.alt}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={PAGE_SIZE}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
