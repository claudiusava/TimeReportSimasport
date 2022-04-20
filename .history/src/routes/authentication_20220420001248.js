const express = require('express');
const router = express.Router();
const passport = require('passport');
const{isLoggedIn} = require('../lib/auth');
const{isNotLoggedIn} = require('../lib/auth');

router.get('/signup', isLoggedIn, (req, res) => {
   res.render('auth/signup'); 
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/signup',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin'); 
 });

router.post('/signin', isNotLoggedIn, (req,res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/profile', 
        failureRedirect: '/signin'
    })(req,res, next);
});

router.get('/profile', isLoggedIn, (req,res) => {
    res.render('profile');
});

router.get('/logout', (req,res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;