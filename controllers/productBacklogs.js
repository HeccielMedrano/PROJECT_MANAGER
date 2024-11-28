const express = require('express');
const ProductBacklog = require('../models/productBacklog');

function create(req, res, next) {
    const stories = req.body.stories || [];

    const productBacklog = new ProductBacklog({
        _stories: stories
    });

    productBacklog.save()
        .then(obj => res.status(200).json({
            msg: res.__("createProductBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createProductBacklog.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    ProductBacklog.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistProductBacklogs.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistProductBacklogs.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    ProductBacklog.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getProductBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getProductBacklog.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const stories = req.body.stories || [];

    const productBacklog = {
        _stories: stories
    };

    ProductBacklog.findOneAndUpdate({ "_id": id }, productBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("replaceProductBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceProductBacklog.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const stories = req.body.stories;

    const productBacklog = {};
    if (stories) productBacklog._stories = stories;

    ProductBacklog.findOneAndUpdate({ "_id": id }, productBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("updateProductBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateProductBacklog.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    ProductBacklog.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteProductBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteProductBacklog.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
