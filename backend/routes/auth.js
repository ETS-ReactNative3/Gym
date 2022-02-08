const express = require('express')
const {check,body} = require('express-validator/check')

const authController = require('../controller/auth')
const User = require('../models/User')
const router = express.Router()

router.post('/signup' ,[
    check('name').isString(),
    check('email').isEmail().
    withMessage('Please Enter a Valid Email').
    custom((value,{req}) => {
        return User.findOne({email : value}).then(userDoc => {
            if(userDoc) {
                return Promise.reject('Email exists')
            }
        })
    }).normalizeEmail(),
    body(
        'password',
        'Please enter a password with atleast 5 characters.'
      ).isLength({ min: 5 })
],authController.postSignup)


router.post('/signin',[
    body('email').
    isEmail().withMessage('Please enter a valid email address').
    normalizeEmail(),
    body('password','Password has to be valid')
    .isLength({min : 5}).isAlphanumeric().trim()
],authController.postLogin)


// const express = require('express')
// const router = express.Router()
// const mongoose  = require('mongoose')
// const User = mongoose.model('User')
// const jwt = require('jsonwebtoken')
// const {jwtkey} = require('../keys')
// const {validationResult} = require('express-validator/check')

// router.post('/signup',  (req,res) => {
//     const {Name , email , password}  = req.body;
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         console.log(errors.array())
//     }
//     const user = new User({Name,email,password})
//     user.save()
//     const token = jwt.sign({userId:user._id},jwtkey)
//     res.send({token:token})
// })

// router.post('/signin',async(req,res)=> {
//     const {email,password} = req.body
//     if(!email || !password) {
//         return res.status(422).send({error:"Must provide email or password"})
//     }
//     const user = await User.findOne({email})
//     if(!user){
//         return res.status(422).send({error : "Must provide email or password"})
//     }
//     try{
//         await user.comparePassword(password)
//         const token = jwt.sign({userId:user._id},jwtkey)
//         res.send({token:token})
//     }catch(err){
//         return res.status(422).send({error : "Must provide email or password"})
//     }
    
// })

module.exports = router