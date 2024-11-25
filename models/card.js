const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _description: String,
    _fibonacciValue: Number,
    _priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW']
    },
    _validationStatus: Boolean,
    _progressStatus: {
        type: String,
        enum: ['TO_DO', 'DOING', 'DONE']
    },
    _releaseBacklog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReleaseBacklog'
    },
    _sprintBacklog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SprintBacklog'
    }
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

    set description(value) {
        this._description = value;
    }

    get fibonacciValue() {
        return this._fibonacciValue;
    }

    set fibonacciValue(value) {
        this._fibonacciValue = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    get validationStatus() {
        return this._validationStatus;
    }

    set validationStatus(value) {
        this._validationStatus = value;
    }

    get progressStatus() {
        return this._progressStatus;
    }

    set progressStatus(value) {
        this._progressStatus = value;
    }

    get releaseBacklog() {
        return this._releaseBacklog;
    }

    set releaseBacklog(value) {
        this._releaseBacklog = value;
    }

    get sprintBacklog() {
        return this._sprintBacklog;
    }

    set sprintBacklog(value) {
        this._sprintBacklog = value;
    }
}

schema.loadClass(Card);

module.exports = mongoose.model('Card', schema);
