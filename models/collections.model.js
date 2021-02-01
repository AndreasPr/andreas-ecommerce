const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionsSchema = new Schema({
    title: {type: String, required: true},
    items: 
    [{
        id: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true} 
    }]
});

const Collections = mongoose.model('Collections', collectionsSchema);
module.exports = Collections;