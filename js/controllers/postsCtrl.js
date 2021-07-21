angular.module('fagronBlog').controller('postsCtrl', function($scope, $http, $location) {

    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;

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
      }).then(function successRequest(response) {
        $scope.posts.push(response.data);
        alert("Post criado com sucesso!")
      });
      $scope.post = '';
    }


    $scope.updatePost = function() {
      $http({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/' + $scope.post.id,
        data: $scope.post
      }).then(function successRequest() {
        alert("Post atualizado com sucesso!")
      });
    };

    $scope.deletePost = function(post) {
      $http({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/' + post.id
      }).then(function successRequest() {
        alert("Post deletado com sucesso!");
        $scope.posts = $scope.posts.filter((item) => item.id !== post.id)
      });  
    };

    $scope.editPost = function(post) {

      $scope.post = post;
      $scope.submit = false;
      $scope.update = true;
      $scope.cancel = true;
      $scope.userid = false;
  
    };

    $scope.cancelUpdate = function() {
      $scope.post = null;
      $scope.submit = true;
      $scope.update = false;
      $scope.cancel = false;
      $scope.userid = true;
    };
});