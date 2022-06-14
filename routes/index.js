const express = require('express')
const router = express.Router()

router.get('/Contacts', require('./contacts'))

module.exports = router