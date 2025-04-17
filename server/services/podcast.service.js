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
    // console.log({projectId, name, transcript})
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


/**
 * Function to get a podcast by id
 *  - check if the podcast with given id exist
 *  - If yes, return a podcast object
 *  - else, throw an error 
 */
const getPodcast = async id => {
    try{
        const podcast = await Podcast.findById(id);
        if(!podcast) 
            throw new ApiError(
                404,
                "podcast not found"
            );
        
        return podcast;
    }catch(error){
        console.log(error);
        // If it's an instance of ApiError, just rethrow it
        if (error instanceof ApiError) throw error;

        throw new ApiError(
            500,
            "Internal Server Error"
        );
    }
}

/**
 * Function to update a podcast by id
 *  - check if the podcast with given id exist
 *  - If yes, return a podcast object
 *  - else, throw an error 
 */
const updatePodcast = async (id, updates) => {
    try{
        // Prevent projectId from being modified
        if ('project' in updates || 'projectId' in updates) {
          throw new ApiError(400, "Modifying 'projectId' is not allowed");
        }
        // Update podcast
        const updatedPodcast = await Podcast.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedPodcast) throw new ApiError(404, 'Podcast not found');

         // Update the parent project's lastUpdated field
        await Project.findByIdAndUpdate(updatedPodcast.projectId, {
            $set: { lastUpdated: new Date() },
        });
  
        return updatedPodcast;

    }catch(error){
        console.log(error);
        // If it's an instance of ApiError, just rethrow it
        if (error instanceof ApiError) throw error;

        throw new ApiError(
            500,
            "Internal Server Error"
        );
    }
}


module.exports = { createPodcast, getPodcast, updatePodcast };