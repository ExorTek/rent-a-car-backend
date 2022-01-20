const Brand = require('../model/Brand');
const expressAsyncHandler = require("express-async-handler");
const getAllBrand = expressAsyncHandler(async (req, res, next) => {
    const brands = await Brand.find();
    res.status(200).json({
        success: true,
        message: 'Get All Brand Successfully!',
        data: brands
    })
});
const createBrand = expressAsyncHandler(async (req, res, next) => {
    const brand = req.body;
    const createdBrand = await Brand.create(
        brand
    );
    res.status(200).json({
        success: true,
        message: 'Created Brand Successfully!',
        data: createdBrand
    });
});
module.exports = {getAllBrand, createBrand};