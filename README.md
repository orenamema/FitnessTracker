# FitnessTracker

## Introduction

For this project I have created a workout tracker. The assignment will required that I create Mongo database with a Mongoose schema and handle routes with Express. This application is for someone that wants to view, create and track daily workouts. Moreover, it allows the user to be able to log multiple exercises in a workout on a given day. The user should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, he/she should be able to track my distance traveled. When a person tracks its workout it makes it easier to reach its goals.

# Application Demo

![alt text](https://github.com/orenamema/FitnessTracker/raw/master/public/images/workout.gif)

## Technology Used

* [Nodejs](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Morgan](https://www.npmjs.com/package/mongoose-morgan)
* [Javascript](https://www.w3schools.com/js)

## Code Snipet

````Javascript

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,

    exercises:[
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

````

````Javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise",ExerciseSchema);

module.exports = Exercise;
````

## Learning Points
* [MongoDB](https://www.mongodb.com/)

**Oren Amema**
* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
