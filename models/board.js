const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _productBacklog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductBacklog'
    },
    _releaseBacklogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ReleaseBacklog'
        }
    ],
    _sprintsBacklogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SprintBacklog'
        }
    ]
});

class Board {
    constructor(productBacklog, releaseBacklogs, sprintsBacklogs) {
        this._productBacklog = productBacklog;
        this._releaseBacklogs = releaseBacklogs;
        this._sprintsBacklogs = sprintsBacklogs;
    }

    get productBacklog() {
        return this._productBacklog;
    }

    set productBacklog(value) {
        this._productBacklog = value;
    }

    get releaseBacklogs() {
        return this._releaseBacklogs;
    }

    set releaseBacklogs(value) {
        this._releaseBacklogs = value;
    }

    get sprintsBacklogs() {
        return this._sprintsBacklogs;
    }

    set sprintsBacklogs(value) {
        this._sprintsBacklogs = value;
    }

}

schema.loadClass(Board);

module.exports = mongoose.model('Board', schema);
