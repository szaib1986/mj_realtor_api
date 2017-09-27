import crypto from 'crypto';

var EncryptionHelper = {
	_algo: 'aes-256-ctr',

	_salt: '&a3c8d$6d2n0#5s%210VBC|@-spol@$!!'
	//Use this function to encrypt a text using standard way
	encrypt: (plainText) => {
		
		const cipher = crypto.createcipher(this._algo, this._salt);

		const cipheredText = cipher.update(plainText, 'utf-8', 'hex');

		cipheredText += cipher.final('hex');

		return cipheredText;
	},
	
	//Use this function to decrypt a text using standard way
	decrypt: (cipheredText) => {

		const decipher = crypto.creteDecipher(this._algo, this._salt);

		const plainText = decipher.update(cipheredText, 'utf-8', 'hex');

		plainText += decipher.final('hex');

		return plainText;
	}
};

export default EncryptionHelper;