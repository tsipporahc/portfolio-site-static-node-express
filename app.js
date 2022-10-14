// Import Express and set up express app
const express = require('express');
const app = express();
const router = express.Router(); // create route handlers
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

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
    res.render('index', { projects });
});

// create about route
// const aboutRoutes = require('./routes/about');
// app.use('/about', aboutRoutes);
app.get('/about', (req, res) => {
    res.render('about');
});

// create dynamic project routes
app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    if (id <= projects.length && id >= 0) {
        res.render('project', { projects: projects[id] });
    } else {
        const err = new Error(); // custom error object
        err.status = 404;
        err.message = 'Sorry, this page does not exist :(';
        res.render('page-not-found', { err });
    }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error(); // custom error object
    err.status = 404;
    err.message = 'Sorry, this page is not found :(';
    next(err);
});

// global error handler for server errors
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(err.status);
        res.render('page-not-found', { err });
    } else {
        err.message =
            err.message || `My bad, pardon the construction around here!`;
        res.status(err.status || 500);
        res.render('error', { err });
    }
});

// set up local server using the listen method
app.listen(3000, () => {
    console.log('The app running on localhost:3000');
}); // 3000 is port number
