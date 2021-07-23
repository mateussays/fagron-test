angular.module('fagronBlog').config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/login.html',
    controller: 'loginCtrl',
  });
  $routeProvider.when('/posts', {
    templateUrl: 'view/posts.html',
    controller: 'postsCtrl',
  });
  $routeProvider.when('/posts/:id', {
		templateUrl: "view/postdetail.html",
		controller: "detailCtrl"
  })
  $routeProvider.otherwise({ redirectTo: "/" });
  $locationProvider.html5Mode(true);
});