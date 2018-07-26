const Log = require('log');
const model = require('../models/index.js');

const log = new Log('info');

module.exports = {
  project: {
    get: (request, response) => {
      log.info('here');
    },
    post: (request, response) => {
      log.info('here');
    },
  },

  fillData: {
    get: (request, response) => {
      log.info('here');
    },
    post: (request, response) => {
      model.fillData.post((err, data) => {
        if (err) throw err;
        log.info(data);
      });
      log.info('here');
    },
  },
};
