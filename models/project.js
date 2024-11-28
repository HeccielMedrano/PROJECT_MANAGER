const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _name: String,
    _requestDate: Date,
    _startDate: Date,
    _description: String,
    _projectManager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _productOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _developmentTeam: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
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

    set name(v) {
        this._name = v;
    }

    get requestDate() {
        return this._requestDate;
    }

    set requestDate(v) {
        this._requestDate = v;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(v) {
        this._startDate = v;
    }

    get description() {
        return this._description;
    }

    set description(v) {
        this._description = v;
    }

    get projectManager() {
        return this._projectManager;
    }

    set projectManager(v) {
        this._projectManager = v;
    }

    get productOwner() {
        return this._productOwner;
    }

    set productOwner(v) {
        this._productOwner = v;
    }

    get developmentTeam() {
        return this._developmentTeam;
    }

    set developmentTeam(v) {
        this._developmentTeam = v;
    }
}

schema.loadClass(Project);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Project', schema);
