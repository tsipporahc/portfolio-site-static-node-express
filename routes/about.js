const express = require('express');
const router = express.Router(); // create route handlers

// define the about route
router.get('/', (req, res) => {
    res.render('about');
});

module.exports = router; //export router to app.js
