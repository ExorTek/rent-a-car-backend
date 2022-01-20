const expressAsyncHandler = require('express-async-handler');
const Car = require('../models/Car');

const createCar = expressAsyncHandler(async (req, res, next) => {
    const car = await Car.create({
        ...req.body
    });
    res.status(200).json({
        success: true,
        message: 'Car Creation Successfully!',
        data: car
    });
});
const getAllCar = expressAsyncHandler(async (req, res, next) => {
    const cars = await Car.find();
    res.status(200).json({
        success: true,
        message: 'List All Cars Successfully!',
        data: cars
    })
});
const editCarDetails = expressAsyncHandler(async (req, res, next) => {
    const updatedCar = await Car.findByIdAndUpdate(req.params.carId, {
        ...req.body
    });
    res.status(200).json({
        success: true,
        message: 'Car Updated Successfully!',
        data: updatedCar
    });
});

module.exports = {
    createCar,
    getAllCar,
    editCarDetails
}
