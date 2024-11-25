const express = require('express');
const Project = require('../models/project');

function create(req, res, next) {
    const name = req.body.name;
    const requestDate = req.body.requestDate;
    const startDate = req.body.startDate;
    const description = req.body.description;
    const projectManager = req.body.projectManager;
    const productOwner = req.body.productOwner;
    const developmentTeam = req.body.developmentTeam;

    let project = new Project({
        _name: name,
        _requestDate: requestDate,
        _startDate: startDate,
        _description: description,
        _projectManager: projectManager,
        _productOwner: productOwner,
        _developmentTeam: developmentTeam
    });

    project.save().then(obj => res.status(200).json({
        msg: "Project creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el proyecto",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    Project.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de proyectos",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de proyectos",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Project.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: `Proyecto con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el proyecto",
        obj: ex
    }));
}

function replace(req, res, next) {

}

function update(req, res, next) {
    
}

function destroy(req, res, next) {
    const id = req.params.id;
    Project.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "Proyecto eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el proyecto",
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };
