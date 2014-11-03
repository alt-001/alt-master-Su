var alt = angular.module('alt', ['ngResource', 'ngRoute', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/brand/products', { templateUrl: '/pages/brand/brand-products-all' })
	.when('/brand/products/all', { templateUrl: '/pages/brand/brand-products-all' })
	.when('/brand/products/featured', { templateUrl: '/pages/brand/brand-products-featured' })
	.when('/brand/trace', { templateUrl: '/pages/brand/brand-trace' })
	.when('/brand/inspirations', { templateUrl: '/pages/brand/brand-Inspirations' })
	.when('/brand/:chapter', { templateUrl: '/pages/brand/brand-chapter' });
});
