# Express-REST-API
An easy way to get started with a Express server offering a REST API with Node.js. [Read more about it.](https://www.robinwieruch.de/node-express-server-rest-api)

Express based REST api server with CREATE, READ, UPDATE and DELETE apis available. 

## Features

- Babel 7

- Environment Variables

- Express

- REST API

## Requirements

- node & npm

- git

## Installation
```bash
- git clone git@github.com:kajalgupta/Express-REST-API.git

- cd Express-REST-API

- npm install

- npm start

```

### GET Routes

- visit [http://localhost:3000](http://localhost:3000/)
 - /api/courses
 - /api/courses/id
 
 ### Postman
 
 - Install [Postman](https://www.getpostman.com/downloads/) to interact with REST API
 - Create a course with:
   - URL: http://localhost:3000/api/courses
   - Method: POST
   - Body: raw + JSON (application/json)
   - Body Content: { "id": "5" , "name" : "English"}
   
  - Delete a message with:
    - URL: http://localhost:3000/api/2
    - Method: DELETE

 
   
