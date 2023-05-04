import CustomError from "../utils/error.js";
import { JWTErrors } from "../constants/Errors.js";

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode ?? 500;
  err.message = err.message ?? "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new CustomError({ message, statusCode: 400 });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new CustomError({ message, statusCode: 400 });
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    err = new CustomError(JWTErrors.InvalidToken);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    err = new CustomError(JWTErrors.TokenExpired);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;
