    
/*
Configurer le module de route
*/
    const express = require('express');
    const router = express.Router();
//

/* 
Configure MySQL
*/
    const mysql = require('mysql');
    const connexion = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        port: 8889,
        database : 'node-boiler-plate'
    });
    connexion.connect();
//

/*
Définition du CRUD
*/
    // Create Item: POST
    router.post('/article', (req, res) => {

        /* 
        Pour créer un article il faut une valeur pour :
        - title
        - content
        */
            if( 
                req.body &&
                req.body.title.length > 0 &&
                req.body.content.length > 0
             ){
                // Définir l'item
                const newItem = { title: req.body.title, content : req.body.content };

                // Enregistrer l'item
                connexion.query(`INSERT INTO post SET ?`, newItem, (err, result, fields) => {
                    if( err ){
                        res.json({ msg: 'Connection failed', data: err })
                    }
                    else{
                        res.json({ msg: 'Create Article', data: result })
                    }
                })

            }
            else{
                res.json({ msg: 'No data', data: null })
            }
        //


        
    });

    // Read all Items: GET
    router.get('/article', (req, res) => {

        // Récupérer des données SQL
        connexion.query('SELECT * FROM post', (error, results, fields) => {
            if (error) {
                res.json({ msg: 'Error get all', err: error })
            }
            else{
                res.json({ msg: 'Get ALL', data: results })
            }
        });

    });

    // Read one Item: GET
    router.get('/article/:id', (req, res) => {
        
        // Récupérer le paramêtre d'une route
        const routeParam = req.params.id;

        // Récupérer des données SQL
        connexion.query(`SELECT * FROM post WHERE _id = ${routeParam}`, (error, results, fields) => {
            if (error) {
                res.json({ msg: 'Error get one', err: error })
            }
            else{
                res.json({ msg: 'Get One', data: results })
            }
        });

    });

    // Update one Item: PUT
    router.put('/article/:id', (req, res) => {

        /* 
            Pour éditer un article il faut une valeur pour :
            - title
            - content
        */


        res.json({ msg: 'Update one Article' })
    });

    // Delete one Item: DELETE
    router.delete('/article/:id', (req, res) => {
        res.json({ msg: 'Delete one Article' })
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//