CREATE DATABASE projectinformation;

\c projectinformation;

CREATE TABLE project (
 projectname text,
 projectid bigserial,
 start_date timestamp,
 end_date timestamp,
 funding_goal integer,
 current_goal integer,
 backers integer,
 creator_id integer,
 location text,
 is_followed boolean,
 category text,
 video_link text,
 PRIMARY KEY(projectID)
);

CREATE TABLE creator (
 creatorid bigserial,
 company_name text,
 location text,
 description text,
 person_name text,
 facebook text,
 company_logo text,
 PRIMARY KEY(creatorid)
);