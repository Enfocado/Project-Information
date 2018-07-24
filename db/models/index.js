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

  fillData: {
    post: (callback) => {
      db.con.query('SELECT COUNT(*) FROM Project', (err, data) => {
        if (err) {
          callback(err, null);
        } else {
          log.info(data);
        }
      });
    },
  },
};
