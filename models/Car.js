const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    name: {
        type: String,
        require:
    },
    brand: {
        type: String,
        ref: 'brand'
    },
    category: {
        type: String,
        ref: 'category'
    },
    carFeatures: {
        type: Array,
        require: [true, 'Please provide a Car Feature!']
    },
    carRentalRequirements: {
        type: Array,
        require: [true, 'Please provide a Car Rental Requirements!']
    }
});


module.exports = mongoose.model('Car', CarSchema);