<h1 align="center">Todo List backend </h1>

## Server

**Dependencies**

- Express
- Express-formidable
- Mongoose
- Cors
- Dotenv

**Architecture SCRUD**

- Search task
- Create task : save task in mongoDB database.
- Read : get task from MongoDB
- Update task : update the status isChecked of the task to false or true
- Remove task : delete task from database

## Running the project

Clone this repository :

```
git clone https://github.com/LilaGuill/todo-list-backend.git
cd react-todo-list-api
```

Install packages :

```
npm install
```

When installation is complete, run the project with:

```
npx nodemon index.js
```

## Client

- HTTP request with axios (Get, Post)
- Hooks (useState, useEffect)

## Overview

  <p align="center">
    <img width="500" src="https://github.com/LilaGuill/todo-list-frontend/blob/master/public/screen1.png" alt="capture-1">
  </p>

<p align="center">
  Demo:<a href="https://todolist-react-lg.netlify.com/" target="_blank"> https://todolist-react.netlify.com</a>
</p>

## React Todo List Client

<a href="https://github.com/LilaGuill/todo-list-frontend">https://github.com/LilaGuill/todo-list-frontend</a>

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDb database hosted on Mlab

## Contact

<a href="https://www.linkedin.com/in/lila-guillermic-66542476/" target="_blank">My Linkedin Profil</a>
