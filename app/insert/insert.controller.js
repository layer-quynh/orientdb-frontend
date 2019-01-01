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

    insertOrient = function() {
        $http.post('http://167.99.66.125:9000/orientdb/insert', $scope.element)
        .then(function successCallback(data) {
            $scope.orientTime = data.data.time
            $scope.list = data.data.row
            //console.log(data.data.time)
        }, function(err) {
            console.log(err)
        })
    }
    
    insertMysql = function() {
        $http.post('http://167.99.66.125:8000/mysql/insert', $scope.element)
        .then(function successCallback(data) {
            $scope.sqlTime = data.data
        }, function(err) {
            console.log(err)
        })
    }
})