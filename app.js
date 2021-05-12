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
const passport = require('passport')


connectDB()

// MONGO DB  SAVE FOR SESSION
const MongoDBStore = require('connect-mongodb-session')(session)
const sessionStore = new MongoDBStore({
    uri:process.env.MONGO_URL,
    collection:'sessions'
})



// SESSION
app.use(session(
    {
        secret : process.env.SESSION_SECRET,
        resave : false,
        saveUninitialized : true,
        cookie : {
            maxAge: 1000 * 60 * 60 * 24
        },
        store:sessionStore // Mongo DB 'ye kaydedilmesi için ->  Böylece artık DB'ye kaydedilecek
    }
))

// FLASH MESSAGE
app.use(flashMessage())
app.use((req,res,next) => {
        res.locals.validation_error = req.flash('validation_error')
        res.locals.success_message = req.flash("success_message")
        res.locals.firstname = req.flash("firstname")
        res.locals.lastname = req.flash("lastname")
        res.locals.email = req.flash("email")
       
        next()
    }
)

// PASSPORT

app.use(passport.initialize())
app.use(passport.session())





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