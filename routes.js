const express = require('express');
const router = express.Router();
const Rezept = require('./models/rezepte');

// alle Rezepte abrufen
router.get('/rezepte', async(req, res) => {
    const alleRezepte = await Rezept.find();
    res.send(alleRezepte);
});

// ein neues Rezept anlegen
router.post('/rezepte', async(req, res) => {
    const neuesRezept = new Rezept({
        titel: req.body.titel,
        kategorie: req.body.kategorie,
        zeit: req.body.zeit,
        gemacht: false
    });
    await neuesRezept.save();
    res.send(neuesRezept);
});

//ein Rezept ändern
router.patch('/rezepte/:id', async(req, res) =>{
    try {
        const rezept = await Rezept.findOne({ _id: req.params.id });

            if (req.body.titel) rezept.titel = req.body.titel;
            if (req.body.kategorie) rezept.kategorie = req.body.kategorie;
            if (req.body.zeit) rezept.zeit = req.body.zeit;
            if (req.body.gemacht !== undefined) rezept.gemacht = req.body.gemacht;

            await Rezept.updateOne({ _id: req.params.id }, rezept);
            res.send(rezept);
        } catch {
        res.status(404);
        res.send({ error: "Rezept existiert nicht!" });
        }
    
});

//ein Rezept löschen
router.delete('/rezepte/:id', async(req, res) => { 
    try {
        await Rezept.deleteOne({ _id: req.params.id });
        res.status(204);
        res.send();
    } catch {
        res.status(404);
        res.send({ error: "Rezept existiert nicht!" });
    }

});

module.exports = router;