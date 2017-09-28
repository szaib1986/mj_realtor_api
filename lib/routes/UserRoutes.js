module.exports = {
	_app: null,
	_router: null,
	setupRoutes: function(app, router){
		//preserve the references
		this._app = app;
		this._router = router;

		//Now setup routes here
		//this._createUserRoute();

		this._getUserRoutes();


		app.use('/api/users', router);
		return;
	},
	_createUserRoute: function() {
		
		const self = this;
		
		self._router.route('/create')
			.post((req, res) => { 
				
				if (!req.body)
					return res.status(400).send('Required parameters are missing');
				
				return res.status(200).send('Response here');
			});
	},
	_getUserRoutes: function() {
		const self = this;

		self._router.route('/all')
			.get((req, res) => {
				
				var db = self._app.get('db');

				var userModel = db.model('User');

				userModel.find({}, (error, result) => {
					if (error)
						return res.status(501).send(error);

					return res.status(200).json(result);
				});

				
			});
	}
};