const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', signupHandler);

function signupHandler(request, response, next) {
    const filePath = path.join(__dirname, '../', 'views', 'signup.html')
    response.sendFile(filePath);
}

module.exports = router;
