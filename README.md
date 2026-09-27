# 🍳 Rezeptbuch – Backend

REST-API für die Webanwendung **Mein Rezeptbuch**.
Das Frontend findest du hier: https://github.com/dalaakhr/rezeptbuch-frontend

---

## Verwendete Technologien

- Node.js und npm
- Express
- MongoDB (Atlas) mit Mongoose
- dotenv
- CORS

---

## Installation

### Voraussetzungen

- Node.js
- Zugang zu MongoDB Atlas

### Starten

```
git clone https://github.com/dalaakhr/rezeptbuch-backend.git
cd rezeptbuch-backend
npm install
```

Im Hauptordner eine Datei `.env` anlegen:

```
DB_CONNECTION = mongodb+srv://benutzername:passwort@cluster.mongodb.net
DATABASE = rezeptbuch
```

Danach starten:

```
node server.js
```

Der Server läuft dann auf http://localhost:3000

---

## REST-Endpunkte

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| GET | /rezepte | alle Rezepte abrufen |
| POST | /rezepte | neues Rezept anlegen |
| PATCH | /rezepte/:id | Rezept ändern |
| DELETE | /rezepte/:id | Rezept löschen |

---

## Datenbankstruktur

| Feld | Typ | Bedeutung |
|---|---|---|
| titel | String | Name des Rezepts |
| kategorie | String | z.B. Hauptgericht, Dessert |
| zeit | Number | Zubereitungszeit in Minuten |
| zutaten | String | Zutatenliste |
| zubereitung | String | Zubereitungsschritte |
| gemacht | Boolean | schon gekocht ja/nein |

---

## KI-Nutzung

- **Claude**: Aufbau des Codes, Erklärung von Konzepten, Fehlersuche, Code-Kommentare, README
- **Gemini**: einzelne Fragen zum Code

---

## Autorin

Dalaa Khreis – Semesteraufgabe WebTech, HTW Berlin, 2026