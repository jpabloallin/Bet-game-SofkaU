/**
 * Controllers that process rest requests from the game, returning
 * a template, displaying information and updating the game.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */

/**
 * Imports model 'game'.
 */
const Game = require('../models/game');

/**
 * It returns the view of the main page of the game.
 */
exports.index = function (req, res, next) {
  res.render('../views/index.html');
};

/**
 * It returns all the games that have been played. If there is no data, it returns
 * a message stating that not data was found.
 */
exports.allGames = function (req, res, next) {

  const data = Game.find({
    $or: [
      { 'deleted': { $eq: false } },
      { 'deleted': { $exists: false } },
    ]
  });

  data.then(result => {
    if (result.length != 0) {
      res.status(200).json(result)
    } else {
      res.json({ message: 'There are not games' })
    }
  }).catch(err => console.error(err))
};

/**
 * It returns the information about a game according to the id of the game.
 */
exports.getGame = function (req, res, next) {

  Game.findById(req.params.id)
    .then((result) => { res.status(200).json(result) })
    .catch((err) => { res.json({ message: 'Id was not found', err }) });
}

/**
 * It creates a game and saves it to the database. 
 */
exports.createGame = async (req, res, next) => {

  const game = await new Game({
    type: req.body.type,
    gamers: req.body.gamers
  });

  if (game.gamers.length >= 2) {
    game.save()
      .then((result) => { res.status(200).json(result) })
      .catch((err) => { res.status(500).json(err) });
  } else {
    res.status(400).json({ message: 'Gamers must get 2 or more gamers' })
  }
};

/**
 * It starts a game by its ID and change the boolean InProgress to true implying that the game is already in progress.
 * If you input a game ID that is already in progress, it will display a message indicating that the game is already started.
 * If there is already a winner, it will display a message indicating that the game already finished.
 */
exports.startGame = (req, res, next) => {

  Game.findByIdAndUpdate(req.body.id)
    .then((result) => {

      if ((result.inProgress == false) && (result.winner.length == 0)) {
        inProgress = true

        Game.findByIdAndUpdate(req.body.id, { inProgress: true })
          .then(() => { res.json({ inProgress: 'true' }) })
          .catch((err) => { res.status(500).json(err) })

      } else if (result.inProgress == true) {
        res.json({ inProgress: 'The game already started' })

      } else {
        res.json({ message: 'The game already finished' })
      }
    })
    .catch((err) => { res.status(500).json({ message: 'Id was not found', err }) })
}

exports.winner = (req, res, next) => {
/**
 * It returns the game and the winner.
 */
   Game.findByIdAndUpdate(req.params.id)
    .then((result) => {

      let ramdomNumber;
      let betSum;
      let win;

      if (result.inProgress == true) {

        ramdomNumber = Math.floor(Math.random() * result.gamers.length)
        betSum = 0;
        result.gamers.forEach(gamer => {
          betSum += gamer.bet;
        })
        console.log(betSum);
        win = result.gamers[ramdomNumber];
        win.bet = betSum;

        Game.findByIdAndUpdate(req.body.id, { inProgress: false, winner: win })
          .then(solve => Game.findById(req.params.id).then(outcome => res.json(outcome)));

      } else if ((result.inProgress == false) && (result.winner.length != 0)) {
        res.json({ message: "There is already a winner: ", result });
      } else if ((result.inProgress == false) && (result.winner.length == 0)) {
        res.json({ message: "You need to start a game first!" });
      } else {
        res.json({ inProgress: "The game is already finished!" });
      }
    })
    .catch((err) => { res.status(500).json({ message: 'Id was not found', err }) });
}