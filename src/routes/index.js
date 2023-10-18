const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');


router.get('/',(req,res) =>{
    res.render('index');
});
router.get('/login',(req,res) =>{
    res.render('login');
});
router.get('/register',(req,res) =>{
    res.render('register');
});
router.get('/curso',(req,res) =>{
    res.render('curso');
});
router.get('/newTask',(req,res) =>{
    res.render('newTask');
})

module.exports = router;