const db = require("../models/player.model");
const Player = db.players;

exports.create = (req, res) => {
    if (!req.body.name || !req.body.password){
        res.status(400).send({ message : "Fields required !"});
        return;
    }

    const player = new Player({
        username: req.body.password,
        password: req.body.password,
    });

    player
        .save(player)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Something went wrong !"
            });
        })
};