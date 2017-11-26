'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String
        }
    }, mobile: {
        type: String,
        unique: true,
        required: true
    }, userType: {
        type: String,
        enum: ["Admin", "Engineer"],
        required: true,
        default: "Engineer"
    }, pin: {
        type: String,
        required: true
    }
})
UserSchema.virtual("isAdmin").get(() => {
    // Check whether user is an Admin
    this.userType === "Admin"
})
UserSchema.virtual("isEngineer").get(() => {
    // Check whether user is an Engineer
    this.userType === "Engineer"
})
module.exports = mongoose.model("User", UserSchema);