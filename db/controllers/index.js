const model = require('../models/index.js');

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

  fillData: {
    get: (request, response) => {
      let count = 0;
      model.fillData.get((err, data) => {
        if (err) {
          throw err;
        } else {
          count = data[0].projectCount;
          while (count < 100) {
            model.fillData.post((postErr, postData) => {
              if (postErr) {
                throw err;
              } else {
                response.send(postData);
              }
            });
            count += 1;
          }
        }
      });
    },
  },
};
