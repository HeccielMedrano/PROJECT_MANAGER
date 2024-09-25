const express = require('express')

function create(req, res, next) {
    res.send(`POST => /projects/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /projects/`);
}

function index(req, res, next) {
    res.send(`GET => /projects/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /projects/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /projects/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /projects/:id`);
}

module.exports = {create, list, index, replace, update, destroy}