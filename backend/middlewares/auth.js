import CustomError from "../utils/error.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { JWTErrors, AuthorizationErrors } from "../constants/Errors.js";

export const isAuth = catchAsyncErrors(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new CustomError(JWTErrors.TokenNotFound);
  }
  const jwtToken = req.headers.authorization.split(" ")[1];
  jwt.verify(jwtToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      throw new CustomError(JWTErrors.InvalidOrExpiredToken);
    } else {
      req.user = await User.findById(decoded.userId);
      next();
    }
  });
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError(AuthorizationErrors.RoleNotAllowed(req.user.role));
    }
    next();
  };
};
