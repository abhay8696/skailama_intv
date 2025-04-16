const {User} = require("../models/user.model");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError")


/**
 * Create a user
 *  - check if the user with the email already exists using `User.isEmailTaken()` method
 *  - If so throw an error
 *    1. “200 OK status code using `http-status` library
 *    2. An error message, “Email already taken”
 *  - Otherwise, create and return a new User object
 *
 * userBody example:
 * {
 *  "name": "users",
 *  "email": "user@gmail.com",
 *  "password": "usersPassword"
 * }
 *
 */

const createUser = async newUser => {
    const { name, email, password } = newUser;
    // console.log(newUser);

    // check if email is unique
    const isEmailTaken = await User.isEmailTaken(email);

    if (isEmailTaken) {
        throw new ApiError(httpStatus.CONFLICT, "Email already taken");
    } else {
        try{
            const createdUser = await User.create(newUser);
            return createdUser;
        }catch(error){
            console.log(error.message)
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const getUserByEmail = async email => {
    try {
        const user = await User.findOne({ email: email });

        if (user) return user;

        throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            error.message
        );
    }
}


module.exports = { createUser, getUserByEmail }