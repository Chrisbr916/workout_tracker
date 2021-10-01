const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout"
    },
    workoutType: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    sets: {
        type: String,
        trim: true,
        required: "Enter the number of sets"
    },
    reps: {
        type: String,
        trim: true,
        required: "Enter the amount of reps"
    },
    duration: {
        type: String,
        trim: true,
        required: "Enter the duration of the workout"
    },
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;