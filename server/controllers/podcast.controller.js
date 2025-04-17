const { podcastService } = require("../services");

const createPodcast = async (req, res) => {
    const { projectId, name, transcript } = req.body
    const newPodcast = await podcastService.createPodcast(projectId, name, transcript);

    res.status(201).send({podcast: newPodcast, message: "New file created successfully."});
}

const getPodcast = async (req, res) => {
    const podcast = await podcastService.getPodcast(req.params.id);

    res.status(200).send({podcast});
}

module.exports = { createPodcast, getPodcast };