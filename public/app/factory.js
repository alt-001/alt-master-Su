alt
.factory('products', function($resource) {
	var ProductsResource = $resource('/data/products.json');  
	return ProductsResource;
})
.factory('brandTrace', function($resource) {
	var BrandTraceResource = $resource('/data/brand-trace.json');  
	return BrandTraceResource;
})
.factory('searches', function($resource) {
	var SearchesResource = $resource('/data/searches.json');  
	return SearchesResource;
})
.factory('productsFilterGender', function($resource) {
	var productsFilterGenderResource = $resource('/data/gender.json');
	return productsFilterGenderResource;
})
.factory('productsFilterType', function($resource) {
	var productsFilterTypeResource = $resource('/data/type.json');
	return productsFilterTypeResource;
})
.factory('productsFilterColor', function($resource) {
	var productsFilterColorResource = $resource('/data/color.json');
	return productsFilterColorResource;
})
.factory('productsFilterService', function(){
	return {
		activeFilters: {}
	};
})
.factory('productsSortService', function($resource) {
	var productsSortResource = $resource('/data/sort.json');
	return productsSortResource;
})
.factory('cartService', function($resource) {
	var cartResource = $resource('/data/cart.json');
	return cartResource;
});


