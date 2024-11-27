const express = require('express');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function home(req, res, next){
    res.render('index', { title: 'Express' });
}

function login(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const jwtKey = config.get("secret.key");

    User.findOne({"_email":email}).then(user => {
        // Preguntar si encontre el usuario
        if(user){
            bcrypt.hash(password, user.salt, (err, hash)=>{
                if(err){
                    res.render('index', { title: 'Express', status:res.__('login.fail') });
                }
                if(hash === user.password){
                    res.render('home', {user:user});
                }else{
                    res.render('index', { title: 'Express', status:res.__('login.fail') });
                }
            });
        }else{
            res.status(403).json({
                msg: res.__('login.fail'),
                obj: null
            });
        }
    }).catch();
}

module.exports = {home, login};