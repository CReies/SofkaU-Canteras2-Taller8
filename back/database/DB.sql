CREATE DATABASE contacts;

USE contacts;

CREATE TABLE people(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  birthday TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE emails(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  person_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES people(id)
);

CREATE TABLE cellphones(
  id INT NOT NULL AUTO_INCREMENT,
  number VARCHAR(15) NOT NULL,
  person_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES people(id)
);
