const express = require('express')

function create(req, res, next) {
    res.send(`POST => /members/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /members/`);
}

function index(req, res, next) {
    res.send(`GET => /members/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /members/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /members/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /members/:id`);
}

module.exports = {create, list, index, replace, update, destroy}