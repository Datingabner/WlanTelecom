import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FiCheckCircle, FiWifi, FiMapPin } from 'react-icons/fi';

// Definición de tipos
type Coordenadas = [number, number];
type Poligono = Coordenadas[];

type ZonaCobertura = {
  nombre: string;
  coordinates: Poligono;
  color: string;
};

type Ubicacion = {
  id: number;
  nombre: string;
  posicion: Coordenadas;
  velocidad: string;
};

// Fix para iconos de Leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const zonasCobertura: ZonaCobertura[] = [
  {
    nombre: "Zona Norte",
    coordinates: [
      [19.44, -99.14],
      [19.43, -99.12],
      [19.42, -99.13],
      [19.43, -99.15],
    ],
    color: "#3b82f6",
  },
  {
    nombre: "Zona Sur",
    coordinates: [
      [19.35, -99.16],
      [19.34, -99.15],
      [19.33, -99.17],
      [19.36, -99.18],
    ],
    color: "#10b981",
  },
];

const CoberturaMap = () => {
  const ubicaciones: Ubicacion[] = [
    { id: 1, nombre: "Zona Norte", posicion: [19.4326, -99.1332], velocidad: "100 Mbps" },
    { id: 2, nombre: "Zona Sur", posicion: [19.3556, -99.1626], velocidad: "50 Mbps" },
  ];

  return (
    <div className=" relative overflow-hidden bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mt-30 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 sm:text-5xl mb-4">
          Cobertura de Red
        </h1>
        <p className="text-xl text-gray-300">
          Áreas de servicio y disponibilidad.
        </p>
      </div>

      {/* Mapa + Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mapa */}
        <div className="lg:col-span-2 z-8">
          <div className="h-[600px] rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
            <MapContainer
              center={[19.4326, -99.1332]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              {/* Polígonos de cobertura */}
              {zonasCobertura.map((zona, index) => (
                <Polygon
                  key={index}
                  positions={zona.coordinates}
                  pathOptions={{
                    fillColor: zona.color,
                    fillOpacity: 0.2,
                    color: zona.color,
                    opacity: 1,
                    weight: 2,
                  }}
                >
                  <Popup className="bg-gray-800 text-white border border-gray-700 rounded-lg">
                    <span className="font-bold">{zona.nombre}</span>
                  </Popup>
                </Polygon>
              ))}

              {/* Marcadores */}
              {ubicaciones.map((ubicacion) => (
                <Marker key={ubicacion.id} position={ubicacion.posicion}>
                  <Popup className="rounded-lg bg-gray-800 border border-gray-700 text-white">
                    <div className="flex items-center space-x-2">
                      <FiWifi className="h-5 w-5 text-cyan-400" />
                      <span className="font-bold">{ubicacion.nombre}</span>
                    </div>
                    <p className="mt-1 text-gray-300">Velocidad: {ubicacion.velocidad}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Leyenda de colores */}
        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FiMapPin className="h-6 w-6 text-cyan-400 mr-2" />
              Leyenda de Cobertura
            </h2>
            <ul className="space-y-3">
              {zonasCobertura.map((zona, index) => (
                <li key={index} className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: zona.color }}
                  />
                  <span className="text-white">{zona.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">¿No ves tu zona?</h3>
            <p className="mb-4 text-gray-100">
              Déjanos tus datos y te avisaremos cuando lleguemos a tu área.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold rounded-lg transition-all hover:from-green-500 hover:to-cyan-600">
              Solicitar Cobertura
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoberturaMap;