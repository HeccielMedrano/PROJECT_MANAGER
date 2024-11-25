const express = require('express');
const ReleaseBacklog = require('../models/releaseBacklog');

function create(req, res, next) {
    const name = req.body.name;
    const description = req.body.description;
    const project = req.body.project;

    let releaseBacklog = new ReleaseBacklog({
        _name: name,
        _description: description,
        _project: project
    });

    releaseBacklog.save().then(obj => res.status(200).json({
        msg: "ReleaseBacklog creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el ReleaseBacklog",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    ReleaseBacklog.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de ReleaseBacklogs",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de ReleaseBacklogs",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    ReleaseBacklog.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `ReleaseBacklog con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el ReleaseBacklog",
        obj: ex
    }));
}

function replace(req, res, next) {
    
}

function update(req, res, next) {
}

function destroy(req, res, next) {
    const id = req.params.id;
    ReleaseBacklog.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "ReleaseBacklog eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el ReleaseBacklog",
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };
