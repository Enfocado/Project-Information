#CRUD API Endpoints

- GET /project/:id
  {
    Project_ID: INT, 
    Project_Name: STRING,
    Project_Description: STRING, 
    Start_Date: STRING,
    End_Date: STRING,
    Funding_Goal: INT,
    Currently_Goal: INT,
    Backers: INT,
    Creator_ID: INT,
    Location: STRING,
    Is_Followed: BOOLEAN, 
    Category: STRING,
    Video_Link: STRING,
  }

- GET /creator/:id
  {
    ID: INT,
    Company_Name: STRING,
    Location: STRING,
    Description: STRING,
    Person_Name: STRING,
    Last_Login: STRING,
    Facebook: STRING,
    Company_Logo: STRING,

  }

- POST /creator/:id
  {
    ID: INT,
    Company_Name: STRING,
    Location: STRING,
    Description: STRING,
    Person_Name: STRING,
    Last_Login: STRING,
    Facebook: STRING,
    Company_Logo: STRING,

  }


- UPDATE /project/:id/Funding
  {
    ID: INT,
    Backers: INT,
    Currently_Goal: INT,
  }


- DELETE /project/:id/
