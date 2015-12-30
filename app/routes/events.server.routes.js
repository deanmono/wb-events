'use strict';

var events = require('../../app/controllers/events.server.controller');

module.exports = function(app) {

	app.route('/events')
		.get(events.list)
		.post(events.create);

	app.route('/events/:eventId')
		.get(events.read)
		.post(events.update)
		.delete(events.delete);

	app.param('eventId', events.eventByID);
};
