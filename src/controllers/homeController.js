const getHomePage = (req, res) => {
    //chỗ này để hồi process data
    // chỗ này hồi call model
    res.send('Hello World! Linga guliguli Nodemon!')
}
const getAboutPage = (req, res) => {
    res.send('About me')
}
 const getContactPage = (req, res) => {
     res.render('sample.ejs')
 }
module.exports ={
    getHomePage,
    getAboutPage,
    getContactPage
}