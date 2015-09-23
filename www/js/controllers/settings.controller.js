angular
  .module('whatsapp')
  .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl ($scope, $meteor, $state) {
  $scope.logout = logout;

  ////////////

  function logout () {
    $meteor.logout().then(function () {
      $state.go('login');
    });
  }
}
