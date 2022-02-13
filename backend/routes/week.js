const express = require('express')
const {check,body} = require('express-validator')
const router = express.Router()

const Week = require('../models/Week')

router.post('/admin/postData')

module.exports = router