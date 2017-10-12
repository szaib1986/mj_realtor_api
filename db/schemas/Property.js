module.exports = {
	initialize: function(mongoose) {
		
		var PropertySchema = new mongoose.Schema({
			_id: String,
			Title: {type: String, required: true},
			PropertyType: {
				MainCategory: Number, //0: Residential, 1: Commercial, 2: Agricultural etc.
				SubCategory: Number, //0: Plot, 1: Home, 2: Shop, 3: Plaza etc.
			},
			Description: String,
			DetailedDescription: String,
			TotalArea: Number,
			CoveredArea: Number,
			AreaUnit: String, // Marla, Acre, SquareFeet
			Features: {
				HasJaccuzzi: Boolean,
				HasPool: Boolean,
				HasLawn: Boolean,
				ServantQuarters: Number,
				NoOfBeds: Number,
				NoOfBaths: Number,
				NoOfKitchens: Number,
				NoOfTVLounges: Number,
				NoOfDrawingRooms: Number,
				NoOfDiningRooms: Number,
				HasStoreRoom: Boolean,
				HasStudyRoom: Boolean,
				NoOfMasterBeds: Number,
				HasTerrace: Boolean,
				HasBalcony: Boolean,
				CarParking: Number,
				FurnishedType: Number, //0: none, 1: semi, 2: fully furnished etc.
			},
			Authority: {
				ApprovingAuthority: Number,
				IsApproved: Boolean,
				ApprovalDate: Date
			},
			WorkPhone1: String,
			WorkPhone2: String,
			CellPhone1: String,
			CellPhone2: String,
			EmailAddress: String,
			Location: {
				Geometry: {
					Latitude: String,
					Longitude: String
				},
				Address: String,
				City: String,
				Country: String,
				State: String,
				PostalCode: String
			},
			IsAvailable: {type: Boolean, default: true},
			KeyDates: {
				DateCreated: {type: Date, default: Date.now},
				DateModified: {type: Date, default: Date.now}
			},
			Vicinity: {
				HasHospital: Boolean,
				HasSchool: Boolean,
				HasRestuarants: Boolean,
				HasPlayGround: Boolean,
				HasMosque: Boolean
			}

		}, { collection: 'Properties' });

		console.info('Property schema registered');
		
		return mongoose.model('Property', PropertySchema);
	}
};