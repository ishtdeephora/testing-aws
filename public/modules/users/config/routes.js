'use strict';

// Setting up route
angular.module('mean.users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/signup.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/signin.html'
		}).
		state('users', {
			url: '/users',
			templateUrl: 'modules/users/views/all-users.html'
		}).
		state('add-user', {
			url: '/add-user',
			templateUrl: 'modules/users/views/add-user.html'
		});
	}
]);