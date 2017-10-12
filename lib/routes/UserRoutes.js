const UserApi = require('../../datalayer/UsersLayer');
module.exports = {
	_app: null,
	_router: null,
	setupRoutes: function(app, router){
		//preserve the references
		
		this._app = app;
		
		this._router = router;

		UserApi.initialize(app);

		//Now setup routes here
		this._createUserRoute();

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

				let promise = UserApi.createUser(req.body);

				self._handlePromiseCallback(promise, res, 201 /* created code */);
				
			});
	},
	_getUserRoutes: function() {
		
		const self = this;
		
		const db = self._app.get('db');

		const userModel = db.model('User');
		
		self._router.route('/all')
			.get((req, res) => {

				let promise = UserApi.getAll();

				self._handlePromiseCallback(promise, res);
				
			});

		self._router.use('/:userid', (req, res, next) => {
			
			if (!req.params || !req.params.userid)
				return res.status(400).send('Invalid request. UserId not found.');

			next();
		});

		self._router.route('/:userid')
			.get((req, res) => {

				let promise = UserApi.getUserById(req.params.userid);

				self._handlePromiseCallback(promise, res);

			})
			.delete((req, res) => {

				let promise = UserApi.getUserById(req.params.userid);

				self._handlePromiseCallback(promise, res);

			})
			.post((req, res) => {

				let promise = UserApi.updateUser(req.params.userid, req.body);

				self._handlePromiseCallback(promise, res);

			});
	},
	_handlePromiseCallback: function(promise, res, statusCode) {
		if (!statusCode)
			statusCode = 200;
		promise
			.then((response) => {
				return res.status(statusCode).json(response);
			})
			.catch((error) => {
				return res.status(501).json(error);
			});

	}
};