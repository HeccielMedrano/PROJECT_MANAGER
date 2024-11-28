const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String,
    _releaseBacklog: { type: mongoose.Schema.Types.ObjectId, ref: 'ReleaseBacklog' },
    _toDoColumn: { type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    _doingColumn: { type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    _doneColumn: { type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    _columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }]
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

    set name(v) {
        this._name = v;
    }

    get releaseBacklog() {
        return this._releaseBacklog;
    }

    set releaseBacklog(v) {
        this._releaseBacklog = v;
    }

    get toDoColumn() {
        return this._toDoColumn;
    }

    set toDoColumn(v) {
        this._toDoColumn = v;
    }

    get doingColumn() {
        return this._doingColumn;
    }

    set doingColumn(v) {
        this._doingColumn = v;
    }

    get doneColumn() {
        return this._doneColumn;
    }

    set doneColumn(v) {
        this._doneColumn = v;
    }

    get columns() {
        return this._columns;
    }

    set columns(v) {
        this._columns = v;
    }
}

schema.loadClass(SprintBacklog);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('SprintBacklog', schema);
