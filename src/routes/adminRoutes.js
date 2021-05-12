
const express = require('express')
const router = express.Router()
const adminController  = require('../../src/controllers/adminController')
const adminManageController = require('../../src/controllers/adminManageController')
const validatorMiddleware = require('../middlewares/validator_middleware')



// LOGIN
router.get('/login',adminController.adminGetLogin)
router.post('/login', validatorMiddleware.validateLogin(),adminController.adminPostLogin)


// LOGOUT
router.get('/logout',adminController.adminGetLogout)


// REGISTER
router.get('/register',adminController.adminGetRegister)
router.post('/register',validatorMiddleware.validateNewUser(),adminController.adminPostRegister)


// FORGET-PASSWORD
router.get('/forget-password',adminController.adminGetForgetPassword)
router.post('/forget-password',adminController.adminPostForgetPassword)


// ADMIN-MANAGE
router.get('/manage',adminManageController.getAdminManage)



module.exports = router