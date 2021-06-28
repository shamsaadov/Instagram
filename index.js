const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const file = require("file-upload");
const path = require("path");
const getIndexRoute = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(getIndexRoute);

mongoose
  .connect(
    "mongodb+srv://shamsadov:121314qq@cluster0.8m6ff.mongodb.net/Instagram",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Успешное подключение к монгоДБ");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.listen(4040, () => {
  console.log("Успешное подключение к локальному серверу");
});
