const jwt = require('jsonwebtoken'),
	encryptionHelper = require('./EncryptionHelper');

var TokenProvider = {
	_encryptToken: (token) => {
		return encryptionHelper.encrypt(token);
	},
	_generateToken: function(payLoad) {
		//let token = jwt.sign(payLoad, this.)
		return this._encryptToken('abc');
	},
	handshakeKey: function(payLoad) {
		return this._generateToken('abc');
	}
};

module.exports = TokenProvider;