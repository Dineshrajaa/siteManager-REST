'use strict';
module.exports = function (app) {
    const registerMethods = require('../controllers/registerCtrl');

    // login Routes
    app.route('/register')
        .post(registerMethods.registerUser);
}