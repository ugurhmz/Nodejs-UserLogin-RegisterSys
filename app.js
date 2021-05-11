const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const PORT  = process.env.PORT
const connectDB = require('./src/utilities/database')
const adminRoutes = require('./src/routes/adminRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const session = require('express-session')
const flashMessage = require('connect-flash')


connectDB()



// SESSION
app.use(session(
    {
        secret : process.env.SESSION_SECRET,
        resave : false,
        saveUninitialized : true
    }
))

// FLASH MESSAGE
app.use(flashMessage())
app.use((req,res,next) => {

        res.locals.validation_error = req.flash('validation_error')
        res.locals.firstname = req.flash("firstname")
        res.locals.lastname = req.flash("lastname")
        res.locals.email = req.flash("email")
       
        

        next()
    }
)


// 
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }))

// EJS
app.set("views", path.resolve(__dirname,"./src/views"))
app.set("view engine","ejs")

// ROUTES
app.use('/admin',adminRoutes)
app.use('/',mainRoutes)



app.listen(PORT, () => {
    console.log(`Connected : http://localhost:${PORT}`)
})