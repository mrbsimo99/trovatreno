import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.json());

app.get('/api/search/:trainNumber', async (req, res) => {
    const { trainNumber } = req.params;

    try {
        // RICERCA DEL TRENO
        const searchURL = `https://www.viaggiatreno.it/infomobilita/resteasy/viaggiatreno/cercaNumeroTrenoTrenoAutocomplete/${trainNumber}`;
        const searchResponse = await axios.get(searchURL);

        // CONTROLLA RISPOSTA
        if (!searchResponse.data || searchResponse.data.trim() === '') {
            return res.status(404).json({
                success: false,
                error: 'Treno non trovato'
            });
        }

        const firstLine = searchResponse.data.split('\n')[0];
        const parts = firstLine.split('|');

        if (parts.length < 2) {
            return res.status(404).json({
                success: false,
                error: 'Formato risposta non valido'
            });
        }

        const detailParts = parts[1].split('-');
        const stationCode = detailParts[1];
        const timestamp = detailParts[2]?.trim();

        if (!stationCode || !timestamp) {
            return res.status(404).json({
                success: false,
                error: 'Dati treno incompleti'
            });
        }

        // DETTAGLI COMPLETI SUL TRENO
        const detailsURL = `https://www.viaggiatreno.it/infomobilita/resteasy/viaggiatreno/andamentoTreno/${stationCode}/${trainNumber}/${timestamp}`;

        const detailsResponse = await axios.get(detailsURL);

        // GESTISCE STATUS DI ERRORE // API TRENITALIA UN PO' MEH
        if (detailsResponse.status === 204 || !detailsResponse.data) {
            return res.status(404).json({
                success: false,
                error: 'Dettagli treno non disponibili',
                message: 'Il treno potrebbe non circolare oggi o essere già concluso'
            });
        }

        res.json({
            success: true,
            trainNumber: trainNumber,
            data: detailsResponse.data
        });

    } catch (error) {
        console.error('Error:', error.message);

        res.status(500).json({
            success: false,
            error: 'Errore nel recupero dati del treno'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚂 Server running on http://localhost:${PORT}`);
});