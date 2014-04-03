'use strict';

// Setting up route
angular.module('mean.core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.html'
		}).state('portal', {
			url: '/portal',
			templateUrl: '../modules/core/views/portal.html'
		}).state('ibog', {
			url: '/ibog',
			templateUrl: '../modules/core/views/ibog.html'
		}).state('yellowoffice', {
			url: '/yellowoffice',
			templateUrl: '../modules/core/views/yellowoffice.html'
		}).state('verdo', {
			url: '/verdo',
			templateUrl: '../modules/core/views/verdo.html'
		}).state('vink', {
			url: '/vink',
			templateUrl: '../modules/core/views/vink.html'
		}).state('easytv', {
			url: '/easytv',
			templateUrl: '../modules/core/views/easytv.html'
		}).state('about', {
			url: '/about',
			templateUrl: '../modules/core/views/about.html'
		});;

		$locationProvider.html5Mode(true);
	}
]);