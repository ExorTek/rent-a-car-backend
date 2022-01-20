const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {nanoid} = require('nanoid');
const CategorySchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid(10)
    },
    categoryName: {
        type: String,
        required: [true,'Please provide a Category Name'],
        minLength: [3, 'Category Name must be at least 3 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Category', CategorySchema);