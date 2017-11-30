const User = require("../models/users");

module.exports = {
    registerUser: (req, res) => {
        const requestData = req.body;
        // console.warn('requestData:', requestData);
        const userObj = new User(requestData);
        return userObj.save()
            .then((saveduser) => {
                // console.log(saveduser)
                res.json({ error: false, detail: saveduser })
            })
            .catch(err => res.json({ error: true, reason: err.message }))
    }
}