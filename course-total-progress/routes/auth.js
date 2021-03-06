const express = require('express');

const authCtrl = require('../controllers/auth');

const router = express.Router();

router.get('/login', authCtrl.getLogin);

router.post('/login', authCtrl.postLogin);

module.exports = router; 