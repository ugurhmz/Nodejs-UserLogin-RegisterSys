

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
   console.log(req.body)
    res.redirect('/')
}


//________________________________ FORGET-PASSWORD ________________________________
exports.adminGetForgetPassword = (req,res) => {

    res.render('forget_password')
}



exports.adminPostForgetPassword = (req,res) => {
    console.log("Forget password send..")
    res.redirect('/')
}

