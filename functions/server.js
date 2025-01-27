// functions/server.js
const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Netlify!');
});

module.exports.handler = serverless(app);
