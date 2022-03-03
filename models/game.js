/**
 * Creates model for the schema 'game'
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Create collection Games in MongoDB.
 * @type Type of game (bets)
 * @param gamers      Array of players.
 * @param inProgress  Boolean It tells if the game is in progress or not.
 * @param winner      Object  Winner of the game, with name, bet and id.
 */
const gameSchema = new Schema({

    type: {
        type: String
    },
    gamers: [{
        name: {type: String,
        required: [true, "Name is required"]
        },
        bet: {type: Number,
            required: [true, "Bet is required"]
        }
    }],
    inProgress: { type: Boolean, default: false },
        winner: [],
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("game", gameSchema)