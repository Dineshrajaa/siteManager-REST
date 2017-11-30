const User = require("../models/users");
const jwt = require("jsonwebtoken");
const config = require('../config')[process.env.NODE_ENV || "development"];
console.log('cofig,', config);
module.exports = {
    loginUser: (req, res) => {
        // Method to Login user
        const handle = req.body.mobile;
        const pin = req.body.pin;
        if (!handle || !pin) {
            res.json({
                error: true,
                message: "Empty Credentials"
            })
            return;
        }
        User.findOne({ mobile: handle })
            .exec()
            .then((user) => {
                if (!user) {
                    res.json({
                        error: true,
                        message: "User Not Found"
                    })
                    return
                }
                user.comparePin(pin, (err1, isMatch) => {
                    if (isMatch && !err1) {
                        const payload = {
                            id: user._id,
                            userType: user.userType,
                            mobile: user.mobile,
                            fullName: user.name.full
                        };
                        const token = jwt.sign(payload, config.secret, {
                            expiresIn: 3600 * 24 * 30
                        })
                        res.json({
                            error: false,
                            message: "Logged in successfully",
                            token
                        });

                    } else {
                        res.json({
                            error: true,
                            message: "Password mismatch"
                        })
                    }
                })
            })
    }
};