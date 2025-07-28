import { useState } from 'react'; // Añade esto al inicio
import { FiZap, FiGlobe, FiClock, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SpaceBackground from './animations/SpaceBackground';
import ContactSection from './Contact';




const HomePage = () => {
  const navigate = useNavigate();

  const handleContratar = (plan: any) => {
    navigate('/pages/contratacion', { state: { selectedPlan: plan } });
  };
  const [tipoRed, setTipoRed] = useState<'fibra' | 'inalambrico'>('fibra'); // Estado para el tipo de red

  const planesPorTipo = {
    fibra: [
      {
        name: "Básico Fibra",
        speed: "100 Mbps",
        price: "$299",
        features: ["Para 5 dispositivos", "Fibra óptica", "Soporte básico"]
      },
      {
        name: "Avanzado Fibra",
        speed: "300 Mbps",
        price: "$499",
        popular: true,
        features: ["Para 10 dispositivos", "Fibra óptica", "Prioridad en soporte"]
      },
      {
        name: "Premium Fibra",
        speed: "1 Gbps",
        price: "$899",
        features: ["Ilimitado", "Fibra + 5G", "Soporte 24/7 VIP"]
      }
    ],
    inalambrico: [
      {
        name: "Básico Inalámbrico",
        speed: "50 Mbps",
        price: "$199",
        features: ["Para 3 dispositivos", "Conexión estable", "Soporte básico"]
      },
      {
        name: "Avanzado Inalámbrico",
        speed: "100 Mbps",
        price: "$349",
        popular: true,
        features: ["Para 8 dispositivos", "Baja latencia", "Prioridad en soporte"]
      },
      {
        name: "Premium Inalámbrico",
        speed: "200 Mbps",
        price: "$599",
        features: ["Ilimitado", "Antena dedicada", "Soporte 24/7"]
      }
    ]
  };

  return (
    <div>
      <main>
        <div className="relative overflow-hidden">
          {/* --- Hero Section con SpaceBackground --- */}
          <div className="relative mt-31">
            <SpaceBackground
              height="h-screen"
              starDensity={8}
              starSize={2}
              animationSpeed={1}
              avoidHeader={false}
            />

            {/* Contenido del Hero SUPERPUESTO */}
            <div className="absolute mt-30 inset-0 flex items-center justify-center text-center px-4 pt-20 pb-32 z-10">
              <div className="max-w-6xl mx-auto">
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400'>(Los datos aun no son oficiales, la pagina sigue en desarrollo)</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
                    Internet {tipoRed === 'fibra' ? 'de Fibra Óptica' : 'Inalámbrico'}
                  </span>
                  <br />
                  <span className="text-xl md:text-2xl font-light text-gray-300 mt-4 block">
                    {tipoRed === 'fibra'
                      ? 'Velocidad sin límites para tu hogar o negocio'
                      : 'Cobertura amplia en zonas rurales y urbanas'}
                  </span>
                </h1>

                <div className="flex flex-wrap justify-center gap-4 mt-10">
                  <button
                    onClick={() => handleContratar(planesPorTipo["fibra"][1])} // Plan Avanzado por defecto
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-green-600 transition duration-300 shadow-lg hover:shadow-cyan-500/30"
                  >
                    Contrata Ahora
                  </button>
                  <button
                    onClick={() => document.getElementById('planes-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition duration-300"
                  >
                    Ver Planes
                  </button>
                </div>

                {/* Stats en el Hero */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
                  {[
                    { icon: <FiZap className="text-2xl text-cyan-400" />, value: "1Gbps", label: "Velocidad Máxima" },
                    { icon: <FiGlobe className="text-2xl text-green-400" />, label: "Cobertura", value: "+50 zonas" },
                    { icon: <FiClock className="text-2xl text-purple-400" />, label: "Soporte", value: "24/7" },
                    { icon: <FiAward className="text-2xl text-yellow-400" />, label: "Garantía", value: "99.9%" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-900/30 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/40 transition duration-300">
                      <div className="flex items-center justify-center gap-2">
                        {item.icon}
                        <div>
                          <p className="text-2xl font-bold text-white">{item.value}</p>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- Sección de Destacados --- */}
          <section className="py-20 bg-gradient-to-b from-black to-black/80">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
                  ¿Por qué elegirnos?
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Fibra Óptica Directa",
                    description: "Conexión simétrica sin pérdidas de velocidad.",
                    icon: "⚡"
                  },
                  {
                    title: "Sin Contratos",
                    description: "Cambia o cancela cuando lo necesites.",
                    icon: "🔓"
                  },
                  {
                    title: "Tecnología 5G",
                    description: "Para zonas rurales sin cableado.",
                    icon: "📶"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-900/30 p-6 rounded-xl border border-gray-400/20 hover:border-cyan-400/40 transition duration-300 backdrop-blur-sm">
                    <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                    <h3 className="text-xl font-bold text-cyan-100 mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Sección de Planes --- */}
          <section id="planes-section" className="py-20 bg-gradient-to-b from-black/80 to-black">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex justify-center items-center mb-8 gap-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
          Nuestros Planes
        </span>
      </h2>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center m-7"> {/* Contenedor centrado */}
  <button
    onClick={() => setTipoRed(tipoRed === 'fibra' ? 'inalambrico' : 'fibra')}
    className={`
      relative flex items-center h-15 rounded-sm px-1 bg-black/50 backdrop-blur-sm  hover:border-cyan-400/40
       transition duration-300 focus:outline-none border border-gray-500/50 
       ${tipoRed === 'fibra' ? 'justify-start' : 'justify-end'}
    `}
    style={{ width: '200px' }} // Ancho fijo para contener ambas opciones
  >
    {/* Fondo activo */}
    <span
      className={`
        absolute h-11 rounded-sm px-1 border-cyan-400/40 focus:outline-none border  
        ${tipoRed === 'fibra' ? 'left-1 w-21  clip-left-active' : 'left-[calc(100%-8rem-0.25rem)] clip-right-active  w-33'}
      `}
    />

    {/* Texto "Fibra" */}
    <span
      className={`
        relative z-10 mx-2 text-sm md:text-lg font-semibold transition-transform duration-100  clip-left
        ${tipoRed === 'fibra' ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 scale-100 ' : 'text-gray-400 scale-95 translate-y-0.5'}
      `}
    >
      Fibra
    </span>

    {/* Texto "Inalámbrico" */}
    <span
      className={`
        relative z-10 mx-2 ml-2 text-sm md:text-lg font-semibold transition-transform duration-100 clip-right
        ${tipoRed === 'inalambrico' ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 scale-100 ' : 'text-gray-400 scale-95 translate-y-0.5'}
      `}
    >
      Inalámbrico
    </span>
  </button>
</div>


    {/* Renderizado de planes según el tipo de red */}
    <div className="grid lg:grid-cols-3 gap-8">
      {planesPorTipo[tipoRed].map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden border-2 ${
            plan.popular
              ? "border-cyan-400/40 scale-105 hover:border-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/20"
              : "border-gray-700 hover:border-gray-400/70 transition duration-300"
          }`}
        >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 text-sm font-bold">
                        POPULAR
                      </div>
                    )}
                    <div className="p-6 bg-gray-900/30 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-4xl font-bold text-cyan-400 mb-4">{plan.price}<span className="text-lg text-gray-400">/mes</span></p>
                      <p className="text-xl text-green-400 mb-6">{plan.speed}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleContratar(plan)}
                        className={`w-full py-3 rounded-lg font-bold ${plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
                          : "bg-gray-700 hover:bg-gray-600"
                          }`}
                      >
                        Contratar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Sección de Contacto --- */}
          <ContactSection />
        </div>
      </main>  {/* Estilos para los cortes diagonales */}
      <style>{`
        
        .clip-left-active {
        background : #000000;
          clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
        }
        .clip-right-active {
        background : #000000;
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
    
  );
};

export default HomePage;