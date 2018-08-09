const fs = require('fs');
const path = require('path');


exports.create = (data, callback) => {

  const dataArr = [];
  const countNum = 0;
  for (var i = 0; i < 10000; i ++) {
    const dataObj = {
      companyName: "companyName" + i;
      location: "location" + i;
      description: "description" + i;
      personName: "personName" + i;
      lastLogin: "lastLogin" + i;
      facebook: "facebook" + i;
      companyLogo: "companyLogo" + i;
    }
    dataArr.push(dataObj)
  }
  countNum ++;
  const filePath = path.join("../data", `${countNum}.txt`);
  fs.writeFile(filePath, dataArr, (err) => {
    if (err) {
      throw err;
    } else {
      callback(null, {data: "create sucess"})
    }
  });


}