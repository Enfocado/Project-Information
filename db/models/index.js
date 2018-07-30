const faker = require('faker');
const moment = require('moment');
const db = require('../index.js');

const categories = ['Music', 'Publishing', 'Film', 'Design & Tech', 'Arts', 'Comics & Illustration', 'Games', 'Food & Craft'];

module.exports = {
  project: {
    get: (id, callback) => {
      db.query(`SELECT p.Project_Name as Project_Name, p.Project_Description as Project_Description, 
        p.Currently_Goal as Currently_Funded, p.Backers, p.Funding_Goal as Funding_Goal, p.Start_Date as Start_Date, 
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

  fillCreators: {
    get: (callback) => {
      db.query('SELECT COUNT(*) as creatorCount FROM creator', (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    },
    post: (callback) => {
      const companyName = faker.company.companyName().replace("'", "\\'");
      const location = `${faker.address.city().replace("'", "\\'")},${faker.address.stateAbbr()}`;
      const description = faker.lorem.paragraph().replace("'", "\\'");
      const personName = faker.name.firstName();
      const lastLogin = faker.date.recent();
      const facebook = faker.random.boolean();
      const companyLogo = faker.image.imageUrl();

      const query = `INSERT INTO creator (
        Company_Name,
        Location,
        Description,
        Person_Name,
        Last_Login,
        Facebook,
        Company_Logo
      ) VALUES (
        '${companyName}',
        '${location}',
        '${description}',
        '${personName}',
        '${moment(lastLogin).format('YYYY-MM-DD HH:mm:ss')}',
        '${facebook}',
        '${companyLogo}'
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

  fillProjects: {
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
      const projectName = faker.commerce.productName().replace("'", "\\'");
      const projectDescription = faker.lorem.sentences().replace("'", "\\'");
      const startDate = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
      const endDate = moment(faker.date.future()).format('YYYY-MM-DD HH:mm:ss');
      const fundingGoal = faker.finance.amount();
      const currentlyFunded = faker.finance.amount();
      const backers = faker.random.number();
      const location = `${faker.address.city().replace("'", "\\'")}, ${faker.address.stateAbbr()}`;
      const creatorID = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      const isFollowed = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      const category = faker.random.arrayElement(categories);
      const videoLink = faker.image.imageUrl();

      const query = `INSERT INTO project 
      (Project_Name, 
        Project_Description, 
        Start_Date, 
        End_Date, 
        Funding_Goal, 
        Currently_Goal, 
        Backers,
        Location, 
        Creator_ID, 
        Is_Followed, 
        Category, 
        Video_Link)
        VALUES (
          '${projectName}',
          '${projectDescription}',
          '${startDate}',
          '${endDate}',
          '${fundingGoal}',
          '${currentlyFunded}',
          '${backers}',
          '${location}',
          '${creatorID}',
          '${isFollowed}',
          '${category}',
          '${videoLink}'
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
