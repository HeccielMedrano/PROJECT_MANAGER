const express = require('express')

function create(req, res, next) {
    res.send(`POST => /usersHistory/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send(`GET => /usersHistory/`);
}

function index(req, res, next) {
    res.send(`GET => /usersHistory/${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`PUT => /usersHistory/:id`);
}

function update(req, res, next) {
    res.send(`PATCH => /usersHistory/:id`);
}

function destroy(req, res, next) {
    res.send(`DELETE => /usersHistory/:id`);
}

module.exports = {create, list, index, replace, update, destroy}