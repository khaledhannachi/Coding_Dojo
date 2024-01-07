// the controller does the C R U D for DB

const mongoose = require("mongoose");
const Author = require("../models/authors");

// console.log(Author)

//  READ ALL Author
module.exports.findAllAuthors = (req, res) => {
    Author.find().sort({ name: 'asc' })
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json(oneAuthor);
        })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newlyCreatedAuthor) => {
            res.json(newlyCreatedAuthor)
        })
        .catch((err) => res.status(400).json(err));
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
        .catch((err) => res.status(400).json(err));
};

// DELETE   
module.exports.DeleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedAuthor) => {
            res.json(deletedAuthor)
        })
        .catch((err) => res.json(err));
};


//  READ ALL Author
module.exports.countAllAuthors = (req, res) => {
    Author.find().count()
        .then((count) => {
         
            res.json(count);
        })
        .catch((err) => res.json(err));
};