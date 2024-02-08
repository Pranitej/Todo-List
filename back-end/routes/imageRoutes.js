const express = require("express");
const multer = require("multer");

const router = express.Router();
const imageSchema = require("../model/imageModel");

const storage = multer.diskStorage({
  destination: function (request, fileName, callBack) {
    return callBack(null, "./uploads");
  },
  filename: function (request, fileName, callBack) {
    return callBack(
      null,
      `${Date.now()}_${fileName.originalname.replaceAll(" ", "")}`
    );
  },
});

const upload = multer({ storage });

router.post("/uploadImage", upload.single("file"), async (req, res) => {
  try {
    const receivedData = new imageSchema({
      title: req.body.title,
      description: req.body.description,
      image: req.file.filename,
    });
    const result = await receivedData.save(); // Add await here
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    if (error instanceof multer.MulterError) {
      const result = {
        response: "error",
        error: "Multer error",
        statusCode: 400,
      };
      res.status(result.statusCode).json(result);
    } else {
      console.error("Error:", error);
      const result = {
        response: "error",
        error: "Internal Server Error",
        statusCode: 500,
      };
      res.status(result.statusCode).json(result);
    }
  }
});

router.get("/getImage", async (req, res) => {
  try {
    const image = await imageSchema.find();
    res.json(image);
  } catch (error) {
    console.error("Error fetching image data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deleteimage/:id", async (req, res) => {
  try {
    const response = await imageSchema.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.send("Error :" + error);
  }
});

module.exports = router;
