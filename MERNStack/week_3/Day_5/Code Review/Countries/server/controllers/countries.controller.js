// the controller does the C R U D for DB

const mongoose = require("mongoose");
const Country = require("../models/countries");

// console.log(Country)

//  READ ALL Country
module.exports.findAllCountries = (req, res) => {
    Country.find().sort({ name: 'asc' })
        .then((countries) => {
            res.json(countries);
        })
        .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOneCountry = (req, res) => {
    Country.findOne({ _id: req.params.id })
        .then(oneCountry => {
            res.json(oneCountry);
        })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNewCountry = (req, res) => {
    Country.create(req.body)
        .then((newlyCreatedCountry) => {
            res.json(newlyCreatedCountry)
        })
        .catch((err) => res.status(400).json(err));
}
// UPDATE
module.exports.updateExistingCountry = (req, res) => {
    Country.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateCountry) => {
            res.json(updateCountry)
        })
        .catch((err) => res.status(400).json(err));
};

// DELETE   
module.exports.DeleteOneCountry= (req, res) => {
    Country.deleteOne({ _id: req.params.id })
        .then((deletedCountry) => {
            res.json(deletedCountry)
        })
        .catch((err) => res.json(err));
};


//  READ ALL countries
// module.exports.countAllCountries = (req, res) => {
//     Country.find().count()
//         .then((count) => {
//             res.json(count);
//         })
//         .catch((err) => res.json(err));
// };