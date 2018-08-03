const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const Log = require('log');
const router = require('./routes.js');

const log = new Log('info');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/', router);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    log.info(`Listening on http://localhost:${port}`);
  });
}

module.exports = app;
