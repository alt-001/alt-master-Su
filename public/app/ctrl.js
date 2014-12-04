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
.controller('productsCtrl', function($scope, $window, altIdentity, altAuth, Restangular, ngProgress, toaster, productsFilterService) {

  $scope.productsFilterService = productsFilterService;

  $scope.identity = altIdentity;
  if ($scope.identity.currentUser != undefined) {
    if ($scope.identity.currentUser.gender == 'x') {
      $scope.sort = 'gender';
    } else {
      $scope.sort = '-gender';
    }
  } else {
    $scope.sort = '-id';
  }
  
  
  /*ngProgress.start();*/
  Restangular.all('products.json').getList().then(function(response) {
    if ($scope.identity.currentUser == undefined) {
      $scope.products = response;
    } else {
      $scope.likeId = $scope.identity.currentUser.bycolor['0'].likeId;
      $scope.likeColor = $scope.identity.currentUser.bycolor['0'].likeColor;
      console.log($scope.likeId);
      console.log($scope.likeColor);
      $scope.likeColorProducts = _.where(response, {color: $scope.likeColor});
      $scope.products = _.reject(response, {color: $scope.likeColor});
      $scope.likeProducts =  _.where(response, {id: $scope.likeId});
    }
    /*ngProgress.complete();*/
  });
  
  $scope.like = function(productId, productColor) {

    var newUserData = {
      bycolor: [{'likeId': productId, 'likeColor': productColor}]
    }

    altAuth.updateCurrentUser(newUserData).then(function() {
      toaster.pop('success', 'Successfully saved!');
    }, function(reason) {
      toaster.pop('error', reason);
    })
  };
  $scope.reset = function(productColour) {
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