const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').post((req, res) => {

    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const message = req.body.message;

    const newContact = new Contact({
        email,
        firstname,
        lastname,
        message
    });

    newContact.save()
    .then(() => res.json('Contact saved!!!'))
    .catch((error) => res.status(400).json('Error: ', error));
});

module.exports = router;