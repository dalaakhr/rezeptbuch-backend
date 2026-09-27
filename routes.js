//Block1 Grundgeruest: erstellt den Router für die vier endpunkte und laedt den Bauplan für die Rezepte
const express = require('express');
const router = express.Router();
const Rezept = require('./models/rezepte');

//Block2 holt alle Rezepte aus der Datenbank und schickt sie zurueck an das Frontend
router.get('/rezepte', async (req, res) => {
    const alleRezepte = await Rezept.find();
    res.send(alleRezepte);
});

//Block3 legt ein neues Rezept an, speichert es und schickt es mit seiner neuen _id zurueck 
router.post('/rezepte', async (req, res) => {
    const neuesRezept = new Rezept({
        titel: req.body.titel,
        kategorie: req.body.kategorie,
        zeit: req.body.zeit,
        zutaten: req.body.zutaten,
        zubereitung: req.body.zubereitung,
        gemacht: false
    });
    await neuesRezept.save();
    res.send(neuesRezept);
});

//Block4 sucht das Rezept ueber die mitgeschickte id, aendert nur die uebergebenen Felder
// und gibt Fehlercode 404 zurueck, wenn es kein Rezept mit dieser id gibt
router.patch('/rezepte/:id', async (req, res) => {
    try {
        const rezept = await Rezept.findOne({ _id: req.params.id });

        if (req.body.titel) rezept.titel = req.body.titel;
        if (req.body.kategorie) rezept.kategorie = req.body.kategorie;
        if (req.body.zeit) rezept.zeit = req.body.zeit;
        if (req.body.gemacht !== undefined) rezept.gemacht = req.body.gemacht;
        if (req.body.zutaten) rezept.zutaten = req.body.zutaten;
        if (req.body.zubereitung) rezept.zubereitung = req.body.zubereitung;

        await Rezept.updateOne({ _id: req.params.id }, rezept);
        res.send(rezept);
    } catch {
        res.status(404);
        res.send({ error: "Rezept existiert nicht!" });
    }

});

//Block5 findet das Rezept ueber die id und loescht es
router.delete('/rezepte/:id', async (req, res) => {
    try {
        await Rezept.deleteOne({ _id: req.params.id });
        res.status(204);
        res.send();
    } catch {
        res.status(404);
        res.send({ error: "Rezept existiert nicht!" });
    }

});
// gibt den fertigen Router nach aussen, damit die server.js ihn sich holen kann
module.exports = router;