const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    fileCount: { 
        type: Number, 
        default: 0 
    },
    lastUpdated: { 
        type: Date, 
        default: Date.now 
    },
}, 
{ 
    timestamps: true 
});

// Unique project name per user
ProjectSchema.index({ user: 1, name: 1 }, { unique: true });

const Project = mongoose.model("Project", ProjectSchema);

module.exports.Project = Project;