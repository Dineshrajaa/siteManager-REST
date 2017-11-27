const express = require('express'),
    config = require('./api/config')[process.env.NODE_ENV || "development"],
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000,
    restRoutes = require("./api/controllers");
mongoose.Promise = global.Promise;
mongoose.createConnection(config.database);
app.use("/api/v1/", restRoutes);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port);

console.log('SiteManager REST running on: ', port);