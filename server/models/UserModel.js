const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const CreativeSchema = new Schema({
    email: String,
    email_verified: Boolean,
    family_name: String,
    given_name: String,
    name: String,
    picture: String,
    sub: String,
    date: {
        type: String,
        default: Date.now(),
    },
});

module.exports = mongoose.model("CreativeModel", CreativeSchema);
