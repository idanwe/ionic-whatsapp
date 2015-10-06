angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}