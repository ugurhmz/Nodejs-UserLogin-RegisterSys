const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const PORT  = process.env.PORT
const connectDB = require('./src/utilities/database')
const adminRoutes = require('./src/routes/adminRoutes')
const mainRoutes = require('./src/routes/mainRoutes')


connectDB()

app.use(express.static('public'));



app.set("views", path.resolve(__dirname,"./src/views"))
app.set("view engine","ejs")


app.use('/admin',adminRoutes)
app.use('/',mainRoutes)



app.listen(PORT, () => {
    console.log(`Connected : http://localhost:${PORT}`)
})