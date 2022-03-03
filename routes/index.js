/**
 * Route: /, display the home page of the game.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers')

/**
 * GET home page.
 */ 
router.get('/', gameController.index);

module.exports = router;
