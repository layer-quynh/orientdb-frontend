angular.module('app')
.controller('deleteCtrl', function($scope, $http) {
    $scope.nconst = ""

    $scope.onClick = function() {
        mysqlDelete()
        orientDelete()
    }

    orientDelete = function() {
        $http.delete('http://128.199.205.8:9000/orientdb/delete?nconst=' + $scope.nconst)
        .then(function successCallback(data) {
            $scope.orientTime = data.data.time
        }, function(err) {
            console.log(err)
        })
    }

    mysqlDelete = function() {
        $http.delete('http://128.199.205.8:8000/mysql/delete?nconst=' + $scope.nconst)
        .then(function successCallback(data) {
            $scope.sqlTime = data.data
        }, function(err) {
            console.log(err)
        })
    }
})