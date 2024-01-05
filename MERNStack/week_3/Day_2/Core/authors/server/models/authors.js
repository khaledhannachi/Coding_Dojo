// import the mongoose lib
const mongoose = require("mongoose")

// the Author model
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
},
// published: {
//     type: Number,
//     required: [true, "{PATH} is required"],
//     integer: true,
//     trim: true,
// }
},
{ timestamps: true },
);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;