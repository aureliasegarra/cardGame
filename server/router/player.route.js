module.exports = app => {

    const players = require("../controllers/player.controller.js");
    const router = require("express").Router();

    router.post("/", players.create);

    app.use("/api/players", router);
}
