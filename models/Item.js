const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    available: { type: Boolean, required: true },
    mixed_items: { type: Array, required: true }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;