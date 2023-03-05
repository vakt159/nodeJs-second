const express = require("express");
const app = express();
const axios = require("axios");
var config = require('./config.js');


app.get("/", async (req, res) => {
      var g = await axios.get(`//${config.get("URL")}`);
      res.send(g.data);
  });

module.exports = app;

