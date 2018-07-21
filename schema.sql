DROP DATABASE IF EXISTS projectInformation;

CREATE DATABASE projectInformation;

use projectInformation;

CREATE TABLE project (
  ID INT NOT NULL AUTO_INCREMENT,
  Project_Name VARCHAR(200),
  Project_Description VARCHAR(500),
  Start_Date DATETIME,
  End_Date DATETIME,
  Funding_Goal INT,
  Currently_Goal INT,
  Creator_ID INT,
  Location VARCHAR(200),
  Is_Followed TINYINT(1),
  Category ENUM('Music', 'Publishing', 'Film', 'Design & Tech', 'Arts', 'Comics & Illustration', 'Games', 'Food & Craft'),
  Video_Link VARCHAR(200),
  PRIMARY KEY(ID)
);

CREATE TABLE creator (
  ID INT NOT NULL AUTO_INCREMENT,
  Company_Name VARCHAR(200),
  Location VARCHAR(200),
  Description VARCHAR(500),
  Person_Name VARCHAR(100),
  Last_Login DATETIME,
  Facebook VARCHAR(200),
  Company_Logo VARCHAR(200),
  PRIMARY KEY(ID)
);