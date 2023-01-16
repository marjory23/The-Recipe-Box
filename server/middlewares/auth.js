const User = require('./../models/userSchema');


const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    console.log(req.session);
    console.log(req.session.id);
    console.log(uid);
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