const express = require('express');
const usersControllers = require('../controllers/users.js')
const { 
  getUser
} = usersControllers;

const router = express.Router();

router.get('/users/:name/:tag', getUser)

module.exports = router;