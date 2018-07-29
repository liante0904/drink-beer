const mongoose = require('mongoose');

// Schemes
let BeerSchema = new mongoose.Schema({
    beerid: { type: Number, required: true, unique: true },
    beername: { type: String, required: true }
},
{
    timestamps: true
});


// Create Model
mongoose.model('Beer', BeerSchema);

// Create Model & Export
module.exports = mongoose.model('Beer');