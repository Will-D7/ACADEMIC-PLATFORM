const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../task-acadplat-firebase-adminsdk-mbvq9-d0007c0c20.json");//key para conectar a firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://task-acadplat-default-rtdb.firebaseio.com/'
});
router.post('/new-task');

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
router.get('/tasks',(req,res) =>{
    res.render('tasks');
})

module.exports = router;