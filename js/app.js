var beerApp = angular.module("beerApp",[
    'ngRoute',
    'beerControllers',
    'ngAnimate'
]);

beerApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/list', {

            templateUrl: 'partials/list.html',
            controller: 'ListController'
        });
    $routeProvider.
        when('/details/:itemId',{
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        });
    $routeProvider.
        otherwise({
            redirectTo: '/list'
        });
}]);