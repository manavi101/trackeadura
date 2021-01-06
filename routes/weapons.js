const express = require('express');
const weaponsControllers = require('../controllers/weapons.js')
const { 
  getWeapons
} = weaponsControllers;

const router = express.Router();

router.get('/weapons', getWeapons)
router.get('/weapons/:id', getWeapons)

module.exports = router;