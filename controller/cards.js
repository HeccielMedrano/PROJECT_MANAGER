const express = require('express');
const Card = require('../models/card');

function create(req, res, next) {
    const name = req.body.name;
    const description = req.body.description;
    const column = req.body.column;
    const dueDate = req.body.dueDate;

    let card = new Card({
        _name: name,
        _description: description,
        _column: column,
        _dueDate: dueDate
    });

    card.save().then(obj => res.status(200).json({
        msg: "Card creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el card",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    Card.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de Cards",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de Cards",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Card.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `Card con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el Card",
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name: "";
    let description = req.body.description ? req.body.description: "";
    let column = req.body.column ? req.body.column: "";
    let dueDate = req.body.dueDate ? req.body.dueDate: "";

    let card = new Object({
        _name: name, _description: description, _column: column, _dueDate: dueDate
    });

    Card.findOneAndUpdate({"_id":id},card)
        .then(obj => res.status(200).json({
            msg: "Se reemplazo el card",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo reemplazar el card",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let description = req.body.description;
    let column = req.body.column;
    let dueDate = req.body.dueDate;

    let card = new Object();
    if(name) card._name = name;
    if(description) card._description = description;
    if(column) card._column = column;
    if(dueDate) card._dueDate = dueDate;

    Card.findOneAndUpdate({"_id":id},card)
        .then(obj => res.status(200).json({
            msg: "Se actualizo el card",
            obj: obj
        })).catch(ex => res.status(500).json({
            msg: "No se pudo actualizar el card",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Card.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "Card eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el Card",
        obj: ex
    }));
}

module.exports = { create, list, index, replace, update, destroy };
