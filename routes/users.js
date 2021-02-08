const router = require('express').Router();
let User = require('../models/users.model');
let jwt = require('jsonwebtoken');

router.route('/').post((req, res) => {

    if(req.body.displayName && req.body.email && req.body.password){
        const displayName = req.body.displayName;
        const email = req.body.email;
        const password = req.body.password;
    
        const newUser = new User({displayName, email, password});
    
        newUser.save()
        .then(() => res.json('User saved in mongodb'))
        .catch((error) => res.status(400).json('Error: ' + error))
    }
    else{
        User.find({email: req.body.email, password: req.body.password }, 'email password', function(err, result){
            if (err) return handleError(err);
        })
        .then(user => {
            const userId = user[0]._id;
            const token = jwt.sign({userId}, "jwtSecret", {
                expiresIn: 300
            });
            console.log({user, token: token});
            
            res.json({user, token: token});
        })
        .catch(error => res.status(400).json('Error: ' + error));;
    }
    



});

module.exports = router;