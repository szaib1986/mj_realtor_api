var RouteConfigurator = {
	_app: null,
	_router: null,
	_defaultRoute: () => {
		//serve index page
		this._app.get('/', (req, res) => {
			res.render('index');
		});
	},
	setupRoutes: (app, router) => {
		this._app = app;
		this._router = router;
		//Set routes Here
		this._defaultRoute();
	}
};

export default RouteConfigurator;