const express = require('express')
const {check,body} = require('express-validator/check')
const router = express.Router()

const adminController = require('../controller/admin')

// router.post('/admin/signup',adminController.postSignup)

router.post('/admin/signin',adminController.postLogin)



module.exports = router