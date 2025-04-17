const { projectService } = require("../services");



const createProject = async (req, res) => {
    // console.log({body: req.body, user: req.user})
    const createdProject = await projectService.createProject(req.user._id, req.body.name);

    res.status(201).send({project: createdProject, message: "New project created successfully."});
}

const getProject = async (req, res) => {
    const project = await projectService.getProject(req.params.id);

    res.status(200).send({project});
}

const getAllProjects = async (req, res) => {
    const allProjects = await projectService.getAllProjects(req.user._id);

    res.status(200).send({projects: allProjects});
}

module.exports = { createProject, getProject, getAllProjects }