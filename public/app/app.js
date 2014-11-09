var alt = angular.module('alt', ['ngResource', 'ngRoute', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider

	.when('/', { templateUrl: '/pages/index' })
	/* ==========================================================================
	Pro Account page
	========================================================================== */
    .when('/account/recentnews', { templateUrl: '/pages/account/vip-recentNews-content' })
	.when('/account/otherprofile', { templateUrl: '/pages/account/vip-otherMemberProfile-content' })
	.when('/account/otherprofile-connected', { templateUrl: '/pages/account/vip-otherMemberProfile-connected' })
	.when('/account/new-member', { templateUrl: '/pages/account/vip-newmember' })
	.when('/account/myconnections', { templateUrl: '/pages/account/vip-myConnections-content' })
	.when('/account/otherconnections', { templateUrl: '/pages/account/vip-otherconnections' })
	.when('/account/inbox', { templateUrl: '/pages/account/vip-accountInbox-content' })
	.when('/account/compose', { templateUrl: '/pages/account/vip-accountCompose-content' })
	.when('/account/maildetail', { templateUrl: '/pages/account/vip-accountMailDetails-content' })
	.when('/account/invite', { templateUrl: '/pages/account/vip-accountInvitation-content' })
	/* ==========================================================================
	Account page
	========================================================================== */
	.when('/account/love-products', { templateUrl: '/pages/account/love-products' })
	.when('/account/love-brand', { templateUrl: '/pages/account/love-brand' })
	.when('/account/order', { templateUrl: '/pages/account/order' })
	.when('/account/profile', { templateUrl: '/pages/account/profile' })
	.when('/account/cart', { templateUrl: '/pages/account/cart' })
	/* ==========================================================================
	Brand page
	========================================================================== */
	.when('/brand/products', { templateUrl: '/pages/brand/brand-products-all' })
	.when('/brand/products/all', { templateUrl: '/pages/brand/brand-products-all' })
	.when('/brand/products/featured', { templateUrl: '/pages/brand/brand-products-featured' })
	.when('/brand/trace', { templateUrl: '/pages/brand/brand-trace' })
	.when('/brand/inspirations', { templateUrl: '/pages/brand/brand-Inspirations' })
	.when('/brand/:chapter', { templateUrl: '/pages/brand/brand-chapter' });
});
