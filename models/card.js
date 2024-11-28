const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _description: String,
    _fibonacciValue: Number,
    _priority: String, // Representa los valores de Priority: HIGH, MEDIUM, LOW
    _validationStatus: Boolean,
    _progressStatus: String, // Representa TaskProgressStatus: TO_DO, DOING, DONE
    _releaseBacklog: { type: mongoose.Schema.Types.ObjectId, ref: 'ReleaseBacklog' },
    _sprintBacklog: { type: mongoose.Schema.Types.ObjectId, ref: 'SprintBacklog' }
});

class Card {
    constructor(description, fibonacciValue, priority, validationStatus, progressStatus, releaseBacklog, sprintBacklog) {
        this._description = description;
        this._fibonacciValue = fibonacciValue;
        this._priority = priority;
        this._validationStatus = validationStatus;
        this._progressStatus = progressStatus;
        this._releaseBacklog = releaseBacklog;
        this._sprintBacklog = sprintBacklog;
    }

    get description() {
        return this._description;
    }

    set description(v) {
        this._description = v;
    }

    get fibonacciValue() {
        return this._fibonacciValue;
    }

    set fibonacciValue(v) {
        this._fibonacciValue = v;
    }

    get priority() {
        return this._priority;
    }

    set priority(v) {
        this._priority = v;
    }

    get validationStatus() {
        return this._validationStatus;
    }

    set validationStatus(v) {
        this._validationStatus = v;
    }

    get progressStatus() {
        return this._progressStatus;
    }

    set progressStatus(v) {
        this._progressStatus = v;
    }

    get releaseBacklog() {
        return this._releaseBacklog;
    }

    set releaseBacklog(v) {
        this._releaseBacklog = v;
    }

    get sprintBacklog() {
        return this._sprintBacklog;
    }

    set sprintBacklog(v) {
        this._sprintBacklog = v;
    }
}

schema.loadClass(Card);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Card', schema);
