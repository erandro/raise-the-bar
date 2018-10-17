const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Bar collection and inserts the Bar categories and items below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bar_DB"
);

const scoreSeed = [
    {
        "name": "DJT",
        "points": 1695
    },
    {
        "name": "NCS",
        "points": 1908
    },
    {
        "name": "AAM",
        "points": 2040
    },

];

db.Score
    .remove({})
    .then(() => db.Score.collection.insertMany(scoreSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
