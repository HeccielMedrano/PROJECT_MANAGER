const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

class ProductBacklog {
    constructor(stories) {
        this._stories = stories;
    }

    get stories() {
        return this._stories;
    }

    set stories(value) {
        this._stories = value;
    }
}

schema.loadClass(ProductBacklog);

module.exports = mongoose.model('ProductBacklog', schema);
