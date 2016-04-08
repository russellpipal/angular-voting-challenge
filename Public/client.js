var app = angular.module('votingApp', []);

app.controller('MainController', function($scope, $http){
  $scope.dems = [];
  $scope.reps = [];
  $scope.winner = '';
  $scope.candidatesShown = false;
  $scope.winnerShown = false;

  $http.get('/democrats').then(function(response){
    $scope.dems = response.data;
  });

  $http.get('/republicans').then(function(response){
    $scope.reps = response.data;
  });

  $http.get('/winner').then(function(response){
    $scope.winner = response.data;
  });

  $scope.showCandidates = function(){
    $scope.candidatesShown = true;
  }

  $scope.showWinner = function(){
    $scope.winnerShown = true;
  }

});
