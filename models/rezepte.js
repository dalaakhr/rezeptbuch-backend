const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titel: String,
    kategorie: String,
    zeit: Number,
    gemacht: Boolean,
    zutaten: String,
    zubereitung: String
});

module.exports = mongoose.model('Rezept', schema)
