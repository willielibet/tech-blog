    const router = require('express').Router();
    const { User } = require('../../models');

    //activities 23 and 24
    //create a new user.
    router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
        //assign the entered username and password to 
        //the username and password.
        username: req.body.username,
        password: req.body.password,
        });

        // create session variables based on the logged in user
        req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

        res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });