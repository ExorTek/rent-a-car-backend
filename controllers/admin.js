const User = require('../models/User');
const expressAsyncHandler = require('express-async-handler');

const blockUser = expressAsyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    user.blocked = !user.blocked;
    await user.save();
    return res.status(200).json({
        success: true,
        message: user.blocked === true ? 'User blocking successful' : 'User unblocking successful.'
    });
});

const deleteUser = expressAsyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    await user.remove();
    return res.status(200).json({
        success: true,
        message: 'User delete successful'
    });
});

module.exports = {
    blockUser,
    deleteUser
}