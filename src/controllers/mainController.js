




exports.getIndex = (req,res) => {
    let sayac=0
    if(req.session.sayac) {
        req.session.sayac++;
    }else {
        req.session.sayac = 1;
    }


    res.render('index', { sayac : req.session.sayac})
}