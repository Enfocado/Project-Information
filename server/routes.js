const router = require('express').Router();
const controller = require('../db/controllers/index.js');

router.get('/fillData', controller.fillData.get);

module.exports = router;
