const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const PORT  = process.env.PORT
const connectDB = require('./src/utilities/database')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')


connectDB()

app.use(express.static('public'))


app.set("view engine","ejs")
app.set("views", path.resolve(__dirname,"./src/views"))
app.use(expressLayouts)



app.get('/',(req,res) => {

   res.json({hi:'Hello'})
})


app.get('/login',(req,res) => {
    res.render("login", { layout : './partials/_auth_layout.ejs'})
})


app.get('/register',(req,res) => {

    res.render("register", {layout : './partials/_auth_layout.ejs' })

})


app.get("/forget-password" ,(req,res) => {

    res.render("forget_password", {layout : './partials/_auth_layout.ejs' })

})






app.listen(PORT, () => {
    console.log(`Connected : http://localhost:${PORT}`)
})