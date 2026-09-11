const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titel: String,
    kategeorie: String,
    zeit: Number,
    gemacht: Boolean
});

module.exports = mongoose.model('Rezept', schema)
