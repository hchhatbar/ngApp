'use strict';


angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope,$rootScope,$http,alert) {
    $scope.submit = function(){
    	console.log('submit');
    	var url = '/';
    	var user = {};
    	$http.post(url,user)
    	.success(function(err) {
    		alert('success', 'Ok!', 'You are now registered.');
    	})
    	.error(function(err) {
    		console.log('bad');
    		alert('warning', 'Oops!', 'Could not register.');
    	});
    	
    }
  });
