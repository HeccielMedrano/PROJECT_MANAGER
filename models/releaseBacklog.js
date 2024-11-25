const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _sprintsBacklogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SprintBacklog'
        }
    ],
    _stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

class ReleaseBacklog {
    constructor(name, sprintsBacklogs, stories) {
        this._name = name;
        this._sprintsBacklogs = sprintsBacklogs;
        this._stories = stories;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get sprintsBacklogs() {
        return this._sprintsBacklogs;
    }

    set sprintsBacklogs(value) {
        this._sprintsBacklogs = value;
    }

    get stories() {
        return this._stories;
    }

    set stories(value) {
        this._stories = value;
    }

}

schema.loadClass(ReleaseBacklog);

module.exports = mongoose.model('ReleaseBacklog', schema);
