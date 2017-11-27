const User = require("../models/users");

module.exports = {
    registerUser: (req, res) => {
        const requestData = req.body;
        console.warn('requestData:', requestData)
    }
}