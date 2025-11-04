import { useState } from "react";
import { RefreshCw } from 'lucide-react';
import { searchTrain } from './services/trainApi';
import SearchBar from "./components/SearchBar";
import StopsList from "./components/StopsList";
import TrainInfo from "./components/TrainInfo";

const App = () => {

  const [trainData, setTrainData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (trainNumber) => {
    if (!trainNumber) {
      alert('Devi inserire un numero di treno!');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await searchTrain(trainNumber);
      setTrainData(data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Treno non trovato. Verifica il numero inserito.');
      } else {
        setError('Errore nella ricerca del treno. Riprova più tardi.');
      }
      console.error(err);
    }
  }

  const handleRefresh = () => {
    if (trainData) {
      handleSearch(trainData.trainNumber);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 md:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
            <span className="font-bold">Trova</span>
            <span className="text-red-600">Treno</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6 text-center">
            Monitora in tempo reale lo stato dei treni Trenitalia
          </p>

          <SearchBar onSearch={handleSearch} />

          {loading && <p className="text-center text-gray-600 mt-6">Caricamento...</p>}
          {error && <p className="text-center text-red-600 mt-6">{error}</p>}
        </div>

        <TrainInfo trainData={trainData} />

        <StopsList
          stops={trainData?.data?.fermate}
          stazioneAttuale={trainData?.data?.stazioneUltimoRilevamento}
        />

        {trainData && trainData.data.stazioneUltimoRilevamento !== "--" && (
          <div className="max-w-2xl mx-auto mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Ultimo rilevamento:</span> {trainData.data.stazioneUltimoRilevamento}  <span className="font-semibold">{trainData.data.compOraUltimoRilevamento}</span>
            </p>
            <button
              onClick={handleRefresh}
              className="p-2 md:p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0 ml-2"
              title="Aggiorna"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        )}
         <footer className="text-center mt-12 pb-4">
      <p className="text-gray-600 text-sm">
        Made with ❤️ by{' '}
        <a 
          href="https://simonemorabito.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 font-semibold"
        >
          Simone
        </a>
      </p>
    </footer>
      </div>
    </div>
  )
}

export default App;