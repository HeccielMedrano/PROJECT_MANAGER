const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

class ProductBacklog {
    constructor(stories) {
        this._stories = stories;
    }

    get stories() {
        return this._stories;
    }

    set stories(v) {
        this._stories = v;
    }
}

schema.loadClass(ProductBacklog);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('ProductBacklog', schema);
