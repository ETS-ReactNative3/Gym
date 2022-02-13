const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator/check')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')

const Admin = require('../models/Admin')
const Week = require('../models/Week')
const User = require('../models/User')

exports.postSignup = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const isAdmin = true

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        // console.log(errors.array())
        return res.json(errors.array()[0].msg)
    } 

    Admin.findOne({email : "nikhil_singhns@outlook.com"}).then(user => {
        if(user){
            return 
        }
    })


    bcrypt.hash(password,12).then(hashedPassword => {
        const admin = new Admin({
            name : name,
            email : email,
            password : hashedPassword,
            isAdmin : true
        })
        console.log(admin)
        const token = jwt.sign({adminId : Admin._id},jwtkey)
        res.send({token:token})
        return admin.save()

    }).then(res => {
        console.log(res)

    }).catch(err => {
        const error = new Error(err)
        return next(err)
    })
}

exports.postLogin = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password

    Admin.findOne({email:email}).then(user => {
        if(!user) {
            return res.json("Invalid Credentials")
        }
        bcrypt.compare(password,user.password).then(doMatch => {
            if(!doMatch) {
                return res.json("Invalid Credentials")
            }
            const token = jwt.sign({userId:user._id},jwtkey)
            res.send({token:token})
        })
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

