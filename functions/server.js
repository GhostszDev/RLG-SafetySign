// functions/server.js
const serverless = require('serverless-http');
const express = require('express');
const corsOptions = {
    origin: "https://ghostszdev.github.io"
}
var dataManagerRouter = require('../routes/dataManager');
const app = express();

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello, Netlify!');
});

app.use('/dataManager', dataManagerRouter);

module.exports.handler = serverless(app);
