
const express = require('express'),
	cluster = require('cluster'),
	config = require('./configuration');

	const app = new express();

	app.use(express.static('public'));
	
	app.set('view engine',	 'ejs');
	
	app.get('/*', (req, res) => {
		res.render('index');
	});
	
	app.listen(config.port, () => {
		console.log('Magic happening at ', config.port);
	});

