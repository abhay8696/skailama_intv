const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
    projectId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    transcript: { 
        type: String 
    },
}, { 
    timestamps: true 
});

// Unique Podcast name per Project
PodcastSchema.index({ project: 1, name: 1 }, { unique: true });

const Podcast = mongoose.model("Podcast", PodcastSchema);

module.exports.Podcast = Podcast;