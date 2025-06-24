const path = require('path');
const express = require("express");
const configViewEngine = (app) => {
    // cấu hình view engine

    app.set('views', path.resolve(__dirname, '../views'));
    app.set('view engine', 'ejs')
    // cấu hình thư mục chứa các file tĩnh
    app.use(express.static(path.join(__dirname, '../public')));
}
module.exports = configViewEngine;