const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');


router.get('/', isLoggedIn, (req, res) => {

    const imputaciones = pool.query('SELECT DATE_FORMAT(fecha,"%d/%m/%Y") as fechaFormateada, comunidad, horas, minutos, id FROM imputaciones WHERE user_id = ?', [req.user.id], function(error, results, fields){
        if (error) throw error;

        res.render('imputaciones/registrosDeUsuarios', {results});
    });
});


module.exports = router;