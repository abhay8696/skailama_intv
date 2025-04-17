const { Podcast } = require("../models/podcast.model");
const { Project } = require("../models/project.model");
const ApiError = require("../utils/ApiError");

/**
 * Function to create new podcast
 *  - check if the podcast with the same name already exists 
 *  - If so throw an error 
 *  - Otherwise, create and return a new podcast object
 */
const createPodcast = async (projectId, name, transcript) => {
    console.log({projectId, name, transcript})
    try{
        const newPodcast = await Podcast.create({
            projectId,
            name,
            transcript,
        });

        // Increment podcastCount and update lastUpdated in the related project
        await Project.findByIdAndUpdate(
            projectId,
            {
                $inc: { fileCount: 1 },
                $set: { lastUpdated: new Date() }
            },
            { new: true }
        );

        return newPodcast;
    }catch(error){
        console.log(error);
        if (error.code === 11000) {
            // Duplicate key error
            throw new ApiError(400, "Project name must be unique");
        }
        throw new ApiError(
            500,
            "Internal Server Error"
        );
    }
}


module.exports = { createPodcast };