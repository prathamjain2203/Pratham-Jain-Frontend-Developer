const { default: axios } = require("axios");

const getAllCapsules = async (req, res, next) => {
  try {
    const response = await axios("https://api.spacexdata.com/v3/capsules", {
      params: {
        ...req.query,
      },
    });
    console.log(response);
    res.status(200).send(response.data);
  } catch (err) {
    return next(err, 400);
  }
};

module.exports = getAllCapsules;
