const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

const excel = require('excel4node');

router.get('/registrosDeUsuarios', isLoggedIn, (req, res) => {

    const imputaciones = pool.query('SELECT fullname, fecha, comunidad, horas FROM imputaciones, users ORDER BY users.fullname, imputaciones.fecha', function(error, results, fields){
        if (error) throw error;

        console.log({fullname});

        res.render('imputaciones/registrosDeUsuarios', {results});
    });

});


module.exports = router;