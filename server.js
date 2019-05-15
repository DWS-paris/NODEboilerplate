/*
Importer les composants serveur
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');

    // Inner
    const frontRouter = require('./routes/front.router');
    const apiRouter = require('./routes/api.router');
//

/*
Configuration du serveur
*/
    // Définir les variables serveur
    const server = express();
    const port = process.env.PORT;

    // Configuration du moteur de rendu
    server.set('view engine', 'ejs'); 

    // Définition du dossier static du client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Utilisation des routers
    server.use('/api', apiRouter);
    server.use('/', frontRouter);
//

/* 
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server listening on port ${port}`) )
//