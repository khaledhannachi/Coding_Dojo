// import the mongoose lib
const mongoose = require("mongoose")

// the Country model
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must be at least 2 characters in length"]
},
    position: {
        type: String,
},

playing: {
    type: Boolean,
    default: false,
},
notPlaying: {
    type: Boolean,
    default: false,
},
undecided: {
    type: Boolean,
    default: true,
}
},
{ timestamps: true },
);
const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;