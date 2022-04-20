const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

const excel = require('excel4node');

router.get('/registrosDeUsuarios', isLoggedIn, (req, res) => {

    const imputaciones = pool.query('SELECT fullname, fecha, comunidad, horas, minutos FROM imputaciones, users ORDER BY users.fullname, imputaciones.fecha', function(error, rows, fields){
        if (error) throw error;

        const datos = rows[0];

        const array = [];

        array = datos;

        array.forEach(element => {
            console.log(element.fullname);
        });

        res.render('imputaciones/registrosDeUsuarios', {rows});
    });

});


module.exports = router;