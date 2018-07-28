const Log = require('log');
const faker = require('faker');
const moment = require('moment');
const db = require('../index.js');

const log = new Log('info');

const categories = ['Music', 'Publishing', 'Film', 'Design & Tech', 'Arts', 'Comics & Illustration', 'Games', 'Food & Craft'];

module.exports = {
  project: {
    get: () => {
      log.info('Get Request in models');
    },
  },

  fillData: {
    get: (callback) => {
      db.query('SELECT COUNT(*) as projectCount FROM project', (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    },
    post: (callback) => {
      const query = `INSERT INTO Project 
      (Project_Name, 
        Project_Description, 
        Start_Date, 
        End_Date, 
        Funding_Goal, 
        Currently_Goal, 
        Location, 
        Creator_ID, 
        Is_Followed, 
        Category, 
        Video_Link)
        VALUES (
          '${faker.commerce.productName()}',
          '${faker.lorem.sentence()}',
          '${moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss')}',
          '${moment(faker.date.future()).format('YYYY-MM-DD HH:mm:ss')}',
          '${faker.finance.amount()}',
          '${faker.finance.amount()}',
          '${faker.address.city()}, ${faker.address.stateAbbr()}',
          '${Math.floor(Math.random() * (100 - 0 + 1)) + 0}',
          '${Math.floor(Math.random() * (1 - 0 + 1)) + 0}',
          '${faker.random.arrayElement(categories)}',
          '${faker.image.imageUrl()}'
        )`;

      db.query(query, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          log.info(query);
          callback(null, results);
        }
      });
    },
  },
};
