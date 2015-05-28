angular.module('starter.controllers', [])

.controller('ApplyCtrl', function($scope) {})

.controller('DemoCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TeamCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
