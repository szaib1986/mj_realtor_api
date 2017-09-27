
const express = require('express'),
	cluster = require('cluster'),
	config = require('./configuration'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	routeConfigurator =  require('./lib/routes/RouteConfigurator'),
	router = express.Router();
	const app = new express();

	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(cors());

	app.use(express.static('public'));
	
	app.set('view engine',	 'ejs');

	app.set('secret-api-key', config.secretTokenKey);

	routeConfigurator.setupRoutes(app, router);	
	
	app.listen(config.port, () => {
		console.log('Magic happening at ', config.port);
	});

