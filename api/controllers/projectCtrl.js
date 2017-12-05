const Project = require("../models/projects");

module.exports = {
    registerProject: (req, res) => {
        const requestData = req.body;
        // console.warn('requestData:', requestData);
        const projectObj = new Project(requestData);
        return projectObj.save()
            .then((savedproject) => {
                // console.log(savedproject)
                res.json({ error: false, detail: savedproject })
            })
            .catch(err => res.json({ error: true, reason: err.message }))
    },
    listAllProjects: (req, res) => {
        Project
            .find({})
            .exec()
            .then(allProjects => res.json({ error: false, result: allProjects }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }
}