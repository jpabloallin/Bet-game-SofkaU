/**
 * Route: /createGame, gets page with instructions about creating, updating and getting a winner.
 * Creates new game.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers')

/**
 * Create game with players and bets.
 */
router.post('/', gameController.createGame);

module.exports = router;