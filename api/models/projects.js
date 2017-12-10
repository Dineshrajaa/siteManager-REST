'use strict';
const mongoose = require('mongoose');
const User = require("../models/users");
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }, engineerInCharge: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }]
});

module.exports = mongoose.model("Project", ProjectSchema);