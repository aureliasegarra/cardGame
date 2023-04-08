module.exports = mongoose => {
    const Card = mongoose.model(
        "cards",
        mongoose.Schema(
            {
                value: {
                    type:  Number,
                    required: true,
                    min: 1,
                    max: 9
                },
                color: {
                    type: String,
                    required: true
                },
                isFlipped: {
                    type: Boolean,
                    required: true,
                }
            },
            { timestamps: true }
        )
    );

    return Card;
};