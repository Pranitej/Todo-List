const express = require("express");

const router = express.Router();
const todoSchema = require("../model/todoModel");

router.get("/getalltodos", async (req, res) => {
  try {
    const todoData = await todoSchema.find();
    res.json(todoData);
  } catch (error) {
    res.send("Error :" + error);
  }
});

router.post("/addtodo", async (req, res) => {
  const receivedData = new todoSchema({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const response = await receivedData.save();
    res.json(response);
  } catch (error) {
    res.send("Error :" + error);
  }
});

router.delete("/deletetodo/:id", async (req, res) => {
  try {
    const response = await todoSchema.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.send("Error :" + error);
  }
});

router.delete("/deletealltodos", async (req, res) => {
  try {
    const response = await todoSchema.deleteMany({});
    res.json(response);
  } catch (error) {
    res.send("Error :" + error);
  }
});

module.exports = router;
