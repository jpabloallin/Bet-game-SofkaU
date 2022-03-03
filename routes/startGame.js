/**
 * Route: /startGame POST, you must enter the id of the game that you want to start.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameControllers')

/**
 * Starts the game changing inProgress to true.
 */
router.post('/', gameController.startGame) 

module.exports = router;