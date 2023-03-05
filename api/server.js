require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(process.env.HELLO);
    res.end();

});

module.exports = app;
