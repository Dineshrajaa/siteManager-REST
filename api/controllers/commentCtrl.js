const Comment = require("../models/comments");
const User = require("../models/users");
module.exports = {
    addComment: (req, res) => {
        // Method to send Comment
        const requestData = req.body;
        const commentObj = new Comment(requestData);
        return commentObj.save()
            .then((savedcomment) => {
                res.json({ error: false, detail: savedcomment })
            })
            .catch(err => res.json({ error: true, reason: err.message }))
    },
    listAllComments: (req, res) => {
        Comment
            .find({ projectID: req.params.projectid })
            .populate({ path: 'commentedBy', select: 'name userType' })
            .exec()
            .then(allComments => res.json({ error: false, result: allComments }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }
}