/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const request = require('supertest');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

const debug = require('debug')('blog:server');
const http = require('http');
const homeRoute = require('./routes/home');
const blogRoute = require('./routes/blog');
// var showBlogRoute = require('./routes/showBlog.js');

const app = express();

// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: `${__dirname}/views/layouts/` }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/blog', blogRoute);
// app.use('/blog', showBlogRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// www

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // const bind = typeof port === 'string'
  //   ? `Pipe ${port}`
  //   : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

// Tests

describe('Test the Home page', () => {
  test('Status Code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
  test('HTML Format', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
  test('Contents', async () => {
    const res = await request(app).get('/');
<<<<<<< HEAD
    expect(res.text).toContain('<a href="/" class="btn btn-secondary">Home</a>');
=======
    expect(res.text).toContain('<h1 class="mb-4">Write On</h1>');
>>>>>>> 051096f9f61fc866068bb36b6b4ca12f3ffbb4df
  });
  afterAll(() => {
    server.close();
  });
});

describe('Test the Blog page', () => {
  test('Status Code', async () => {
    const res = await request(app).get('/blog');
    expect(res.statusCode).toBe(200);
  });
  test('HTML Format', async () => {
    const res = await request(app).get('/blog');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
  test('Contents', async () => {
    const res = await request(app).get('/blog');
<<<<<<< HEAD
    expect(res.text).toContain('<h4 class="card-title mb-2">IDC</h4>');
=======
    expect(res.text).toContain('<h1 class="mb-4">Write On</h1>');
>>>>>>> 051096f9f61fc866068bb36b6b4ca12f3ffbb4df
  });
  afterAll(() => {
    server.close();
  });
});
