// import the mongoose lib
const mongoose = require("mongoose")

// the Country model
const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
},
flag: {
    type: String,
    required: [true, "{PATH} is required"],

},
isIndependent: {
    type: Boolean,
    default: true,
},
continent:{
    type: String,
    required:[true,"You have to choose a continent"]
}
},
{ timestamps: true },
);
const Country = mongoose.model("Country", CountrySchema);
module.exports = Country;