const router = require('express').Router();
const controller = require('../db/controllers/index.js');

router.get('/fillData', controller.fillData.get);
router.post('/fillData', controller.fillData.post);

module.exports = router;
