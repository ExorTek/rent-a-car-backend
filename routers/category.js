const express = require('express');
const {createCategory, getAllCategory} = require("../controllers/category");
const {getAdminAccessToken} = require("../middlewares/auth/auth");
const router = express.Router();

router.get('/', getAllCategory);
router.post('/',  createCategory);

module.exports = router;