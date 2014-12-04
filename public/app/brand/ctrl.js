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
  ];
  $scope.cnchapters = [
    { name: '单品',
      id:'products',
      url: '/cn/brand/products/all',
      class: 'product-active',
      sub: [
        {
          id:'all',
          name: '所有',
          url: '/cn/brand/products/all'
        },
        {
          id:'featured',
          name: '推荐',
          url: '/cn/brand/products/featured'
        }
      ]
    },
    { name: '时刻', id:'moment', url: '/cn/brand/moment' },
    { name: '故事', id:'story', url: '/cn/brand/story' },
    { name: '对话', id:'talk', url: '/cn/brand/talk' },
    { name: '灵感', id:'inspirations', url: '/cn/brand/inspirations' },
    { name: '回溯', id:'trace', url: '/cn/brand/trace' }
  ];
  $scope.lang = function () {
    var currentRoute = $location.path().split('/');
    console.log(currentRoute[1]);
    return currentRoute[1] !== 'cn' ? 'true' : 'false';
  };
  $scope.navClass = function (chapter) {
      var currentRoute = $location.path().split('/');
      return chapter === currentRoute[2] ? 'active' : '';
  };
  $scope.navClasscn = function (chapter) {
      var currentRoute = $location.path().split('/');
      return chapter === currentRoute[3] ? 'active' : '';
  };
   $scope.isProduct = function () {
      var currentRoute = $location.path().split('/');
      return currentRoute[2] === 'products' ? 'true' : 'false';
  };
   $scope.isProductcn = function () {
      var currentRoute = $location.path().split('/');
      return currentRoute[3] === 'products' ? 'true' : 'false';
  };
})
.controller('lookCtrl', function($scope) {
  $scope.look = [
    { img: '/assets/images/brand/moment-1.jpg',
    price:200,
    name:'Acrylic Colorful Bubble Bracelet' },
    { img: '/assets/images/brand/moment-2.jpg',
    price:200,
    name:'Burning Pattern T-shirt'  }, 
    { img: '/assets/images/brand/moment-3.jpg',
    price:200,
    name:'Lady Leather Handbag'  }, 
    { img: '/assets/images/brand/moment-4.jpg',
    price:200,
    name:'Snake Skin Clutch'  },        
    { img: '/assets/images/brand/moment-5.jpg',
    price:200,
    name:'Dark Muse Cape'  }
  ];
})
.controller('brandProductCtrl', function($scope, brandProduct) {
  $scope.products = brandProduct.query();
})
.controller('brandTraceCtrl', function($scope, brandTrace) {
  $scope.traces = brandTrace.query();
})
.controller('brandInspirationCtrl', function($scope, brandInspiration) {
  $scope.inspirations = brandInspiration.query();
})
.controller('accountCtrl', function($scope, cartService) {
  $scope.carts = cartService.query();
  console.log($scope.carts);
});