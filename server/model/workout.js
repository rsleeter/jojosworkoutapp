const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	title: {type: String, required: true},
	description: { type: String, required: true },
	summary: { type: String, required: true },
	trainer: { type: String, required: true },
	lastused: { type: Date, required: false },
	lastclass: { type: String, required: false},
	type: { type: String, required: false},
	tags: { type: Array, required: false}
    }, { collection : 'workout' });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;