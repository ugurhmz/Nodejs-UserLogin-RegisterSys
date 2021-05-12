

exports.loggedinUser = (req,res,next) => {

    if(req.isAuthenticated()){

        return next()
    }
    else {

        req.flash("error",["You don't have a permission, Please Sign in"])
        res.redirect('/admin/login')
    }

}