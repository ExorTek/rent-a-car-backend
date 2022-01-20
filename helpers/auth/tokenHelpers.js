const sendJwtToClient = (user, res) => {
    const token = user.generateAccessToken();
    return res.status(200).json({
        token: token
    });
};
const isTokenIncluded = (req) => {
    return (
        req.headers.authorization && req.headers.authorization.startsWith('Bearer ')
    );
};
const getAccessTokenFromHeaders = (req) => {
    const authorization = req.headers.authorization;
    return authorization.split(' ')[1];
};
module.exports = {
    sendJwtToClient,
    isTokenIncluded,
    getAccessTokenFromHeaders
};