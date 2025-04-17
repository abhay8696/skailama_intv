const { Podcast } = require("../models/podcast.model");
const { Project } = require("../models/project.model");
const ApiError = require("../utils/ApiError");

/**
 * Function to create new project
 *  - check if the project with the same name already exists 
 *  - If so throw an error 
 *  - Otherwise, create and return a new Project object
 */
const createProject = async (userId, name) => {
    try{
        const newProject = await Project.create({userId, name});

        return newProject;
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
 * Function to get a project with id
 *  - If the project does not exist 
 *  - If so throw an error 
 *  - Otherwise, return a Project object
 */

const getProject = async id => {
    try{
        const project = await Project.findById(id);
        if(!project) 
            throw new ApiError(
                404,
                "Project not found"
            );
        const podcasts = await Podcast.find({projectId: id});

        return {
            ...project.toObject(),
            podcasts 
        }
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
 * Function to get a all projects based on user
 *  - If the project does not exist 
 *  - If so throw an error 
 *  - Otherwise, return a Project object
 */
const getAllProjects = async userId => {
    try{
        const allProjects = await Project.find({userId});

        return allProjects;
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


module.exports = { createProject, getProject, getAllProjects };