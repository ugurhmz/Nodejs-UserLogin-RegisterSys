const mongoose  = require('mongoose')
require('dotenv').config()

const connectDB = async () => {

    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false,
            useCreateIndex : true,
          
        })

        console.log("MongoDB connection successfully...")
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }

}

module.exports = connectDB