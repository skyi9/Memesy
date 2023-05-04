import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto";
import Roles from "../constants/Roles.js";
import jwt from "jsonwebtoken";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      validate: [validator.isEmail, "Email provided is not provided"],
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth not provided"],
    },
    loginType: {
      type: String,
      enum: ["Google", "email"],
      default: "email",
    },
    password: {
      type: String,
      required: [true, "Please enter your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
    role: {
      type: String,
      default: "user",
      enum: Roles.enum,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};
const User = mongoose.model("User", userSchema);
export default User;
