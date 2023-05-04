import {
  registerUser,
  resetPassword,
  loginUser,
  logout,
  forgotPassword,
  getAllUser,
  getSingleUser,
  updatePassword,
  updateProfile,
  updateUserRole,
  getUserDetails,
  deleteUser,
  googleLogin,
} from "../controllers/user.js";
import express from "express";
const router = express.Router();
import { isAuth, authorizeRoles } from "../middlewares/auth.js";
import Roles from "../constants/Roles.js";

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/googlelogin").post(googleLogin);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuth, getUserDetails);

router.route("/password/update").put(isAuth, updatePassword);

router.route("/me/update").put(isAuth, updateProfile);

router
  .route("/admin/users")
  .get(
    isAuth,
    authorizeRoles(Roles.admin1, Roles.admin2, Roles.admin3),
    getAllUser
  );

router
  .route("/admin/user/:id")
  .get(
    isAuth,
    authorizeRoles(Roles.admin1, Roles.admin2, Roles.admin3),
    getSingleUser
  )
  .put(
    isAuth,
    authorizeRoles(Roles.admin1, Roles.admin2, Roles.admin3),
    updateUserRole
  )
  .delete(
    isAuth,
    authorizeRoles(Roles.admin1, Roles.admin2, Roles.admin3),
    deleteUser
  );

export default router;
