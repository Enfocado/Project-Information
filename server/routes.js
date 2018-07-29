const router = require('express').Router();
const controller = require('../db/controllers/index.js');

router.post('/fillProjects', controller.fillProjects.post);
router.post('/fillCreators', controller.fillCreators.post);
router.get('/project/:id', controller.project.get);

module.exports = router;
