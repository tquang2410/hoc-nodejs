const { getConnection } = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');
const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results })
}

const getAboutPage = (req, res) => {
    res.send('About me');
};

const getContactPage = (req, res) => {
    res.render('sample.ejs');
};


const postCreateUser = async (req, res) => {
    try {
        const { email, name, city } = req.body;
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
const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    console.log('userId:', userId);
    res.render('update.ejs');
};
module.exports = {
    getHomePage,
    getAboutPage,
    getContactPage,
    postCreateUser,
    getCreatePage,
    getUpdatePage
};