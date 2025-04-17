const { podcastService } = require("../services");

const createPodcast = async (req, res) => {
    const { projectId, name, transcript } = req.body
    const newPodcast = await podcastService.createPodcast(projectId, name, transcript);

    res.status(201).send({podcast: newPodcast, message: "New file created successfully."});
}

module.exports = { createPodcast };