const express = require('express')
const router = express.Router()
const adminController  = require('../../src/controllers/adminController')
const adminManageController = require('../../src/controllers/adminManageController')
const validatorMiddleware = require('../middlewares/validator_middleware')
const authenticationMiddleware = require('../middlewares/authentication_middleware')


// LOGIN
router.get('/login', authenticationMiddleware.notloggedinUser,adminController.adminGetLogin)
router.post('/login',authenticationMiddleware.notloggedinUser, validatorMiddleware.validateLogin(),adminController.adminPostLogin)


// LOGOUT
router.get('/logout',authenticationMiddleware.loggedinUser,adminController.adminGetLogout)


// REGISTER
router.get('/register',authenticationMiddleware.notloggedinUser,adminController.adminGetRegister)
router.post('/register',authenticationMiddleware.notloggedinUser,validatorMiddleware.validateNewUser(),adminController.adminPostRegister)


// FORGET-PASSWORD
router.get('/forget-password',authenticationMiddleware.notloggedinUser,adminController.adminGetForgetPassword)
router.post('/forget-password',authenticationMiddleware.notloggedinUser,adminController.adminPostForgetPassword)


// ADMIN-MANAGE
router.get('/manage',authenticationMiddleware.loggedinUser,adminManageController.getAdminManage)



module.exports = router