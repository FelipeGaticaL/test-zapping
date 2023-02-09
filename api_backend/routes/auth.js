const { Router } = require('express');
const router = Router();
const authController = require('../controller/authController')
const jwtVerify = require('../middleware/auth')

router.post('/register', authController.createUser)
router.post('/login', authController.login)
router.post('/verify', jwtVerify.auth)

module.exports = router;