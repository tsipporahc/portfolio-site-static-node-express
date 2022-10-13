/* eslint-disable indent */
const express = require('express');
const router = express.Router(); // create route handlers

// define the index page route
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router; //export router to app.js
