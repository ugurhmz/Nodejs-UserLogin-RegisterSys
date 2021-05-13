const { validationResult } = require('express-validator')
const User = require('../models/userModel')

// PASSPORT
const passport = require('passport')
require('../utilities/passport_locals')(passport)


//________________________________ LOGIN ________________________________

// get
exports.adminGetLogin = (req,res) => {
   res.render('login')
}

// post
exports.adminPostLogin = (req,res, next) => {
    

    const validErr = validationResult(req)
    req.flash("email", req.body.email)
    req.flash("password",req.body.password)

    if(!validErr.isEmpty()){

        req.flash("validation_error",validErr.array()) //ÇIKAN HATALARI DİZİYE DÖNÜŞTÜR SONRA -> validation_error yapısına ekle
        res.redirect('/admin/login')
    
    }
    else {
        
    passport.authenticate('local',{
        successRedirect : '/admin/manage',
        failureRedirect : '/admin/login',
        failureFlash : true
    })(req,res,next)
    }

   
}





//________________________________ REGISTER ________________________________

// get
exports.adminGetRegister = (req,res) => {
    
    res.render('register')
}


// post
exports.adminPostRegister = async (req,res) => {

    const validErr = validationResult(req)

    if(!validErr.isEmpty()){

        req.flash("validation_error",validErr.array()) //ÇIKAN HATALARI DİZİYE DÖNÜŞTÜR SONRA -> validation_error yapısına ekle
        req.flash("firstname", req.body.firstname)
        req.flash("lastname", req.body.lastname)
        req.flash("email", req.body.email)
        req.flash("password",req.body.password)
        req.flash("repassword",req.body.repassword)
        res.redirect('/admin/register')
    
    }
    else {
       //_______________________________________________ USER findOne & create__________________ 
       try {

                const _user = await User.findOne({email : req.body.email})

                if(_user){
                    req.flash("validation_error",[{msg:"This email already in use"}])
                    req.flash("firstname", req.body.firstname)
                    req.flash("lastname", req.body.lastname)
                    req.flash("email", req.body.email)
                    req.flash("password",req.body.password)
                    req.flash("repassword",req.body.repassword)
                    
                    res.status(404).redirect('/admin/register')
                    return;
                }

                //__________________________ If the user is registering for the first time_________
                else {
                    const newUser  = new User({
                        firstname : req.body.firstname,
                        lastname : req.body.lastname,
                        email : req.body.email,
                        password : req.body.password
                    })

                    await newUser.save()
                
                    console.log("New user added successfull in db.")
                    req.flash("success_message",[{ msg: "user added successfull in db."}]) // save it to locals in app.js
                    res.status(200).redirect('/admin/login')
                    return;
                }
         } 
         catch(err) {
             console.log(err)
         }

    }
}


//________________________________ FORGET-PASSWORD ________________________________

exports.adminGetForgetPassword = (req,res) => {

    res.render('forget_password')
}



exports.adminPostForgetPassword = (req,res) => {
    console.log("Forget password send..")
    res.redirect('/login')
}




//_________________________________ LOGOUT _________________________________
exports.adminGetLogout = (req,res) => {
    req.logout()
    req.session.destroy((error) => {
        res.clearCookie('connect.sid')
        
        res.render('login', 
           {
            success_message : [{msg:"See you later..."}]
           }
        )
      
    })
    
    
}