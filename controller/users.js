const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

async function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let birthDate = req.body.birthDate;
    let CURP = req.body.CURP;
    let RFC = req.body.RFC;
    let address = req.body.address;
    let skills = req.body.skills;
    let role = req.body.role;
    let password = req.body.password;
    let salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        name: name,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        CURP: CURP,
        RFC: RFC,
        address: address,
        skills: skills,
        role: role,
        password: passwordHash,
        salt: salt
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
    const id = req.params.id;
    let name = req.body.name ? req.body.name: "";
    let lastName = req.body.lastName ? req.body.lastName: "";
    let email = req.body.email ? req.body.email: "";
    let birthDate = req.body.birthDate ? req.body.birthDate: "";
    let CURP = req.body.CURP ? req.body.CURP: "";
    let RFC = req.body.RFC ? req.body.RFC: "";
    let address = req.body.address ? req.body.address: "";
    let skills = req.body.skills ? req.body.skills: "";
    let role = req.body.role ? req.body.role: "";

    let user = new Object({
        _name: name, _lastName: lastName, _email: email, _birthDate: birthDate, _CURP: CURP, _RFC: RFC, _address: address, _skills: skills, _role: role
    });

    User.findOneAndUpdate({"_id":id},user)
        .then(obj => res.status(200).json({
            msg: "Se reemplazo el User",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo reemplazar el User",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let birthDate = req.body.birthDate;
    let CURP = req.body.CURP;
    let RFC = req.body.RFC;
    let address = req.body.address;
    let skills = req.body.skills;
    let role = req.body.role;

    let user = new Object();
    if(name) user._name = name;
    if(lastName) user._lastName = lastName;
    if(email) user._email = email;
    if(birthDate) user._birthDate = birthDate;
    if(CURP) user._CURP = CURP;
    if(RFC) user._RFC = RFC;
    if(address) user._address = address;
    if(skills) user._skills = skills;
    if(role) user._role = role;

    User.findOneAndUpdate({"_id":id},user)
        .then(obj => res.status(200).json({
            msg: "Se actualizo el User",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar el User",
            obj: ex
        }));
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
