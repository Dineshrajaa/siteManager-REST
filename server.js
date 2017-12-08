const express = require('express'),
    config = require('./api/config')[process.env.NODE_ENV || "development"],
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000,
    restRoutes = require("./api/controllers");
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/v1/", restRoutes);

app.listen(port, function () {
    console.log("Express server listening on port %d ", this.address().port);
});

console.log('SiteManager REST running on: ', port);