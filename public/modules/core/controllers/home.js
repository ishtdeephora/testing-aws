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

angular.module('mean.core').directive('autoScrollToContent', ['$anchorScroll', '$location', 'anchorSmoothScroll', function($anchorScroll, $location, anchorSmoothScroll) {
  return {
    restrict: 'C',
    scope: {},
    link: function(scope, element, attrs) {
      element.bind('click', function(){
        //console.log(attrs.location);

        //tell angular about the new hash location
        //$location.hash(attrs.location);
        //scroll to it
        anchorSmoothScroll.scrollTo(attrs.location, 5, 35, true);

        //angular, not animated
        //$anchorScroll();
      });
    }
  }
}]);

angular.module('mean.core').directive('enlargableImage', function(){
  return {
    restrict: 'C',
    link: function(scope, element, attrs){
      element.bind('click', function(){
        if(element.hasClass('enlarged-image')){
          element.removeClass('enlarged-image');
          angular.element(document.querySelector('body')).removeClass('no-scroll');
        }
        else{
          element.addClass('enlarged-image');
          angular.element(document.querySelector('body')).addClass('no-scroll');
        }
      });
    }
  }
});