const express = require('express');
const bcrypt = require('bcrypt')
const User = require('../models/user')

async function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let salt = await bcrypt.genSalt(10);
    let role = req.body.role;

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        name: name,
        lastName: lastName,
        email: email,
        password: passwordHash,
        salt: salt,
        role: role,
    })

    user.save().then(obj => res.status(200).json({
        msg: res.__('createtUser.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('createtUser.fail'),
        obj: ex
    }))
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    User.paginate({}, options).then(objs => res.status(200).json({
        msg: res.__('enlistUser.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('enlistUser.fail'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    User.findOne({ "_id": id }).then(obj => res.status(200).json({
        msg: res.__("getUser.ok"),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__("getUser.fail"),
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";
    let email = req.body.email ? req.body.email : "";
    let paswword = req.body.paswword ? req.body.paswword : "";
    let role = req.body.role ? req.body.role: "";

    let user = new Object({
        _name: name,
        _lastName: lastName,
        _director: email,
        _password: paswword,
        _role: role
    });

    User.findOneAndUpdate({ "_id": id }, User).then(obj => res.status(200).json({
        msg: res.__("replaceUser.ok"),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__("replaceUser.fail"),
        obj: ex
    }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let paswword = req.body.paswword;
    let role = req.body.role;


    let user = new Object();
    if (name) User._name = name;
    if (lastName) User._lastName = lastName;
    if (email) User.email = email;
    if (paswword) User.paswword = paswword;
    if(role) user._role = role;

    User.findOneAndUpdate({ "_id": id }, User).then(obj => res.status(200).json({
        msg: res.__("updateUser.ok"),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__("updateUser.fail"),
        obj: ex
    }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    User.findByIdAndDelete({ "_id": id }).then(obj => res.status(200).json({
        msg: res.__("deleteUser.ok"),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__("deleteUser.fail"),
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };


