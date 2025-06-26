const connection = require('../config/database');
const getHomePage = (req, res) => {
    connection.query('SELECT * FROM Users', (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Lỗi truy vấn database');
        }
        res.render('home.ejs', { users: results });
    });
}
const getAboutPage = (req, res) => {
    res.send('About me')
}
 const getContactPage = (req, res) => {
     res.render('sample.ejs')
 }
module.exports ={
    getHomePage,
    getAboutPage,
    getContactPage
}