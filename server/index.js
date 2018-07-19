const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(port, () => {
  console.log('Listening on http://localhost:3001');
});
