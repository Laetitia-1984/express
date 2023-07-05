var express = require('express');
var router = express.Router();
const mysql = require ('mysql');
const dbCon = require ('../config/dbConfig');
const cookie = require ('cookie-parser');
const jwt = require ('jsonwebtoken');

router.post ('/', (req, res) => {
    const sql = 'SELECT * FROM admingarage WHERE email = ? AND password = ?';

    dbCon.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json ({Message: 'Erreur connexion'});
        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({name},'notre-token-secret', {expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({Status:'Connexion réussie'})
        } else {
            return res.json({Message: 'Profil inexistant'});
        }
    })   
})


module.exports = router;