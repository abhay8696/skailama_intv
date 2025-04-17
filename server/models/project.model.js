// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    user: { 
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

export default mongoose.model('Project', projectSchema);
