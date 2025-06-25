require('dotenv').config() // Phải đặt ở đầu tiên
const express = require('express')
const path = require('path');
const app = express()
const configViewEngine = require('./config/viewEngine');
const {testMySQLConnection} = require('./config/database');
// import các route
const webRoutes = require('./routes/web');

// Lấy các biến môi trường từ file .env
const port = process.env.PORT || 3000; // Mặc định là 3000 nếu không có trong .env
const hostname = process.env.HOST_NAME || 'localhost';


// cấu hình view engine
configViewEngine(app);
// Sử dụng router
app.use('/', webRoutes);


testMySQLConnection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})