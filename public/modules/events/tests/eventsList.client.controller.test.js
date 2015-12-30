'use strict';

(function() {
	describe('EventsListController', function() {
		//Initialize global variables
		var scope,
			EventsListController;

		// Load the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();

			EventsListController = $controller('EventsListController', {
				$scope: scope
			});
		}));

		it('events are a priority', function() {
			expect(scope.events).toBeTruthy();
		});
	});
})();
