const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage, getContactPage, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController');
// khai báo các route
router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get('/contact', getContactPage);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
module.exports = router;