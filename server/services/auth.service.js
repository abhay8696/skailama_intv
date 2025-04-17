const userService = require("./user.service");
const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");

/**
 * Login with username and password
 * - Utilize userService method to fetch user object corresponding to the email provided
 * - Use the User schema's "isPasswordMatch" method to check if input password matches the one user registered with (i.e, hash stored in MongoDB)
 * - If user doesn't exist or incorrect password,
 *      throw an ApiError with "401 Unauthorized" status code and message, "Incorrect email or password"
 * - Else, return the user object
 */

const loginWithEmail = async (email, password) => {
    try{ 
        const getUser = await userService.getUserByEmail(email);

        const passwordMatch = await getUser.isPasswordMatch(password);

        if(!passwordMatch) throw new Error("Incorrect email or password");
        
        return getUser;
        
    }catch(error){
        throw new ApiError(
            401, //unauthorized
            "Incorrect email or password"
        );
    }

}

module.exports = { loginWithEmail };