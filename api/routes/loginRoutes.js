'use strict';
module.exports=function(app){
    const loginMethods=require('../controllers/loginCtrl');

    // login Routes
    app.route('/login')
    .post(loginMethods.login);
}