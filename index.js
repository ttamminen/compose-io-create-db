var Promise = require('bluebird');
var request = require('request');
Promise.promisifyAll(request);

var fs = require('fs');
var connectionConf = JSON.parse(fs.readFileSync('conf.json', 'utf8'));

var collectionNameToCreate = 'my-collection';

createCollection(connectionConf, collectionNameToCreate)
	.spread(function (response, body) {
		if(response.statusCode !== 201) {
			console.log('Could not create database');
			console.log(response.statusCode);
			return;
		}

		console.log('Database created');
	})
	.error(function (err) {
		console.log(err);
	});

function createCollection(conf, name) {
	var baseUrl = 'https://api.compose.io/';
	var createCollectionUrl = 'deployments/' + 
													conf.accountName + '/' + 
													conf.deploymentName + '/mongodb/' + 
													conf.databaseName + '/collections';

	return request.postAsync({
		baseUrl: baseUrl,
		url: createCollectionUrl,
		headers: {
			'Authorization': 'Bearer ' + conf.token,
			'Accept-Version': conf.apiVersion
		},
		json: true,
		body: {
			name: name
		}
	});
}