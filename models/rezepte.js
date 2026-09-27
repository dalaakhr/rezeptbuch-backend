/*
 * Bauplan fuer ein Rezept.
 * Legt fest, welche Felder ein Rezept hat und welchen Datentyp jedes Feld hat.
 * Daraus wird ein Modell erstellt, das die anderen Dateien nutzen koennen.
 */
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titel: String,
    kategorie: String,
    zeit: Number,
    gemacht: Boolean,
    zutaten: String,
    zubereitung: String
});
// macht aus dem Schema ein Modell namens "Rezept" und gibt es nach aussen
module.exports = mongoose.model('Rezept', schema)
