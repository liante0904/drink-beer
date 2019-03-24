const mongoose = require('mongoose');

// Setup schema
const beerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Beer model
const Beer = module.exports = mongoose.model('beer', beerSchema);

module.exports.get = (callback, limit) => {
    Beer.find(callback).limit(limit);
}