const express = require('express');
const bcrypt = require('bcrypt')
const SprintBacklog = require('../models/sprintBacklog');

function create(req, res, next) {
    const name = req.body.name;
    const releaseBacklog = req.body.releaseBacklog;
    const toDoColumn = req.body.toDoColumn || {};
    const doingColumn = req.body.doingColumn || {};
    const doneColumn = req.body.doneColumn || {};
    const columns = req.body.columns || [];

    const sprintBacklog = new SprintBacklog({
        _name: name,
        _releaseBacklog: releaseBacklog,
        _toDoColumn: toDoColumn,
        _doingColumn: doingColumn,
        _doneColumn: doneColumn,
        _columns: columns
    });

    sprintBacklog.save()
        .then(obj => res.status(200).json({
            msg: res.__("createSprintBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createSprintBacklog.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    SprintBacklog.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistSprintBacklogs.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistSprintBacklogs.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    SprintBacklog.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getSprintBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getSprintBacklog.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name || "";
    const releaseBacklog = req.body.releaseBacklog || {};
    const toDoColumn = req.body.toDoColumn || {};
    const doingColumn = req.body.doingColumn || {};
    const doneColumn = req.body.doneColumn || {};
    const columns = req.body.columns || [];

    const sprintBacklog = {
        _name: name,
        _releaseBacklog: releaseBacklog,
        _toDoColumn: toDoColumn,
        _doingColumn: doingColumn,
        _doneColumn: doneColumn,
        _columns: columns
    };

    SprintBacklog.findOneAndUpdate({ "_id": id }, sprintBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("replaceSprintBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceSprintBacklog.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const releaseBacklog = req.body.releaseBacklog;
    const toDoColumn = req.body.toDoColumn;
    const doingColumn = req.body.doingColumn;
    const doneColumn = req.body.doneColumn;
    const columns = req.body.columns;

    const sprintBacklog = {};
    if (name) sprintBacklog._name = name;
    if (releaseBacklog) sprintBacklog._releaseBacklog = releaseBacklog;
    if (toDoColumn) sprintBacklog._toDoColumn = toDoColumn;
    if (doingColumn) sprintBacklog._doingColumn = doingColumn;
    if (doneColumn) sprintBacklog._doneColumn = doneColumn;
    if (columns) sprintBacklog._columns = columns;

    SprintBacklog.findOneAndUpdate({ "_id": id }, sprintBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("updateSprintBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateSprintBacklog.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    SprintBacklog.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteSprintBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteSprintBacklog.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
