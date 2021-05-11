
const {body}  = require('express-validator')



const validateNewUser = () => {

    return [
        body('email').trim()
        .isEmail().withMessage("Please enter a valid email"),

        body('password').trim()
        .isLength({ min : 8 }).withMessage("Password must be at least 8 characters"),

        body('repassword').trim().custom((value,{req}) => {
            if(value !== req.body.password ){
                throw new Error('Passwords do not match!')
            }

            return true;
        }),

        body('firstname').trim()
        .isLength({ min : 2}).withMessage("First name must be at least 2 characters"),

        body('lastname').trim()
        .isLength({ min : 2}).withMessage("Last name must be at least 2 characters")


    ]

}

module.exports = {
    validateNewUser
}