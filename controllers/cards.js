const express = require('express');
const Card = require('../models/card');

function create(req, res, next) {
    const description = req.body.description;
    const fibonacciValue = req.body.fibonacciValue;
    const priority = req.body.priority;
    const validationStatus = req.body.validationStatus;
    const progressStatus = req.body.progressStatus;
    const releaseBacklog = req.body.releaseBacklog;
    const sprintBacklog = req.body.sprintBacklog;

    const card = new Card({
        _description: description,
        _fibonacciValue: fibonacciValue,
        _priority: priority,
        _validationStatus: validationStatus,
        _progressStatus: progressStatus,
        _releaseBacklog: releaseBacklog,
        _sprintBacklog: sprintBacklog
    });

    card.save()
        .then(obj => res.status(200).json({
            msg: res.__("createCard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createCard.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    Card.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistCards.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistCards.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    Card.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getCard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getCard.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const description = req.body.description || "";
    const fibonacciValue = req.body.fibonacciValue || 0;
    const priority = req.body.priority || "";
    const validationStatus = req.body.validationStatus || false;
    const progressStatus = req.body.progressStatus || "";
    const releaseBacklog = req.body.releaseBacklog || "";
    const sprintBacklog = req.body.sprintBacklog || "";

    const card = {
        _description: description,
        _fibonacciValue: fibonacciValue,
        _priority: priority,
        _validationStatus: validationStatus,
        _progressStatus: progressStatus,
        _releaseBacklog: releaseBacklog,
        _sprintBacklog: sprintBacklog
    };

    Card.findOneAndUpdate({ "_id": id }, card)
        .then(obj => res.status(200).json({
            msg: res.__("replaceCard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceCard.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const description = req.body.description;
    const fibonacciValue = req.body.fibonacciValue;
    const priority = req.body.priority;
    const validationStatus = req.body.validationStatus;
    const progressStatus = req.body.progressStatus;

    const card = {};
    if (description) card._description = description;
    if (fibonacciValue) card._fibonacciValue = fibonacciValue;
    if (priority) card._priority = priority;
    if (validationStatus) card._validationStatus = validationStatus;
    if (progressStatus) card._progressStatus = progressStatus;

    Card.findOneAndUpdate({ "_id": id }, card)
        .then(obj => res.status(200).json({
            msg: res.__("updateCard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateCard.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Card.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteCard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteCard.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
