const ErrorHandler = require("../utils/errorhandler");

const checkAuthorization = async (req, res, next) => {
  try {
    if (!(req.headers.authorization === process.env.API_KEY)) {
      return next(new ErrorHandler("Unauthorized Request", 404));
    }
    next();
  } catch (err) {
    return next(new ErrorHandler(err, 400));
  }
};

module.exports = checkAuthorization;
