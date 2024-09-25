const express = require('express')

function create(req, res, next) {
    res.send(`POST => /productBacklogs/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /productBacklogs/`);
}

function index(req, res, next) {
    res.send(`GET => /productBacklogs/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /productBacklogs/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /productBacklogs/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /productBacklogs/:id`);
}

module.exports = {create, list, index, replace, update, destroy}