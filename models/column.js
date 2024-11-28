const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String,
    _tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

class Column {
    constructor(name, tasks) {
        this._name = name;
        this._tasks = tasks;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(v) {
        this._tasks = v;
    }
}

schema.loadClass(Column);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Column', schema);
