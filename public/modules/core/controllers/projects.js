'use strict';

angular.module('mean.core').controller('ProjectController', ['$scope', 'Authentication', '$rootScope', function ($scope, Authentication, $rootScope) {
    $scope.authentication = Authentication;
}]);

angular.module('mean.core').directive('ProjectContainer', ['$location', function($location){
	return {
    restrict: "C",
    scope: {},
    link: function(scope, element, attrs) {
      setTimeout(function(){
        window.scrollTo(0, 0);
        element.removeClass('fadeout-all');
      }, 300);
    }
  }
}]);