'use strict';

angular.module('events').controller('EventsListController', [
	'$scope',
	'EventsService',
	function($scope, EventsService) {

		$scope.haveEventsResponse = false;

		$scope.events = EventsService.query(function(success) {
			$scope.haveEventsResponse = true;
			$scope.event = success;
			$scope.editForm = $scope.event;

		}, function(error) {
			$scope.haveEventsResponse = true;
			$scope.alert = {
				description: error,
				type: 'error'
			};
		});

		$scope.eventDelete = function ( id ) {

			EventsService.delete({eventId: id}, function(data) {
				$scope.alert = {
					description: 'Event removed: ' + data,
					type: 'success'
				};

				$scope.spliceEvent(id);

			}, function(error) {
				$scope.alert = {
					description: error,
					type: 'error'
				};
			});
		};

		$scope.spliceEvent = function (id) {

			$scope.events.forEach(function(element, index) {
				if (element._id === id) {
					$scope.events.splice( index, 1 );
				}
			});
		};

		$scope.eventDetails = function (id) {

			if (!$scope.isVisible) {
				$scope.isVisible = id ;
			} else {
				$scope.isVisible = false ;
			}


		};

	}
]);
