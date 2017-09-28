const authorizationRoutes = require('./AuthorizationRoutes'),
	userRoutes = require('./UserRoutes');

var RouteConfigurator = {
	_app: null,
	_router: null,
	_defaultRoute: function() {
		//serve index page
		this._app.get('/', (req, res) => {
			res.render('index');
		});

		return;
	},
	setupRoutes: function(app, router) {
		
		this._app = app;
		this._router = router;
		
		//Set routes Here
		this._defaultRoute();

		//authorizationRoutes
		authorizationRoutes.setupRoutes(app, router);

		//user routes
		userRoutes.setupRoutes(app, router);

		return;
	}
};

module.exports = RouteConfigurator;