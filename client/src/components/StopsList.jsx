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


  return (<>
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Fermate</h3>
      {stops.map((fermata, index) => (
        <div
          className={`p-4 rounded-lg mb-3 border-l-4 ${fermata.stazione === stazioneAttuale
            ? 'bg-green-50 border-green-500'
            : 'bg-gray-50 border-red-600'
            }`}
          key={index}
        >
          {fermata.stazione === stazioneAttuale && (
            <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold mb-2">
              Ultima fermata
            </span>
          )}
          <p className="text-lg font-bold text-gray-800 mb-2">Stazione: {fermata.stazione}</p>
          <p className="text-gray-600 text-sm mb-1">Orario: {formatTime(fermata.programmata)}</p>
          <p className="text-gray-600 text-sm mb-1">Binario: {fermata.binarioProgrammatoPartenzaDescrizione || '--'}</p>
          {fermata.ritardoArrivo > 0 && (
            <p className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold mt-2">Ritardo: {fermata.ritardoArrivo} min</p>
          )}
        </div>
      ))}</div>

  </>
  )

}

export default StopsList; 