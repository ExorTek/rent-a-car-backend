const express = require('express');
const {createCar, getAllCar, editCarDetails} = require("../controllers/car");
const {getAdminAccessToken} = require("../middlewares/auth/auth");
const router = express.Router();

router.get('/', getAllCar);
router.put('/:carId',  editCarDetails);
router.post('/',  createCar);

module.exports = router;