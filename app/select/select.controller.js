angular.module('app')
    .controller('selectCtrl', function($scope, $http) {
        $scope.year = ""
        $scope.limit = ""
        //$scope.sqlTime = 0;

        $scope.onClick = function() {
            //console.log($scope.year, $scope.limit);
            getTimeOrient();
            getTimeSql();
        }
        
        // Get time of mysql
        getTimeSql = function() {
            $http.get('http://128.199.205.8:8000/mysql/select?bYear=' + $scope.year + '&limit=' + $scope.limit)
            .then(function successCallback(data) {
                // console.log(data.data);
                $scope.sqlTime = data.data;
            }, function(err) {
                console.log(err);
            })
        }

        // Get time of orientDB
        getTimeOrient = function() {
            $http.get('http://128.199.205.8:9000/orientdb/select?bYear=' + $scope.year + '&limit=' + $scope.limit)
            .then(function successCallback(data) {
                console.log(data.data.list)
                $scope.orientTime = data.data.time
                $scope.list = data.data.list
            }, function(err) {
                console.log(err)
            })
        }
    })