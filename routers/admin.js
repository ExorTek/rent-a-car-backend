const express = require('express');
const router = express.Router();
const { getAccessToRoute, getAdminAccessToken } = require('../middlewares/auth/auth');
const {checkUserExists} = require("../middlewares/database/databaseErrorHelper");
const {blockUser, deleteUser} = require("../controllers/admin");

router.use([getAccessToRoute, getAdminAccessToken]);
router.get('/block/:userId', checkUserExists, blockUser);
router.get('/delete/:userId', checkUserExists, deleteUser);

module.exports = router;