const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

class Column {
    constructor(name, tasks) {
        this._name = name;
        this._tasks = tasks;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(value) {
        this._tasks = value;
    }

}

schema.loadClass(Column);

module.exports = mongoose.model('Column', schema);
