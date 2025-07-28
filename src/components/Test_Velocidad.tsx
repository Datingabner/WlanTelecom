import { useEffect, useState} from 'react';
import { FaDownload, FaUpload, FaSignal, FaRedo } from 'react-icons/fa';
import CircuitBackground from "./animations/CircuitoBackground";

type SpeedTestResults = {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  ip: string;
} | null;

const TestVelocidad = () => {
  const [results, setResults] = useState<SpeedTestResults>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Opcional: verifica el origen
      // if (event.origin !== 'https://tu-servidor.com') return;

      if (event.data.type === 'speedtest-results') {
        setResults({
          download: parseFloat(event.data.download),
          upload: parseFloat(event.data.upload),
          ping: parseFloat(event.data.ping),
          jitter: parseFloat(event.data.jitter),
          ip: event.data.ip
        });
      }
    };

  window.addEventListener('message', handleMessage);
  return () => {
    window.removeEventListener('message', handleMessage);
  };
}, []);
  return(
    <section id="speedtest" className="bg-black relative py-16 backdrop-blur-sm text-white">
      {/* Fondo animado */}
      <CircuitBackground />
      <div className="mt-30 container relative mx-auto px-4 max-w-6xl">
        {/* Encabezado */}
        <div className=" text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
              Test de Velocidad (Aun en desarrollo)
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mide tu velocidad real con nuestra herramienta integrada
          </p>
        </div>

        {/* Tarjeta del Test */}
        <div className="backdrop-blur-sm bg-gray-900/30 border border-cyan-400/20 rounded-xl p-8 shadow-xl max-w-3xl mx-auto hover:border-cyan-400 transition duration-300">
          {/* Resultados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <MetricCard 
              icon={<FaSignal />}
              value={results?.ping}
              unit="ms"
              label="Ping"
              color="purple"
            />
            <MetricCard 
              icon={<FaDownload />}
              value={results?.download}
              unit="Mbps"
              label="Descarga"
              color="cyan"
            />
            <MetricCard 
              icon={<FaUpload />}
              value={results?.upload}
              unit="Mbps"
              label="Subida"
              color="green"
            />
            <MetricCard 
              icon={<FaRedo />}
              value={results?.jitter}
              unit="ms"
              label="Jitter"
              color="yellow"
            />
          </div>
          <div className='text-center mb-8 justify-center items-center w-full h-min flex'>
            <iframe
  src="api/SpeedTest/Api_integrate.php"
  style={{
    width: '150px',
    height: '73px',
    border: 'none',
    borderRadius: '1rem',
    overflow: 'hidden',
  }}
></iframe>

          </div>
          
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para métricas
const MetricCard = ({ icon, value, unit, label, color }: any) => (
  <div className={`bg-gray-900/50 p-4 rounded-lg border-l-4 border-${color}-400 `}>
    <div className="flex items-center gap-2 mb-1">
      <span className={`text-${color}-400`}>{icon}</span>
      <span className="text-gray-300 font-medium">{label}</span>
    </div>
    <p className="text-2xl font-bold text-white">
      {value?.toFixed(2)} <span className="text-sm text-gray-400">{unit}</span>
    </p>
  </div>
);

export default TestVelocidad;