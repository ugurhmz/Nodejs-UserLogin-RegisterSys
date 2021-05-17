const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

        firstname : {
            type: String,
            required:true,
            minlength:2,
            trim:true
        },
        lastname : {
            type : String,
            required : true,
            minlegth:2,

        },
        email : {
            type : String,
            required : true,
            unique : [true,"email must be unique"],    
            lowercase : true       
        },
        
        isMailActive : {
            type: Boolean,
            default : false
        }
        ,
        password : {
            type : String,
            required: true,
            trim : true
        },

        date : {
            type : Date,
            default: Date.now
        }

        
}, {collection:'users'})


module.exports = mongoose.model('User',userSchema)