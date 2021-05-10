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
    console.log(req.flash("validation_error"))
    res.render('register')
}

exports.adminPostRegister = (req,res) => {

    const validErr = validationResult(req)

    if(!validErr.isEmpty()){

        req.flash("validation_error",validErr.array()) //ÇIKAN HATALARI DİZİYE DÖNÜŞTÜR SONRA -> validation_error yapısına ekle
        res.redirect('/admin/register')
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

