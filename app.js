var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require ('cors');
const dbConfig = require ('./config/dbConfig');

//Importation des routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var annoncesRouter = require ('./routes/annonces'); // Route crée par moi
var loginRouter = require ('./routes/login')
var commentairesRouter = require ('./routes/commentaires')
var app = express();

//Outils pour que les requetes se fassent sans probleme
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(
  {
    origin: "http://localhost:3000",
    methods: ["POST, GET"],
    credentials: true,
  }
));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/annonces', annoncesRouter);
app.use('/login', loginRouter);
app.use('/commentaires', commentairesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
