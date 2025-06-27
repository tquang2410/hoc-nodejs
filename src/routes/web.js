const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, getContactPage, postCreateUser } = require('../controllers/homeController');
// khai báo các route
router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get('/contact', getContactPage);
router.post('/create-user', postCreateUser);
module.exports = router;