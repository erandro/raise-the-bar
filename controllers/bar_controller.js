var mongoose = require("mongoose");
var db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bar_DB";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

module.exports = {
    // get bar object
    getBar: function (req, res) {
        db.Bar.find({})
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    getScore: function (req, res) {
        db.Score.find({})
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};