'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	name:{
		type: String,
		required: "Kindly enter the name of task"
	},
	createdAt:{
		type: Date,
		default: Date.now

	},
	status:{
		type: String,
		enum: ['pending', 'inProgress', 'completed'],
		default:['pending']
	}
});

module.exports = mongoose.model("Tasks", taskSchema);