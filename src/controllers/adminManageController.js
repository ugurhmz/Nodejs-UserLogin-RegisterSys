




//_____________________________________ ADMIN MANAGE___________________________
exports.getAdminManage = (req,res) =>{
    res.render('admin_manage', {
        
        siteUser : req.user
    })
}
