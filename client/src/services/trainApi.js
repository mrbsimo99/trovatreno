import axios from 'axios';

const API_URL = 'http://localhost:4040/api';

export const searchTrain = async (trainNumber) => {
    try {
        const response = await axios.get(`${API_URL}/search/${trainNumber}`);
        return response.data;
    } catch (error) {
        console.error('Errore:', error);
        throw error;
    }
};