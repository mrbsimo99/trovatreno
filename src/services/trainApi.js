const API_URL = '/api';


export const searchTrain = async (trainNumber) => {
    try {
        const response = await fetch(`${API_URL}/search/${trainNumber}`);
        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.error || 'Errore nella ricerca')
        }
        return data;
    } catch (error) {
        console.error('Errore:', error);
        throw error;

    }

};