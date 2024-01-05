// import the mongoose lib
const mongoose = require("mongoose")
// the Author model
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
    },
    date: {
        type: Date,
    },
    author:{type: mongoose.Types.ObjectId, ref: "AuthorSch"}
       
    })

// the Author model
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
    },
    lastName: {
        type: String,
        required: [true, "please provide a price"],
    },
    
}, 
{ timestamps: true });


const Book = mongoose.model("Book", BookSchema);
const Author = mongoose.model("AuthorSch", AuthorSchema);
module.exports = { Book, Author };