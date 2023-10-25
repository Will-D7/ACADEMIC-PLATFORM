const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../task-acadplat-firebase-adminsdk-mbvq9-d0007c0c20.json");//key para conectar a firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://task-acadplat-default-rtdb.firebaseio.com/'
});
const db = admin.database();

router.get('/',(req,res) =>{
    res.render('index');
});

router.post('/new-task',(req,res) =>{
    const newTask = {
        tituloTarea: req.body.tituloTarea,
        desc: req.body.desc,
        adjunto: req.body.adjunto,
        deadline: req.body.deadline,
        topics: req.body.topics,
        score: req.body.score
    };
    db.ref('tasks').push(newTask);
    res.redirect('tasks');
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
    db.ref('tasks').once('value', (snapshot)=>{
        const data = snapshot.val();
        res.render('tasks',{tasks: data});
    });
    //res.render('tasks');
})

router.get('/notificaciones', (req,res) =>{
    res.render('notificaciones');
});

module.exports = router;