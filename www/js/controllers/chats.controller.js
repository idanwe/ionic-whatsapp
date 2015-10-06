angular
  .module('whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope, Chats) {
  $scope.chats = Chats.all();

  $scope.remove = remove;

  ////////////

  function remove (chat) {
    Chats.remove(chat);
  }
}