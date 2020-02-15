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
    type: String
  },
  isChecked: {
    type: Boolean
  }
});

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.post("/create", async (req, res) => {
  const newTodo = await new Todo({
    task: req.fields.task,
    isChecked: req.fields.isChecked
  });

  await newTodo.save();

  res.json(newTodo);
  try {
  } catch (error) {
    res.json(error.message);
  }
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("server started");
});
