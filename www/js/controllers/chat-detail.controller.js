angular
  .module('whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, $timeout, $ionicScrollDelegate) {
  $scope.helpers({
    chat: function () {
      return Chats.findOne($stateParams.chatId);
    },
    messages: function () {
      return Messages.find({ chatId: $stateParams.chatId });
    }
  });

  $scope.data = {};

  $scope.sendMessage = sendMessage;
  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;

  ////////////

  function sendMessage () {
    if (_.isEmpty($scope.data.message)) {
      return;
    }

    Meteor.call('newMessage', {
      text: $scope.data.message,
      chatId: $stateParams.chatId
    });

    delete $scope.data.message;
  }

  function inputUp () {
    $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    }, 300);
  }

  function inputDown () {
    $ionicScrollDelegate.$getByHandle('chatScroll').resize();
  }
}
