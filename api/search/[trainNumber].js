export default async function handler(req, res) {
    const { trainNumber } = req.query;
    try {

        const searchURL = `https://www.viaggiatreno.it/infomobilita/resteasy/viaggiatreno/cercaNumeroTrenoTrenoAutocomplete/${trainNumber}`;
        const searchResponse = await fetch(searchURL).then(res => res.text());

        if (searchResponse === '') {
            return res.status(404).json({
                success: false,
                error: 'Treno non trovato, riprovare'
            });
        }

        const firstLine = searchResponse.split('\n')[0];
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

        const detailsURL = `https://www.viaggiatreno.it/infomobilita/resteasy/viaggiatreno/andamentoTreno/${stationCode}/${trainNumber}/${timestamp}`;
        const detailsResponse = await fetch(detailsURL);

        if (detailsResponse.status === 204 || !detailsResponse.ok) {
            return res.status(404).json({
                success: false,
                error: 'Dettagli treno non disponibili',
                message: 'Il treno potrebbe non circolare oggi o essere già concluso'
            });
        }

        const detailsData = await detailsResponse.json();

        res.json({
            success: true,
            trainNumber: trainNumber,
            data: detailsData
        });

    } catch (error) {
        console.error('Error:', error.message);

        res.status(500).json({
            success: false,
            error: 'Errore nel recupero dati del treno'
        });
    }

}



