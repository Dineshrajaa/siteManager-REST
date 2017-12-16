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
    updateProject: (req, res) => {
        const projectId = req.params.projectid;
        const projectData = req.body;
        Project
            .findOne({ _id: projectId })
            .exec()
            .then((foundProject) => {
                foundProject.name = projectData.name;
                foundProject.location = projectData.location;
                if (projectData.engineerInCharge.length > 0)
                    foundProject.engineerInCharge = projectData.engineerInCharge;
                return foundProject.save();
            })
            .then(updatedProject => res.json({ error: false, result: updatedProject, message: 'Updated Project' }))
            .catch(err => res.json({ error: true, reason: err.message }))
    },
    listAllProjects: (req, res) => {
        Project
            .find({})
            .populate({ path: 'engineerInCharge', select: 'name' })
            .exec()
            .then(allProjects => res.json({ error: false, result: allProjects }))
            .catch(err => res.json({ error: true, reason: err.message }))
    },
    listMyProjects: (req, res) => {
        const engineerID = req.params.engineerid;
        Project
            .find({ engineerInCharge: engineerID })
            .populate({ path: 'engineerInCharge', select: 'name' })
            .exec()
            .then(allProjects => res.json({ error: false, result: allProjects }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }
}