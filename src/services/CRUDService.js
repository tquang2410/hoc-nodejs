const { getConnection } = require('../config/database');

const getAllUsers = async () => {
    const connection = await getConnection();
    let [results, fields] = await connection.query('SELECT * FROM Users');
    await connection.end();
    return results;
};
const getUserById = async (id) => {
    const connection = await getConnection();
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
    await connection.end();
    return results[0]; // Trả về user đầu tiên (vì ID là unique)
};

const updateUserById = async (id, email, name, city) => {
    const connection = await getConnection();
    let [results, fields] = await connection.query(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
        [email, name, city, id]
    );
    await connection.end();
    return results;
};
const deleteUserById = async (id) => {
    const connection = await getConnection();
    let [results, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [id]);
    await connection.end();
    return results;
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};