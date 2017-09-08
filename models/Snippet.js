const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
    },
    body: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Snippet", snippetSchema);

