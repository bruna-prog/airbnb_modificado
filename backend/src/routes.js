const express = require('express');

const routes = express.Router();

routes.post('/', (req, res) => {
    return res.send('hello world')
});

module.exports = routes;