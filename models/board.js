const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _productBacklog: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductBacklog' },
    _releaseBacklogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ReleaseBacklog' }],
    _sprintsBacklogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SprintBacklog' }]
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

    set productBacklog(v) {
        this._productBacklog = v;
    }

    get releaseBacklogs() {
        return this._releaseBacklogs;
    }

    set releaseBacklogs(v) {
        this._releaseBacklogs = v;
    }

    get sprintsBacklogs() {
        return this._sprintsBacklogs;
    }

    set sprintsBacklogs(v) {
        this._sprintsBacklogs = v;
    }
}

schema.loadClass(Board);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Board', schema);
