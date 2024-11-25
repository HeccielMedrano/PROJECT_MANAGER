const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
/*const log4js = require('log4js');
const logg = log4js.getLogger("app")

logg.level = "info";

logg.debug("Iniciando la app en modo de pruebas.");
logg.info("Usuario ha iniciado sesion");
logg.warn("Falta el archivo config de la app");
logg.error("No se pudo ejecutar la accion");
logg.fatal("No se pudo iniciar la app.")*/

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const productBacklogsRouter = require('./routes/productBacklogs');
const releaseBacklogsRouter = require('./routes/releaseBacklogs');
const sprintBacklogsRouter = require('./routes/sprintBacklogs');
const boardsRouter = require('./routes/boards');


const app = express();

const url = "mongodb://localhost:27017/proyectsManager";
mongoose.connect(url);
const db = mongoose.connection;

db.on('open', ()=>{
  console.log("Conexion a la base de datos establecida correctamente");
});

db.on('error', ()=>{
  console.log("No se ha podido establecer la conexion a la base de datos");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/productBacklogs', productBacklogsRouter);
app.use('/releaseBacklogs', releaseBacklogsRouter);
app.use('/sprintBacklogs', sprintBacklogsRouter);
app.use('/boards', boardsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
