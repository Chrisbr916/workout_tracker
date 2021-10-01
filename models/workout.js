const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },
    exercises: [
        {
    name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    sets: {
        type: Number,
        required: "Enter the number of sets"
    },
    reps: {
        type: Number,
        required: "Enter the amount of reps"
    },
    duration: {
        type: Number,
        required: "Enter the duration of the workout"
    },
    weight: {
        type: Number,
        required: "Enter the weight of the workout"
    },
    distance: {
        type: Number,
        required: "Enter the distance of the workout"
    },
}
]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;