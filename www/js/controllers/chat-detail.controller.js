angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams) {
  $scope.helpers({
    chat: function () {
      return Chats.findOne($stateParams.chatId);
    }
  });
}
