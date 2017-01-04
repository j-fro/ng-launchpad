var app = angular.module('app', []);
var counter = 1;
app.controller('LaunchPadController', ['$scope', function($scope) {
    console.log('NG');
    $scope.animals = [];
    $scope.hideFavorites = true;
    $scope.addAnimal = function() {
        var animal = {
            id: counter++,
            animal: $scope.animalIn,
            class: $scope.classIn
        };
        $scope.animals.push(animal);
        console.log($scope.animals);
    };
    $scope.deleteAnimal = function() {
        console.log('deleting', this.animal);
        $scope.animals.splice($scope.animals.indexOf(this.animal), 1);
    };
}]);
