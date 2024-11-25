const express = require('express');
const SprintBacklog = require('../models/sprintBacklog');

function create(req, res, next) {
    const name = req.body.name;
    const description = req.body.description;
    const sprint = req.body.sprint;

    let sprintBacklog = new SprintBacklog({
        _name: name,
        _description: description,
        _sprint: sprint
    });

    sprintBacklog.save().then(obj => res.status(200).json({
        msg: "SprintBacklog creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el SprintBacklog",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    SprintBacklog.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de SprintBacklogs",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de SprintBacklogs",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    SprintBacklog.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `SprintBacklog con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el SprintBacklog",
        obj: ex
    }));
}

function replace(req, res, next) {
    
}

function update(req, res, next) {
    
}

function destroy(req, res, next) {
    const id = req.params.id;
    SprintBacklog.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "SprintBacklog eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el SprintBacklog",
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };
