const express = require('express');
const {
	getSingleMenuPosition,
	getAllMenuItems,
	addMenuPosition,
	editMenuPosition,
	deleteMenuPosition,
} = require('../controllers/menuController');
const mapMenu = require('../helpers/mapMenu');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const menu = await getAllMenuItems();

	res.send({ data: menu });
});

router.get('/:id', async (req, res) => {
	const menu = await getSingleMenuPosition(req.params.id);

	res.send({ data: mapMenu(menu) });
});

router.post('/', async (req, res) => {
	const newMenuPosition = await addMenuPosition({
		title: req.body.title,
		content: req.body.content,
		imageURL: req.body.imageURL,
	});

	res.send({ data: mapMenu(newMenuPosition) });
});

router.patch('/:id', async (req, res) => {
	const updatedMenuPosition = await editMenuPosition(req.params.id, {
		title: req.body.title,
		content: req.body.content,
		imageURL: req.body.imageURL,
	});

	res.send({ data: mapMenu(updatedMenuPosition) });
});

router.delete('/:id', async (req, res) => {
	await deleteMenuPosition(req.params.id);

	res.send({ error: null });
});

module.exports = router;
