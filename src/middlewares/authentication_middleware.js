
// IF LOGED IN
exports.loggedinUser = (req,res,next) => {

    if(req.isAuthenticated()){

        return next()
    }
    else {

        req.flash("error",["You don't have a permission, Please Sign in"])
        res.redirect('/admin/login')
    }

}


// IF NOT LOGGED IN

exports.notloggedinUser = (req,res,next) => {

    if(!req.isAuthenticated()){

        return next()
    }
    else {
        res.redirect('/admin/manage')
    }

}

