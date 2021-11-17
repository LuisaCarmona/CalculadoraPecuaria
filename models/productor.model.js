const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductorSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 128
    },
})

module.exports = mongoose.model('Productores', ProductorSchema);