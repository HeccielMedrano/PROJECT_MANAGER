const express = require('express')

function create(req, res, next) {
    res.send(`POST => /sprints/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /sprints/`);
}

function index(req, res, next) {
    res.send(`GET => /sprints/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /sprints/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /sprints/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /sprints/:id`);
}

module.exports = {create, list, index, replace, update, destroy}