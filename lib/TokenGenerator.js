const jwt = require('jsonwebtoken'),
	encryptionHelper = require('./EncryptionHelper');

var TokenProvider = {
	_encryptToken: (token) => {
		return encryptionHelper.encrypt(token);
	},
	_generateToken: (payLoad) => {
		let token = jwt.sign(payLoad, this.)
		return this._encryptToken();
	},
	handshakeKey: (payLoad) => {
		return this._generateToken();
	}
};

export default TokenProvider;