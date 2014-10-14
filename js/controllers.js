
var beerControllers = angular.module('beerControllers', []);

beerControllers.controller('ListController', function ($scope, $http, $routeParams) {
    $http.get('js/beers.json').success(function(data){
        $scope.beers = data;
        $scope.beerOrder = "alcohol";
        $scope.whichItem = $routeParams.itemId;
    });

});

beerControllers.controller('DetailsController', function ($scope, $http, $routeParams) {
    $http.get('js/beers.json').success(function(data){
        $scope.beers = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) -1;
        } else{
            $scope.prevItem = $scope.beers.length - 1;
        }

        if($routeParams.itemId < $scope.beers.length -1) {
            $scope.nextItem = Number($routeParams.itemId) +1;
        } else{
            $scope.nextItem = 0;
            console.log('abc123',$scope.beers);
        }
    });
});
