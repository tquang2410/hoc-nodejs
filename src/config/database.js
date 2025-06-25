require('dotenv').config()
const mysql = require('mysql2/promise');

// Test MySQL connection
async function testMySQLConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST ,
        port: process.env.DB_PORT, // Port mặc định của MySQL là 3306, nhưng nếu bạn đã thay đổi thì cần chỉnh lại
        user: process.env.DB_USER, // Default user là 'root'
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME // Tên database bạn muốn kết nối
    });
    try {
        const [results, fields] = await connection.query(
            'select * from Users u '
        );
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
}
module.exports = {testMySQLConnection};