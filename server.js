/*
 * Startpunkt des Backends - wird mit "node server.js" gestartet.
 * Bindet die Werkzeuge ein (express, cors, mongoose), bereitet die App vor
 * (JSON lesen, CORS, Routen einhaengen), baut die Verbindung zur Datenbank auf
 * und startet den Server auf Port 3000.
 */

//Block 1 bindet Werkzeuge ein(express, cors, mongoose..)
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
//Block 2 bereitet die App vor(JSON lesen, CORS, Routen einhaengen)
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', routes);

//Block 3 baut die Verbindung zur Datenbank auf
mongoose.connect(process.env.DB_CONNECTION, { dbName: process.env.DATABASE });
const db = mongoose.connection;
db.on('error', err => {
    console.log(err);
});
db.once('open', () => {
    console.log('connected to DB');
});

//Block 4 startet den Server auf Port 3000
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});
