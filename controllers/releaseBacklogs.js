const express = require('express');
const ReleaseBacklog = require('../models/releaseBacklog');

function create(req, res, next) {
    const name = req.body.name;
    const sprintsBacklogs = req.body.sprintsBacklogs || [];
    const stories = req.body.stories || [];

    const releaseBacklog = new ReleaseBacklog({
        _name: name,
        _sprintsBacklogs: sprintsBacklogs,
        _stories: stories
    });

    releaseBacklog.save()
        .then(obj => res.status(200).json({
            msg: res.__("createReleaseBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("createReleaseBacklog.fail"),
            obj: ex
        }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = { 
        page, 
        limit: 5 
    };

    ReleaseBacklog.paginate({}, options)
        .then(objs => res.status(200).json({
            msg: res.__("enlistReleaseBacklogs.ok"),
            obj: objs
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("enlistReleaseBacklogs.fail"),
            obj: ex
        }));
}

function index(req, res, next) {
    const id = req.params.id;
    ReleaseBacklog.findOne({ '_id': id })
        .then(obj => res.status(200).json({
            msg: res.__("getReleaseBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("getReleaseBacklog.fail"),
            obj: ex
        }));
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name || "";
    const sprintsBacklogs = req.body.sprintsBacklogs || [];
    const stories = req.body.stories || [];

    const releaseBacklog = {
        _name: name,
        _sprintsBacklogs: sprintsBacklogs,
        _stories: stories
    };

    ReleaseBacklog.findOneAndUpdate({ "_id": id }, releaseBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("replaceReleaseBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("replaceReleaseBacklog.fail"),
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const sprintsBacklogs = req.body.sprintsBacklogs;
    const stories = req.body.stories;

    const releaseBacklog = {};
    if (name) releaseBacklog._name = name;
    if (sprintsBacklogs) releaseBacklog._sprintsBacklogs = sprintsBacklogs;
    if (stories) releaseBacklog._stories = stories;

    ReleaseBacklog.findOneAndUpdate({ "_id": id }, releaseBacklog)
        .then(obj => res.status(200).json({
            msg: res.__("updateReleaseBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("updateReleaseBacklog.fail"),
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    ReleaseBacklog.findByIdAndDelete({ "_id": id })
        .then(obj => res.status(200).json({
            msg: res.__("deleteReleaseBacklog.ok"),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            msg: res.__("deleteReleaseBacklog.fail"),
            obj: ex
        }));
}

module.exports = { create, list, index, replace, update, destroy };
