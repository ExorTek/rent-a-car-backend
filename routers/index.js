const express = require('express');
const auth = require('./auth');
const car = require('./car');
const brand = require('./brand');
const category = require('./category');
const admin = require('./admin');
const router = express.Router();

router.use('/auth', auth);
router.use('/car', car);
router.use('/brand', brand);
router.use('/category', category);
router.use('/admin', admin);

module.exports = router;