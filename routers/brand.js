const express = require('express');
const {getAllBrand, createBrand} = require("../controllers/brand");
const {getAdminAccessToken} = require("../middlewares/auth/auth");
const router = express.Router();

router.get('/',  getAllBrand);
router.post('/',  createBrand);

module.exports = router;