angular
  .module('whatsapp')
  .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl ($scope, $state, $ionicPopup, $log) {
  $scope.logout = logout;

  ////////////

  function logout () {
    Meteor.logout(function (err) {
      if (err) {
        return handleError(err)
      }

      $state.go('login');
    });
  }

  function handleError (err) {
    $log.error('setting error ', err);
    $ionicPopup.alert({
      title: err.reason || 'Logout fail',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}
