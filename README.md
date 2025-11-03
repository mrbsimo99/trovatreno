# trovatreno
Tracker treni per l'Italia. Veloce (si spera) e senza pubblicità.

## Features (WIP)
- [x] Backend API funzionante
- [x] Ricerca treno per numero
- [x] Dati real-time da ViaggiaTreno
- [ ] Frontend React
- [ ] Visualizzazione fermate e ritardi
- [ ] Design mobile-responsive

## Setup

### Backend
```bash
cd server
npm install
node index.js
```

Server su `http://localhost:4040`

### API Endpoint
```
GET /api/search/:trainNumber
```

**Esempio:**
```
http://localhost:4040/api/search/9754
```

**Risposta:** Informazioni complete con fermate, ritardi e binari.

## Tech Stack
- **Backend:** Node.js, Express, Axios
- **Frontend:** React, TailwindCSS, Vite (in sviluppo)
- **API:** ViaggiaTreno (Trenitalia)

## Development
Backend completato. Frontend in arrivo.

---
Made with ❤️ by [Simone Morabito](https://simonemorabito.dev)