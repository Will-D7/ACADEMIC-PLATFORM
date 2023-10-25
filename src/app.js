const express   = require('express');
const morgan    = require('morgan');
const exphbs    = require('express-handlebars');
const path      = require('path');


const app = express();

//setttings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine(
    ".hbs",
    exphbs.create({
      defaultLayout: "main",
      extname: ".hbs",
    }).engine
  );
app.set('view engine','.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes

app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
// middlewares, para archivos staticos
/*app.use(express.static('public', { 'extensions': ['js'] })); //No se*/


module.exports = app;

