require('dotenv').config() // Phải đặt ở đầu tiên

const express = require('express')
const path = require('path');
const app = express()
// Thêm dòng này để serve static files
app.use(express.static('public'));
// Lấy các biến môi trường từ file .env
const port = process.env.PORT || 3000; // Mặc định là 3000 nếu không có trong .env
const hostname = process.env.HOST_NAME || 'localhost';

console.log("check env", process.env)


// cấu hình view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
// cấu hình thư mục chứa các file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// khai báo các route
app.get('/', (req, res) => {
    res.send('Hello World! Linga guliguli Nodemon!')
})

app.get('/abc', (req, res) => {
    res.send('About me')
})

app.get('/contact', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})