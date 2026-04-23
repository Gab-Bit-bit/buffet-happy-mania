import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ScrollToTop from "./components/utils/scrollToTop";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Arcade from "./pages/Arcade";
import Ambientes from "./pages/Ambientes";
import Bar from "./pages/Bar";
import Cardapio from "./pages/Cardapio";
import Mesas from "./pages/MesasTematicas";


export default function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/bar" element={<Bar />} />
          <Route path="/servicos/ambientes" element={<Ambientes />} />
          <Route path="/servicos/cardapio" element={<Cardapio />} />
          <Route path="/servicos/arcade" element={<Arcade />} />
          <Route path="/mesas-tematicas" element={<Mesas />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}
