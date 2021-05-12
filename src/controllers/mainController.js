



// if user success login
exports.getIndex = (req,res) => {
  
    res.render('index', {
        
        siteUser : req.user
    })
}