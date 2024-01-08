// the controller does the C R U D for DB

const mongoose = require("mongoose");
const Player = require("../models/player");

// console.log(Player)

//  READ ALL players
module.exports.findAll= (req, res) => {
    Player.find().sort({ name: 'asc' })
        .then((all) => {
            res.json(all);
        })
        .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOne = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(findone => {
            res.json(findone);
        })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNew = (req, res) => {
    Player.create(req.body)
        .then((newlyCreated) => {
            res.json(newlyCreated)
        })
        .catch((err) => res.status(400).json(err));
}
// UPDATE
module.exports.updateExisting = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((update) => {
            res.json(update)
        })
        .catch((err) => res.status(400).json(err));
};

// DELETE   
module.exports.DeleteOne= (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then((deleted) => {
            res.json(deleted)
        })
        .catch((err) => res.json(err));
};


//  READ ALL and count
module.exports.countAll= (req, res) => {
    Player.find().count()
        .then((count) => {
            res.json(count);
        })
        .catch((err) => res.json(err));
};