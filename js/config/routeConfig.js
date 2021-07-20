angular.module('fagronBlog').config(($routeProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'view/login.html',
    controller: 'loginCtrl',
  });
  $routeProvider.when('/posts', {
    templateUrl: 'view/posts.html',
    controller: 'postsCtrl',
  });
  $routeProvider.otherwise({ redirectTo: "/" });
});