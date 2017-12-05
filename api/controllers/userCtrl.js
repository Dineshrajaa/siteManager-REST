const User = require("../models/users");

module.exports = {
    listAllEngineers: (req, res) => {
        // Method to list all the Engineers
        User
            .find({})
            .exec()
            .then(allEngineers => res.json({ error: false, result: allEngineers }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }
}