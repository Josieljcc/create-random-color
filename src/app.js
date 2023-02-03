const { json } = require("express");
const express = require("express");
const generateRandom = require("./util/generateRandom");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(json());

app.get("/color", (_req, res) => {
  const color = generateRandom();
  res.status(200).json({ color });
});

module.exports = app;
