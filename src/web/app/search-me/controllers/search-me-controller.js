'use strict';

var app = angular.module('searchMeApp',[]);
app.controller('searchMeController', ['$scope','$timeout','searchMeService', function($scope, $timeout, searchMeService) {
    $scope.searchResponse = "No results so far";
    $scope.searchResults = [];
    $scope.keyPressTimeout = {};
    $scope.searchPhrase = "Type here then wait.....";

    $scope.searchPhraseChange = function() {
        $timeout.cancel($scope.keyPressTimeout);
        console.log('Search phrase changed '+$scope.searchPhrase);
        if ( $scope.searchPhrase == undefined || ($scope.searchPhrase.length < 3)) {
            console.log('Search phrase short');
            $scope.searchResponse = "Not results yet.";
            $scope.searchResults = [];
            return;
        }
        $scope.keyPressTimeout = $timeout($scope.callSearchResultsService, 1000);
    }

    $scope.callSearchResultsService = function() {
        $scope.searchResults = searchMeService.getSearchResults($scope.searchPhrase);
        if ( ($scope.searchResults === null) || ($scope.searchResults.count === 0)) {
            $scope.searchResponse = "No search results found for " + $scope.searchPhrase;
            return;
        }
        $scope.searchResponse = "Search results for " + $scope.searchPhrase;
    }
}]);