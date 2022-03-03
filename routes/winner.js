/**
 * Route: /winner/:id, it creates the winner of the game selected by its ID.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers')

/**
 * GET winner
 */
router.get('/:id', gameController.winner)

module.exports = router;