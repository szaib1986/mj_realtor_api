const jwt = require('jsonwebtoken'),
	encryptionHelper = require('./EncryptionHelper');

var TokenProvider = {
	_encryptToken: (token) => {
		return encryptionHelper.encrypt(token);
	},
	_generateToken: function(payLoad, secretKey) {
		let token = jwt.sign(payLoad, secretKey, {
			expiresIn: 1440
		});
		return this._encryptToken(token.toString());
	},
	provideToken: function(payLoad, secretKey) {
		return this._generateToken(payLoad, secretKey);
	}
};

module.exports = TokenProvider;