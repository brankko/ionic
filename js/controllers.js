angular.module('starter.controllers', [])

.controller('ApplyCtrl', function($scope) {
	$scope.applyForm = {
		name: '',
		email: '',
		desc: ''
	};

	$scope.doApply = function(){
		console.log($scope.applyForm);
	};
})


.controller('DemoCtrl', function($scope, Chats) {
	$scope.slider = 10;
	$scope.solarSystem = false;
	$scope.planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TeamCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
