'use strict';


angular.module('jwtApp')
  .directive('validateEquals', function () {
    return {
    	require: 'ngModel',
    	link: function(scope,element,attrs,ngModelCtrl){
    		function validateEquals(value){
    			var valid = (value === scope.$eval(attrs.validateEquals));
    			ngModelCtrl.$setValidity('equal',valid);
    			console.log(valid);
    			return valid ? value : undefined;
    		}

    		ngModelCtrl.$parsers.push(validateEqual);
    		ngModelCtrl.$formatters.push(validateEqual);

    		scope.$watch(attrs.validateEquals, function(){
    			ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
    		})
    	}
    };
  });
