const Promise = require('promise');
module.exports = {
	_db: null,
	_userModel: null,
	_fixIdReference: function(userId) {
		
		if (!userId.toLowerCase().startsWith('users/'))
			userId = 'Users/' + userId;

		return userId;
	},
	initialize: function(app) {
		this._db = app.get('db');
		this._userModel = this._db.model('User');
	},
	getAll: function() {

		const self = this;

		return new Promise((resolve, reject) => {

			self._userModel.find((error, result) => {
				if (error)
					reject(error);
				else
					resolve(result);
			});

		});
	},
	getUserById: function(userId) {
		
		const self = this;
		
		userId = this._fixIdReference(userId);

		return new Promise((resolve, reject) => {

			self._userModel.findById(userId, (error, foundUser) => {
				if (error)
					reject(error);
				else
					resolve(foundUser);
			});

		});
	},
	createUser: function(user) {

		const self = this;

		return new Promise((resolve, reject) => {

			let newUser = new self._userModel(user);

			if (!newUser)
				reject('Invalid User object');

			newUser.save((error, createdUser) => {
				if (error)
					reject(error);
				else
					resolve(createdUser);
			});

		});
	},
	deleteUserById: function(userId) {

		const self = this;
		
		userId = this._fixIdReference(userId);

		return new Promise((resolve, reject) => {

			self._userModel.findByIdAndRemove(userId, (error, deletedUser) => {

				if (error)
					reject(error);
				else
					resolve(deletedUser);
			});

		});
	}

};