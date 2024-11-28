const express = require('express');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function home(req, res, next) {
    res.render('index', { title: 'Express' });
}

function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const jwtKey = config.get("secret.key");

    User.findOne({ "_email": email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, match) => {  
                    if (err || !match) {
                        return res.status(401).json({
                            msg: res.__('login.fail'),
                            obj: null
                        });
                    }
                    const token = jwt.sign({
                        data: user.id,
                        role: user.role,
                        exp: Math.floor(Date.now() / 1000) + 1800
                    }, jwtKey);

                    res.status(200).json({
                        msg: res.__('login.ok'),
                        obj: token
                    });
                });
            } else {
                res.status(401).json({
                    msg: res.__('login.fail'),
                    obj: null
                });
            }
        })
        .catch(err => {
            return res.status(500).json({ msg: "Internal server error", obj: err });
        });
}


module.exports = { home, login };
