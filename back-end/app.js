const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const url = "mongodb://localhost:27017/TodoProject";
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected to MongoDB...");
});

con.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const todoRouter = require("./routes/todoRoutes");
app.use("/todo", todoRouter);

const imageRouter = require("./routes/imageRoutes");
app.use("/image", imageRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
