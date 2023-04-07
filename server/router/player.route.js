module.exports = app => {

    const players = require("../controllers/player.controller.js");
    const router = require("express").Router();

    router.post("/register", players.create);
    router.get("/", players.findAll);

    app.use("/api/players", router);
}
