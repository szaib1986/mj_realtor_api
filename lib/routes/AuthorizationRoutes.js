const tokenProvider = require('../TokenGenerator');
module.exports = {
	_app: null,
	_router: null,
	setupRoutes: function(app, router) {
		this._app = app;
		this._router = router;

		this._authenticateRoute();

		//make app to use these routes as this prefix
		app.use('/api/security', router);

		return;
	},
	_authenticateRoute: function() {
		
		const self = this;

		self._router.route('/authenticate')
			.get((req, res) => {
				
				if (!req.query || !req.query.username || !req.query.password)
					return res.status(400).send('Required parameters are missing');
				
				if (req.headers.fedauth)
					return res.status(201).send('Already authenticated');

				const db = self._app.get('db');

				const userModel = db.model('User');

				let query = {
					'UserLogin.Username': req.query.username,
					'UserLogin.Password': req.query.password
				};

				userModel.findOne(query, (error, result) => {
					if (error)
						return res.status(501).send(error);

					if (result != null){
						let token = tokenProvider.provideToken({
							userName: 'szaib1986',
							password: '123456'
						}, self._app.get('secret-api-key'));

						return res.status(200).json({'token': token});

					}
					else
						return res.status(200).json({success: false, message: 'User not found!!!'});
					
				});

				
			});
	}

};