angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams) {
  $scope.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);
}
