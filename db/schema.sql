DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db (
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);