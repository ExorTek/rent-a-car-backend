const express = require('express');
const {createCategory, getAllCategory} = require("../controllers/category");
const router = express.Router();

router.get('/', getAllCategory);
router.post('/', createCategory);

module.exports = router;