const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const controller = require('../db/controllers/index.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

app.post('/', (req, res) => {
  controller.create();
});


// app.get('/', (req, res) => {
//   controller.read();
// });

// app.put('/', (req, res) => {
//   controller.update();
// });

// app.delete('/todo/:id', (req,res) => {
//   controller.delete();
// });

// const port = 3001;

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

