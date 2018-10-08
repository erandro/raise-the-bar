const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MixSchema = new Schema({
    item: { type: String, required: true },
    mix: { type: String, required: true },
    reveal: { type: String, required: true }
});

const Mix = mongoose.model("Mix", MixSchema);

module.exports = Mix;