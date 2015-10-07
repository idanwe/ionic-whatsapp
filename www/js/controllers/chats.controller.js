angular
  .module('whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {
  $scope.helpers({
    chats: function () {
      return Chats.find();
    }
  });

  $scope.remove = remove;

  ////////////

  function remove (chat) {
    Chats.remove(chat);
  }
}
