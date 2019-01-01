angular.module('app')
.controller('updateCtrl', function($scope, $http) {
  $scope.element = {
      "nconst" : "",
      "primaryName" : ""
  }  

  $scope.onClick = function() {
      getOrientTime()
      getSqlTime()
  }

  getOrientTime = function() {
      $http.put('http://167.99.66.125:9000/orientdb/update', $scope.element)
      .then(function successCallback(data) {
          $scope.orientTime = data.data.time
          $scope.list = data.config.data
      }, function(err) {
          console.log(err)
      })
  }

  getSqlTime = function() {
    $http.put('http://167.99.66.125:8000/mysql/update', $scope.element)
    .then(function successCallback(data) {
        $scope.sqlTime = data.data
        console.log(data)
    }, function(err) {
        console.log(err)
    })
}
})