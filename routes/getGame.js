/**
 * Route: /getGame:id, display information about a game according to the id entered.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameControllers')

/**
 * GET the game selected
 */ 
router.get('/:id', gameController.getGame );

module.exports = router;