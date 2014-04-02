'use strict';

angular.module('mean.users').factory('UserData', ['$resource', function($resource) {
    return $resource('api/user/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);