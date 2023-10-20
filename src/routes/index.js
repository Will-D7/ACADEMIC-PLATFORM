const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');


router.get('/',(req,res) =>{
    res.render('index');
});
router.get('/tasks',(req,res) =>{
    res.render('tasks');
});
router.get('/modaltarea',(req,res) =>{
    res.render('modaltarea');
});
////////////////////////////////////////////
            ///Funciones Aquí///
////////////////////////////////////////////


////////////////////////////////////////////

module.exports = router;