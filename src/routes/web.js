const express = require('express');
const router = express.Router();

// khai báo các route
router.get('/', (req, res) => {
    res.send('Hello World! Linga guliguli Nodemon!')
})

router.get('/about', (req, res) => {
    res.send('About me')
})

router.get('/contact', (req, res) => {
    res.render('sample.ejs')
})
module.exports = router;