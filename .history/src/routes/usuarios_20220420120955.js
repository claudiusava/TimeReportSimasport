const { query } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

console.log("DFUOASDHFHSDHH");
router.get('/', (req, res) => {
    const usuarios = pool.query('SELECT fullname, username FROM users', function(error, results, fields){
        if (error) throw error;
        res.render('auth/signup', {results});
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