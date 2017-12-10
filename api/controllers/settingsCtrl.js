const Settings = require('../models/settings');

module.exports = {
    checkPaymentStatus: (req, res) => {
        // Method to check payment status
        Settings
            .find()
            .exec()
            .then(paymentResult => res.json({ error: false, result: paymentResult }))
            .catch(err => res.json({ error: true, reason: err.message }))
    },
    createPaymentStatus: (req, res) => {
        const requestData = req.body;
        // console.warn('requestData:', requestData);
        const settingObj = new Settings(requestData);
        return settingObj.save()
            .then((savedsetting) => {
                // console.log(saveduser)
                res.json({ error: false, detail: savedsetting })
            })
            .catch(err => res.json({ error: true, reason: err.message }))
    }, updatePaymentStatus: (req, res) => {
        const statusId = req.params.statusid;
        const status = req.params.status;
        Settings
            .findOne({ _id: statusId })
            .exec()
            .then((foundStatus) => {
                foundStatus.isPaid = status;
                return foundStatus.save();
            })
            .then(updatedStatus => res.json({ error: false, result: updatedStatus, message: 'Updated Status' }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }, getPaymentStatus: (req, res) => {
        Settings
            .find()
            .exec()
            .then(foundStatus => res.json({ error: false, result: foundStatus }))
            .catch(err => res.json({ error: true, reason: err.message }))
    }

}