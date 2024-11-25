const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _requestDate: Date,
    _startDate: Date,
    _description: String,
    _projectManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    _productOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    _developmentTeam: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

class Project {
    constructor(name, requestDate, startDate, description, projectManager, productOwner, developmentTeam) {
        this._name = name;
        this._requestDate = requestDate;
        this._startDate = startDate;
        this._description = description;
        this._projectManager = projectManager;
        this._productOwner = productOwner;
        this._developmentTeam = developmentTeam;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get requestDate() {
        return this._requestDate;
    }

    set requestDate(value) {
        this._requestDate = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get projectManager() {
        return this._projectManager;
    }

    set projectManager(value) {
        this._projectManager = value;
    }

    get productOwner() {
        return this._productOwner;
    }

    set productOwner(value) {
        this._productOwner = value;
    }

    get developmentTeam() {
        return this._developmentTeam;
    }

    set developmentTeam(value) {
        this._developmentTeam = value;
    }

}

schema.loadClass(Project);

module.exports = mongoose.model('Project', schema);
