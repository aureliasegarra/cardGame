const mongoose = require("mongoose");
const Player = require("../models/player.model")(mongoose);
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    const {username, email, password} = req.body;
        // Register in database
        const player = new Player({
            username,
            email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        player.save(player)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({message: "Error occured during register !"})
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    Player.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
}

exports.findOneByEmail = (req, res) => {
    const player = new Player({
        email: req.body.player.email,
        password: req.body.player.password,
    });

    Player.findOne({ email: player.email })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with email " + player.email });

            const passwordIsValid = bcrypt.compareSync(
                player.password,
                data.password
            );
            console.log(player.password,data.password)
            console.log('passwordIsValid: ', passwordIsValid)

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt.sign({ userId: data._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            console.log('token: ', token)

            res.status(200).send({
                id:data._id,
                name: data.username,
                email: data.email,
                played: data.played,
                victory: data.victory,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving User with email=" + player.email });
        });
}