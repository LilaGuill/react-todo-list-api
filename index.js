const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const middlewareFormidable = require("express-formidable");

require("dotenv").config();
app.use(middlewareFormidable());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Todo = mongoose.model("Todo", {
  task: {
    type: Object
  }
});

app.post("/create", async (req, res) => {
  await Todo.deleteMany();

  const newTodo = new Todo({
    task: req.fields.task
  });
  await newTodo.save();

  res.json(newTodo);
  try {
  } catch (error) {
    res.json(error.message);
  }
});
app.all("/", (res, req) => {
  res.status(400).json("route not found");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("server started");
});
