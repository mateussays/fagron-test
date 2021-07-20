angular.module('fagronBlog').controller('loginCtrl', function($scope, $location) {
  $scope.username = '';
  $scope.password = '';
  $scope.error = '';

  $scope.loginAuthenticated = function (username, password) {
    const userAdmin = 'user@admin.com';
    const passAdmin = 'user';
    if(username === userAdmin && password === passAdmin) {
      $location.path('/posts');
    } else {
      $scope.error = 'Você não tem permissão pra acessar essa página'
    }
  }
});