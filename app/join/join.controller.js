angular.module('app')
.controller('joinCtrl', function($scope, $http) {
    $scope.vote = ""
    $scope.limit = ""

    $scope.onClick = function() {
        getJoinMysql()
        getJoinOrient()
    }

    getJoinMysql = function() {
        $http.get('http://128.199.205.8:8000/mysql/join?vote=' + $scope.vote + '&limit=' + $scope.limit)
        .then(function successCallback(data) {
            $scope.sqlTime = data.data
        }, function(err) {
            console.log(err)
        })
    }

    getJoinOrient = function() {
        $http.get('http://128.199.205.8:9000/orientdb/join?vote=' + $scope.vote + '&limit=' + $scope.limit)
        .then(function successCallback(data) {
            $scope.orientTime = data.data.time
            $scope.list = data.data.list
            //console.log(data)
        }, function(err) {
            console.log(err)
        })
    }
})