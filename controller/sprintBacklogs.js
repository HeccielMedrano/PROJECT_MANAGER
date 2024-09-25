const express = require('express')

function create(req, res, next) {
    res.send(`POST => /sprintBacklogs/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /sprintBacklogs/`);
}

function index(req, res, next) {
    res.send(`GET => /sprintBacklogs/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /sprintBacklogs/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /sprintBacklogs/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /sprintBacklogs/:id`);
}

module.exports = {create, list, index, replace, update, destroy}