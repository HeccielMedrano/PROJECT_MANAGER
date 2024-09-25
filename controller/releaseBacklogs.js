const express = require('express')

function create(req, res, next) {
    res.send(`POST => /releaseBacklogs/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /releaseBacklogs/`);
}

function index(req, res, next) {
    res.send(`GET => /releaseBacklogs/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /releaseBacklogs/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /releaseBacklogs/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /releaseBacklogs/:id`);
}

module.exports = {create, list, index, replace, update, destroy}