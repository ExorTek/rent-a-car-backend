const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
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
    },
    carImages: {
        type: Array,
        require: [true, 'Please upload at least one car image!']
    },
    modelYear: {
        type: String,
        require: [true, 'Please provide a Model Year!']
    },
    dailyPrice: {
        type: Number,
        require: [true, 'Please provide a Daily Price!']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('car', CarSchema);