const router = require('express').Router();
let Subscriptions = require('../models/subscriptions.model');

router.route('/').post((req, res) => {
    const email = req.body.email;
    const newSubscription = new Subscriptions({email});

    newSubscription.save()
    .then(() => res.json('Subscription saved!!!'))
    .catch((error) => res.status(400).json('Error: ' + error))
});

module.exports = router;