'use strict';

angular.module('events').controller('EventEditController', [
	'$scope',
	'EventsService',
	'$stateParams',
	function($scope, EventsService, $stateParams) {

		EventsService.get({eventId: $stateParams.eventId}, function(data) {
			$scope.event = data;
			$scope.editForm = $scope.event;

		}, function(error) {
			$scope.alert = {
				description: error,
				type: 'error'
			};
		});

		$scope.alert = false;
		$scope.disabled = false;

		$scope.submitEditForm = function () {
			$scope.disabled = true;

			EventsService.save({eventId: $stateParams.eventId}, $scope.editForm, function(data) {
				$scope.alert = {
					description: 'Edited event: ' + $scope.editForm.title,
					type: 'success'
				};
				$scope.disabled = false;
			}, function(error) {
				$scope.alert = {
					description: 'Something went wrong: ' + error,
					type: 'error'
				};
				$scope.disabled = false;
			});
		};


	}
]);
