const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Player = require("../models/player.model")(mongoose);

exports.create = (req, res) => {
    console.log("req player model", req);
    const {username, email, password} = req.body;

    // Verification if user already exist
    /*Player.findOne({email:email},(err, player) => {
        if (player){
            res.send({message:"player already exist"});
        }else{*/
            // Register in database
            const player = new Player({username, email, password: bcrypt.hashSync(req.body.password, 10)});
            player.save(player)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({message: "error"})
                })
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    const condition = username ? {username: {$regex: new RegExp(username), $options: "i"}} : {};

    Player.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}