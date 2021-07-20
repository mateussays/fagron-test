angular.module('fagronBlog').controller('detailCtrl', function($scope, $http, $route) {
  const id = $route.current.params.id;
  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/' + id
  }).then(function successRequest(response) {
    $scope.detail = response.data;
    console.log($scope.detail)
    console.log($route.current.params.id)
  });

  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/comments?postId=' + id
  }).then(function successRequest(response) {
    $scope.comments = response.data;
    console.log($scope.comments)
    console.log($route.current.params.id)
  });
});