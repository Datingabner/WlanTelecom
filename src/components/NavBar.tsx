import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/wlan_telecom_sin_fondo.png';
import CircuitAnimation from './animations/CircuitAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Configura el ScrollTrigger
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: { className:'header--scrolled', targets: 'header' }
    });

    // Limpieza al desmontar
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`bg-black text-white w-full h-[125px] z-20 shadow-lg fixed ${
      isMenuOpen ? "fixed mobile-menu-open" : ""    }`}>
      <div className="absolute inset-0 z-0 w-full h-full">
        <CircuitAnimation />
      </div>
      <div className="container mx-auto flex justify-between items-center p-4 relative">
          {/* Logo */}
        <Link to="/" className="w-50 w-min-49 w-max-51 bg-[#303030] border-2 border-[#93e0ff] rounded-[5px] shadow-[5px_5px_0px_0px_#9ff902] group transform transition-all duration-200 ease-in-out hover:scale-95 hover:translate-y-1">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Botón de menú para móviles */}
        <button
          className={`md:hidden top-0  p-4 bg-black  z-50 flex items-center transition-all duration-300 ${isMenuOpen ? "h-16" : "h-12"}`}
          onClick={toggleMenu}
        >
          <span className="md:hidden text-white text-3xl font-bold">
          
          </span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>

        {/* Menú de navegación en móviles */}
        
        <nav
          className={`absolute top-4 left-0 right-0 bg-black md:bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block mobile-menu-open" : "hidden"
          } md:flex md:relative md:top-0 md:bg-transparent md:items-center`}
        >
          <span className={`${isMenuOpen ? "flex" : "hidden"} w-50 w-min-49`}>
        {/* Logo */}
      <Link to="/" className={`${isMenuOpen ? "inline-block" : "hidden"} w-50 w-min-49 left-0 right-0 bg-[#303030] border-2 border-[#93e0ff] rounded-[5px] shadow-[5px_5px_0px_0px_#9ff902] overflow-hidden group transform transition-all duration-200 ease-in-out hover:scale-95 hover:translate-y-1`}>
        <img src={logo} alt="Logo" />
      </Link>
        </span>

          <ul className="flex flex-col md:flex-row md:space-x-6 items-center py-4 md:py-0">
            {[
              { name: "Inicio", path: "/" },
              { name: "Sobre Nosotros", path: "/Nosotros" },
              { name: "Test de Velocidad", path: "/Test_Velocidad" },
              { name: "Cobertura", path: "/Cobertura" },
              { name: "Contáctanos", path: "/Contactanos" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative inline-block text-white text-base px-[15px] py-[15px] bg-black border-2 border-[#93e0ff] rounded-[5px] shadow-[5px_5px_0px_0px_#9ff902] overflow-hidden group transform transition-all duration-200 ease-in-out hover:scale-95 hover:translate-y-1 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 w-0 h-full bg-[#93e0ff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
