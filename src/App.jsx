import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Screens/Inicio";
import SobreNos from "./Screens/SobreNos";
import Servicios from "./Screens/Servicios";
import Galeria from "./Screens/Galeria";
import Invertir from "./Screens/Invertir";
import Noticias from "./Screens/Noticias";
import NavbarLog from './Components/NavbarLog';
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { Comercializacion } from "./Screens/Comercializacion";
import Asociados from "./Screens/Asociados";
import { Inversionistas } from "./Screens/Inversionistas";
import { Autenticar } from "./Screens/Autenticar";
import Calculadora from "./Screens/Calculadora";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        {isLoggedIn ? (
          <NavbarLog handleLogout={handleLogout} />
        ) : (
          <Navbar handleLogin={handleLogin} />
        )} {/* Renderizado condicional */}

        <Routes>
          <Route path="" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/invertir" element={<Invertir />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/comercializacion" element={<Comercializacion />} />
          <Route path="/asociados" element={<Asociados />} />
          <Route path="/Inversionistas" element={<Inversionistas />} />
          <Route path="/Autenticar" element={<Autenticar />} />
          <Route path="/Calculadora" element={<Calculadora />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
