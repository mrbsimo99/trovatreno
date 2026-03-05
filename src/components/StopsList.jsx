const StopsList = ({ stops, stazioneAttuale }) => {

  if (!stops || stops.length === 0) {
    return null;
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return '--';
    return new Date(timestamp).toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Fermate</h3>
        {stops.map((fermata, index) => (
          <div 
            className={`p-4 rounded-lg mb-3 border-l-4 transition-all duration-150 hover:-translate-x-1 ${
              fermata.stazione === stazioneAttuale 
                ? 'bg-green-50 border-green-500 hover:bg-green-100' 
                : 'bg-gray-50 border-red-600 hover:bg-gray-100'
            }`} 
            key={index}
          >
            {fermata.stazione === stazioneAttuale && (
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold mb-2">
                ULTIMA FERMATA
              </span>
            )}
            <p className="text-lg font-bold text-gray-800 mb-3">Stazione: {fermata.stazione}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-2">
              {/* Colonna sinistra - Orario Programmato */}
              <div>
                <p className="text-gray-500 font-semibold mb-1">Programmato</p>
                <p className="text-gray-600 mb-1">Arrivo: {formatTime(fermata.arrivo_teorico)}</p>
                <p className="text-gray-600 mb-1">Partenza: {formatTime(fermata.partenza_teorica)}</p>
                <p className="text-gray-600">Binario: {fermata.binarioProgrammatoPartenzaDescrizione || '--'}</p>
              </div>
              
              {/* Colonna destra - Orario effettivo */}
              <div>
                <p className="text-blue-600 font-semibold mb-1">Effettivo</p>
                <p className="text-blue-600 mb-1">Arrivo: {formatTime(fermata.arrivoReale)}</p>
                <p className="text-blue-600 mb-1">Partenza: {formatTime(fermata.partenzaReale)}</p>
                <p className="text-blue-600">Binario: {fermata.binarioEffettivoPartenzaDescrizione || '--'}</p>
              </div>
            </div>
            
            {fermata.ritardoArrivo > 0 && (
              <p className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold mt-2">
                Ritardo: {fermata.ritardoArrivo} min
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default StopsList;