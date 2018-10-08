const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    items: { type: Array, required: true }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;