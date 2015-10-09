angular
  .module('whatsapp')
  .controller('NewChatCtrl', NewChatCtrl);

function NewChatCtrl ($scope, $state) {
  $scope.helpers({
    users: function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }
  });

  $scope.hideModal = hideModal;
  $scope.newChat = newChat;

  ////////////

  function hideModal () {
    $scope.modal.hide();
  }

  function newChat (userId) {
    var chat = Chats.findOne({ userIds: { $all: [Meteor.userId(), userId] } });
    if (chat) {
      return goToChat(chat._id);
    }

    Meteor.call('newChat', userId, function (err, result) {
      if (err) {
        return handleError(err);
      }

      goToChat(result);
    });
  }

  function goToChat (chatId) {
    hideModal();
    return $state.go('tab.chat-detail', { chatId: chatId });
  }

  function handleError (err) {
    $log.error('new chat error ', err);
    $ionicPopup.alert({
      title: err.reason || 'Create chat fail',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}
