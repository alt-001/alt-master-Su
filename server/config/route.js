/*var product = require('./products');*/

module.exports = function(app) {

	app.get('/pages/*', function(req, res){
		res.render('pages/' + req.params);
	});

	app.get('*', function(req, res){
	  res.render('layout.jade');
	});

}