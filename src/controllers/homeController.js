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
 const postCreateUser = (req, res) => {
    console.log("req.body", req.body)
     let email = req.body.email;
        let name = req.body.myname;
        let city = req.body.city;
        console.log("email", email,'name=', name, 'city=', city);
        // let {email, myname, city} = req.body;
        // Xử lý tạo người dùng mới
     // INSERT INTO Users (email, name, city)
     // VALUES ("test@gmail.com", "Wang", "Da Nang");
     res.send('Create user successfully');
     connection.query(
         `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
         [email, name, city],
         function (err, results) {
             console.log(results);
         }
     );
 }
module.exports ={
    getHomePage,
    getAboutPage,
    getContactPage,
    postCreateUser
}