'use strict';

//Events service used for handling event data requests
angular.module('events').service('EventsService', [
	'$resource',
	function($resource) {

		return $resource('/events/:eventId', {eventId: '@eventId'});
	}
]);
