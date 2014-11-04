alt
.controller('accountCtrl', function($scope, cartService, $location) {
  $scope.carts = cartService.query();
  $scope.isLove = function () {
    var currentRoute = $location.path().split('/');
    return currentRoute[2] === 'love-products' || currentRoute[2] === 'love-brand' ? 'true' : 'false';
  };
});