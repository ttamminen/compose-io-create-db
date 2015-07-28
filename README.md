An example how to use Compose.io API using NodeJS
===

The source code is related to [this blog post](http://www.triplet.fi/blog/how-to-use-compose-io-api-to-dynamically-create-databases-using-nodejs).

## Usage

Create file called `config.json` and fill it with your personal data.

    {
	    "accountName": "",
	    "deploymentName": "",
	    "databaseName": "",
	    "token": "",
	    "apiVersion": "2014-06"
    }

After that you should regular NodeJS magic

`npm install`

`node index.js`
