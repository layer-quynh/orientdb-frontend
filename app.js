angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/select/select.view.html',
        controller: 'selectCtrl'
    });

    $routeProvider.when('/insert', {
        templateUrl:'app/insert/insert.view.html',
        controller: 'insertCtrl'
    });

    $routeProvider.when('/join', {
        templateUrl: 'app/join/join.view.html',
        controller: 'joinCtrl'
    });

    $routeProvider.when('/delete', {
        templateUrl: 'app/delete/delete.view.html',
        controller: 'deleteCtrl'
    });

    $routeProvider.when('/update', {
        templateUrl: 'app/update/update.view.html',
        controller: 'updateCtrl'
    });
}])