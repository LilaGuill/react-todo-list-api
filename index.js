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
    type: String,
    lowercase: true
  },
  isChecked: {
    type: Boolean
  }
});
//Create
app.post("/create", async (req, res) => {
  const newTodo = await new Todo({
    task: req.fields.task,
    isChecked: req.fields.isChecked
  });

  await newTodo.save();

  res.json({ message: "task created" });
  try {
  } catch (error) {
    res.json(error.message);
  }
});

//read
app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ isChecked: 1 });
    res.json(todos);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//update
app.post("/update", async (req, res) => {
  try {
    const todoToUpdate = await Todo.findById(req.fields.id);

    todoToUpdate.isChecked = !todoToUpdate.isChecked;

    await todoToUpdate.save();
    res.json(todoToUpdate);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// delete
app.post("/remove", async (req, res) => {
  try {
    const todoToRemove = await Todo.findById(req.fields.id);
    await todoToRemove.remove();

    res.status(200).json({ message: "task removed" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("server started");
});
