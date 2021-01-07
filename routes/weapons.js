const express = require('express');
const weaponsControllers = require('../controllers/weapons.js')
const { 
  getWeapons,
  getWeapon
} = weaponsControllers;

const router = express.Router();

router.get('/weapons', getWeapons)
router.get('/weapons/:field/:value', getWeapon)

module.exports = router;