'use strict';

// Setting up route
angular.module('events').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/events');
		// Events state routing
		$stateProvider.
		state('eventsList', {
			url: '/events',
			templateUrl: 'modules/events/views/eventsList.client.view.html',
			controller: 'EventsListController'
		}).
		state('eventAdd', {
			url: '/events/add',
			templateUrl: 'modules/events/views/eventAdd.client.view.html',
			controller: 'EventAddController'
		}).
		state('eventEdit', {
			url: '/events/:eventId',
			templateUrl: 'modules/events/views/eventEdit.client.view.html',
			controller: 'EventEditController'
		});
	}
]);
