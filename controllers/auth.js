const expressAsyncHandler = require('express-async-handler');
const CustomError = require('../helpers/error/CustomError');
const User = require('../models/User');
const {sendJwtToClient} = require("../helpers/auth/tokenHelpers");
const {validateUserInputLogin, validateUserInputRegister, comparePassword} = require('../helpers/input/inputHelper');

const register = expressAsyncHandler(async (req, res, next) => {
    const {username, name, email, password} = req.body;
    if (!validateUserInputRegister(username, name, email, password)) {
        return next(new CustomError('Please don\'t empty the input!', 400));
    }
    const user = await User.create({
        username,
        name,
        email,
        password
    });
    sendJwtToClient(user, res);
});
const login = expressAsyncHandler(async (req, res, next) => {
    const {username, password} = req.body;
    if (!validateUserInputLogin) {
        return new CustomError('Please don\'t empty the input!', 400);
    }
    const user = await User.findOne({$or: [{username: username}, {email: username}]}).select('+password');
    if (user === null) {
        return new CustomError('Username/Email or Password is incorrect!')
    }
    if (!comparePassword(password, user.password)) {
        return new CustomError('Please check the password!');
    }
    sendJwtToClient(user, res);
});

const getUser = expressAsyncHandler(async (req, res, next) => {
    return res.json({
        success: true,
        data: {
            id: req.user.id,
            name: req.user.name
        }
    });
});

const editDetails = expressAsyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.user.id, {...req.body}, {
        new: true,
        runValidators: true
    });
    return res.status(200).json({
        success: true,
        data: user
    })
});

module.exports = {
    register,
    login,
    getUser,
    editDetails
}