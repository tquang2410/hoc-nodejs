const { getConnection } = require('../config/database');

const getHomePage = async (req, res) => {
    try {
        const connection = await getConnection();
        const [results, fields] = await connection.query('SELECT * FROM Users');
        await connection.end();
        res.render('home.ejs', { users: results });
    } catch (err) {
        console.log(err);
        res.status(500).send('Lỗi truy vấn database');
    }
};

const getAboutPage = (req, res) => {
    res.send('About me');
};

const getContactPage = (req, res) => {
    res.render('sample.ejs');
};


const postCreateUser = async (req, res) => {
    try {
        const { email, myname: name, city } = req.body;
        const connection = await getConnection();
        const [results, fields] = await connection.query(
            'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
            [email, name, city]
        );
        await connection.end();
        res.send('Create user successfully!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Lỗi tạo user');
    }
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};
module.exports = {
    getHomePage,
    getAboutPage,
    getContactPage,
    postCreateUser,
    getCreatePage
};