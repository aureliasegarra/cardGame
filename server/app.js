const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

// App setup
const app = express();

// Middleware parse requests of content-type -application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:8000", "http://localhost:3000"]
}));


// Database connection
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to database');
        console.log("test");
    })
    .catch((error) => {
        console.log('Error connecting to database', error);
    });


// Simple Route API
app.get('/api', async (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API !'});
});



// ERROR CASE
app.use((err, req, res, next) => {
    console.log("requête", req);
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

require("./router/player.route")(app);

// Lancement du app
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;