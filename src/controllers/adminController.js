const { validationResult } = require('express-validator')

//________________________________ LOGIN ________________________________

exports.adminGetLogin = (req,res) => {
   res.render('login')
}


exports.adminPostLogin = (req,res) => {
    console.log("Login successfully")
    res.redirect('/')
}



//________________________________ REGISTER ________________________________
exports.adminGetRegister = (req,res) => {
    
    res.render('register')
}

exports.adminPostRegister = (req,res) => {

    const validErr = validationResult(req)

    if(!validErr.isEmpty()){
        res.render('register',{
            validErr:validErr.array()
        })
    }


  
}


//________________________________ FORGET-PASSWORD ________________________________
exports.adminGetForgetPassword = (req,res) => {

    res.render('forget_password')
}



exports.adminPostForgetPassword = (req,res) => {
    console.log("Forget password send..")
    res.redirect('/')
}

