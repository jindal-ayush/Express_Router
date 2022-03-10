const express = require('express');
const path = require('path')

const router = express.Router();

router.use('/', homeHandler);


function homeHandler(request, response, next) {
    const filePath = path.join(__dirname, '../', 'views', 'homepage.html')
    console.log(filePath)
    response.sendFile(filePath);
}

module.exports = router;
