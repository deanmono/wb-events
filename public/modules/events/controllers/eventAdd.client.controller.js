'use strict';

angular.module('events').controller('EventAddController', [
	'$scope',
	'EventsService',
	function($scope, EventsService) {

		$scope.addForm = {};
		$scope.alert = false;
		$scope.disabled = false;

		$scope.submitAddForm = function () {
			$scope.disabled = true;

			EventsService.save($scope.addForm, function(data) {
				$scope.alert = {
					description: 'New event created: ' + $scope.addForm.title,
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
