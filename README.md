# TrovaTreno 🚂
Tracker treni per l'Italia. Veloce, semplice e senza pubblicità.

## Features
- ✅ Backend API funzionante
- ✅ Ricerca treno per numero
- ✅ Dati real-time da ViaggiaTreno
- ✅ Frontend React completo
- ✅ Visualizzazione fermate e ritardi
- ✅ Design mobile-responsive
- ✅ Evidenziazione fermata attuale
- ✅ Aggiornamento dati in tempo reale

## Setup

### Backend
```bash
cd server
npm install
node index.js
```

Server su `http://localhost:4040`

### Frontend
```bash
cd client
npm install
npm run dev
```

App su `http://localhost:5173`

### API Endpoint
```
GET /api/search/:trainNumber
```

**Esempio:**
```
http://localhost:4040/api/search/21908
```

**Risposta:** Informazioni complete con fermate, ritardi, binari e ultimo rilevamento.

## Tech Stack
- **Backend:** Node.js, Express, Axios
- **Frontend:** React, TailwindCSS, Vite, Lucide React
- **API:** ViaggiaTreno (Trenitalia)

## Screenshots
![TrovaTreno Homepage](screenshot.png)

---
Made with ❤️ by [Simone Morabito](https://simonemorabito.dev)