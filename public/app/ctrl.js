alt
.controller('indexCtrl', function($scope){
})
.controller('searchCtrl', function($scope, $routeParams, $location, searches){
  $scope.searches = searches.query();
  $scope.sections = [
    {value: "name", text: "name"}, 
    {value: "id", text: "created"}, 
    {value: "price", text: "price"}
  ];
  $scope.section = _.where($scope.sections, {value: $routeParams.section});
  $scope.sectionValue = $routeParams.section;
  $scope.sectionText = '';
  if (!_.isEmpty($scope.section)) {
    $scope.sectionText = $scope.section[0]['text'];
  }
  $scope.criteria = $location.search().target;
})
.controller('productsHomeCtrl', function($scope, productsHome) {
  $scope.productsHome = productsHome.query(); 
})
.controller('numberController', function($scope) {
    $scope.rating = 1;     
    $scope.minRating = 0;
    $scope.maxRating = 50;
})
.controller('sortCtrl', function($scope, productsSort) {
    $scope.sorts = productsSort.query();
})
alt
.controller('productsCtrl', function($scope, $window, altIdentity, altAuth, Restangular, ngProgress, toaster, productsFilterService) {

  $scope.productsFilterService = productsFilterService;
  console.log($scope.productsFilterService);

  $scope.identity = altIdentity;
  
  /*ngProgress.start();*/
  Restangular.all('products.json').getList().then(function(response) {
    $scope.products = response;
    /*ngProgress.complete();*/
  });
  var filter = {"accessory":true,"shoe":true,"bag":true,"jewelly":true};
  $scope.typereset = function() {
    console.log(filter);
    $scope.filter = {"accessory":true,"shoe":true,"bag":true,"jewelly":true};
    $window.location.reload();
  }
  $scope.like = function(productColour) {
    console.log(productColour);

    var newUserData = {
      bycolor: [{'color': productColour, 'value': true}]
    }

    altAuth.updateCurrentUser(newUserData).then(function() {
      toaster.pop('success', 'Successfully saved!');
    }, function(reason) {
      toaster.pop('error', reason);
    })
  };
  $scope.reset = function(productColour) {
    console.log(productColour);

    var newUserData = {
      bycolor: []
    }

    altAuth.updateCurrentUser(newUserData).then(function() {
      toaster.pop('success', 'Successfully reset!');
    }, function(reason) {
      toaster.pop('error', reason);
    })
  };

});