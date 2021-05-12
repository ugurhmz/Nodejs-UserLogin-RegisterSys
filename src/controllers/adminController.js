const { validationResult } = require('express-validator')
const User = require('../models/userModel')



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
        else {
            const newUser  = new User({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : req.body.password
            })

            await newUser.save()
           
            console.log("New user added successfull in db.")
            res.status(200).redirect('/admin/login')
            return;
        }


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

