const express = require('express');
const User = require('../models/user');

function create(req, res, next) {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const CURP = req.body.CURP;
    const RFC = req.body.RFC;
    const address = req.body.address;
    const skills = req.body.skills;
    const role = req.body.role;

    let user = new User({
        _name: name,
        _lastName: lastName,
        _email: email,
        _birthDate: birthDate,
        _CURP: CURP,
        _RFC: RFC,
        _address: address,
        _skills: skills,
        _role: role
    });

    user.save().then(obj => res.status(200).json({
        msg: "User creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el user",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    User.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de Users",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de Users",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    User.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `User con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el User",
        obj: ex
    }));
}

function replace(req, res, next) {
}

function update(req, res, next) {
}

function destroy(req, res, next) {
    const id = req.params.id;
    User.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "User eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el User",
        obj: ex
    }));
}

module.exports = {create, list, index, replace, update, destroy};
