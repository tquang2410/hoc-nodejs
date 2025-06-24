const express = require('express')
// import express from 'express'
const app = express()
const port = 3000
// cấu hình view engine
app.set('views', './views')
app.set('view engine', 'ejs')
// khai báo một route
app.get('/', (req, res) => {
    res.send('Hello World! Linga guliguli')
})
// khai báo một route với tham số
app.get('/abc', (req, res) => {
    res.send('About me')
})
app.get('/contact', (req, res) => {
    res.render('sample.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
