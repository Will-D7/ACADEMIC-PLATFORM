const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../evaluations-task-firebase-adminsdk-t5a5x-2f3e987115.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://evaluations-task-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/',(req,res) =>{
    res.render('index');
});

router.post('/new-evaluation', (req, res) => {
    const newEvaluation = {
        evalName: req.body.evalName,
        duration: req.body.duration,
        questionType: req.body.questionType
    };
    db.ref('evaluations').push(newEvaluation);
    res.redirect('evaluations');
});

router.get('/evaluations',(req,res) =>{
    db.ref('evaluations').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('evaluations', { evaluations: data });
    });
});

router.get('/delete-evaluation/:id', (req,res) => {
    db.ref('evaluations/' + req.params.id). remove();
    res.redirect('/evaluations');
});

module.exports = router;