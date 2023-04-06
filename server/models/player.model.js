module.exports = mongoose =>{
    const Player = mongoose.model(
        "player",
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
            },
            {
                timestamps: true // ajoute 2 champs au document createdAt et updatedAt
            }
        )
    );

    // hook executé avant la sauvegarde d'un document. Hash le mot de passe quand il est modifié
    Player.pre('save', function(next) {
        if (!this.isModified('password')) {
            return next();
        }
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    });

    return Player;


};
