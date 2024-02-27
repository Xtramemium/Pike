const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const {
	getSingleMenuPosition,
	getAllMenuItems,
	addMenuPosition,
} = require('./controllers/menu');

const port = 3002;
const app = express();

app.get('/Menu', getAllMenuItems);

app.get('/Menu/:id', async (req, res) => {
	const menu = await getSingleMenuPosition(req.params.id);

	res.send({ data: menu });
});

app.post('/Menu/:uniqueId', async (req, res) => {
	const newMenuPosition = await addMenuPosition({
		id: uniqueId,
		title: req.body.title,
		content: req.body.content,
		imageURL: req.body.imageURL,
	});

	res.send({ data: newMenuPosition });
});

mongoose
	.connect(
		'mongodb+srv://gvanteev85:8ifKa9HZRhP2Zkgi@cluster0.qsl8lkr.mongodb.net/Testing?retryWrites=true&w=majority',
	)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server starter on port ${port}`);
		});
	});
