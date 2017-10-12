const authorizationRoutes = require('./AuthorizationRoutes'),
	userRoutes = require('./UserRoutes');

var RouteConfigurator = {
	_app: null,
	_router: null,
	_defaultRoute: function() {
		//serve index page
		this._app.get('/', (req, res) => {
			this._renderStaticPages(req, res, {'pageName': 'index'});
		});

		this._app.get('/api-help', (req, res) => {
			this._renderStaticPages(req, res, {'pageName': 'apihelp'});
		});

		return;
	},
	_renderStaticPages: function(req, res, pageData) {
		res.render('masterpage', pageData)
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