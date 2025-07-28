import AnimatedBackground from './animations/AnimatedBackground';

const AboutUsSection = () => {
  return (
    <div className="relative z-0 py-16 text-white overflow-hidden">
      {/* Fondo animado con opacidad reducida */}
      <AnimatedBackground
        lineColors={["via-neutral-50", "via-green-300", "via-cian-300"]}
        opacity={0.15}
        baseSpeed={3}
      />
      {/* Capa oscura semitransparente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Encabezado con efecto especial */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
              Sobre Nosotros
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
        </div>

        {/* Contenido principal en grid responsive */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Imagen con efecto */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/70 to-cyan-400/70 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <img
              src="/equipo-tecnico.jpg"
              alt="Nuestro equipo técnico"
              className="relative w-full h-auto rounded-lg shadow-xl border-4 border-gray-800/50 backdrop-blur-sm"
            />
          </div>

          {/* Columna derecha - Texto con mejor contraste */}
          <div className="space-y-6 backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl hover:border-cyan-400 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-100">
              Conectando comunidades desde 2015
            </h3>

            <p className="text-lg text-gray-200 leading-relaxed">
              Somos el proveedor líder de servicios de internet en la región, dedicados a ofrecer conexiones
              rápidas, estables y accesibles para hogares y negocios.
            </p>

            {/* Lista de valores */}
            <ul className="space-y-4">
              {[
                "+10,000 clientes satisfechos en toda la región",
                "Tecnología de punta con fibra óptica y redes 5G",
                "Soporte técnico disponible 24/7"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-200">
                    <strong className="text-cyan-100">{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}
                  </span>
                </li>
              ))}
            </ul>

            {/* Botón CTA con efecto de neón */}
            <div className="pt-6">
              <button onClick={() => document.getElementById('equipo-section')?.scrollIntoView({ behavior: 'smooth' })} className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-lg hover:shadow-cyan-500/30 group">
                <span className="relative z-10">Conoce nuestro equipo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition duration-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas destacadas con efecto vidrio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "99.9%", label: "Uptime garantizado" },
            { value: "24/7", label: "Soporte técnico" },
            { value: "+50", label: "Comunidades servidas" },
            { value: "10Gbps", label: "Velocidad máxima" }
          ].map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-gray-800/30 p-6 rounded-xl text-center border border-gray-700/50 hover:border-cyan-400/50 transition duration-300 hover:bg-gray-800/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{item.value}</div>
              <div className="text-gray-200">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section id="equipo-section" className='py-20 h-screen'>
        <div className="container mx-auto px-4 max-w-6xl">

        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;