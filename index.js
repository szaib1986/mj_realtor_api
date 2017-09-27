console.log('Application starting...');
const express = require('express'),
	cluster = require('cluster'),
	config = require('./configuration');

if (cluster.isMaster){
	const numWorkers = require('os').cpus().length;

	for (let i = 0; i < numWorkers; i++)
		cluster.fork();

	cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
}
else {

	const app = new express();

	app.use(express.static('public'));
	
	app.set('view engine',	 'ejs');
	
	app.get('/*', (req, res) => {
		res.render('index');
	});
	
	app.listen(config.port, () => {
		console.log('Magic happening at 3000');
	});

}