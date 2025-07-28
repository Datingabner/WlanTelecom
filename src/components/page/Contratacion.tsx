import { useLocation } from 'react-router-dom';

const ContratacionForm = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {};

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-2xl backdrop-blur-sm mx-auto bg-gray-800/30 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Completa tu Contratación
        </h2>
        
        {selectedPlan && (
          <div className="mb-8 p-6 bg-gray-800 rounded-lg border border-cyan-400/30">
            <h3 className="text-xl font-bold text-white mb-2">Plan Seleccionado</h3>
            <p className="text-2xl text-cyan-400">{selectedPlan.name}</p>
            <p className="text-lg text-green-400">{selectedPlan.speed}</p>
            <p className="text-2xl font-bold text-white mt-2">{selectedPlan.price}/mes</p>
          </div>
        )}

        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Nombre Completo</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Dirección</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-green-600 transition duration-300"
          >
            Confirmar Contratación
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContratacionForm;