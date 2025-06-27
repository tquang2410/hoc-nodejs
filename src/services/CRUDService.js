const { getConnection } = require('../config/database');

const getAllUsers = async () => {
    const connection = await getConnection();
    let [results, fields] = await connection.query('SELECT * FROM Users');
    await connection.end();
    return results;
};

module.exports = {
    getAllUsers
};