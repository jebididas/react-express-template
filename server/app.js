// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // Always return the main index.html, so react-router renders the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// Require our routes into the application.
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


module.exports = app;