angular.module('fagronBlog').controller('postsCtrl', function($scope, $http) {

    // $scope.submit = true;
    // $scope.update = false;
    // $scope.cancel = false;
    // $scope.userid = true;

    $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function successRequest(response) {
      $scope.posts = response.data;
    });

    $scope.createPost = function () {
      $http({

        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: $scope.post
  
      }).then(function successCallback(response) {
        console.log(response)
        $scope.posts.push(response.data);
        alert("Post criado com sucesso!")
      });
    }
});