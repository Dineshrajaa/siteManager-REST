'use strict';
const mongoose = require('mongoose');
const User = require("../models/users");
const Project = require("../models/projects");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    projectID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    }, commentType: {
        type: String,
        enum: ["TextPicture", "Text", "Picture"],
        default: "Text",
        required: true
    },
    commentText: {
        type: String,
        required: false
    }, commentPicture: {
        type: String,
        required: false
    }, commentedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model("Comment", CommentSchema);