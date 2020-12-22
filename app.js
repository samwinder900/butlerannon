"use strict";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/submit', (req,res) => {
    console.log("Got body: ", req.body);
    res.sendStatus(200);
});

module.exports = app;