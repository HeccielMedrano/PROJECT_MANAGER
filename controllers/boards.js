const express = require('express');
const Board = require('../models/board');

function create(req, res, next) {
    const productBacklog = req.body.productBacklog;
    const releaseBacklogs = req.body.releaseBacklogs;
    const sprintsBacklogs = req.body.sprintsBacklogs;

    const board = new Board({
        _productBacklog: productBacklog,
        _releaseBacklogs: releaseBacklogs,
        _sprintsBacklogs: sprintsBacklogs
    });

    board.save()
        .then(obj => res.status(200).json({
            msg: res.__("createBoard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createBoard.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    Board.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistBoards.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistBoards.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    Board.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getBoard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getBoard.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const productBacklog = req.body.productBacklog || "";
    const releaseBacklogs = req.body.releaseBacklogs || [];
    const sprintsBacklogs = req.body.sprintsBacklogs || [];

    const board = {
        _productBacklog: productBacklog,
        _releaseBacklogs: releaseBacklogs,
        _sprintsBacklogs: sprintsBacklogs
    };

    Board.findOneAndUpdate({ "_id": id }, board)
        .then(obj => res.status(200).json({
            msg: res.__("replaceBoard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceBoard.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const productBacklog = req.body.productBacklog;
    const releaseBacklogs = req.body.releaseBacklogs;
    const sprintsBacklogs = req.body.sprintsBacklogs;

    const board = {};
    if (productBacklog) board._productBacklog = productBacklog;
    if (releaseBacklogs) board._releaseBacklogs = releaseBacklogs;
    if (sprintsBacklogs) board._sprintsBacklogs = sprintsBacklogs;

    Board.findOneAndUpdate({ "_id": id }, board)
        .then(obj => res.status(200).json({
            msg: res.__("updateBoard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateBoard.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Board.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteBoard.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteBoard.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
