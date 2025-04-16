const { createUser, getUserByEmail } = require("../services/user.service");
const httpStatus = require("http-status");

const createUserController = async (req, res) => {
    const newUser = await createUser(req.body);

    res.status(201).send(newUser);
}

const getUserController = async (req, res) => {
    const user = await getUserByEmail(req.body.email);

    res.status(200).send(user);
}

module.exports = { createUserController, getUserController }