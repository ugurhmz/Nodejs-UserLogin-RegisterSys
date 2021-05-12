const LocalStrategy = require('passport-local').Strategy
const User = require('../models/userModel')



module.exports = function(passport){

    const options = {
        usernameField :'email',
        passwordField :'password'
    }

    passport.use(new LocalStrategy(options, async(email,password,done) => {

        try {
            const user_result =await User.findOne({email : email})

            if(!user_result){
                 return done(null,false,{message : "User not found"})
            }

            if(user_result.password !== password){
                return done(null, false, { message : "Password did not match."})

            }else {
                return done(null, user_result)
            }


        }
        catch(err) {
            return done(err)
        }

    }))

//____________________________________(1) THE ID VALUE IS SAVING IN THE DB ____________________________
    passport.serializeUser(function (user,done) {
        console.log("Save session id : "+user.id)
        done(null, user.id)
    })
    

//___________________________________(2) THE ID VALUE IS SEARCHING IN THE DB AGAIN____________    
    passport.deserializeUser(function (id,done) {
        User.findById(id , function (err,user) {
            done(err,user)
        })
    })
}

