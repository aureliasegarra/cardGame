module.exports = mongoose =>{
    const Player = mongoose.model(
        "players",
        mongoose.Schema(
            {
                username: {
                    type: String,
                    trim    : true,
                    required: [true, 'Le nom est obligatoire']
                },
                email: {
                    type     : String,
                    trim     : true,
                    required : [true, 'L’email est obligatoire'],
                    unique   : true, // index unique
                    lowercase: true
                },
                password: {
                    type: String,
                    trim: true,
                    required: true
                },
                played: {
                    type:Number,
                    default: 0
                },
                victory: {
                    type:Number,
                    default: 0
                },
                defeat: {
                    type:Number,
                    default: 0
                }
            },
            { timestamps: true // ajoute 2 champs au document createdAt et updatedAt
            }
        )
    );
    return Player;
};
