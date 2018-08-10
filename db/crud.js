const fs = require('fs');
const path = require('path');
const db = require('./index.js');
const faker = require('faker');


const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const appendLeading = (val) => {
  if(val < 10) {
    return `0${val}`;
  } else {
    return `${val}`
  }
}

const generateDate = () => {
  var arr = [];
  var year = randomNumber(2025, 2018);
  var month = randomNumber(12,1);
  var day = randomNumber(18,1);
  var day2 = day + randomNumber(10,3);

  var date1 = `${year}-${appendLeading(month)}-${appendLeading(day)}`;
  var date2 = `${year}-${appendLeading(month)}-${appendLeading(day2)}`;

  arr.push(date1, date2);

  return arr;
}

const makeProjectTable = () => {
  let countNum = 1;
  exports.dataDir = path.join(__dirname, 'data');
  const filePath = path.join(exports.dataDir, `${countNum}.csv`);
  let writeStream = fs.createWriteStream(filePath);
  function writeToStream(i) {
    let isFollowed = 0;
    for (i = 1; i < 10000001; i ++){
      isFollowed = 1 - isFollowed;
      let date = generateDate();
      const data = `Project ${i}` +','
      + i + ','
      + `${date[0]}` + ','
      + `${date[1]}` + ','
      + i + ','
      + i + ','
      + i + ','
      + i + ','
      + `Location ${i}` + ','
      + isFollowed + ','
      + `Category ${i}` + ','
      +  `${faker.image.imageUrl()}`
      +'\n';
      if(!writeStream.write(data)) {
        writeStream.once('drain', () => {
          writeToStream(i + 1);
        })
      }
    }
    console.log('DONE!')
    writeStream.end();
  }
  writeToStream(0);
  db.query(`COPY "project" FROM '/Users/Thu/Documents/Hackreactor/0_System_Design_Capstone/Project-Information/db/data/${countNum}.csv' DELIMITER ',' CSV HEADER`)
};


const makeCreatorTable = () => {
  let countNum = 2;
  exports.dataDir = path.join(__dirname, 'data');
  const filePath = path.join(exports.dataDir, `${countNum}.csv`);
  let writeStream = fs.createWriteStream(filePath);
  function writeToStream(i) {
    for (i=1; i < 10000001; i++){
      const data = i + ',' 
      + `Company Name ${i}` + ','
      + `Location ${i}` + ','
      + `This project is super awesome. Please fund us. We need the money - ${i} dollars` + ','
      + `Person Name ${i}` + ','
      + `Facebook ${i}` + ','
      + `Company Logo ${i}`
      +'\n';
      if(!writeStream.write(data)) {
        writeStream.once('drain', () => {
          writeToStream(i + 1);
        });
      }
    }
    console.log('DONE!');
    writeStream.end();
  }
  writeToStream(0);
  db.query(`COPY "creator" FROM '/Users/Thu/Documents/Hackreactor/0_System_Design_Capstone/Project-Information/db/data/${countNum}.csv' DELIMITER ',' CSV HEADER`)
};


makeProjectTable();
makeCreatorTable();
