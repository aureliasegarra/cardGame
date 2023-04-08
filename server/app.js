const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

// APP SETUP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:8000", "http://localhost:3000"]
}));


// DATABASE CONNECTION
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database', error);
    });

// INITIALIZE THE GAME
const cardController = require("./controllers/card.controller");
cardController.createDeck();

// ROUTE ROOT API
app.get('/api', async (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API !'});
});

// ERROR CASE
app.use((err, req, res, next) => {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

// ROUTER ROUTES
require("./router/player.route")(app);
require("./router/card.route")(app);

// LAUNCH APP
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;