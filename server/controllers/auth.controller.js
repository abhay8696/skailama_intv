const { authService, userService, tokenService } = require("../services");

const register = async (req, res) => {
    const newUser = await userService.createUser(req.body);

    const token = await tokenService.generateAuthTokens(newUser);

    res.status(201).send({user: newUser, token});
}

const login = async (req, res) => {
    const getUser = await authService.loginWithEmail(
        req.body.email,
        req.body.password
    )

    const token = await tokenService.generateAuthTokens(getUser);

    res.status(201).send({user: getUser, token});
}

module.exports = { register, login };