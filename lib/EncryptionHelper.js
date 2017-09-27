const crypto = require('crypto');

var EncryptionHelper = {
	_algo: 'aes-256-ctr',

	_salt: 'I am only a string',
	//Use this function to encrypt a text using standard way
	encrypt: function(plainText) {
		
		let cipher = crypto.createCipher(this._algo, this._salt);

		let cipheredText = cipher.update(plainText, 'utf-8', 'hex');

		cipheredText += cipher.final('hex');

		return cipheredText;
	},
	
	//Use this function to decrypt a text using standard way
	decrypt: function(cipheredText) {

		let decipher = crypto.creteDecipher(this._algo, this._salt);

		let plainText = decipher.update(cipheredText, 'utf-8', 'hex');

		plainText += decipher.final('hex');

		return plainText;
	}
};

module.exports = EncryptionHelper;