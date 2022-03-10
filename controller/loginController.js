const express = require('express');
const path = require('path')

const router = express.Router();

router.use('/user', userHandler);

router.use('/', loginHandler);


function loginHandler(request, response, next) {
    const filePath = path.join(__dirname, '../', 'views', 'login.html')
    console.log(filePath)
    response.sendFile(filePath);
}

function userHandler(request, response, next) {
    const filePath = path.join(__dirname, '../', 'views', 'login.html')
    console.log(filePath)
    response.send('I am here');
}

module.exports = router;
