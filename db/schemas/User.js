module.exports = {
	initialize: function(mongoose) {
		
		var UserSchema = new mongoose.Schema({
			_id: String,
			FirstName: {type: String, required: true},
			LastName: String,
			EmailAddress: {type: String, required: true, lowercase: true, trim: true},
			SocialConnect: {
				Facebook: String,
				Twitter: String,
				Instagram: String,
				Googleplus: String
			},
			BusinessAddress: {
				AddressLine1: {type: String, required: true},
				AddressLine2: String,
				City: String,
				Country: String,
				State: String,
				PostalCode: Number
			},
			WorkPhone1: Number,
			WorkPhone2: Number,
			CellPhone1: Number,
			CellPhone2: Number,
			LastLoginIP: String,
			LoggedInCount: Number,
			FailedLoginAttempts: Number,
			UserLogin: {
				Username: {type: String, required: true, lowercase: true, trim: true},
				Password: {type: String, required: true, min: 6},
				IsActive: {type: Boolean, default: false},
				IsLocked: {type: Boolean, default: true},
				IsAccountVerified: {type: Boolean, default: false},
				PasswordSalt: {type: String, default: null},
			},
			Roles: [String],
			KeyDates: {
				DateCreated: {type: Date, default: Date.now},
				DateModified: {type: Date, default: Date.now}
			}

		}, { collection: 'Users' });

		console.info('User schema registered');
		
		return mongoose.model('User', UserSchema);
	}
};