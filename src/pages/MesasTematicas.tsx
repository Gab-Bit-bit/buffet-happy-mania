import React, { useMemo, useState } from "react";
import "./Pages.css";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 15;

const mesas = [
  { src: "/images-webp/Mesas Temáticas/Aquatica/mesaAquatica.webp", alt: "mesa Aquatica" },
  { src: "/images-webp/Mesas Temáticas/Aquatica/mesaAquatica2.webp", alt: "mesa Aquatica" },
  { src: "/images-webp/Mesas Temáticas/Astronauta/mesaAstronauta.webp", alt: "mesa astronauta" },
  { src: "/images-webp/Mesas Temáticas/Baby Shark/mesaBabyShark.webp", alt: "mesa baby shark" },
  { src: "/images-webp/Mesas Temáticas/Balé/mesaBale.webp", alt: "mesa bale" },
  { src: "/images-webp/Mesas Temáticas/Barbie/mesaBarbie.webp", alt: "mesa barbie" },
  { src: "/images-webp/Mesas Temáticas/Barbie/mesaBarbie2.webp", alt: "mesa barbie" },
  { src: "/images-webp/Mesas Temáticas/Black Pink/mesaBlackPink.webp", alt: "mesa black pink" },
  { src: "/images-webp/Mesas Temáticas/Bob Esponja/mesaBobEsponja.webp", alt: "mesa bob esponja" },
  { src: "/images-webp/Mesas Temáticas/Popt/mesaPopt.webp", alt: "mesa popt" },
  { src: "/images-webp/Mesas Temáticas/Popt/mesaPopt2.webp", alt: "mesa popt" },
  { src: "/images-webp/Mesas Temáticas/Borboleta/mesaBorboletas.webp", alt: "mesa borboleta" },
  { src: "/images-webp/Mesas Temáticas/Branca De Neve/mesaBrancaDeNeve.webp", alt: "mesa branca de neve" },
  { src: "/images-webp/Mesas Temáticas/Brawl Stars/mesaBrawlStars.webp", alt: "mesa brawl stars" },
  { src: "/images-webp/Mesas Temáticas/Brawl Stars/mesaBrawlStars2.webp", alt: "mesa brawl stars" },
  { src: "/images-webp/Mesas Temáticas/Carros/mesaCarros.webp", alt: "mesa carros" },
  { src: "/images-webp/Mesas Temáticas/Circo/mesaCirco.webp", alt: "mesa circo" },
  { src: "/images-webp/Mesas Temáticas/Corinthians/mesaCorinthians.webp", alt: "mesa corinthians" },
  { src: "/images-webp/Mesas Temáticas/Corinthians/mesaCorinthians2.webp", alt: "mesa corinthians" },
  { src: "/images-webp/Mesas Temáticas/Cowboy/mesaCowboy.webp", alt: "mesa cowboy" },
  { src: "/images-webp/Mesas Temáticas/Descendentes/mesaDescendentes.webp", alt: "mesa descendentes" },
  { src: "/images-webp/Mesas Temáticas/Disney/mesaDisney2.webp", alt: "mesa disney" },
  { src: "/images-webp/Mesas Temáticas/Divertidamente/mesaDivertidamente.webp", alt: "mesa divertidamente" },
  { src: "/images-webp/Mesas Temáticas/Dragon Ball/mesaDragonBall.webp", alt: "mesa dragon ball" },
  { src: "/images-webp/Mesas Temáticas/Encanto/mesaEncanto.webp", alt: "mesa encanto" },
  { src: "/images-webp/Mesas Temáticas/Enrolados/mesaEnrolados.webp", alt: "mesa enrolados" },
  { src: "/images-webp/Mesas Temáticas/Enrolados/mesaEnrolados2.webp", alt: "mesa enrolados" },
  { src: "/images-webp/Mesas Temáticas/Escolinha/mesaEscolinha.webp", alt: "mesa escolinha" },
  { src: "/images-webp/Mesas Temáticas/Festa Junina/mesaFestaJunina.webp", alt: "mesa festa junina" },
  { src: "/images-webp/Mesas Temáticas/Fortnite/mesaFortnite.webp", alt: "mesa fortnite" },
  { src: "/images-webp/Mesas Temáticas/Fortnite/mesaFortnite2.webp", alt: "mesa fortnite" },
  { src: "/images-webp/Mesas Temáticas/Rainbow Friends/mesaRainbowFriends.webp", alt: "mesa friend blue roblox" },
  { src: "/images-webp/Mesas Temáticas/Bluey/mesaBluey.webp", alt: "mesa bluey" },
  { src: "/images-webp/Mesas Temáticas/Frozen/mesaFrozen.webp", alt: "mesa frozen" },
  { src: "/images-webp/Mesas Temáticas/Frozen/mesaFrozen2.webp", alt: "mesa frozen" },
  { src: "/images-webp/Mesas Temáticas/Futebol/mesaFutebol.webp", alt: "mesa futebol" },
  { src: "/images-webp/Mesas Temáticas/Futebol/mesaFutebol2.webp", alt: "mesa futebol" },
  { src: "/images-webp/Mesas Temáticas/Galinha Pintadinha/mesaGalinhaPintadinha.webp", alt: "mesa galinha pintadinha" },
  { src: "/images-webp/Mesas Temáticas/Harry Potter/mesaHarryPotter.webp", alt: "mesa harry potter" },
  { src: "/images-webp/Mesas Temáticas/Harry Potter/mesaHarryPotter2.webp", alt: "mesa harry potter" },
  { src: "/images-webp/Mesas Temáticas/Hello Kitty/mesaHelloKitty.webp", alt: "mesa hello kitty" },
  { src: "/images-webp/Mesas Temáticas/Homem Aranha/mesaHomemAranha2.webp", alt: "mesa homem aranha" },
  { src: "/images-webp/Mesas Temáticas/Homem Aranha/mesaHomemAranhaInfantil.webp", alt: "mesa homem aranha" },
  { src: "/images-webp/Mesas Temáticas/Homem De Ferro/mesaHomemDeFerro.webp", alt: "mesa homem de ferro" },
  { src: "/images-webp/Mesas Temáticas/Jasmine/mesaJasmine.webp", alt: "mesa jasmine" },
  { src: "/images-webp/Mesas Temáticas/Jurassic Park/mesaJurassickPark.webp", alt: "mesa jurassic park" },
  { src: "/images-webp/Mesas Temáticas/Jurassic Park/mesaJurassickPark2.webp", alt: "mesa jurassic park" },
  { src: "/images-webp/Mesas Temáticas/La Casa De Papel/mesaLaCasaDePapel.webp", alt: "mesa la casa de papel" },
  { src: "/images-webp/Mesas Temáticas/Lady Bug/mesaLadyBug.webp", alt: "mesa lady bug" },
  { src: "/images-webp/Mesas Temáticas/Luluca/mesaLuluca.webp", alt: "mesa luluca" },
  { src: "/images-webp/Mesas Temáticas/Lego/mesaLego.webp", alt: "mesa lego" },
  { src: "/images-webp/Mesas Temáticas/Lilo Stitch/mesaLiloStitch.webp", alt: "mesa lilo stitch" },
  { src: "/images-webp/Mesas Temáticas/Lilo Stitch/mesaStitch.webp", alt: "mesa lilo stitch" },
  { src: "/images-webp/Mesas Temáticas/Lilo Stitch/mesaStitchAndAngel.webp", alt: "mesa lilo stitch" },
  { src: "/images-webp/Mesas Temáticas/LoL/mesaLol.webp", alt: "mesa lol" },
  { src: "/images-webp/Mesas Temáticas/Marcha e Urso/mesaMarchaEUrso.webp", alt: "mesa marcha e urso" },
  { src: "/images-webp/mesas Temáticas/Margarida/mesaMargarida.webp", alt: "mesa margarida" },
  { src: "/images-webp/Mesas Temáticas/Mario/mesaMario.webp", alt: "mesa mario" },
  { src: "/images-webp/Mesas Temáticas/Marvel/mesaMarvel.webp", alt: "mesa marvel" },
  { src: "/images-webp/Mesas Temáticas/Liga Da Justiça/mesaLigaDaJustiça.webp", alt: "liga da justiça" },
  { src: "/images-webp/Mesas Temáticas/Batman/mesaBatman.webp", alt: "mesa batman" },
  { src: "/images-webp/Mesas Temáticas/Mulher Maravilha/mesaMulherMaravilha.webp", alt: "mesa mulher maravilha" },
  { src: "/images-webp/Mesas Temáticas/Marvel/mesaMarvel2.webp", alt: "mesa marvel" },
  { src: "/images-webp/Mesas Temáticas/Marvel/mesaMarvel3.webp", alt: "mesa marvel" },
  { src: "/images-webp/Mesas Temáticas/Bolo Fofo/mesaBoloFofo.webp", alt: "mesa Bolo Fofo" },
  { src: "/images-webp/Mesas Temáticas/Toy Story/mesaToyStory.webp", alt: "mesa toy story" },
  { src: "/images-webp/Mesas Temáticas/Unicórnio/mesaUnicornio.webp", alt: "mesa unicornio" },
  { src: "/images-webp/Mesas Temáticas/Meninas Malvadas/mesaMeninasMalvadas.webp", alt: "mesa meninas malvadas" },
  { src: "/images-webp/Mesas Temáticas/Comunhão/mesaComunhão.webp", alt: "mesa comunhão" },
  { src: "/images-webp/Mesas Temáticas/Mesa Estrela Azul/mesaEstrelaAzul.webp", alt: "mesa estrela azul" },
  { src: "/images-webp/Mesas Temáticas/Mesa mix/mesaMinnieEHomemAranha.webp", alt: "mesa minnie e homem aranha" },
  { src: "/images-webp/Mesas Temáticas/Mesa mix/mesaOnePieceAndDivertidamente.webp", alt: "mesa one piece e divertidamente" },
  { src: "/images-webp/Mesas Temáticas/Mesa mix/mesaPjMasksEMinnie.webp", alt: "mesa pj masks e minnie" },
  { src: "/images-webp/Mesas Temáticas/Mesa mix/mesaPjMasksETarzan.webp", alt: "mesa pj masks e tarzan" },
  { src: "/images-webp/Mesas Temáticas/Mesa Prata/mesaPrata.webp", alt: "mesa prata" },
  { src: "/images-webp/Mesas Temáticas/Mesa Preta e Dourada/mesaDourada.webp", alt: "mesa dourada" },
  { src: "/images-webp/Mesas Temáticas/Mickey/mesaMickey.webp", alt: "mesa mickey" },
  { src: "/images-webp/Mesas Temáticas/Mickey Safári/mesaMickeySafari.webp", alt: "mesa mickey" },
  { src: "/images-webp/Mesas Temáticas/Minecraft/mesaMinecraft.webp", alt: "mesa minecraft" },
  { src: "/images-webp/Mesas Temáticas/Minions/mesaMinions.webp", alt: "mesa minions" },
  { src: "/images-webp/Mesas Temáticas/Minnie/mesaMinnie.webp", alt: "mesa minnie" },
  { src: "/images-webp/Mesas Temáticas/Minnie/mesaMinnie2.webp", alt: "mesa minnie" },
  { src: "/images-webp/Mesas Temáticas/Moana/mesaMoana.webp", alt: "mesa moana" },
  { src: "/images-webp/Mesas Temáticas/Monstros S.A/mesaMonstrosSa.webp", alt: "mesa monstros S.A" },
  { src: "/images-webp/Mesas Temáticas/Mundo Bita/mesaMundoBita.webp", alt: "mesa mundo bita" },
  { src: "/images-webp/Mesas Temáticas/Musica/mesaMusical1.webp", alt: "mesa musical" },
  { src: "/images-webp/Mesas Temáticas/Musica/mesaMusical2.webp", alt: "mesa musical" },
  { src: "/images-webp/Mesas Temáticas/Musica/mesaMusical3.webp", alt: "mesa musical" },
  { src: "/images-webp/Mesas Temáticas/Natal/mesaNatal.webp", alt: "mesa natal" },
  { src: "/images-webp/Mesas Temáticas/One Piece/mesaOnePiece.webp", alt: "mesa one piece" },
  { src: "/images-webp/Mesas Temáticas/Palmeiras/mesaPalmeiras.webp", alt: "mesa palmeiras" },
  { src: "/images-webp/Mesas Temáticas/Patrulha Canina/mesaPatrulhaCanina.webp", alt: "mesa patrulha canina" },
  { src: "/images-webp/Mesas Temáticas/Pequena Sereia/mesaPequenaSereia.webp", alt: "mesa pequena sereia" },
  { src: "/images-webp/Mesas Temáticas/Pequena Sereia/mesaPequenaSereia2.webp", alt: "mesa pequena sereia" },
  { src: "/images-webp/Mesas Temáticas/Pequena Sereia/mesaPequenaSereiaFilme.webp", alt: "mesa pequena sereia" },
  { src: "/images-webp/Mesas Temáticas/Pica Pau/mesaPicaPau.webp", alt: "mesa pica pau" },
  { src: "/images-webp/Mesas Temáticas/Plim Plim/mesaPlimPlim.webp", alt: "mesa plim plim" },
  { src: "/images-webp/Mesas Temáticas/Poderoso Chefinho/mesaPoderosoChefinho.webp", alt: "mesa poderoso chefinho" },
  { src: "/images-webp/Mesas Temáticas/Pokemon/mesaPokemon.webp", alt: "mesa pokemon" },
  { src: "/images-webp/Mesas Temáticas/Power Rangers/mesaPowerRangers.webp", alt: "mesa power rangers" },
  { src: "/images-webp/Mesas Temáticas/Princesa Peach/mesaPrincesaPeach.webp", alt: "mesa princesa peach" },
  { src: "/images-webp/Mesas Temáticas/Princesa e o Sapo/mesaPrincesaEOSapo.webp", alt: "mesa princesa e o sapo" },
  { src: "/images-webp/Mesas Temáticas/Princesa Candy/mesaPrincesaCandy.webp", alt: "mesa princesa candy" },
  { src: "/images-webp/Mesas Temáticas/Cinderela/mesaCinderela.webp", alt: "mesa cinderela" },
  { src: "/images-webp/Mesas Temáticas/Prunki Max/mesaPrunkiMax.webp", alt: "mesa prunki max" },
  { src: "/images-webp/Mesas Temáticas/Rei Leão/mesaReiLeao.webp", alt: "mesa rei leao" },
  { src: "/images-webp/Mesas Temáticas/Rei Leão/mesaReiLeao2.webp", alt: "mesa rei leao" },
  { src: "/images-webp/Mesas Temáticas/São Paulo/mesaSaoPaulo.webp", alt: "mesa sao paulo" },
  { src: "/images-webp/Mesas Temáticas/São Paulo/mesaSãoPaulo2.webp", alt: "mesa sao paulo" },
  { src: "/images-webp/Mesas Temáticas/Sonic/mesaSonic.webp", alt: "mesa sonic" },
  { src: "/images-webp/Mesas Temáticas/Sonic/mesaSonic2.webp", alt: "mesa sonic" },
  { src: "/images-webp/Mesas Temáticas/Stranger Things/mesaStrangerThings.webp", alt: "mesa stranger things" },
  { src: "/images-webp/Mesas Temáticas/Tartaruga Ninja/mesaTartarugaNinjas.webp", alt: "mesa tartaruga ninja" },
  { src: "/images-webp/Mesas Temáticas/TikTok/mesaTikTok.webp", alt: "mesa tiktok" },
  { src: "/images-webp/Mesas Temáticas/TikTok/mesaTikTok2.webp", alt: "mesa tiktok" },
  { src: "/images-webp/Mesas Temáticas/Transformers/mesaTransformers.webp", alt: "mesa transformers" },
  { src: "/images-webp/Mesas Temáticas/Turma Da Mônica/mesaTurmaDaMonica.webp", alt: "mesa turma da monica " },
  { src: "/images-webp/Mesas Temáticas/Turma Da Mônica/mesaTurmaDaMonica2.webp", alt: "mesa turma da monica " },
  { src: "/images-webp/Mesas Temáticas/Cebolinha/mesaCebolinha.webp", alt: "mesa cebolinha" },
  { src: "/images-webp/Mesas Temáticas/Ursinho Poo/mesaUrsinhoPoo.webp", alt: "mesa  ursinho poo" },
  { src: "/images-webp/Mesas Temáticas/Ursinhos Carinhosos/mesaUrsinhosCarinhosos.webp", alt: "mesa ursinhos carinhosos" },
  { src: "/images-webp/Mesas Temáticas/Wandinha/mesaWandinha.webp", alt: "mesa wandinha" },
  { src: "/images-webp/Mesas Temáticas/Safári Luxo/mesaZoologico.webp", alt: "mesa zoologico" },
  { src: "/images-webp/Mesas Temáticas/Hot Wheels/mesaHotWheels.webp", alt: "mesa hot wheels" },
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
        <p>Conheça nossas melhores mesas temáticas para a sua festa!</p>
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
