# SofkaU-Canteras2-Taller8

## Description

Using the knowledge acquired in class, make a CRUD of a phone contact control system, keep in mind that the contacts must have:

1. Full name
2. Phone number
3. Email
4. Date of birth

## Requirements

1. Use an relational DB (MySQL, PostgreSQL, Oracle or MSSQL).
2. It must be worked with Spring Boot, JPA, API Rest and these APIs must be consumed with fetch or Axios from a web interface.
3. For the web interface you can create it with the knowledge acquired in the previous HTML course, also can be created with React or Angular if you have the necesary knowledge.
4. Physical and logical deleted should be implemented
5. The code must be documented.
6. The code must have the front and back end.

The project must be delivered on a git repository (Git-hub or Git-lab) in the following form <https://forms.gle/qEme6dExCLFk9gpp9>

## Installation

### Database

You must to go to `./back/database` and execute:

```sh
mysql -u <YOUR USER> -p
# Enter your password

SOURCE ./DB.sql
```



### Front-End Dependences

You must to go to `./front` and execute:

```sh
npm i
```

## Run

You have to start a HTTP server for both front and back end

### Front-End

The front-end is developed in react, to start the HTTP server you have to go to `./front` and use:

```sh
npm start
```

### Back-End

The back-end is developed in react, to start the HTTP server you have to go to `./back` and use:

```sh
java -jar target\contacts.jar
```
