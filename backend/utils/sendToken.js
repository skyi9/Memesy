import lodash from "lodash";

const sendToken = (user, statusCode, res, type = "login") => {
  const token = user.getJWTToken();
  const userDummy = lodash.omit({ ...user._doc }, ["password"]);

  res.status(statusCode).json({
    success: true,
    user: userDummy,
    token,
  });
};

export default sendToken;
