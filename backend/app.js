const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const port = 3002;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/', routes);

mongoose
	.connect(
		'mongodb+srv://gvanteev85:8ifKa9HZRhP2Zkgi@cluster0.qsl8lkr.mongodb.net/PikeTest?retryWrites=true&w=majority',
	)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server starter on port ${port}`);
		});
	});
