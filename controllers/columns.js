const express = require('express');
const Column = require('../models/column');

function create(req, res, next) {
    const name = req.body.name;
    const tasks = req.body.tasks || [];

    const column = new Column({
        _name: name,
        _tasks: tasks
    });

    column.save()
        .then(obj => res.status(200).json({
            msg: res.__("createColumn.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createColumn.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    Column.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistColumns.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistColumns.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    Column.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getColumn.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getColumn.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name || "";
    const tasks = req.body.tasks || [];

    const column = {
        _name: name,
        _tasks: tasks
    };

    Column.findOneAndUpdate({ "_id": id }, column)
        .then(obj => res.status(200).json({
            msg: res.__("replaceColumn.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceColumn.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const tasks = req.body.tasks;

    const column = {};
    if (name) column._name = name;
    if (tasks) column._tasks = tasks;

    Column.findOneAndUpdate({ "_id": id }, column)
        .then(obj => res.status(200).json({
            msg: res.__("updateColumn.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateColumn.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Column.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteColumn.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteColumn.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
