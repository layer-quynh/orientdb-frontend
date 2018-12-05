angular.module('app')
.controller('insertCtrl', function($scope, $http) {
    $scope.element = {
        "nconst" : "",
        "primaryName" : "",
        "birthYear" : "",
    }

    $scope.onClick = function() {
        insertMysql()
        insertOrient()
    }
    
    insertMysql = function() {
        $http.post('http://128.199.205.8:8000/mysql/insert', $scope.element)
        .then(function successCallback(data) {
            $scope.sqlTime = data.data
        }, function(err) {
            console.log(err)
        })
    }

    insertOrient = function() {
        $http.post('http://128.199.205.8:9000/orientdb/insert', $scope.element)
        .then(function successCallback(data) {
            $scope.orientTime = data.data.time
            $scope.list = data.data.row
            //console.log(data.data.time)
        }, function(err) {
            console.log(err)
        })
    }
})