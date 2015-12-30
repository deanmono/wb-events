'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
/**
 * Events Schema
 */

var EventSingleSchema = new Schema({
	title: {
		type: String,
		default: '',
		trim: true
	},
	startDate: {
		type: String,
		default: ''
	},
	endDate: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		default: '',
		trim: true
	},
	description: {
		type: String,
		default: ''
	},
	featured: {
		type: Boolean,
		default: false
	},
	updated: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('EventSingle', EventSingleSchema);
