const express = require('express');
const bodyParser = require('body-parser');

const loginController = require('./controller/loginController')

const signupController = require('./controller/signupController');

const homeController = require('./controller/homeController');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', loginController);

app.use('/signup', signupController);

app.use('/', homeController);

app.listen('3002');
