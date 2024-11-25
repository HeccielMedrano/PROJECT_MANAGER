const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _releaseBacklog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReleaseBacklog'
    },
    _toDoColumn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Column'
    },
    _doingColumn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Column'
    },
    _doneColumn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Column'
    },
    _columns: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Column'
        }
    ]
});

class SprintBacklog {
    constructor(name, releaseBacklog, toDoColumn, doingColumn, doneColumn, columns) {
        this._name = name;
        this._releaseBacklog = releaseBacklog;
        this._toDoColumn = toDoColumn;
        this._doingColumn = doingColumn;
        this._doneColumn = doneColumn;
        this._columns = columns;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get releaseBacklog() {
        return this._releaseBacklog;
    }

    set releaseBacklog(value) {
        this._releaseBacklog = value;
    }

    get toDoColumn() {
        return this._toDoColumn;
    }

    set toDoColumn(value) {
        this._toDoColumn = value;
    }

    get doingColumn() {
        return this._doingColumn;
    }

    set doingColumn(value) {
        this._doingColumn = value;
    }

    get doneColumn() {
        return this._doneColumn;
    }

    set doneColumn(value) {
        this._doneColumn = value;
    }

    get columns() {
        return this._columns;
    }

    set columns(value) {
        this._columns = value;
    }

}

schema.loadClass(SprintBacklog);

module.exports = mongoose.model('SprintBacklog', schema);
