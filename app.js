const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const config = require("config");
const i18n = require('i18n');
const { expressjwt } = require('express-jwt');
const { authenticateToken } = require('./middleware/authentication');


const jwtKey = config.get("secret.key");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const boardsRouter = require('./routes/boards')
const cardsRouter = require('./routes/cards');
const columnsRouter = require('./routes/columns');
const productBacklogsRouter = require('./routes/productBacklogs');
const projectsRouter = require('./routes/projects');
const releaseBacklogsRouter = require('./routes/releaseBacklogs');
const sprintBacklogRouter = require('./routes/sprintBacklogs');

const app = express();

// mongodb://<dbUser>?:<dbPass>?@?<url>:<port>/<dbName>
const url = "mongodb+srv://a361345:MQHIr0yo4TuIEJkV@clusterprojectmanager.b55u7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectManager";
mongoose.connect(url);

const db = mongoose.connection;

db.on('open', () => {
  console.log('Conexión a la base de datos establecida correctamente.');
} );

db.on('error', () => {
  console.log('No se a podido establecer la conexón a la base de datos.');
});

i18n.configure({
  locals:['es','en'],
  cookie: 'language',
  directory: `${__dirname}/locales`
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

app.use(expressjwt({ secret: jwtKey, algorithms: ['HS256'] }).unless({ path: ["/login", "/login/"] }));

/*app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ msg: 'Invalid token or expired token' });
  }
  next(err);
});*/

// Debugging Middleware - Logs headers and the decoded user
app.use((req, res, next) => {
  console.log("Headers:", req.headers);          // Logs the request headers, especially Authorization
  //console.log("Decoded User:", req.headers['authorization']?.split(' ')[1]);  
  console.log("Decoded User:", req.headers['authorization']?.split(' ')[1]);      
  console.log("Decoded User:", req.user);     
  next();
});

/*app.use((req, res, next) => {
  console.log("Request Object:", req);  // Log the entire req object
  next();
});*/

// Apply the authenticateToken middleware to secure routes
app.use(authenticateToken);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/cards', cardsRouter);
app.use('/columns', columnsRouter);
app.use('/productBacklogs', productBacklogsRouter);
app.use('/projects', projectsRouter);
app.use('/releaseBacklogs', releaseBacklogsRouter);
app.use('/sprintBacklog', sprintBacklogRouter);

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
