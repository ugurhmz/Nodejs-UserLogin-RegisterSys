
const express = require('express')
const router = express.Router()
const adminController  = require('../../src/controllers/adminController')





router.get('/login',adminController.adminGetLogin)
router.get('/register',adminController.adminGetRegister)
router.get('/forget-password',adminController.adminGetForgetPassword)





module.exports = router