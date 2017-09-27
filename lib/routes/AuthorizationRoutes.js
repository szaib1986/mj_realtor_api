const tokenProvider = require('../TokenGenerator');
module.exports = {
	_app: null,
	_router: null,
	setupRoutes: function(app, router) {
		this._app = app;
		this._router = router;

		router.route('/authenticate')
			.get((req, res) => {
				
				if (!req.query || !req.query.username || !req.query.password)
					return res.status(400).send('Required parameters are missing');
				//if (req.body.fedauth)
				//	return res.status(201).send('Already authenticated');

				let token = tokenProvider.provideToken({
					userName: 'szaib1986',
					password: '123456'
				}, app.get('secret-api-key'));

				return res.status(200).json({'token': token});
			});

		//make app to use these routes as this prefix
		app.use('/api/authorization', router);

		return;
	},

};