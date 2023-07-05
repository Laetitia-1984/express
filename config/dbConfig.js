const mysql = require ('mysql');
const env = require ('dotenv').config();

//Parametres de connexion
const dbConfig = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//Test connexion avec la bdd
dbConfig.connect (function (err) {
    if (err) {
        console.log ('Erreur de connexion')
        console.log (err)
    }
    else {
        console.log ('Connexion à la bdd réussie')
        dbConfig.query ('SELECT * FROM voitures',
        function (err, result) {
            if (err) {
                console.log (`Erreur de requete - ${err}`)
                throw error
            }
            else  
                console.log ('Result: ', result)
            });
        };
});

module.exports = dbConfig;