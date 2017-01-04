var app = angular.module('app', []);

app.controller('LaunchPadController', ['$scope', function($scope) {
    console.log('NG');
    $scope.animals = [];
    $scope.addAnimal = function() {
        var animal = {
            animal: $scope.animalIn,
            class: $scope.classIn
        };
        $scope.animals.push(animal);
        console.log($scope.animals);
    };
}]);
