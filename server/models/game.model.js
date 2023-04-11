module.exports = mongoose => {
    const Game = mongoose.model(
        "games",
        mongoose.Schema(
            {
                players: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Player'
                    }
                ],
                deck: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Card'
                    }
                ],
                square: [
                    [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Card'
                        }
                    ]
                ],
                currentPlayer: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Player'
                },
                winner: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Player'
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                },
            }
        )
    )
    return Game;
};

