const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionsSchema = new Schema({
    email: {type: String, required: true}
});

const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
module.exports = Subscriptions;