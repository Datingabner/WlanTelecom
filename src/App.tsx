import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Test_velocidad from './components/Test_Velocidad';
import Nosotros from './components/Nosotros';
import Cobertura from './components/Cobertura';
import Contact from './components/Contact';
import ContratacionForm from './components/page/Contratacion';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
function App() {
  return (
    <Router >
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test_velocidad" element={<Test_velocidad />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cobertura" element={<Cobertura />} />
        <Route path="/contactanos" element={<Contact />} />
        {/* <Route path="/planes" element={<Planes />} /> */}
        <Route path="/pages/contratacion" element={<ContratacionForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {<Footer />}
    </Router>

  )
}

export default App
