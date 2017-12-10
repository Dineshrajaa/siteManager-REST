'use strict';
const mongoose = require('mongoose');
const User = require("../models/users");
const Schema = mongoose.Schema;
const SettingsSchema = new Schema({
    isPaid: {
        type: Boolean
    }
})

module.exports = mongoose.model("Settings", SettingsSchema);