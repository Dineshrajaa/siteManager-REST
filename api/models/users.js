'use strict';
const mongoose = require('mongoose');
const Project = require('./projects');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true,
            trim: true
        },
        last: {
            type: String,
            trim: true
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
    }, project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required:false
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

UserSchema.virtual("name.full").get(function () {
    const last = (this.name.last === undefined || this.name.last === null) ? "" : this.name.last
    return `${this.name.first}  ${last}`
})

UserSchema.pre('save', function (next) {
    // Encrypt PIN before saving
    var user = this;
    bcrypt.hash(user.pin, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.pin = hash;
        next();
    })
});

UserSchema.methods.comparePin = function (pin, cb) {
    bcrypt.compare(pin, this.pin, (err, isMatch) => {
        if (err) {
            return cb(err)
        }
        return cb(null, isMatch)
    })
}

UserSchema.set("toJSON", { virtuals: true })
UserSchema.set("toObject", { virtuals: true })
module.exports = mongoose.model("User", UserSchema);