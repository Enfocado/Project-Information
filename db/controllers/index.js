const Log = require('log');
const model = require('../models/index.js');

const log = new Log('info');

const fillData = (modelMethod, prop, callback) => {
  modelMethod.get((err, data) => {
    if (err) {
      callback(err);
    } else {
      const count = data[0][prop];
      if (count < 100) {
        const inserts = 100 - count;
        for (let i = 1; i <= inserts; i += 1) {
          modelMethod.post((postErr, postData) => {
            if (postErr) {
              callback(postErr);
            } else {
              log.info('Inserted! -', postData);
            }
          });
        }
        callback(null);
      } else {
        callback(null);
      }
    }
  });
};

module.exports = {
  project: {
    get: (request, response) => {
      model.project.get(request.params.id, (err, data) => {
        if (err) {
          throw err;
        } else {
          response.send(data[0]);
        }
      });
    },
  },

  fillCreators: {
    post: (request, response) => {
      fillData(model.fillCreators, 'creatorCount', (err) => {
        if (err) {
          throw err;
        } else {
          response.end();
        }
      });
    },
  },

  fillProjects: {
    post: (request, response) => {
      fillData(model.fillProjects, 'projectCount', (err) => {
        if (err) {
          throw err;
        } else {
          response.end();
        }
      });
    },
  },
};
