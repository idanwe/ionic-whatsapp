angular
  .module('whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope, $ionicModal) {
  $scope.helpers({
    chats: function () {
      return Chats.find();
    }
  });

  $scope.openNewChatModal = openNewChatModal;
  $scope.remove = remove;

  $ionicModal.fromTemplateUrl('templates/new-chat.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  ////////////

  function openNewChatModal () {
    $scope.modal.show();
  }

  function remove (chat) {
    Meteor.call('removeChat', chat._id);
  }
}
