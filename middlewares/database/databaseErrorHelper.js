const User = require('../../models/User');
const CustomError = require('../../helpers/error/CustomError');
const expressAsyncHandler = require('express-async-handler');
const checkUserExists = expressAsyncHandler(async (req, res, next) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return next(new CustomError('There is no such user in this id!', 400));
    }
    next();
});
module.exports = {checkUserExists}