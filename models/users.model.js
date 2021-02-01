const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    displayName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true}
}, {
    timestamps: true
});

const Users = mongoose.model('Users',usersSchema);
module.exports = Users;