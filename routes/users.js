const router = require('express').Router();
let User = require('../models/users.model');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

router.route('/').post((req, res) => {

    if(req.body.displayName && req.body.email && req.body.password){
        
        const displayName = req.body.displayName;
        const email = req.body.email;
        const password = req.body.password;
    
        User.findOne({email: req.body.email}).then(user => {
            if(user){
                return res.status(400).json({email: "Email already exists!"});
            }
            else{
                const newUser = new User({displayName, email, password});
    
                //Hashing of the password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(() => res.json({email: newUser.email, password: newUser.password}))
                        .catch((error) => res.status(400).json('Error: ' + error))
                    });
                });
            }
        });
    }//if for signUp
    else{
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({email}).then(user => {
            
            if(!user){
                return res.status(404).json({emailNotFound: "Email Not Found!"});
            }

            if(password == user.password){

                const payload = {
                    id: user._id,
                    displayName: user.displayName
                };
                // Sign token
                jwt.sign(
                    payload,
                    "secretKey",
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            user: user,
                            token: "Bearer " + token
                        });
                    }
                );
            }
            else{
                bcrypt.compare(password, user.password).then(isMatch => {

                    if(isMatch){
                        const payload = {
                            id: user._id,
                            displayName: user.displayName
                        };

                        // Sign token
                        jwt.sign(
                            payload,
                            "secretKey",
                            {
                                expiresIn: 31556926 // 1 year in seconds
                            },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    user: user,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    }
                    else{
                        return res.status(400).json({passwordincorrect: "Password Incorrect!"});
                    }
                });
            }//else

        })
        .catch(error => res.status(400).json('User Not found! Error: ' + error));
    }//else for login
    
});

module.exports = router;