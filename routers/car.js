const express = require('express');
const {createCar, getAllCar,editCarDetails} = require("../controllers/car");
const router = express.Router();

router.get('/', getAllCar);
router.put('/:carId',editCarDetails);
router.post('/createCar', createCar);

module.exports = router;