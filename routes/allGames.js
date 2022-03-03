/**
 * Route: /allGames, returns the information about all games that have been created, started and finished.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers')

/** 
 * GET all games
 */ 
router.get('/', gameController.allGames);

module.exports = router;