    
/*
Configurer le module de route
*/
    const express = require('express');
    const router = express.Router();
//

/*
Définition des routes
*/
    router.get('/', (req, res) => {
        res.json({ msg: 'Hello API' })
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//