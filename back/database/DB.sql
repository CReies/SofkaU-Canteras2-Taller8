CREATE DATABASE contacts;

USE contacts;

CREATE TABLE contacts(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  tel VARCHAR(15) NOT NULL,
  birthday TIMESTAMP,
  PRIMARY KEY (id)
);

SET
  time_zone = '-05:00';

INSERT INTO
  contacts (name, lastname, email, tel, birthday)
VALUES
  (
    "fulanito",
    "detal",
    "1231231234",
    "2000-01-01 00:00:01"
  );

INSERT INTO
  contacts (name, lastname, email, tel)
VALUES
  (
    "fulanito2",
    "detal2",
    "3213213210"
  );
