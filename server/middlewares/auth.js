const User = require('./../models/userSchema');


const authMiddleware = async (req, res, next) => {
  try {
    const { email } = req.session;

    const user = await User.findOne({ email: email });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;