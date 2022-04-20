const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

const excel = requere('excel4node');


router.get('/registrosDeUsuarios', isLoggedIn, (req, res) => {

        res.render('imputaciones/registrosDeUsuarios');

});


module.exports = router;