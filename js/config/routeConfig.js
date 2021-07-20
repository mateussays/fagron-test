angular.module('fagronBlog').config( function ($routeProvider) {
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
});