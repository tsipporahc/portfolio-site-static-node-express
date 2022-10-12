// Import Express and set up express app
const express = require('express');
const app = express();
const router = express.Router(); // create route handlers

// Require data from data.json
const data = require('./data.json');
const { projects } = data;

// Set the view engine to pug middleware
app.set('view engine', 'pug');

// Set the path module for static assets
app.use('/static', express.static('public'));

//  create index route
/* const indexRoutes = require('./routes/index');
app.use(indexRoutes); */
// define the index page route
app.get('/', (req, res) => {
    res.render('index');
});

// create about route
// const aboutRoutes = require('./routes/about');
// app.use('/about', aboutRoutes);
app.get('/about', (req, res) => {
    res.render('about');
});

// create dynamic project routes
app.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    console.dir(id);
    console.dir(data.projects);
    res.render('project', { projects });
});

// set up local server using the listen method
app.listen(3000, () => {
    console.log('The app running on localhost:3000');
}); // 3000 is port number
