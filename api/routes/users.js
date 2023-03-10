const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

// lets the router know that it should be expecting a json value
router.use(express.json())

router.get('/', UserController.getUser);

// adds a router for the create for the user
// go into user-controller.js to make edits to createUser
router.post('/create', UserController.createUser);

module.exports = router;
