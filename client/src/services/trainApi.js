import axios from 'axios';

const API_URL = 'http://localhost:4040/api';

export const searchTrain = async (trainNumber) => {
    try {
        // Ricerca del treno

        const searchResponse = await axios.get(`${API_URL}/train/${trainNumber}`);
        const stationCode = searchResponse.data.stationCode;
        // Dettagli sul treno

        const detailsResponse = await axios.get(`${API_URL}/train/${stationCode}/${trainNumber}`)

        return detailsResponse.data;

    } catch (error) {
        console.error('Errore:', error)
        throw error;
    }
}