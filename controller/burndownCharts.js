const express = require('express')

function create(req, res, next) {
    res.send(`POST => /burndownCharts/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /burndownCharts/`);
}

function index(req, res, next) {
    res.send(`GET => /burndownCharts/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /burndownCharts/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /burndownCharts/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /burndownCharts/:id`);
}

module.exports = {create, list, index, replace, update, destroy}