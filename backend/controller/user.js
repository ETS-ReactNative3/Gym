const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator/check')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const User = require('../models/User')

exports.postSignup = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        // console.log(errors.array())
        return res.json(errors.array()[0].msg)
    } 

    bcrypt.hash(password,12).then(hashedPassword => {
        const user = new User({
            name  : name,
            email : email,
            password :hashedPassword
        })
        console.log(user)
        const token = jwt.sign({userId:User._id},jwtkey)
        res.send({token:token})
        return user.save()
        
        
    }).then(res => {
        console.log(res)
        
    }).catch(err => {
        const error = new Error(err)
        return next(err)
    })
}


exports.login = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password
     

    User.findOne({email : email}).then(user => {
        if(!user) {
            return res.json("Invalid Credentials")
        }
        bcrypt.compare(password,user.password).then(doMatch=> {
            if(!doMatch) {
                return res.json("Invalid Credentials")
            }
            const token = jwt.sign({userId:user._id},jwtkey)
            res.send({token:token})
        })
        bcrypt.compare(password,'$2b$12$W.c35xQdihnxhr9laRUzEOYN15pAS4y4mKtyZoOA8f4JgAaVO08Ma')
    }).then(res => {
        
    }).catch(err => {
        console.log(err)
    })
}