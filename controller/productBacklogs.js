const express = require('express');
const ProductBacklog = require('../models/productBacklog');

function create(req, res, next) {
    const stories = req.body.stories;

    let productBacklog = new ProductBacklog({
        _stories: stories
    });

    productBacklog.save().then(obj => res.status(200).json({
        msg: "ProductBacklog creado correctamente",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo almacenar el ProductBacklog",
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 5
    };
    ProductBacklog.paginate({}, options).then(objs => res.status(200).json({
        msg: "Lista de ProductBacklogs",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: "No se pudo consultar la lista de ProductBacklogs",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    ProductBacklog.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: `ProductBacklog con el id ${id}`,
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el ProductBacklog",
        obj: ex
    }));
}

function replace(req, res, next) {
    
}

function update(req, res, next) {
    
}

function destroy(req, res, next) {
    const id = req.params.id;
    ProductBacklog.findOneAndDelete({"_id": id}).then(obj => res.status(200).json({
        msg: "ProductBacklog eliminado correctamente",
        obj: obj
    }))
    .catch(ex => res.status(500).json({
        msg: "No se pudo consultar el ProductBacklog",
        obj: ex
    }));
}

module.exports = {create, list, index, replace, update, destroy};
