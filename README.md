# TrovaTreno

Tracker minimale per seguire lo stato dei treni Trenitalia usando le API ViaggiaTreno. Cerchi il numero del treno e hai tutti i dati in tempo reale.

**[trovatreno.net](https://www.trovatreno.net)**

L'idea mi è venuta in mente durante l'estate 2025 mentre frequentavo un corso di full-stack development. Un treno su cui ero a bordo è stato soppresso (si ringrazia l'ottima rete ferroviaria qui al sud) mentre raggiungevo una località di mare, ma dall'app di Trenitalia non risultava. Da siti di terze parti sì. Il problema è che questi siti erano inguardabili da mobile, pieni di pubblicità e oltremodo lenti. Volevo qualcosa di veloce e pulito, da usare esclusivamente da smartphone e che mi tornasse utile per i prossimi viaggi.

## Stack

React, TailwindCSS — deployato su Vercel con serverless function come proxy per le API ViaggiaTreno.
```
