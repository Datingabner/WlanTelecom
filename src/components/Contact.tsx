import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AdvancedMarker, Map, APIProvider } from '@vis.gl/react-google-maps';
import AnimatedBackground from './animations/AnimatedBackground';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // Configuración del mapa
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 19.2846852,  // Reemplaza con tu latitud
    lng: -99.6388038  // Reemplaza con tu longitud
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_dgxi3g9',   // Reemplaza con tu Service ID de EmailJS
      'template_kenyqzr',  // Reemplaza con tu Template ID
      formRef.current!,     // Referencia del formulario
      'uoGfyqY4ijelOdv1E'    // Reemplaza con tu Public Key
    )
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setMessageSent(false), 5000);
      });
  };

  return (
    <section id="contacto" className="relative z-0 py-16 bg-gray-900 text-white overflow-hidden">
      {/* Fondo animado (opcional) */}
      <div className=" absolute inset-0 bg-gradient-to-br from-black/90 to-gray-900/80 -z-10">
        {/* Fondo animado con opacidad reducida */}
        <AnimatedBackground
          lineColors={["via-neutral-50", "via-green-300", "via-cian-300"]}
          opacity={0.15}
          baseSpeed={3}
        />
      </div>

      <div className="mt-30 container mx-auto px-4 max-w-6xl">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-cyan-400">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes dudas? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        {/* Grid de contenido */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Mapa */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-cyan-400 transition duration-300">
            <APIProvider
              apiKey="AIzaSyBaH0hHZ_21bNqKKjQHMyswiF5i3kw8bxo"
              libraries={['marker']}
            >
              <div style={mapContainerStyle}>
                <Map
                  defaultCenter={center}
                  defaultZoom={15}
                  mapId="a0bd2e6a5eef901b"
                  gestureHandling={'greedy'}
                  disableDefaultUI={false}
                >
                  <AdvancedMarker position={center}>
                    <div className="relative">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
                      <div className="absolute -inset-2 border-2 border-cyan-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </AdvancedMarker>
                </Map>
              </div>
            </APIProvider>

            <div className="p-6 bg-gray-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">Nuestra ubicación</h3>
              <p className="text-gray-300 mb-2">
                <span className="text-green-300">📍</span> Dirección: Calle Ejemplo #123, Ciudad
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-green-300">📞</span> Teléfono: +52 55 1234 5678
              </p>
              <p className="text-gray-300">
                <span className="text-green-300">🕒</span> Horario: Lunes a Viernes - 9:00 a 18:00 hrs
              </p>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-xl border border-gray-700/50 shadow-xl hover:border-cyan-400 transition duration-300">
            {messageSent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-300">Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="user_message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="user_message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold rounded-lg transition-all hover:from-green-500 hover:to-cyan-600 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;