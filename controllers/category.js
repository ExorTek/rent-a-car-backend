const Category = require('../model/Category');
const expressAsyncHandler = require("express-async-handler");
const getAllCategory = expressAsyncHandler(async (req, res, next) => {
    const categories = await Category.find();
    res.status(200).json({
        success: true,
        message: 'Get All Brand Successfully!',
        data: categories
    })
});
const createCategory = expressAsyncHandler(async (req, res, next) => {
    const category =req.body;
    const createdCategory = await Category.create(
        category
    );
    res.status(200).json({
        success: true,
        message: 'Created Brand Successfully!',
        data: createdCategory
    });
});
module.exports = {getAllCategory, createCategory};