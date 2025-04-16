const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true,
    }
})

/**
 * Check if email is taken
 */
UserSchema.statics.isEmailTaken = async function (email) {
    let result = await this.findOne({ email: email });
    return !!result;
};

/**
 * Check if entered password matches the user's password
 */
UserSchema.methods.isPasswordMatch = async password => password === this.password;


const User = mongoose.model("User", UserSchema);

module.exports.User = User;