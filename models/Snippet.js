const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: String,
    language: {
        type: String,
        required: true,
        enum: ["CSS", "HTML", "JavaScript", "SQL", "Ruby"]
    },
    tag: {
        type: Array,
    },
    body: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("Snippet", snippetSchema);

