const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String, // Ejemplo: "myApp-version 1.0"
    _sprintsBacklogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SprintBacklog' }],
    _stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
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

    set name(v) {
        this._name = v;
    }

    get sprintsBacklogs() {
        return this._sprintsBacklogs;
    }

    set sprintsBacklogs(v) {
        this._sprintsBacklogs = v;
    }

    get stories() {
        return this._stories;
    }

    set stories(v) {
        this._stories = v;
    }
}

schema.loadClass(ReleaseBacklog);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('ReleaseBacklog', schema);
