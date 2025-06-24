require('dotenv').config() // Phải đặt ở đầu tiên
const express = require('express')
const path = require('path');
const app = express()
const configViewEngine = require('./config/viewEngine');
// import các route
const webRoutes = require('./routes/web');
const mysql = require('mysql2/promise');
// Lấy các biến môi trường từ file .env
const port = process.env.PORT || 3000; // Mặc định là 3000 nếu không có trong .env
const hostname = process.env.HOST_NAME || 'localhost';


// cấu hình view engine
configViewEngine(app);
// Sử dụng router
app.use('/test', webRoutes);

// Test MySQL connection
async function testMySQLConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3307, // Port mặc định của MySQL là 3306, nhưng nếu bạn đã thay đổi thì cần chỉnh lại
        user: 'root', // Default user là 'root'
        password: '123456',
        database: 'hoidanit'
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
testMySQLConnection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})