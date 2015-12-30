'use strict';

angular.module('events').directive('eventDetails', function () {
	return {
		restrict: 'E',
		scope: {
			event: '='
		},
		templateUrl: 'modules/events/views/eventDetails.client.view.html',
		//controller: controllerFunction, //Embed a custom controller in the directive
		link: function ($scope, element, attrs) { } //DOM manipulation
	};
});
