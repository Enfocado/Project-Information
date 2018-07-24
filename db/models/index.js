const Log = require('log');
const db = require('../index.js');

const log = new Log('info');

module.exports = {
  project: {
    get: () => {
      log.info('Get Request in models');
    },
    post: () => {
      log.info('Post Request in models');
    },
  },
};
