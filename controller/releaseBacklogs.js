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
    const id = req.params.id;
    let name = req.body.name ? req.body.name: "";
    let description = req.body.description ? req.body.description: "";
    let project = req.body.project ? req.body.project: "";

    let releaseBacklog = new Object({
        _name: name, _description: description, _project: project
    });

    ReleaseBacklog.findOneAndUpdate({"_id":id},releaseBacklog)
        .then(obj => res.status(200).json({
            msg: "Se reemplazo el ReleaseBacklog",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo reemplazar el ReleaseBacklog",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let description = req.body.description;
    let project = req.body.project;

    let releaseBacklog = new Object();
    if(name) releaseBacklog._name = name;
    if(description) releaseBacklog._description = description;
    if(project) releaseBacklog._project = project;

    ReleaseBacklog.findOneAndUpdate({"_id":id},releaseBacklog)
        .then(obj => res.status(200).json({
            msg: "Se actualizo el ReleaseBacklog",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar el ReleaseBacklog",
            obj: ex
        }));
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
