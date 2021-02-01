const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').post((req, res) => {

    const displayName = req.body.displayName;
    const email = req.body.email;

    const newUser = new User({displayName, email});

    newUser.save()
    .then(() => res.json('User saved!!!'))
    .catch((error) => res.status(400).json('Error: ' + error))
});

module.exports = router;