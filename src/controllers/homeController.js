const { getConnection } = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');
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
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
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
// const getUpdatePage = (req, res) => {
//     const userId = req.params.id;
//     console.log('userId:', userId);
//     res.render('update.ejs');
// };
const getUpdatePage = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('update.ejs', { user: user });
    } catch (err) {
        console.log(err);
        res.status(500).send('Lỗi khi lấy thông tin user');
    }
};
const postUpdateUser = async (req, res) => {
    try {
        const { id, email, name, city } = req.body;
        await updateUserById(id, email, name, city);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Lỗi cập nhật user');
    }
};
const postDeleteUser =  async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { user: user });
}
const postHandleRemoveUser = async (req, res) => {
    const id  = req.body.id;
    await deleteUserById(id);

    res.redirect('/');
}
module.exports = {
    getHomePage,
    getAboutPage,
    getContactPage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
};