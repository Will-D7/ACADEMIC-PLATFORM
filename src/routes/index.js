const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');


router.get('/',(req,res) =>{
    res.render('index');
});
////////////////////////////////////////////
            ///Funciones Aquí///
////////////////////////////////////////////


////////////////////////////////////////////

module.exports = router;