const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(cors());

const fileSTorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileSTorage });

app.post("/single", upload.single("image"), (req, res) => {
  res.send(req.file);
});
app.post("/multiple", upload.array("images", 3), (req, res) => {
  res.send("Files uploaded successfully");
});

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
