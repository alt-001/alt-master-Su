alt
.controller('brandChapterCtrl', function($scope, $routeParams, $location) { 
  $scope.onchapter = $routeParams.chapter;
  $scope.onfilter = $routeParams.filter;

  $scope.chapters = [
    { name: 'products', 
      url: '/brand/products/all',
      class: 'product-active',
      sub: [
        {
          name: 'all',
          url: '/brand/products/all'
        },
        {
          name: 'featured',
          url: '/brand/products/featured'
        }
      ]
    },
    { name: 'moment', url: '/brand/moment' },
    { name: 'story', url: '/brand/story' },
    { name: 'talk', url: '/brand/talk' },
    { name: 'inspirations', url: '/brand/inspirations' },
    { name: 'trace', url: '/brand/trace' }
  ]

  $scope.navClass = function (chapter) {
      var currentRoute = $location.path().split('/');
      return chapter === currentRoute[2] ? 'active' : '';
  };

   $scope.isProduct = function () {
      var currentRoute = $location.path().split('/');
      return currentRoute[2] === 'products' ? 'true' : 'false';
  };
})
.controller('brandTraceCtrl', function($scope, brandTrace) {
  $scope.traces = brandTrace.query();
});
