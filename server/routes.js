const router = require('express').Router();
const controller = require('../db/controllers/index.js');

router.get('/fillData', controller.fillData.get);
router.get('/project/:id', controller.project.get);

module.exports = router;
