'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	EventSingle = mongoose.model('EventSingle'),
	_ = require('lodash');


/**
 * Create an event
 */
exports.create = function(req, res, next) {
	var event = new EventSingle(req.body);

	event.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(event);
		}
	});
};

/**
 * List of Events
 */
exports.list = function(req, res) {
	EventSingle.find().exec(function(err, events) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(events);
		}
	});
};

/**
 * Show the Event
 */
exports.read = function(req, res) {
	res.json(req.event);
};

/**
 * Delete an Event
 */
exports.delete = function(req, res) {
	var event = req.event;

	event.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(event);
		}
	});
};

/**
 * Update an Event
 */
exports.update = function(req, res) {
	var event = req.event;

	event = _.extend(event, req.body);

	event.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(event);
		}
	});
};

exports.eventByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Event is invalid'
		});
	}

	EventSingle.findById(id).exec(function(err, event) {
		if (err) return next(err);
		if (!event) {
			return res.status(404).send({
				message: 'Event not found'
			});
		}
		req.event = event;
		next();
	});
};

