'use strict';

angular.module('mean.core').controller('HomeController', ['$scope', 'Authentication', '$rootScope', function ($scope, Authentication, $rootScope) {
    $scope.authentication = Authentication;
}]);

angular.module('mean.core').directive('ProjectLink', ['$location', function($location){
	return {
    restrict: 'C',
    scope: {},
    link: function(scope, element, attrs) {
    	element.bind('click', function() {
      	angular.element(document.querySelector('.main-container')).addClass('fadeout-all');
      	setTimeout(function(){
      		scope.$apply(function() { $location.path(attrs.href); });
      	}, 500);
      	event.preventDefault();
    	});
    }
  }
}]);

angular.module('mean.core').directive('defaultFooter', function(){
	return{
		restrict: 'E',
		templateUrl: 'modules/core/views/default-footer.html'
	}
});