const express = require('express');
const Column = require('../models/column');

function create(req, res, next) {
    const name = req.body.name;
    const board = req.body.board;

    let column = new Column({
        _name: name,
        _board: board
    });

    column.save().then(obj => res.status(200).json({
        msg: "Column creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar la columna",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    Column.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de columnas",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de columnas",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Column.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `Columna con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar la columna",
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name: "";
    let board = req.body.board ? req.body.board: "";

    let column = new Object({
        _name: name, _board: board
    });

    Column.findOneAndUpdate({"_id":id},column)
        .then(obj => res.status(200).json({
            msg: "Se reemplazo la columna",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo reemplazar la columna",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let board = req.body.board;

    let column = new Object();
    if(name) column._name = name;
    if(board) column._board = board;

    Column.findOneAndUpdate({"_id":id},column)
        .then(obj => res.status(200).json({
            msg: "Se actualizo la columna",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar la columna",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Column.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "Columna eliminada correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar la columna",
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };
