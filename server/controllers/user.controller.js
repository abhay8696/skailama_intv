const { createUser } = require("../services/user.service");
const httpStatus = require("http-status");

const createUserController = async (req, res) => {
    const newUser = await createUser(req.body);

    res.status(201).send(newUser);
}

module.exports = { createUserController }