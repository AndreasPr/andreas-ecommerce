const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
   email: {type: String, required: true},
   firstname: {type: String, required: true},
   lastname: {type: String, required: true},
   message: {type: String, required: true}
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;