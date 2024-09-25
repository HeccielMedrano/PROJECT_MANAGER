const express = require('express')

function create(req, res, next) {
    res.send(`POST => /skills/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /skills/`);
}

function index(req, res, next) {
    res.send(`GET => /skills/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /skills/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /skills/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /skills/:id`);
}

module.exports = {create, list, index, replace, update, destroy}