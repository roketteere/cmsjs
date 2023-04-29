DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE
    departments(
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

INSERT INTO cms_db(id,name) VALUES(1, "Joel");

DESCRIBE departments;