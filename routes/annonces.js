var express = require('express');
var router = express.Router();
const mysql = require ('mysql');
const dbCon = require ('../config/dbConfig');

router.post ('/', (req, res) => {
    const data = {
        numVoiture: req.body.numVoiture,
        marque: req.body.marque,
        modele: req.body.modele,
        annee: req.body.annee,
        kilometres: req.body.kilometres,
        prix: req.body.prix,
        descriptVoiture: req.body.descriptVoiture
    };
    const sql = dbCon.query ('INSERT INTO voitures SET?', data, function (err, _rows, fields) {
        if (err) {
            console.log(err);
            res.status(404, err);
        }
        else {
            console.log('Enregistrement réussi');
            res.status(200);
        };
    });
});


module.exports = router;