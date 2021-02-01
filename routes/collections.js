const router = require('express').Router();
let Collections = require('../models/collections.model');

router.route('/').get((req, res) => {
    Collections.find()
    .then(collections => res.json(collections))
    .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;