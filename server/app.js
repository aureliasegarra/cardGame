const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// App setup
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const corsOptions = {
    origin: ["http://localhost:3000"]
}

// Database connection
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database', error);
    });

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes
const cardRouter = require('./router/card');
app.use('/cards', cardRouter);

// ERROR CASE
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});