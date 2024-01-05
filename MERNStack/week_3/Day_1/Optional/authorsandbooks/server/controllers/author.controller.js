// the controller does the C R U D for DB
// console.log(require("../models/authors"))
const mongoose = require("mongoose");

const {Book} = require("../models/authors");
const {Author} = require("../models/authors");

console.log(Author)

//  READ ALL Author
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => res.json(err));
};
//  READ ALL Books
module.exports.findAllBooks = (req, res) => {
    Book.find()
    .populate("author")
        .then((books) => {
            res.json(books);
        })
        .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .populate("books")
        .then(oneAuthor => {
            res.status(200).json(oneAuthor);
        })
        .catch((err) => res.json(err));
}

//! Find Books by Author ID
module.exports.findBooksByAuthorId = (req, res) => {
    Book.find({ author: req.params.id })
        .populate('author')
        .then((books) => {
            console.log("Books by Author ID:", books);
            res.json(books);
        })
        .catch((err) => {
            console.error("Error finding books:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
};

//! CREATE NEW BOOK
module.exports.createNewBook = (req, res) => {
    const authorId = req.params.id;
    // Make sure the author ID is valid
    // if (!mongoose.Types.ObjectId.isValid(authorId)) {
    //     return res.status(400).json({ error: "Invalid author ID" });
    // }
    const newBook = new Book({
        author: authorId,
        ...req.body
    });
    newBook.save()
        .then((newlyCreatedBook) => {
            res.json(newlyCreatedBook);
        })
        .catch((err) => {
            console.error("Error creating book:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
};

// CREATE
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newlyCreatedAuthor) => {
            res.json(newlyCreatedAuthor)
        })
        .catch((err) => res.json(err));
}

// UPDATE
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateAuthor) => {
            res.json(updateAuthor)
        })
        .catch((err) => res.json(err));

};

// DELETE   
module.exports.DeleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedAuthor) => {
            res.json(deletedAuthor)
        })
        .catch((err) => res.json(err));

};

