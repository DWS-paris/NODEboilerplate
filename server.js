/*
Importer les composants serveur
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');

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

    // Configurration de body-parser
    server.use(bodyParser.json({limit: '10mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));

    // Utilisation des routers
    server.use('/api', apiRouter);
    server.use('/', frontRouter);
//

/* 
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server listening on port ${port}`) )
//