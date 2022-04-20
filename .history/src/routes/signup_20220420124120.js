const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

const {isLoggedIn} = require('../lib/auth');

console.log("Punto de control 1");

router.get('/', isLoggedIn, (req, res) => {
    const usuarios = pool.query('SELECT fullname, username FROM users', function(error, results, fields){
        if (error) throw error;
        console.log("Punto de control dentro del Select");
        res.render('auth/signup', {usuarios});
    });
});


/*
router.get('/delete/:id', isLoggedIn, async (req, res) => {   
    const {id} = req.params;
    pool.query('DELETE FROM imputaciones WHERE id = ?', [id]);
    res.redirect('/imputaciones');
});
*/

module.exports = router;