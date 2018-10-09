const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        img: { type: String, required: true },
        category: { type: String, required: true },
        available: { type: Boolean, required: true },
        mixed_items: {}
    }]
}, { collection: 'bar' });

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;