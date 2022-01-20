const express = require('express');
const router = express.Router();
const {
    register,
    getUser,
    login,
    editDetails
} = require('../controllers/auth');
const {getAccessToRoute} = require("../middlewares/auth/auth");

router.get('/profile', getAccessToRoute, getUser);

router.put('/editDetails',editDetails)

router.post('/login', login);
router.post('/register', register);

module.exports = router;