const express = require('express');
const router = express.Router();
const Rezept = require('./models/rezepte');

// alle Rezepte abrufen
router.get('/rezepte', async(req, res) => {
    const alleRezepte = await Rezept.find();
    res.send(alleRezepte);
});

module.exports = router;