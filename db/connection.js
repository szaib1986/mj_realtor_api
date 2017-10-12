const mongoose = require('mongoose');

const schemaModelPaths = [
	'./schemas/User.js',
	'./schemas/Property.js'
];

module.exports = {
	_dbConnection: 'mongodb://dev_user:D3V_U53R!@ds151024.mlab.com:51024/realtor_db',
	_db: null,
	connect: function(app){

		const self = this;

		var connection = mongoose.connect(this._dbConnection, { useMongoClient: true });

		console.log(connection.model);

		app.set('db', connection);

		this._db = connection;
		
		this._registerSchemas();
	},
	_registerSchemas: function() {
		const self = this;
		//Check for schemas
		for(let sI = 0; sI < schemaModelPaths.length; sI++){
			const model = require(schemaModelPaths[sI]);
			if (model)//if found then call model's initialization function
				model.initialize(mongoose);
		}
	}
};