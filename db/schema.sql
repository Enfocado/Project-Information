CREATE DATABASE projectinformation;

\c projectinformation;

CREATE TABLE project (
  projectName text,
  projectID bigserial,
  PRIMARY KEY(projectID)
);

CREATE TABLE creator (
  creatorID bigserial,
  Company_Name text,
  Location text,
  Description text,
  Person_Name text,
  Facebook text,
  Company_Logo text,
  PRIMARY KEY(creatorID)
);