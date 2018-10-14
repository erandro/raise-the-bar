const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    
}, { collection: 'score' });

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;