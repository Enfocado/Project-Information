const faker = require('faker');
const moment = require('moment');
const db = require('../index.js');

const categories = ['Music', 'Publishing', 'Film', 'Design & Tech', 'Arts', 'Comics & Illustration', 'Games', 'Food & Craft'];

module.exports = {
  project: {
    get: (id, callback) => {
      db.query(`SELECT p.Project_Name as Project_Name, p.Project_Description as Project_Description, 
        p.Currently_Goal as Currently_Funded, p.Funding_Goal as Funding_Goal, p.Start_Date as Start_Date, 
        p.End_Date as End_Date, p.Video_Link as Video_Link, p.Is_Followed as Is_Followed, p.Category as Category, 
        p.Location as Location, p.Creator_ID as Creator_ID, c.Company_Name, c.Company_Logo 
        FROM project p INNER JOIN creator c ON p.Creator_ID = c.ID WHERE p.ID = ${id}`, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
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
          callback(null, results);
        }
      });
    },
  },
};
