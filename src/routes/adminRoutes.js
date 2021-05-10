
const express = require('express')
const router = express.Router()
const adminController  = require('../../src/controllers/adminController')




// LOGIN
router.get('/login',adminController.adminGetLogin)
router.post('/login',adminController.adminPostLogin)

// REGISTER
router.get('/register',adminController.adminGetRegister)
router.post('/register',adminController.adminPostRegister)

// FORGET-PASSWORD
router.get('/forget-password',adminController.adminGetForgetPassword)
router.post('/forget-password',adminController.adminPostForgetPassword)





module.exports = router