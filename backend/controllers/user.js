import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import CustomError from "../utils/error.js";
import User from "../models/user.js";
import sendToken from "../utils/sendToken.js";
import crypto from "crypto";
import { UserErrors, AuthorizationErrors } from "../constants/Errors.js";
import Roles from "../constants/Roles.js";
import sendEmail from "../utils/sendEmail.js";
import { OAuth2Client } from "google-auth-library";
// Register a User
export const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, phone, dob, password } = req.body;
  const date = new Date(dob);
  const user = await User.create({
    name,
    phone,
    email,
    password,
    dob: date,
    password,
  });
  sendToken(user, 201, res, "register");
});

// Login User
export const loginUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError(UserErrors.EmailAndPasswordNotFound);
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError(UserErrors.PasswordOrEmailInvalid);
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    throw new CustomError(UserErrors.PasswordOrEmailInvalid);
  }

  sendToken(user, 200, res);
});

// Logout User
export const logout = catchAsyncErrors(async (req, res, next) => {
  req.user = null;
  //todo: what to do in this logout functionality
  //? suggestion: I think we should add the token in the blacklist
  //? if token is found in blacklist simply discard that request
  //? alag se blacklist ka database bana lo and every month usko clear karlo
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password
export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new CustomError("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new CustomError(error.message, 500));
  }
});

// Reset Password
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new CustomError(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new CustomError("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get User Detail
export const getUserDetails = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user: user,
  });
});

// update User password
export const updatePassword = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    throw new CustomError(UserErrors.OldPasswordIncorrect);
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    throw new CustomError(UserErrors.PasswordNotMatch);
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update User Profile
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };
  await User.findByIdAndUpdate(req.user._id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Get all users(admin)
export const getAllUser = catchAsyncErrors(async (req, res, next) => {
  console.log("\x1b[35m", "👉👉👉 req :", req);
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)
export const getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new CustomError(UserErrors.UserDoesNotExists(req.params.id));
  }
  res.status(200).json({
    success: true,
    user: user,
  });
});

// update User Role -- Admin
export const updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  if (!Roles.enum.includes(newUserData.role)) {
    throw CustomError(AuthorizationErrors.RoleNotDefined);
  }

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete User --Admin
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new CustomError(UserErrors.UserDoesNotExists(req.params.id));
  }
  await user.deleteOne();
  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

export const googleLogin = catchAsyncErrors(async (req, res) => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const client = new OAuth2Client(CLIENT_ID);
  const { credential } = req.body;
  const parsedCred = JSON.parse(credential);
  let userid;
  let payload;
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: parsedCred.credential,
      audience: CLIENT_ID,
    });
    payload = ticket.getPayload();
    userid = payload["sub"];
  }
  await verify().catch(console.error);
  await User.findOne(
    { email: { $regex: new RegExp("^" + payload.email + "$", "i") } },
    async function (err, user) {
      if (err) return res.status(500).send("Error on the server.");
      const newUser = user ?? {};
      if (!user) {
        newUser.email = payload.email;
        newUser.password = userid;
        newUser.loginType = "Google";
        newUser.name = payload.name;
        newUser.dob = payload.birthDate;
        newUser.phone = payload.phone_number;
        newUser = new User(newUser).save();
      }
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET
      );
      sendToken(newUser, 200, res, "register");
    }
  );
});
