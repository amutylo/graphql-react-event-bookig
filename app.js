const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());



app.use(
	'/graphql',
	graphqlHttp({

		rootValue: ,
		graphiql: true,
	})
);

mongoose
	.connect(
		`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds119548.mlab.com:19548/${
			process.env.MONGO_DB
		}`
	)
	.then(() => {
		app.listen(3000);
	})
	.catch(err => {
		console.log('Error: ', err);
	});
