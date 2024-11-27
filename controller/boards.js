const express = require('express');
const Board = require('../models/board');

function create(req, res, next) {
    const productBacklog = req.body.productBacklog;
    const lastName = req.body.lastName;

    let board = new Board({
        name: name,
        lastName: lastName
    });

    board.save().then(obj => res.status(200).json({
        msg: "Board creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar al board",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    Board.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de directores",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de directores",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Board.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: `Board con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el board",
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let productBacklog = req.body.productBacklog ? req.body.productBacklog: "";
    let lastName = req.body.lastName ? req.body.lastName: "";

    let board = new Object({
        _productBacklog: productBacklog, _lastName: lastName
    })

    Board.findOneAndUpdate({"_id":id}, board)
    .then(obj => res.status(200).json({
        msg: "Se reemplazo el board",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo reemplazar el board",
        obj: ex
    }));
}

function update(req, res, next) {
    const id = req.params.id;
    let productBacklog = req.body.productBacklog;
    let lastName = req.body.lastName;

    let board = new Object();
    if(productBacklog) board._productBacklog = productBacklog;
    if(lastName) board._lastName = lastName;

    Board.findOneAndUpdate({"_id":id},board)
        .then(obj => res.status(200).json({
            msg: "Se actualizo el board",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar el board",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Board.findOneAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: "Board eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el board",
        obj: ex
    }));
}

module.exports = {create, list, index, replace, update, destroy};