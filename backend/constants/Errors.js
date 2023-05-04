export const UserErrors = {
  EmailAndPasswordNotFound: {
    message: "Please Enter Email & Password",
    statusCode: 400,
  },
  PasswordOrEmailInvalid: {
    message: "Invalid email or password",
    statusCode: 401,
  },
  UserNotFound: {
    message: "User not found",
    statusCode: 404,
  },
  OldPasswordIncorrect: {
    message: "Old password is incorrect",
    statusCode: 400,
  },
  PasswordNotMatch: {
    message: "Password does not match",
    statusCode: 400,
  },
  UserDoesNotExists(id) {
    return {
      message: `User does not exist with Id: ${id}`,
      statusCode: 404,
    };
  },
};

export const JWTErrors = {
  InvalidOrExpiredToken: {
    message: "Invalid or expired token",
    statusCode: 401,
  },
  InvalidToken: {
    message: "Json Web Token is invalid, Login again",
    statusCode: 400,
  },
  TokenExpired: {
    message: "Json Web Token expired, Login again",
    statusCode: 401,
  },
  TokenNotFound: {
    message: "Token not associated with request",
    statusCode: 400,
  },
};

export const AuthorizationErrors = {
  RoleNotAllowed(role) {
    return {
      message: `Role: ${role} is not allowed to access this resource `,
      statusCode: 403,
    };
  },
  RoleNotDefined(role) {
    return {
      message: `Role ${role} is not defined`,
      statusCode: 404,
    };
  },
};
