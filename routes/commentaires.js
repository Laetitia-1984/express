var express = require('express');
var router = express.Router();
const mysql = require ('mysql');
const dbCon = require ('../config/dbConfig');

router.post ('/', (req, res) => {
    const data = {
        nomclient: req.body.nomClient,
        note: req.body.note,
        commentaires: req.body.commentaires
    };
    const sql = dbCon.query ('INSERT INTO commentaire SET?', data, function (err, _rows, fields) {
        if (err) {
            console.log(err);
            res.status(404, err);
        }
        else {
            console.log('Commentaire réussi');
            res.status(200);
        };
    });
});

module.exports = router;