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

    const project = new Project({
        _name: name,
        _requestDate: requestDate,
        _startDate: startDate,
        _description: description,
        _projectManager: projectManager,
        _productOwner: productOwner,
        _developmentTeam: developmentTeam
    });

    project.save()
        .then(obj => res.status(200).json({
            msg: res.__("createProject.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createProject.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    Project.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistProjects.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistProjects.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    Project.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getProject.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getProject.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name || "";
    const requestDate = req.body.requestDate || "";
    const startDate = req.body.startDate || "";
    const description = req.body.description || "";
    const projectManager = req.body.projectManager || "";
    const productOwner = req.body.productOwner || "";
    const developmentTeam = req.body.developmentTeam || [];

    const project = {
        _name: name,
        _requestDate: requestDate,
        _startDate: startDate,
        _description: description,
        _projectManager: projectManager,
        _productOwner: productOwner,
        _developmentTeam: developmentTeam
    };

    Project.findOneAndUpdate({ "_id": id }, project)
        .then(obj => res.status(200).json({
            msg: res.__("replaceProject.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceProject.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const requestDate = req.body.requestDate;
    const startDate = req.body.startDate;
    const description = req.body.description;
    const projectManager = req.body.projectManager;
    const productOwner = req.body.productOwner;
    const developmentTeam = req.body.developmentTeam;

    const project = {};
    if (name) project._name = name;
    if (requestDate) project._requestDate = requestDate;
    if (startDate) project._startDate = startDate;
    if (description) project._description = description;
    if (projectManager) project._projectManager = projectManager;
    if (productOwner) project._productOwner = productOwner;
    if (developmentTeam) project._developmentTeam = developmentTeam;

    Project.findOneAndUpdate({ "_id": id }, project)
        .then(obj => res.status(200).json({
            msg: res.__("updateProject.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateProject.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Project.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteProject.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteProject.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
