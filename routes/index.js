const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/contacts');

router.get('/contacts', require('./contacts'))

router.get('/contacts/:id', require('./contacts'));

module.exports = router