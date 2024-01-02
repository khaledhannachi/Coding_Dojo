// the controller does the C R U D for DB
const Product = require ("../models/product");

//  READ ALL
module.exports.findAllProducts =(req, res) =>{
    Product.find()
    .then((products) =>{
        res.json(products);
    })
    .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOneProduct = (req, res) =>{
    Product.findOne({_id: req.params.id })
        .then(oneProduct =>{
        res.json(oneProduct);
    })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNewProduct = (req, res) =>{
Product.create(req.body)
    .then((newlyCreatedProduct) =>{
        res.json(newlyCreatedProduct)
})
    .catch((err) => res.json(err));

}

// UPDATE
module.exports.updateExistingProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators:true,
    })
    .then((updateProduct) =>{
        res.json(updateProduct)
})
    .catch((err) => res.json(err));

};

// DELETE   
module.exports.DeleteOneProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
    .then((deletedProduct) =>{
        res.json(deletedProduct)
})
    .catch((err) => res.json(err));

};

