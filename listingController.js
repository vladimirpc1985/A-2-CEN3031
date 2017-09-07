angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.addInput = undefined;
    $scope.inputSearch = "";

      /*
        Implement these functions in the controller to make your application function
        as described in the assignment spec.
       */
    $scope.addListing = function() {
        $scope.resetDetailInfo();
        $scope.listings.push($scope.addInput);
        $scope.addInput = undefined;
    };
    $scope.deleteListing = function(index) {
        $scope.resetDetailInfo();
        $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.resetDetailInfo = function () {
        $scope.detailedInfo = undefined;
    }
  }
]);