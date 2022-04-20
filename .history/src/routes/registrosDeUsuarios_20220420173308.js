const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

const excel = require('excel4node');

router.get('/registrosDeUsuarios', isLoggedIn, (req, res) => {

    const imputaciones = pool.query('SELECT fullname, fecha, comunidad, horas, minutos FROM imputaciones, users ORDER BY users.fullname, imputaciones.fecha', function(error, results, fields){
        if (error) throw error;
        
        results.forEach(element => {
            console.log(element.fullname, element.fecha, element.comunidad);
        });

        res.render('imputaciones/registrosDeUsuarios', {results});
    });

});


module.exports = router;